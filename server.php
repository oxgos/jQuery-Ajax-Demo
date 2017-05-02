<?php
    /*1.连接MySQL数据库,查询当前用户的所有订单信息
            *与MySQL数据库建立连接
            mysqli_connect(url,username,pwd,dbname,prot);
            返回MySQL数据库的连接对象
      2.定义SQL语句-字符串类型
        将SQL语句发送到MySQL数据库,进行执行
           *查询数据库存表数据,包含中文(解决中文乱码)
           *在执行SQL语句前,先指定编码
            mysqli_query("set names utf8");
        mysqli_query(link,sql);
         *如果是查询的话,成功返回结果集对象,失败返回false
        *如果得到结果集对象,进行解析
        *关闭与MySQL数据库存的连接
            mysqli_close(link);
    */

   /* $conn = mysqli_connect("127.0.0.1","root","","jd","3306");
    $sql = "select * from jd_orders where user_name='aaa'";
    mysqli_query($conn,"SET NAMES uft8");
    $result = mysqli_query($conn,$sql);
    //解析结果集对象
    /*1.从结果集对象中获取order_id字段值
        *mysqli_fetch_assoc()方法 - 返回关联数组
            *将一条记录作为一个数组返回
        *循环返回的结果,从而得到所有记录的同一字段值
    */
   /* if($result){
    //定义数组 - 用于存储所有记录的order_id值
        $arr = [];
    		/*var_dump($result->num_rows);
    		var_dump($result->field_count);*/
    	/*while($row = mysqli_fetch_assoc($result)){
    	    $orderid = $row['order_id'];
    	    array_push($arr,$row['order_id']);*/
    	    //根据order_id值获取对应的商品信息
    	    /*
                关联查询语句:
                  *号表示所有字段
                select *
                   多张表之间用","隔开
                   数据表[as] 别名
                   关联关系 - d.product_id=p.product_id
                   from jd_order_product_detail d,jd_products p where d.product_id=p.product_id and d.order_id='.$orderid
    	    */
           /* $sql = 'select p.product_name,p.product_url,p.product_img from jd_order_product_detail d,'
                  .'jd_products p where d.product_id=p.product_id and d.order_id='.$orderid;
            mysqli_query($conn,'SET NAMES utf8');
            $result = mysqli_query($conn,$sql);
            var_dump($result);
    	}
    }
     mysqli_close($conn);*/
    //以上因为有两个result,返回只能一个result,所以改变sql语句的查询语句
    $conn = mysqli_connect("127.0.0.1","root","","jd","3306");
    $sql = "select o.order_num,o.shop_name,o.shop_url,o.price,o.payment_mode,o.submit_time,"
            ."o.order_state,p.product_name,p.product_url,p.product_img from jd_orders o,"
            ."jd_order_product_detail d,jd_products p where "
            ."o.order_id=d.order_id and p.product_id=d.product_id and o.user_name='aaa'";
    mysqli_query($conn,"SET NAMES utf8");
    $result = mysqli_query($conn,$sql);
    /*
      4. 解析结果集对象
         * 注意 - 不能使用json_encode()函数直接将mysqli_result类型对象进行转换的
         * JSON格式的结构 - Array|Object
           [[],[],[],[],[]]
    */
    // 定义一个空数组
    $arr = array();
    while($row=mysqli_fetch_assoc($result)){
        array_push($arr,$row);
    }
    $json= json_encode($arr);
    //var_dump($json);
    mysqli_close($conn);

    echo $json;
?>