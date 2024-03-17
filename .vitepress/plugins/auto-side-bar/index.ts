import fs from "fs";
import {
  extractMetaInfo,
  getFileContent,
  scanDirectory,
  writeFile,
} from "./helper";

interface AutoSideBarOptions {
  docsDir: string;
  rootPath: string;
  configFilePath: string;
}

const mdFileRegex = /\.md$/;
let metaInfoMap: Record<string, Record<string, any>> = {};

const getSideBarConfigFromMetaInfoMap = (
  nextMetaInfo: Record<string, Record<string, any>>,
  options: AutoSideBarOptions
) => {
  let configFileNeedUpdate = false;
  const nextSideBarConfig = JSON.parse(
    fs.readFileSync(options.configFilePath, "utf-8")
  );

  Object.entries(nextMetaInfo).forEach((metaInfoItem) => {
    const [key, value] = metaInfoItem;
    const { title, customTag, needUpdate } = value || {};
    if (needUpdate) {
      configFileNeedUpdate = true;
    }
    if (!customTag || !needUpdate) {
      return;
    }

    const [firstMenu, secondMenu] = value.customTag.split(">");
    let firstMenuConfig = nextSideBarConfig[`/${firstMenu}/`];

    if (!firstMenuConfig) {
      nextSideBarConfig[`/${firstMenu}/`] = [];
      firstMenuConfig = nextSideBarConfig[`/${firstMenu}/`];
    }

    let secondMenuConfig = firstMenuConfig.find(
      (item) => item.text === secondMenu
    );

    if (!secondMenuConfig) {
      secondMenuConfig = {
        text: secondMenu,
        items: [],
      };
      firstMenuConfig.push(secondMenuConfig);
    }

    let finalMenuConfig = secondMenuConfig.items.find(
      (item) => item.key === key
    );

    if (!finalMenuConfig) {
      finalMenuConfig = {};
      secondMenuConfig.items.push(finalMenuConfig);
    }

    finalMenuConfig.id = key;
    finalMenuConfig.text = title;
    finalMenuConfig.link = key.replace(options.docsDir, "");
  });

  return {
    nextSideBarConfig,
    configFileNeedUpdate,
  };
};

export const patchSidebarConfig = (
  nextMetaInfo: Record<string, Record<string, any>>,
  options: AutoSideBarOptions
) => {
  const { nextSideBarConfig, configFileNeedUpdate } =
    getSideBarConfigFromMetaInfoMap(nextMetaInfo, options);
  if (!configFileNeedUpdate) {
    return;
  }
  writeFile(
    options.configFilePath,
    JSON.stringify(nextSideBarConfig, undefined, 2)
  );
};

export const generateConfigByFilePath = async (
  absolutePath: string,
  isUpdate?: boolean
) => {
  if (!mdFileRegex.test(absolutePath)) {
    return;
  }

  try {
    const content = await getFileContent(absolutePath);

    const metaInfo = await extractMetaInfo(content);

    if (isUpdate) {
      const { title, customTag } = metaInfo;
      const prevMetaInfo = metaInfoMap[absolutePath];
      if (!prevMetaInfo) {
        metaInfo.needUpdate = true;
      }
      if (
        title !== prevMetaInfo?.title ||
        customTag !== prevMetaInfo?.customTag
      ) {
        metaInfo.needUpdate = true;
      }
    }

    metaInfoMap[absolutePath] = metaInfo;
  } catch {}
};

export default function AutoSideBar(options: AutoSideBarOptions) {
  const { docsDir } = options;

  return {
    name: "autoSideBar",
    buildStart: async () => {
      metaInfoMap = {};
      const fileList = scanDirectory(docsDir);
      fileList.map((item) => generateConfigByFilePath(item));
    },
    handleHotUpdate(hmrContext) {
      const { file: absolutePath } = hmrContext;
      generateConfigByFilePath(absolutePath, true);
      patchSidebarConfig(metaInfoMap, options);
    },
  };
}
