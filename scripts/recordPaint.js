/**
 * Created by 郭晅自 on 2017/3/23.
 * 定义recordPaint()方法
 */
function recordPaint(elem,data){
    //1.创建画布对象
    var ctx = elem.getContext("2d");
    //2.获取画布的宽度和高度
    const WIDTH = elem.width;
    const HEIGHT = elem.height;
    //3.定义坐标轴相对画布的内边距
    var padding = 20;//初始化内边距
    var paddingLeft = 60;//至少大于绘制文字的宽度
    var paddingBottom = 30;//至少大于绘制文字的高度
    //4.定义绘制坐标轴的关键点的坐标值
    var axisY = {//y轴的起点坐标值
        x: paddingLeft,
        y: padding
    };
    var origin = {//原点坐标值(x轴与y轴相交点)
        x: paddingLeft,
        y: HEIGHT-paddingBottom
    };
    var axisX = {
        x: WIDTH-padding,
        y: HEIGHT-paddingBottom
    };
    //5.绘制坐标轴
    ctx.beginPath();
    ctx.moveTo(axisY.x,axisY.y);
    ctx.lineTo(origin.x,origin.y);
    ctx.lineTo(axisX.x,axisX.y);
    ctx.stroke();
    //6.绘制坐标Y轴的箭头
    ctx.beginPath();
    ctx.moveTo(axisY.x-5,axisY.y+10);
    ctx.lineTo(axisY.x,axisY.y);
    ctx.lineTo(axisY.x+5,axisY.y+10);
    ctx.stroke();
    //绘制坐标X轴的箭头
    ctx.beginPath();
    ctx.moveTo(axisX.x-10,axisX.y-5);
    ctx.lineTo(axisX.x,axisX.y);
    ctx.lineTo(axisX.x-10,axisX.y+5);
    ctx.stroke();
    //7.绘制坐标轴的刻度(x轴的月份和y轴的金额)
    //x轴的月份
    var month = {
        x : paddingLeft,
        y : HEIGHT-paddingBottom
    };
    //设置字体
    ctx.font = "14px 微软雅黑";
    //设置垂直对齐
    ctx.textBaseline = "top";
    //定义折点的X轴值
    var pointsX = [];
    for(var i=1;i<=12;i++){
        //绘制刻度
        if(i>1){
            pointsX[pointsX.length] = month.x+9;
            ctx.beginPath();
            ctx.moveTo(month.x+9,month.y);
            ctx.lineTo(month.x+9,month.y-6);
            ctx.stroke();
        }else{
            pointsX[pointsX.length] = month.x;
        }
        //绘制月份
        ctx.fillText(i+"月",month.x,month.y);
        //改变每次绘制的x坐标轴的值
        month.x += (axisX.x-origin.x)/12;
    }
    //绘制y轴的金额
    //从众多的关键金额中, 取到最高金额
    /*var datas = [];
    for(index in data){
        datas[datas.length] = data[index];
    }
    function sortNumber(a,b){
        return a-b;
    }
    var max = datas.sort(sortNumber)[datas.length-1];*/
    var max = Math.max.apply(Math,data);
    var moneyY = (origin.y-axisY.y)/(max/500+1);

    //定义绘制的坐标值
    var money = {
        x : axisY.x-5,
        y : axisY.y+moneyY,
        jin : max
    };
    //设置水平对齐
    ctx.textAlign = "right";
    //遍历"最高值/间隔"次
    for(var i=0;i<max/500;i++){
        //绘制刻度
        ctx.beginPath();
        ctx.moveTo(money.x+5,money.y+10);
        ctx.lineTo(money.x+10,money.y+10);
        ctx.stroke();
        //绘制金额
        ctx.fillText(money.jin+"元",money.x,money.y);
        //y轴向下移动(增加)
        money.y += moneyY;
        //金额每次减500
        money.jin += 500;
    }

    /*
    * 绘制折线
    * 12个折点的x轴值,对应12个月文字的x轴值
    * 折点的y轴值等于原点的y轴值-折点到原点的距离
      *折点到原点的距离=(3000点的y到原点的y的长度)*当衣金额/3000
    *
    */
    //绘制折线
    ctx.beginPath();
    for(var n=0;n<data.length;n++){
        //获取折点的x和y值
        var pointY = origin.y-(origin.y-(axisY.y+moneyY))*data[n]/max;
        var pointX = pointsX[n];
        ctx.font = "10px 微软雅黑";
        //绘制折线
        if(n==0){
            ctx.textAlign = "left";
            ctx.moveTo(pointX,pointY);
        }else{
            ctx.textAlign = "center";
            ctx.baseline = "bottom";
            ctx.lineTo(pointX,pointY);
        }
        //绘制折线的金额
        ctx.fillText(data[n],pointX,pointY);
    }
    ctx.stroke();
    //绘制12个折点的圆
    for(var z=0;z<data.length;z++){
        var pointY = origin.y-(origin.y-(axisY.y+moneyY))*data[z]/max;
        var pointX = pointsX[z];
        ctx.fillStyle = "#e4393c";
        ctx.beginPath();
        ctx.arc(pointX,pointY,3,0,Math.PI*2);
        ctx.fill();
    }
}
