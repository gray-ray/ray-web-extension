// 文本朗读功能

const speakCallback = (t) => {
  const inputEle = document.getElementById('speakTextWrap').value?.trim();

  if(inputEle) {
    if( t ==='cn'){
      chrome.tts.speak(inputEle, {lang: 'zh-CN'});
    }
    if( t ==='en'){
      chrome.tts.speak(inputEle, {lang: 'en-US'});
    }
  
  }

  // chrome.runtime.sendMessage({ type: 'speak' });
}


document.getElementById('speakBtnEn').addEventListener('click', () => speakCallback('en'));

document.getElementById('speakBtnCn').addEventListener('click',  () => speakCallback('cn'));