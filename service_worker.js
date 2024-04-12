

// 拦截请求
const requestBeforeCallback = (details) => {
  // console.log(details)
}

chrome.webRequest.onBeforeRequest.addListener(requestBeforeCallback,{urls: ['*://*/*']})



chrome.action.setTitle({title: '设置插件标题'});


/***
 * @description 监听 popup.js sendMessage
 * message: {type: 'log' | 'other', content: any}
 */

chrome.runtime.onMessage.addListener((message) => {
  if(message?.type === 'log') {
    console.log(message?.content);
  }
});


