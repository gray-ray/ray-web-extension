

let recording = false;

let mediaRecorder;
let recordedChunks = [];

/**
 * @description 录屏下载
 */


  // manifest.json  "tabCapture", "offscreen"

async function startRecording() {
  
  const media = await navigator.mediaDevices.getDisplayMedia({ video: { mediaSource: 'screen' } })
  // const media = await navigator.mediaDevices.getUserMedia({ video: true, audio: true }) // 有权限问题

  // 创建媒体录制器
  mediaRecorder = new MediaRecorder(media); 


  // 监听录制数据可用事件
  mediaRecorder.ondataavailable = event => {
    if (event.data.size > 0) {
      recordedChunks.push(event.data);
    }
  };

  // 开始录制
  mediaRecorder.start();

};

function save() {
  const blob = new Blob(recordedChunks, { type: 'video/mp4' });
  const url = URL.createObjectURL(blob);
  recordedChunks = [];

  const a = document.createElement('a');
  a.href = url;
  a.download = `${+new Date()}.mp4`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function stopRecording() {

  mediaRecorder.stop();
}


function operationRecord() {

  recording =!recording;

  if(recording) {
    chrome.action.setIcon({ path: '../icons/recording.png' });
    startRecording()
  }else{
    chrome.action.setIcon({ path: '../icons/icon-128x128.png' });
    stopRecording()
  }

}

// 页面录像
document.getElementById('startRecord').addEventListener('click',startRecording);


// 页面录像
document.getElementById('stopRecord').addEventListener('click',stopRecording);

// 页面录像save
document.getElementById('saveRecord').addEventListener('click',save);






