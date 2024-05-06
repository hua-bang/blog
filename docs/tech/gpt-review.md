---
title: GPT + GitHub 实现自动 Code Review
editLink: true
customTag: tech>AIGC
date: 2023.11.02
---

# GPT + GitHub 实现自动 Code Review

## 前言

在日常开发过程中， `code review` 是软件开发过程中的关键步骤。它可以帮助开发人员发现代码中的错误，提高代码质量，并促进团队间的知识共享。**然而**，代码审查过程往往需要**大量的时间和精力**以及 **code review 代码质量**的问题。

**自动化代码审查**可以帮助解决这些问题。通过使用机器学习模型，如 GPT (Generative Pretrained Transformer)，我们可以自动审查代码，找出潜在的问题，提高代码**审查的效率**和**准确性**。此外，自动化代码审查可以减轻开发人员的负担，有更多的时间专注于其他重要的任务。

## 实现思路

使用 **`GPT`** 和 **`GitHub`** 进行自动化代码审查的思路大体如下：

1.  **`DIFF` 信息获取**：我们使用 `GitHub API` 获取 `Pull Request（PR）`的信息，包括代码 `diff`。
2.  **`GPT` 处理**：我们将这些信息提供给 `GPT` 模型，获取模型对代码变更的审查建议。
3.  **评论处理**：最后，我们将这些建议通过 `GitHub API` 提交到 `PR` 中作为评论。

这个过程可以使用脚本来自动化，从而在每次 `PR` 提交时自动进行代码审查（可借助 `CI/CD` , 或 `Github Action`）。

本文主要写 `code review` 的具体过程如何实现，而对于调用时机的话，本文暂不涉及。

以上我们可以大概得到下方的伪代码

```ts
export async function autoCodeView(pullNumber: number) {
  // 1. get pull request info
  const pr = await getPRInfo(owner, repo, pullNumber);

  if (!pr) {
    log(`It's failed to get pr info, please retry the get pr info api.`);
    return;
  }

  // 2. get compareCommits
  const compareCommits = await getCompareCommits(owner, repo, pr);

  if (
    !compareCommits ||
    compareCommits.files?.length === 0 ||
    compareCommits.commits?.length === 0
  ) {
    log(`No commit info.`);
    return;
  }

  const { files: changedFiles = [], commits } = compareCommits;

  // 3. generate review comment
  generateReviewComment(changedFiles, commits, pullNumber);
}
```

## 技术实现

上方讲完了思路，下方我们来具体讲下技术实现。

> 这里列举用到的文档：

- **Github Access Token:** <https://docs.github.com/zh/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens>
- **ChatGPT-NPM:** <https://www.npmjs.com/package/chatgpt#usage---chatgptapi>
- **ockokit-NPM**: <https://www.npmjs.com/package/octokit>

### **1. 获取 PR 信息**

我们使用 `GitHub` 的 `REST API` 来获取 `PR` 的信息。下面是使用 `Octokit` 库来实现的代码。

注意：这里我们主要是获取 `pr` 中 `changeFiles` 、 `commits` ，从而去获取每个文件的改动点，从而可以实现得到每个文件 `patch` 的元信息，以便给 `GPT` 处理。

```jsx
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN || "Your Github Token", // Replace with your GitHub Personal Access Token
});

async function getPRInfo(owner: string, repo: string, pull_number: number) {
  try {
    const { data: pr } = await octokit.rest.pulls.get({
      owner,
      repo,
      pull_number,
    });
    return pr;
  } catch {
    return undefined;
  }
}

async function getCompareCommits(
  owner: string,
  repo: string,
  pr: Record<string, any>
) {
  try {
    return (
      await octokit.repos.compareCommits({
        owner,
        repo,
        base: pr.base.sha,
        head: pr.head.sha,
      })
    ).data;
  } catch {
    return undefined;
  }
}

export async function autoCodeView(pullNumber: number) {
  // 1. get pull request info
  const pr = await getPRInfo(owner, repo, pullNumber);

  // 2. get compareCommits
  const compareCommits = await getCompareCommits(owner, repo, pr);

  const { files: changedFiles = [], commits } = compareCommits;

  // 3. generate review comment
  generateReviewComment(changedFiles, commits, pullNumber);
}
```

### **2. 获取 GPT 的审查建议**

我们需要使用 `GPT` 模型来获取对代码变更的审查建议。这需要实现一个 GPT 助手类并提供一个 `code review` 方法，该方法将问题发送到 `GPT` 并返回答案：

注意，这里要注意做好拆分， `GPT` 的 `code review` 仅仅只做代码分析，不应该耦合 `github` 或其他变量信息，理论上，他应该输入一个 `patch` 字符串，返回 `修改建议` 字符串。

- **输入**：接受 `patch` 字符串，并且内部处理逻辑不应该耦合平台信息下。
- **输出**：拿到对应返回的输出建议。（这里其实更好的话，可以加工一下输入格式）

```jsx
import { ChatGPTAPI } from 'chatgpt';

