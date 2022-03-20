$("#btn5").click(function() {
    $.ajax({
        type: "get",
        url: "./../json/change.json",
        data: {},
        datatype: "json",
        success: function(data) {
            document.getElementById('main').innerHTML = "";
            var div = $("<div></div>");
            for (var i = 0; i < data.length; i++) {
                var pro = data[i];
                var p = "<p>" + pro.q5 + "</p>";
                div.append(p);
            }
            $(".main").append(div);
        }
    });
});
$("#btn1").click(function() {
    $.ajax({
        type: "get",
        async: false,
        url: "./../json/change.json",
        data: {},
        datatype: "jsonp",
        success: function(data) {
            document.getElementById('main').innerHTML = "";
            var div = $("<div></div>");
            for (var i = 0; i < data.length; i++) {
                var pro = data[i];
                var p = "<p>" + pro.q1 + "</p>";
                div.append(p);
            }
            $(".main").append(div);
        }
    });
});
$("#btn2").click(function() {
    $.ajax({
        type: "get",
        url: "./../json/change.json",
        data: {},
        datatype: "jsonp",
        success: function(data) {
            var div = $("<div></div>");
            document.getElementById('main').innerHTML = "";
            for (var i = 0; i < data.length; i++) {
                var pro = data[i];
                var p = "<p>" + pro.q2 + "</p>";
                div.append(p);
            }
            $(".main").append(div);
        }
    });
});

$("#btn3").click(function() {
    $.ajax({
        type: "get",
        url: "./../json/change.json",
        data: {},
        datatype: "json",
        success: function(data) {
            document.getElementById('main').innerHTML = "";
            var div = $("<div></div>");
            for (var i = 0; i < data.length; i++) {
                var pro = data[i];
                var p = "<p>" + pro.q3 + "</p>";
                div.append(p);
            }
            $(".main").append(div);
        }
    });
});

$("#btn4").click(function() {
    $.ajax({
        type: "get",
        url: "./../json/change.json",
        data: {},
        datatype: "json",
        success: function(data) {
            document.getElementById('main').innerHTML = "";
            var div = $("<div></div>");
            for (var i = 0; i < data.length; i++) {
                var pro = data[i];
                var p = "<p>" + pro.q4 + "</p>";
                div.append(p);
            }
            $(".main").append(div);
        }
    });
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