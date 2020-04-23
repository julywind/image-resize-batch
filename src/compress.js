
const imageMin = require("imagemin");
const imageMinPngquant = require("imagemin-pngquant");

const src = '/Users/marty/511587651004_.pic_hd.jpg';

(async () => {
    const files = await imageMin([src], {
        destination: "compressed-images",
        plugins: [
            imageMinPngquant({
                quality: [0.5, 0.6]
            })
        ]
    });

    console.log('files', files)
})().catch(console.log);
