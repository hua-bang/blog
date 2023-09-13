export const gitalkId = "gitalk-page-container";

export const getIssueId = () => {
  if (typeof document === undefined) {
    return '';
  }
  return document.title
}

export const gitalkInfo = {
  id: document.title,
  owner: 'hua-bang', // GitHub repository 所有者
  repo: 'blog', // GitHub repository
  clientID: 'dc43c8dc2393eb383fdb', // 自己的clientID
  clientSecret: '2a874da58b1aa75bdbe0ffdfb4b741bb09b5a393',// 自己的clientSecret
  admin: ['hua-bang'], // GitHub repository 所有者
  labels: ['Gitalk'], // GitHub issue 的标签
  createIssueManually: true, //如果当前页面没有相应的 isssue 且登录的用户属于 admin，则会自动创建 issue。如果设置为 true，则显示一个初始化页面，创建 issue 需要点击 init 按钮。
}