import fs from "fs";
import * as path from "path";

export function scanDirectory(directoryPath: string): string[] {
  const files: string[] = [];

  function scan(dir: string) {
    const items = fs.readdirSync(dir);
    items.forEach((item) => {
      const itemPath = path.join(dir, item);
      const stats = fs.statSync(itemPath);

      if (stats.isDirectory()) {
        scan(itemPath); // 递归扫描子文件夹
      } else {
        files.push(itemPath); // 将文件路径添加到数组
      }
    });
  }

  scan(directoryPath);
  return files;
}

export const getFileContent = async (path: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data as string);
      }
    });
  });
};

export const writeFile = (filePath: string, content: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

export async function extractMetaInfoStr(fileContent: string) {
  try {
    // 使用正则表达式提取标志
    const headerMatch = fileContent.match(/---\n(.*?)\n---/s);

    if (!headerMatch) {
      return ""; // 如果没有匹配到标志，返回null或自定义值
    }
    return headerMatch[1].trim();
  } catch (err) {
    console.error("提取标志时出错:", err);
    return "";
  }
}

export function contentStr2Json(str: string): Record<string, any> {
  return str.split("\n").reduce((acc, curr) => {
    const [key, value] = curr.split(":").map((item) => item.trim());
    if (key && value) {
      acc[key] = value;
    }
    return acc;
  }, {} as Record<string, any>);
}

export async function extractMetaInfo(content: string) {
  const metaInfoStr = await extractMetaInfoStr(content);

  return contentStr2Json(metaInfoStr);
}
