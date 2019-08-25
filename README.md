# AutoDesk SVF 浏览器

## 项目构建说明
1. 在源码文件夹下安装electron
```
npm install --save-dev electron
```

2. 在源码文件夹下安装electron-package和electron-builder用于程序打包，如果没有安装yarn，可先行安装，[下载地址](https://yarnpkg.com/lang/zh-hans/docs/install/#windows-stable),然后安装其他依赖包
```
npm install electron-packager --save-dev
yarn add electron-builder --dev
yarn add electron-updater
npm install adm-zip --save
npm install electron-log --save
npm install http-server --save-dev
```

3. 程序运行命令
```
npm start
```

4. 程序打包,使用electron-packager
```
npm run packageWin
npm run packageLinux
npm run packageDarwin
```
5. 程序打包，使用electron-builder
```
npm run dist
```
---
## 关于程序打包和自动更新的说明
打包和自动更新主要参考文档如下
* [electron-builder参考](https://www.electron.build/configuration/configuration)
* [教程](https://electronjs.org/docs/tutorial/application-packaging)
* [demo程序](https://github.com/iffy/electron-updater-example)



1. 程序打包是否采用`asar`打包的设置，其中`asarUnpack`打包过程中不打到包里的文件或文件夹
```
"build": {
    "asar":true,
    "asarUnpack":["tools","svf_demo"],
    ...
}
```

2. 程序打包例外文件夹设置，采用`files`设置，[参考文档](https://www.electron.build/configuration/contents#files)
```
"build": {
    ...
    "files":["!**/wwwroot"],
    ...
}
```

3. 程序自动更新部署设置，可采用`github`等也可采用自己的更新服务器，更新服务器采用任意文件服务器均可  
下面是`package.json`中的设置,分别是自己建设的更新服务器或是github服务器，用户选定一个后将其余的删掉即可
```
"publish": [
      {
        "provider": "generic",
        "url": "http://127.0.0.1:8080/"
      },
      {
        "provider": "github",
        "owner": "saluzi",
        "repo": "electron-updater-example"
      }
    ]
```
注意，当选定了github作为更新服务后用户不需要在main.js中指定更新服务器地址，打包程序会自己适配，但如果使用自己的更新服务器，用户需要在程序中指定服务器地址：
```
const feedUrl = "http://127.0.0.1:8080/";
autoUpdater.setFeedURL(feedUrl);
```
需要上传服务器的文件包括三个，形如：
* cadviewer-Setup-1.0.0.exe
* cadviewer-Setup-1.0.0.exe.blockmap
* latest.yml
注意，需要检查` latest.yml`中的文件名和`exe`及`blockmap`文件是否一致，如果不一致，将文件名改成一致（不能改` latest.yml`中的内容，要改文件名）

---
## 项目资料及笔记
1. 项目主要使用了AutoDesk Viewer，其相关的js文件及其资源下载路径如下
```
https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/style.min.css
https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/viewer3D.min.js

https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/locales/zh-HANS/allstrings.json
https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/locales/zh-HANS/VCcrossRGBA8small.dds
https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/locales/en/allstrings.json
https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/SharpHighlights_irr.logluv.dds
https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/SharpHighlights_mipdrop.logluv.dds
https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/lmvworker.min.js

https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/extensions/ViewCubeUi/ViewCubeUi.min.js
https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/extensions/BimWalk/BimWalk.min.js
https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/extensions/Measure/Measure.min.js
https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/extensions/Section/Section.min.js
https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/extensions/CompGeom/CompGeom.min.js

https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/textures/VCedge1.png
https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/textures/VChome.png
https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/textures/VCarrows.png
https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/textures/VCcontext.png
https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/textures/VChomeS.png
https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/textures/VCarrowsS0.png
https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/textures/VCarrowsS1.png
https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/textures/VCcontextS.png
```

2. 项目相关资源连接

* [Autodesk Froge Viewer 官方开发文档](https://forge.autodesk.com/en/docs/viewer/v7/developers_guide/overview/)
* [SVF文件在线转换github项目](https://github.com/cyrillef/extract.autodesk.io)
* [SVF提取有用的文档](https://forge.autodesk.com/blog/forge-svf-extractor-nodejs)
* [SVF在线转换博客文档](https://segmentfault.com/a/1190000016554367?utm_source=tag-newest)
* [安装包制作NSIS设置说明](https://www.electron.build/configuration/nsis)

3. SVF文件提取并保存到本地的2种方法  
* 在线转换:  
[SVF文件在线转换github项目](https://github.com/cyrillef/extract.autodesk.io)可实现此功能，但是该项目部署目前没有成功，该项目的部署需要使用google人机认证服务([google recaptcha 控制台](https://www.google.com/recaptcha/admin))，因此较难访问，该项目还需要用户申请AutoDesk账号，并在AutoDesk Froge API调用的时候添加自己的app，以获取app调用的身份验证([AutoDesk App申请页面](https://forge.autodesk.com/myapps))。

* 手工离线转换   
1. 基于BimAngle_Engine_RVT:
   * 安装Revit及[Revit转换svf插件2017版](http://www.liangchan.net/liangchan/9196.html)或[Revit转换svf插件2019版](https://pan.baidu.com/s/1Gjxpvafbkta4grMnOkTYPg#list/path=%2F)
   * Revit支持的输入格式非常少，不建议使用

2. 基于BimAngle_Engine_NW:
   * 安装Navisworks及[Navisworks转换svf插件2019版](https://pan.baidu.com/s/1Gjxpvafbkta4grMnOkTYPg#list/path=%2F)
   * Navisworks支持多种输入格式，利用BimAngle插件导出svf格式即可
   * 也可利用BimAngle Engine插件的CLI接口通过命令行进行自动导出
   * BimAngle工具有30天试用期，建议使用虚拟机安装Navisworks，利用快照便捷实现工具重装


