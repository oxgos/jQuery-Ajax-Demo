// 创建京东数据库
CREATE DATABASE jd CHARACTER SET utf8;

// 创建jd_orders数据表
CREATE TABLE IF NOT EXISTS `jd_orders` (
  `order_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `order_num` varchar(10) NOT NULL,
  `shop_name` varchar(40) NOT NULL,
  `shop_url` varchar(100) NOT NULL,
  `user_name` varchar(40) NOT NULL,
  `price` decimal(16,2) NOT NULL,
  `payment_mode` varchar(10) NOT NULL,
  `submit_time` varchar(20) NOT NULL,
  `order_state` int(1) NOT NULL
);

// 初始化jd_orders数据表数据
INSERT INTO `jd_orders` VALUES(1, '9545709796', 'BROWNE FOX旗舰店', 'http://mall.jd.com/index-119003.html', 'aaa', '21.90', '在线支付', '2015-5-30T13:40:20', 2);
INSERT INTO `jd_orders` VALUES(2, '9195223439', '京东', '', 'aaa', '24.80', '货到付款', '2015-5-10T15:20:20', 3);
INSERT INTO `jd_orders` VALUES(3, '9545656843', '京东', '', 'aaa', '22.90', '在线支付', '2015-05-05T9:14:20', 3);
INSERT INTO `jd_orders` VALUES(4, '9130907509', '京东', '', 'aaa', '3567.50', '在线支付', '2015-04-23T9:14:20', 3);

// 创建jd_order_product_detail数据表
CREATE TABLE IF NOT EXISTS `jd_order_product_detail` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
);

// 初始化jd_order_product_detail数据表数据
INSERT INTO `jd_order_product_detail` VALUES(1, 1, 1);
INSERT INTO `jd_order_product_detail` VALUES(2, 1, 2);
INSERT INTO `jd_order_product_detail` VALUES(3, 2, 3);
INSERT INTO `jd_order_product_detail` VALUES(4, 3, 4);
INSERT INTO `jd_order_product_detail` VALUES(5, 4, 5);

// 创建jd_products数据表
CREATE TABLE IF NOT EXISTS `jd_products` (
  `product_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `product_name` varchar(100) NOT NULL,
  `product_url` varchar(100) NOT NULL,
  `product_img` varchar(100) NOT NULL
);

// 初始化jd_products数据表数据
INSERT INTO `jd_products` VALUES(1, '【限量秒杀】男士时尚韩版腰带加宽针扣潮商务皮带azkz A款针扣咖啡色', 'http://item.jd.com/1540292153.html', 'img/prod1.jpg');
INSERT INTO `jd_products` VALUES(2, 'BROWNE FOX通用皮带打孔器打孔针打孔冲子皮带冲子ZD-111 银色', 'http://item.jd.com/1604745360.html', 'img/prod2.jpg');
INSERT INTO `jd_products` VALUES(3, '阿迪达斯（adidas）男士健发强根去屑洗发露 220ml', 'http://item.jd.com/1070276.html', 'img/prod3.jpg');
INSERT INTO `jd_products` VALUES(4, '金士顿（Kingston） DT 101G2 8GB U盘 红色 经典之作', 'http://item.jd.com/1070276.html', 'img/prod4.jpg');
INSERT INTO `jd_products` VALUES(5, '苹果(Apple) iPhone 5s (A1518) 16GB 金色 移动4G手机', 'http://item.jd.com/1023433.html', 'img/prod5.jpg');