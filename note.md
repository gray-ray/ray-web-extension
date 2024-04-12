



### manifest v3 和v2 的区别

提高扩展的性能、安全性和维护性

1. v2版本
   - 权限声明：Manifest V2 使用 permissions 字段来声明扩展需要的权限，这些权限在安装扩展时被用户明确授予。
   - 后台页面：Manifest V2 允许定义后台页面（background page）来处理事件和执行代码。这些后台页面会持续运行，直到浏览器关闭。
   - 页面操作：Manifest V2 允许通过 chrome.tabs 和 chrome.windows API 来操纵浏览器标签页和窗口。
   - 内容脚本：Manifest V2 允许通过 content_scripts 字段来指定内容脚本，这些脚本可以在特定的页面上注入执行。
2. v3版本
   - 权限分配：Manifest V3 引入了权限声明的新机制，使用 permissions 和 host_permissions 字段，其中 host_permissions 可以让扩展声明只能在指定的域名下运行。
   - 后台服务：Manifest V3 不再使用后台页面，而是引入了后台服务（background service），通过 Service Worker 来实现。后台服务相比后台页面更轻量，更高效
   - 页面操作：Manifest V3 取消了对 chrome.tabs 和 chrome.windows API 的直接支持，而是引入了 Declarative Net Request API 和 Declarative Content API，通过声明式方式来实现对页面的操作和内容修改。
   - 内容脚本：Manifest V3 对内容脚本的处理有所改变，取消了直接在页面上注入脚本的方式，而是通过 Message Passing API 和 Service Worker 来与页面进行通信。


### manifest.json key说明

- action  Manifest version >=3
- browser_action  Manifest version == 2


### permissions 权限搭配说明

`"webRequest"` `"<all_urls>"` 拦截请求


### 文档

[text](https://developer.chrome.com/docs/extensions?hl=zh-cn)
[API 接口文档](https://developer.chrome.com/docs/extensions/reference/api?hl=zh-cn)
   

### 内容脚本（content_scripts） 与 后台脚本 （background scripts ）区别

1. 内容脚本（Content Scripts）：

内容脚本是在浏览器中的每个页面上运行的 JavaScript 脚本。
它们能够访问当前页面的 DOM 结构，并与页面进行交互。
内容脚本通常用于修改页面内容、监听页面事件、注入自定义样式和脚本等操作。
内容脚本是以沙盒方式运行的，与页面的 JavaScript 环境相隔离，不能直接访问扩展的 API。
内容脚本也可以进行网络请求，但是在沙盒方式运行环境中， 会出现跨越、权限问题。
内容脚本可以通过消息传递机制与后台脚本进行通信。

2. 后台脚本（Background Scripts）：

后台脚本是在扩展的后台运行的 JavaScript 脚本，它在扩展被加载时启动，并持续运行直到扩展被卸载。
后台脚本能够访问扩展的 API，可以执行诸如发送网络请求、管理存储、与其他扩展通信等高级操作。
后台脚本通常用于处理扩展的核心逻辑、响应来自内容脚本和其他事件的请求，并在必要时与外部进行交互。
与内容脚本不同，后台脚本没有直接的访问页面 DOM 的能力，它们主要用于与浏览器和其他扩展组件进行通信和协调。


### navigator.mediaDevices.getUserMedia权限问题

[text](https://segmentfault.com/q/1010000043045608)



### popup 如何查看打印数据

通过 将 popup.js  信息发送到background.js上

注意: background.js 上不能直接打印出dom对象




