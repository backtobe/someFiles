### 全局安装cordova

`npm install -g cordova`

### 检验是否安装成功

`cordova -v`

#### 创建APP

`cordova create path [id [name [config]]] [options]`

例如：`cordova create cordova-app com.zhnglin.www.com cordovaApp `

其中 `path` 表示工程文件夹名称 `cordova-app`

​		`id` 	表示工程ID`	com.zhanglin.www.com`

​		`name`	表示工程名称 `cordovaApp` 

### 查看本机安装的平台

```
cordova platforms list
```

### 给项目添加平台支持

```
cordova platform add android
```

### 添加cordova插件

```
cordova plugin add cordova-hot-code-push-plugin
```

