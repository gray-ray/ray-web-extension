

// 创建一个新的图片元素
const img = document.createElement('img');
// 设置图片的 src 属性为要添加的图片 URL
img.src = chrome.runtime.getURL('https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1kIH7q.img?w=768&h=512&m=6');

console.log(img)
// 将图片添加到页面的 body 元素中
document.body.appendChild(img);

