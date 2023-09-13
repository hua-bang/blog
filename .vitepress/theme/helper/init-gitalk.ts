import Gitalk from 'gitalk'
import { gitalkId, gitalkInfo } from "../constants";
import { delay } from './delay';

export const getIssueId = () => {
  if (typeof document === 'undefined') {
    return '';
  }
  return document.title
}


let prevPath = '';
const initGitalkMain = async () => {

  await delay(300);
  
  let gitalkEle = document.getElementById(gitalkId);
  if (gitalkEle && prevPath === location.href) {
    return;
  }

  if (gitalkEle) {
    gitalkEle.remove();
  }

  const contentEle = document.querySelector('.content-container');

  if (!contentEle) {
    return;
  }

  gitalkEle = document.createElement('div');
  gitalkEle.setAttribute("id", gitalkId);
  contentEle.appendChild(gitalkEle);

  let gitalkInstance = new Gitalk({
    ...gitalkInfo,
    id: getIssueId(),
  })
  gitalkInstance.render(gitalkId);

  prevPath = location.href;
}

export const initGitalk = () => {
  if (typeof window === 'undefined' || !document){
    return;
  }
  
  initGitalkMain();

  addRouteMonitor(initGitalkMain);
}

export const addRouteMonitor = (callback: () => void) => {
  rewriteHistoryStateFn(HistoryEventType.pushState, callback);
  rewriteHistoryStateFn(HistoryEventType.replaceState, callback);
  window.addEventListener('popstate', callback);
}

enum HistoryEventType {
  pushState = 'pushState',
  replaceState = 'replaceState' 
}

export const rewriteHistoryStateFn = (type: HistoryEventType, callback: () => void) => {
  const prevHistoryFn = window.history[type];
  window.history[type] = (...args: any[]) => {
    const ret = prevHistoryFn.apply(window.history, args as any);
    callback();
    return ret;
  }
}