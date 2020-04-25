const { Image } = require('image-js');
const assert = require('assert');
// const src = '/Users/marty/imgs/Go for it U1L3/bicycle.jpeg';

const path = require("path");
const fs = require('fs');

function mkdirsSync(dirname) {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirsSync(path.dirname(dirname))) {
            fs.mkdirSync(dirname);
            return true;
        }
    }
}

async function handleResize(out, image, size){
    const dWidth = size.width;
    const dHeight = size.height;

    const {width,height} = image;

    const resize = {};
    if(dWidth/ dHeight > width / height){
        resize.width = dWidth
    }else{
        resize.height = dHeight
    }

    let grey = image
        // .grey() // convert the image to greyscale.
        .resize(resize); // resize the image, forcing a width of 200 pixels. The height is computed automatically to preserve the aspect ratio.

    const x = (grey.width - dWidth)/ 2;
    const y = (grey.height - dHeight)/ 2;
    // .rotate(30); // rotate the image clockwise by 30 degrees.
    const dir = path.join(path.dirname(out), `${size.namePrefix}-${dWidth}-${dHeight}`);
    mkdirsSync(dir);

    await grey.crop({x, y, width: dWidth, height: dHeight}).save(path.join(dir, path.basename(out)));

}

async function processImage(src, out, sizes) {
    assert.ok(sizes && sizes.length>0, `无效参数: ${JSON.stringify(sizes)}`);
    const args= sizes;

    assert.ok(typeof src === 'string', "无效src");
    assert.ok(typeof src === 'string', "无效out");

    assert.ok(args.every(item => item && item.width && item.height),
        `无效尺寸: ${JSON.stringify(args.find(item => !item || !item.width || !item.height))}`);
    let image = await Image.load(src);
    const tasks = [];
    for(let i=0;i<args.length;i++ ){
        const task = handleResize(out, image, args[i]);
        tasks.push(task)
    }
    await Promise.all(tasks);
    console.log('finish handle file:', src)
}

function isImage(imagePath){
    const ext = path.extname(imagePath).toLowerCase();
    if(ext==='.png'){
        console.warn('warning', imagePath)
    }
    return ['.jpg', '.png', '.jpeg'].includes(ext)
}


async function handleDir(dir, ROOT_PATH, OUT_PATH, config){
    if(fs.statSync(dir).isFile()){
        await processImage(filePath, filePath.replace(ROOT_PATH, OUT_PATH), config.sizes).catch(console.error);
        console.log('out', (filePath.replace(ROOT_PATH, OUT_PATH)));
        return
    }
    const files = fs.readdirSync(dir);
    for(let i=0; i<files.length;i++){
        const file = files[i];
        if(file.startsWith("\.")){
            continue;
        }
        const filePath = path.join(dir, file);
        if (fs.existsSync(filePath)) {
            if(fs.statSync(filePath).isFile()){
                if(isImage(filePath)){
                    // processImage(src, {width: 670, height:380}, {width: 315, height:214}).catch(console.error);
                    // console.log('handle image:', filePath, 'destDir', path.join(filePath.replace(ROOT_PATH, "")))
                    // console.log('src', (filePath))

                    console.log('out', (filePath.replace(ROOT_PATH, OUT_PATH)));

                    await processImage(filePath, filePath.replace(ROOT_PATH, OUT_PATH), config.sizes).catch(console.error);
                }
            }else if(fs.statSync(filePath).isDirectory()){
                if(config.subDir){
                    await handleDir(filePath, ROOT_PATH, OUT_PATH, config)
                }
            }
        }
    }
}

// const ROOT_PATH = path.resolve('/Users/marty/imgs/');
// const OUT_PATH = path.resolve('/Users/marty/imgs-out/');
// const sizes = [{width: 670, height:380, namePrefix: '题干'}, {width: 315, height:214, namePrefix: '选项'}];

// handleDir(ROOT_PATH, ROOT_PATH, OUT_PATH).then(()=>{console.log('finished all tasks')});

module.exports = (config) => {
    const ROOT_PATH = path.resolve(config.sourceDir || './');
    const OUT_PATH = path.resolve(config.destDir || './out/');
    const sizes = [{width: 670, height:380, namePrefix: '题干'}, {width: 315, height:214, namePrefix: '选项'}];
    config.sizes = config.sizes || sizes
    handleDir(ROOT_PATH, ROOT_PATH, OUT_PATH, config).then(()=>{console.log('finished all tasks')})
};
