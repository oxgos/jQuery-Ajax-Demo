/**
 * Created by 郭晅自 on 2017/3/23.
 * 完成幸运抽奖功能
 */
function runLottey(Elem) {
    //1.获取画布对象
    var ctx = Elem.getContext("2d");
    //获取画布的宽度和高度
    const WIDTH = Elem.width;
    const HEIGHT = Elem.height;
    //2.将抽奖图片加载
    var as = new Image();
    as.src = "img/as.png";//相对于index.html页面
    var pin = new Image();
    pin.src = "img/pin.png";
    // 平移画布
    ctx.translate(WIDTH/2,HEIGHT/2);
    //动态绘制
    var loop = setInterval(draw,200);
    //初始化旋转的角度 - 生成随机数(0-360)
    var pie = Math.random()*(Math.PI*2);
    //定义每次旋转增加的角度
    var addPie = 0;
    //定义开始旋转的时间
    var startTime;
    //定义专门用于绘制图片的函数
    function draw(){
        //旋转后每次增加的角度值
        if(addPie == 0){
            addPie += 10;
        }else {
            addPie +=10;
        }
        //旋转并绘制转盘图片
        ctx.rotate(pie + addPie);
        myDraw(as,-as.width/2,-as.height/2);
        //旋转并绘制指针图片
        ctx.rotate(-(pie + addPie));
        myDraw(pin,-pin.width/2+10,-pin.height/2-10);
        //获取当前的时间
        var endTime = new Date().getTime();
        //判断如果执行了5秒,执行旋转
       if((endTime-startTime) >=5000){
            console.log(endTime-startTime);
            clearInterval(loop);
        }
    }

    function start(){
        addPie = 1;
        startTime = new Date().getTime();
        // 将按钮变为不可操作
        $("#btnLottery").attr("disabled","disabled");
    }
    //通用的绘制图片的方法
    function myDraw(img,x,y){
        ctx.drawImage(img,x,y);
    }
    return start;
}