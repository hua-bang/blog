---
title: 本地部署 DeepSeek R1
customTag: blog>互联网
date: 2025.01.29
editLink: true
---

# 本地部署 DeepSeek R1

年前一两周， `DeepSeek` 刚上线深度搜索的时候，就进行体验了。

当时感觉下来，整体感觉挺惊艳的，其中，让我感觉惊艳的是思考过程。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20250129202022.png)


以至于当时我上周主要都是在用 `DeepSeek` ，以及和推荐朋友进行使用。

但到年前前几天的时候，发现周围的人都在讨论 `DeepSeek`, 甚至在中外 App Store 霸榜了，后续也上了新闻，连 OpenAI 的 Sam 也出来发声了。

随即之后就是，一大堆人涌入使用 `DeepSeek`，同时可能也存在一些外部的网络攻击，导致其服务不稳定，远远没有上周那么丝滑。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20250129202038.png)


于是，如果 `DeepSeek` 是个私有化部署的服务的话，那么就不会有上述问题了。

以及 `DeepSeek` 的 `R1` 模型是开源的，我们可以通过 `Ollama` 来进行模型的私有化部署。

下方我们就来自己试一试。

## 模型部署

这里的模型部署分为三步：安装 ollama + 部署 DeepSeek R1 模型 + API 调用

### 安装 ollama

进入 [https://ollama.com/](https://ollama.com/) 网站，点击下载按钮，目前支持 macOS, Linux 和 Windows 操作系统。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20250129202052.png)


下载安装后，双击 Ollama 图标，会开启一个后台服务。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20250129202105.png)

### 部署 DeepSeek R1 模型

在 Ollama 上 搜索 DeepSeek， 很容易找到 DeepSeek-R1 的模型。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20250129202122.png)


我们进入 [https://ollama.com/library/deepseek-r1，具体看看](https://ollama.com/library/deepseek-r1%EF%BC%8C%E5%85%B7%E4%BD%93%E7%9C%8B%E7%9C%8B) DeepSeek-R1 的配置，目前有多个参数可以选择， 1.5b - 671b，可以根据电脑的配置去进行选择。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20250129202153.png)

这里，我们跑个最小参数的模型, deepseek-r1:1.5b。

打开终端，执行命令 `ollama run deepseek-r1:1.5b`

会自己去拉取 deepseek-r1:1.5b 模型，这里需要等待一下。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20250129202207.png)

拉取完之后，会默认支持你进行输入。

我们先进行简单地输入，可以看到，下方并没有“思考过程”，直接返回结果了。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20250129202222.png)

我们问一个难一点的问题，可以看到“思考过程”

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20250129202236.png)

这样子，我们就能在终端进行模型的调用了，但这种用法目前太局限了。

### API 调用

ollama 也提供了 api 的调用方式，具体可以看 [ollama api](https://github.com/ollama/ollama/blob/main/docs/api.md) 的文档。

实际上， ollama 在执行后，会在本地开一个进程，用于 暴露 API。我们执行下方命令，可以看到支持输出，并且支持流式传输。

```bash
curl <http://localhost:11434/api/generate> -d '{
  "model": "deepseek-r1:1.5b",
  "prompt": "Why is the sky blue?"
}'
```

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20250129202257.png)

## 可视化界面

上方我们已经跑通了模型的服务，但这样子使用还是很麻烦，如果有一个 Web 交互界面就更好了。刚好 [open-webui](https://github.com/open-webui/open-webui) 提供了 Web 交互界面的能力， 并且支持 docker 部署。

所以这里我们主要分为两步 Docker 部署 + open-webui 安装

### Docker 安装

这里可以进入 [https://docs.docker.com/engine/install/](https://docs.docker.com/engine/install/) 进入安装。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20250129202316.png)

安装完成后，可以使用 docker -v 检测 docker 是否安装成功。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20250129202327.png)

### 安装 **Open WebUI**

进入 [open-webui](https://github.com/open-webui/open-webui?tab=readme-ov-file#quick-start-with-docker-) 页面，可以看到有通过 docker 部署的说明文档。

支持执行下方命令

```bash
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
 
```

执行完后，可以看到 `Docker Desktop` 多了个容器。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20250129202350.png)


点击上述的端口链接，就能看到可视化界面了。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20250129202407.png)

这样子，我们就能在 Web 界面调用 DeepSeek R1 了， 上方的界面也和 DeepSeek 有点相似，并且这个是本地部署的，意味着你可以离线使用，并且免费。

## 写在最后

这几天体验下来，`DeepSeek` 的深度思考的功能体验不错，通过 `ollama` 去进行部署的体验也挺有趣，这也是我近期日常使用 DeepSeek 的原因。

我也觉得 DeepSeek 确实很惊艳，但目前有些媒体也许把它写得过于夸张。所以与其去从别人那里听说这些使用效果，不如自己动手进行体验。