$("#btn5").click(function() {
    document.getElementById('main').innerHTML = "";
    var p = "<p>" + "有关Java的相关问题" + "<p>" + "<p>" + "首先，非常抱歉，我尚未学习Java（但是已经提上日程了）！！！" + "<p>" + "<p>" + "目前除了c语言，前端各语言和PHP之外，我学习了一部分的c++。。。。" + "<p>" + "有关Java的问题我难以回答，但是相信在学习了一段时间之后肯定会有所想法的" + "<p>" +
        "<p>" + "顺便提一下我对C语言是否可以面向对象说说我的看法：C语言作为一种强类型语言，想要在其中制造一个较为模糊的类型，我认为是比较困难的，c++应该可以吧。。。" + "<p>" + "<p>";
    var div = $("<div></div>");
    div.append(p);
    $(".main").append(div);
});
$("#btn1").click(function() {
    document.getElementById('main').innerHTML = "";
    var p = "<p>" + "姓名：张钊荣" + "<p>" + "<p>" + "学号：2021090907021 " + "<p>" + "学院：信软" + "<p>" + "<p>" + "本网页为本人前端作业，此处借用" + "<p>";
    var div = $("<div></div>");
    div.append(p);
    $(".main").append(div);
});
$("#btn2").click(function() {
    document.getElementById('main').innerHTML = "";
    var p = "<p>" + "关于苹果分堆" + "<p>" + "<p>" + "刚开始一看到这个数据就感到，太特殊了，为什么呢？1023对程序员熟悉的1024仅仅差1.注定了它的不平凡！" + "<p>" + "<p>" + "1024是2的十次方，于是乎这个问题迎刃而解了" + "<p>" +
        "<p>" + "我的答案是将苹果分为2的0次方，1次方，2次方...9次方为一堆，每一堆苹果的拿与不拿对应的是二进制的1与0，于是这十堆苹果就像一个十位数的二进制，由此可以表示0-1024的所有数据!" + "<p>";
    var div = $("<div></div>");
    div.append(p);
    $(".main").append(div);
});
$("#btn3").click(function() {
    document.getElementById('main').innerHTML = "";
    var p = "<p>" + "关于农民伯伯种菜" + "<p>" + "<p>" + "就我们现实生活中而言我认为有两种解决方案。" + "<p>" + "<p>" + "一：虽然农作物需要长时间的成长过程，但是随着季节变更，我们拥有的不仅仅一种农作物，每一个季节，我们都有多种可供我们食用的物种，所以，在某一食物尚未成熟时，我们可以选择其他食物。" +
        "<p>" + "<p>" + "二：凡是动物，当当前食物富裕的时候，都会想办法将其隐藏起来，以供之后使用。我国大量的粮仓就是为了预防突发情况，粮食短缺，我想这个问题也可以如此回答。面对短期大量的食物，我们应该储存起来，例如冰冻等方法。建立一个仓库，以便后日取用。" + "<p>";
    var div = $("<div></div>");
    div.append(p);
    $(".main").append(div);
});
$("#btn4").click(function() {
    document.getElementById('main').innerHTML = "";
    var p = "<p>" + "关于数据库和云计算" + "<p>" + "<p>" + "作为一个刚进入后端不久的小白，目前正在学习MySQL数据库，在学习完DQL,DML,DDL,DCL和各表之间关系之后感受到，数据库真的很有用！！！" + "<p>" +
        "<p>" + "就拿我这个网页来说吧，我前端作业用的是json作为存储介质，但是没有解决浏览器跨域的问题，于是本文件我就在js中直接体现，于是乎就有一个致命的问题——数据是“裸奔”的，别人仅需要查看我的代码就可以知道一切信息。" + "<p>" +
        "<p>" + "同时这些数据仅仅只有网页打开时才能被利用，且利用不方便。数据库的出现解决了保密性问题，简化了数据的增删改等操作，并且可以安全的存在服务器端。非常实用！！！" + "<p>" + "<p>" +
        "关于云计算与数据库之间关系，于我的拙见，云计算需要大量的数据基础，需要和数据库有直接联系以简化数据交流路经，节约时间空间。" + "<p>";
    var div = $("<div></div>");
    div.append(p);
    $(".main").append(div);
});
var imgShow = document.getElementsByClassName('parent')[0],
    dotList = document.querySelectorAll('.dots >.clearfix > li');
var btnLeft = document.getElementsByClassName('btnLeft')[0],
    btnRight = document.getElementsByClassName('btnRight')[0];
var dotLen = dotList.length,
    index = 0;

function showRadius() {
    for (var i = 0; i < dotLen; i++) {
        if (dotList[i].className === "on") {
            dotList[i].className = "off";
        }
    }
    dotList[index].className = "on";
}


btnLeft.onclick = function() {
    index--;
    if (index < 0) {
        index = 4;
    }
    showRadius();
    var left;
    var imgLeft = imgShow.style.left;
    if (imgLeft === "0px") {
        left = -4800;
    } else {
        left = parseInt(imgLeft) + 1200;
    }
    imgShow.style.left = left + "px";
}

btnRight.onclick = function() {
    index++;
    if (index > 4) {
        index = 0;
    }
    showRadius();
    var right;
    var imgLeft = imgShow.style.left;
    if (imgLeft === "-4800px") {
        right = 0;
    } else {
        right = parseInt(imgLeft) - 1200;
    }
    imgShow.style.left = right + "px";
}


function fns() {
    index++;
    if (index > 4) {
        index = 0;
    }
    showRadius();
    var right;
    var imgLeft = imgShow.style.left;
    if (imgLeft === "-4800px") {
        right = 0;
    } else {
        right = parseInt(imgLeft) - 1200;
    }
    imgShow.style.left = right + "px";
}

var timer;

function autoPlay() {
    timer = setInterval(function() {
        var right;
        var imgLeft = imgShow.style.left;
        if (imgLeft === "-4800px") {
            right = 0;
        } else {
            right = parseInt(imgLeft) - 1200;
        }
        imgShow.style.left = right + "px";
        fns();
    }, 2000)
}
autoPlay();

for (var i = 0; i < dotLen; i++) {
    (function(i) {
        dotList[i].onclick = function() {
            var dis = index - i;
            imgShow.style.left = (parseInt(imgShow.style.left) + dis * 1200) + "px";
            index = i;
            showRadius();
        }
    })(i);
}


function back() {
    timer = setInterval(function() {
        console.log(parseInt(imgShow.style.left) + "px");
        var num = imgShow.style.left;
        if (num === "-6000px" || num === "-7200px" || num === "8400px") {
            imgShow.style.left = 0 + "px";
        }
    }, 2000)
}

back();