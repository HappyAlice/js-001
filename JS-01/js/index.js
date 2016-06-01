
//001-如果数组中存在 item，则返回元素在数组中的位置，否则返回 -1。function indexOf(arr, item) {}indexOf([ 1, 2, 3, 4 ], 3); // 返回 2

function ArraySearch(arrId, itemId){
	var arrayValue = document.getElementById(arrId).value.split(" ");
	var itemValue =document.getElementById(itemId).value;
	if (arrayValue !="" && itemValue !="") {
		 alert(arrayValue.indexOf(itemValue));
	};
}

// 02： 计算给定数组 arr 中所有元素的总和function sum(arr) {}sum([ 1, 2, 3, 4 ]); // 返回 10
function ArraySum(arrId){	
	var arrayValue = document.getElementById(arrId).value.split(" ");
	var sum = 0;
	if (arrayValue !="") {
		for (var i = arrayValue.length - 1; i >= 0; i--) {
			arrayValue[i] = parseInt(arrayValue[i]);
			sum  += arrayValue[i];
		};
		alert("该数组和为："+ sum);
	};
}

// 03： 统计数组 arr 中值等于 item 的元素出现的次数 function count(arr, item) {}  count([1, 2, 4, 4, 3, 4, 3], 4); // 返回 3
function ArrayCount(arrId, itemId){
	var arrayValue = document.getElementById(arrId).value.split(" ");
	var itemValue =document.getElementById(itemId).value;
	var count = 0;

	if (arrayValue !="" && itemValue !="") {
		for (var i = 0; i <= arrayValue.length - 1; i++) {
			if (arrayValue[i] == itemValue) {
				count++;
			 }else{
			 	continue;
			 }
		}
		alert("您要查找的数字在数组中出现的次数为：" + count );
	}
}

// 04: 在页面显示当前时间，精确到秒数，且不断变化
function Time(){

	//方法一
	document.getElementById("time").innerHTML = Date();
	window.setTimeout(Time, 1000);
	//window.setInterval("Time()", 1000);   //会系统崩溃。setInterval参数要怎么传，才不会系统奔溃？

	//方法二
	// var now = new Date();
	// var year = now.getFullYear();
	// var month = now.getMonth()+1;
	// var day = now.getDate();
	// var hour = now.getHours();
	// var minute = now.getMinutes();
	// var second = now.getSeconds();
	// var week = now.getDay();
	
	//在小于10的数前添加一个0
	// function checkTime(i){
	// 	if (i < 10) {
	// 		i = "0" + i;
	// 	}
	// 	return i;
	// }
	// month = checkTime(month);
	// day = checkTime(day);
	// hour = checkTime(hour);
	// minute = checkTime(minute);
	// second = checkTime(second);

// function nowZ(str){
// 	var num;
// 	str >= 10 ? num = str : num = "0" + str;
// 	return num;
// }


	//把星期显示为汉字 方法一（if（）else语句。语句太多）
	// switch(week){
	// 	case 0: week = "日";
	// 	break;
	// 	case 1: week = "一";
	// 	break;
	// 	case 2:	week = "二";
	// 	break;
	// 	case 3:	week = "三";
	// 	break;
	// 	case 4:	week = "四";
	// 	break;
	// 	case 5:	week = "五";
	// 	break;
	// 	case 6:	week = "六";
	// 	break;
	// }

	//把星期显示为汉字  方法二（数组实现)
	 // var weekArr = ["日", "一", "二", "三", "四", "五", "六"];
	 // week = weekArr[week];

	 // 改写成一句：
	 //var week = ["日", "一", "二", "三", "四", "五", "六"][now.getDay()] ; 


	//把星期显示为汉字  方法三（字符串实现)
	// var weekStr = "日一二三四五六";
	// weekStr.charAt(week);

	// 改写成一句：
	// var week =  "日一二三四五六".charAt(now.getDay());
	

	// document.getElementById("time").innerHTML = year +"年" + month +"月" + day + "日" + hour + ":" + minute + ":" + second + "星期" + week;
	// window.setTimeout(Time, 1000);

}

// 05: 图片轮换·
var images = [
	"images/img1.jpg",
	"images/img2.jpg",
	"images/img3.jpg",
	"images/img4.jpg",
	"images/img5.jpg",
	"images/img6.jpg"
	];

//方法二 把两个事件合为一个事件，用dir参数来控制方向
var getPictures = document.getElementById("pictures");

function Go(dir) {
	var currentSrc = getPictures.getAttribute("src");
	var i = images.indexOf(currentSrc);	
	if(dir < 0){
		i = (i > 0) ? i-1 : images.length-1;
		
	}else{
		i = (i < images.length-1) ? i+1 : 0;		
	}
	getPictures.setAttribute('src', images[i]);


}

//方法一：分别设定向左向右的两个按钮事件
// function Last(){
// 	var getPictures = document.getElementById("pictures");
// 	var currentSrc = getPictures.getAttribute("src");
// 	var i = images.indexOf(currentSrc);	
// 	if (i > 0) {
// 		i--;
// 	}else{
// 		i = images.length-1;
// 	};

// 	getPictures.setAttribute('src', images[i]);
// }

// function Next(){
// 	var getPictures = document.getElementById("pictures");
// 	var currentSrc = getPictures.getAttribute("src");
// 	var i = images.indexOf(currentSrc);	
// 	if (i < images.length-1) {
// 		i++;
// 	}else{
// 		i = 0;
// 	};
// 	getPictures.setAttribute('src', images[i]);
	
// }

