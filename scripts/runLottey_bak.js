/**
 * Created by 郭晅自 on 2017/3/23.
 * 完成幸运抽奖功能
 */
function runLottey(Elem){
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
    pin.width = 358;
    pin.height = 301;
    //平移画布(旋转以此为中心点)
    ctx.translate(WIDTH/2,HEIGHT/2);
    //3.绘制图片
    as.onload = function(){
        ctx.drawImage(as,-as.width/2,-as.height/2);
    };
    pin.onload = function(){
        ctx.drawImage(pin,-pin.width/2+10,-pin.height/2-10);
    };
    //定义start方法
    var startTime;
    var loop;
    this.start = function(){
        // 当start()方法被调用时,第一次旋转
        startTime = new Date().getTime();
        running();
        loop=setInterval(running,10);
        $("#btnLottery").attr("disabled","disabled");
    }
    var pie = Math.PI/15;

    function running(){
        pie += Math.PI/15;
        ctx.rotate(pie);
        ctx.drawImage(as,-as.width/2,-as.height/2);
        ctx.rotate(-pie);
        ctx.drawImage(pin,-pin.width/2+10,-pin.height/2-10);
        var endTime = new Date().getTime();
        // 判断endTime-startTime=指定值(旋转多长时间-毫秒)
        if(endTime-startTime >= 4000){
            clearInterval(loop);
            $("#btnLottery").removeAttr("disabled","disabled");
        }
    }
}

