import Gitalk from 'gitalk'
import { gitalkId, gitalkInfo } from "../constants";

export const initGitalk = () => {
  if (typeof window === undefined || !document){
    return;
  }
  
  const contentEle = document.querySelector('.content-container');

  if (!contentEle) {
    return;
  }

  const gitalkEle = document.createElement('div');
  gitalkEle.setAttribute("id", gitalkId);
  contentEle.appendChild(gitalkEle);

  let gitalkInstance = new Gitalk(gitalkInfo)
  gitalkInstance.render(gitalkId);
}