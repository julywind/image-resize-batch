# image-resize-batch
批量截取图片大小

## install
```
npm i -g image-resize-batch
```

## config
img.config.js
```
module.exports = {
    sourceDir: './',
    targetDir: './out',
    sizes: [{width: 670, height:380, namePrefix: '题干'}, {width: 315, height:214, namePrefix: '选项'}]
}
```

## execute

```
img-cli start -C img.config.js
```

默认执行也是可以的
```
img-cli start
```

如果resize图片依然很大，可做如下处理

`npm i -g imagezip`

安装后进入要压缩的图片目录

 `imagezip --subdir`

#imagezip的具体用法，参看 [imagezip传送门](https://github.com/chanjet-fe/imagezip).

