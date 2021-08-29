/*
 * @loadImg:   
 * @title:    load image
 * @title-zh: 加载图片 
 * @desc:     this is description
 * @desc-zh:  描述描述
 * @tags:     img\file
 * @usage:    这是用法
 */

function sleep(url){
    console.log(1266635);
    return new Promise((resolve,reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
            resolve(img);
        }
        img.onerror = () => {
            reject();
        }
    })
}
