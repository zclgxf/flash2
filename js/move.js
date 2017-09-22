//得到样式
function getStyle(obj, attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj, false)[attr];
    }
}
//任意运动框架
function startMove(obj, json, fn){
    clearInterval(obj.timer);
    obj.timer=setInterval(function (){
        var bStop=true;        //这一次运动就结束了——所有的值都到达了
        for(var attr in json){
            //取当前的值
            var iCur=0;
            //如果是透明度的变化
            if(attr=='opacity'){
                iCur=parseInt(parseFloat(getStyle(obj, attr))*100);
            }else{
                iCur=parseInt(getStyle(obj, attr));
            }

            //算速度
            var iSpeed=(json[attr]-iCur)/8;
            iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);

            //检测停止
            if(iCur!=json[attr]){
                bStop=false;
            }
            //对透明度的变化进行设置
            if(attr=='opacity'){
                obj.style.filter='alpha(opacity:'+(iCur+iSpeed)+')';
                obj.style.opacity=(iCur+iSpeed)/100;
            }else{
                obj.style[attr]=iCur+iSpeed+'px';
            }
        }
        /*如果到了，则停止定时器，并进行回调*/
        if(bStop){
            clearInterval(obj.timer);              
            if(fn){
                fn();
            }
        }
    }, 30)
}