class ChatBot {

  private chatAPI: any;

  constructor(apiKey?: string) {
    this.chatAPI = new ChatGPTAPI({
      apiKey: process.env.OPENAI_API_KEY || apiKey,
      apiBaseUrl:  process.env.OPENAI_API_BASE_URL || 'https://api.openai.com/v1',
      completionParams: {
        model: 'gpt-3.5-turbo',
        temperature: 0,
        top_p: 1,
      },
    });
  }

  private generatePrompt = (patch: string) => {
    const prompt =
      'Below is a code diff, please help me do a code review, 没有修改意见的可以返回直接返回 OK, 如果有修改意见，请用中文哈:';
    return `${prompt}:
    ${patch}
    `;
  };

  async codeReview(patch: string) {
    const prompt = this.generatePrompt(patch);
    const res = await this.chatAPI?.sendMessage(prompt);
    return res.text;
  }
}

export default ChatBot;
```

后续直接调用接口即可。

```jsx
const bot = new ChatBot();

const suggestion = bot.codeReview(patch);
```

### 3. **提交 `review` 建议到 PR**

我们使用 `GitHub API` 将 `code review` 建议提交到 `PR`。

- **获取 `code review` 建议信息**：调用 `bot.codeReview` API。
- **提交 `code review` 建议 到 PR**：调用 `createReviewComment` API。

```tsx
async function generateReviewComment(
  changedFiles: any,
  commits: any,
  pullNumber: number
) {
  changedFiles.forEach(async (changedFile) => {
    const { patch } = changedFile;

    if (changedFile.status !== "modified" && changedFile.status !== "added") {
      return;
    }

    if (!patch || patch.length > (process.env.MAX_BATCH_LENGTH || 200000)) {
      console.log(
        `${changedFile.filename} skipped caused by its diff is too large`
      );
      return;
    }

    const res = await autoReviewBot.codeReview(patch);

    if (!res) {
      return;
    }

    await createReviewComment({
      repo,
      owner,
      pullNumber,
      commit_id: commits[commits.length - 1].sha,
      path: changedFile.filename,
      body: res,
      position: patch.split("\n").length - 1,
      pull_number: pullNumber,
    } as any);
  });
}
```

最终效果：<https://github.com/hua-bang/chatGPT-bot/pull/2/files>

![Untitled.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/d4c980118dd34f27927fae18829894d7%7Etplv-k3u1fbpfcp-watermark.image)

## 总结

自动化代码审查可以帮助开发团队提高代码质量和开发效率。通过使用 `GPT` 模型和 GitHub API，我们可以实现自动化的代码审查过程。

上方仅仅实现了一个很简单的 `demo`, 还有很多优化的空间。比如：

- **自动化**：结合 `CI/CD`, `Github Action` 实现全自动化。
- **定制化**：让 `GPT` 结合团队内部规范去做 `Code Review` 。
- **持久化**：持久化从而实现增量代码的 `Code Review` 。
- **自愈化**：既让能自动 `CR`, 那能不能自己修改代码提 `MR` 。

但是，这些优化点往往需要结合实际情况，同时也需要时间精力吧，这也是为什么本文只实现最简单 `demo` 的原因。

很多优化点是值得我们思考的，同时， `GPT` 在研发层面的一些优化结合，我觉得也是能值得我们思考的。有兴趣和想法的同学，可以在评论区留言一起讨论哈。

**参考资料**

- anc95/ChatGPT-CodeReview: <https://github.com/anc95/ChatGPT-CodeReview/tree/main>
- 项目 demo: <https://github.com/hua-bang/AIGC/blob/master/creative/src/auto-review/index.ts>

**如果本文对你有一点点帮助或启发，希望可以点个赞哈 / 下方评论区评论 / 互关注 Github、公众号 学习交流，支持是创作的动力～**。

- **公众号**：华铧同学
- **Github**: <https://github.com/hua-bang>
