$("#west").click(function () {
	$("body").animate({"left":"-90em"}, 500);
});

$("#east").click(function () {
	$("body").animate({"left":"-270em"}, 500);
});

$("#westlist li").click(function () {
	$("body").animate({"left":"0em"}, 500);
	$("body").css({"opcity":"0.5"});
});

$("#eastlist li").click(function () {
	$("body").animate({"left":"-360em"}, 500);
});

$("#right1").click(function () {
	$("body").animate({"left":"-90em"}, 500);
	clearTimeout(clear);
	setTimeout('$("#westgallery img").remove()', 600);
});

$("#right2").click(function () {
	$("body").animate({"left":"-180em"}, 500);
});

$("#left1").click(function () {
	$("body").animate({"left":"-270em"}, 500);
	clearTimeout(clear);
	setTimeout('$("#eastgallery img").remove()',600);
});

$("#left2").click(function () {
	$("body").animate({"left":"-180em"}, 500);
});

$("#west").hover(function () {
	$("#west").animate({"background-size":"35em","opacity":"0.5"}, 100);
},function () {
	$("#west").animate({"background-size":"30em", "opacity":"0.8"}, 100);
});

$("#east").hover(function () {
	$("#east").animate({"background-size":"35em","opacity":"0.5"}, 100);
},function () {
	$("#east").animate({"background-size":"30em", "opacity":"0.8"}, 100);
});

$(".preview img").hover(function () {
	$(".preview img").animate({"width":"37em","opacity":"0.8"}, 100);
},function () {
	$(".preview img").animate({"width":"35em", "opacity":"1"}, 100);
});

function initback () {
	var n = parseInt(Math.random() * 18) + 1;
	var url = "url(./img/back/back"+n+".jpg)"
	$("body").css({"background-image":url});
};
var a;
function titleflash () {
	$(".title h1 span").css({"opacity":Math.random()*0.8+0.2});
	a = setTimeout("titleflash()", 100);
};

function cleartime() {
	clearTimeout(a);
	$(".title h1 span").css({"opacity":"1"});
};

$(".logo img").hover(function () {
	$(".logo img").animate({"width":"25em"}, 100)
}, function(){
	$(".logo img").animate({"width":"24em"}, 100)
})

$(".logo img").on("click",function(){
    if($(this).hasClass("active")){
    $(this).removeClass("active");
    	cleartime();
    	document.getElementById("bgmusic").pause();
    }else{
    $(this).addClass("active");
    titleflash();
	document.getElementById("bgmusic").play();
    }
})

var picnum = {
	"Antetokounmpo" : "7",
	"Anthony" : "8",
	"Butler" : "4",
	"Cousins" : "3",
	"Curry" : "6",
	"Davis" : "3",
	"DeRozan" : "8",
	"Durant" : "5",
	"Gasol" : "2",
	"George" : "10",
	"Green" : "1",
	"Harden" : "9",
	"Hayward" : "1",
	"Irving" : "7",
	"James" : "11",
	"Jordan" : "2",
	"Leonard" : "9",
	"Lowry" : "3",
	"Millsap" : "2",
	"Thomas" : "3",
	"Thompson" : "1",
	"Walker" : "6",
	"Wall" : "13",
	"Westbrook" : "10"
};

var m = 1;

var clear;

$("#westlist li").click(function (e) {
	m = 1;
	var name = e.target.innerHTML;
	name = name.split(" ");
	name = name[1];
	var n = parseInt(picnum[name]);
	picShow(name, "westgallery", m, n);
})

$("#eastlist li").click(function (e) {
	m = 1;
	var name = e.target.innerHTML;
	name = name.split(" ");
	name = name[1];
	var n = parseInt(picnum[name]);
	picShow(name, "eastgallery", m, n);
})

var move = 1;

function movepic() {
	move ++
	if(move>4){
		move = 1;
	};
	switch(move){
		case 1:
		return $('.gallery img').animate({"top":"-3em","left":"-3em"},3000);
		break;
		case 2:
		return $('.gallery img').animate({"top":"-2em"},3000);
		break;
		case 3:
		return $('.gallery img').animate({"top":"0em","left":"0em"},3000);
		break;
		case 4:
		return $('.gallery img').animate({"top":"0em","left":"0em"},3000);
	};
}

function picShow (name, part, m, n) {
		$("#"+part).append("<img src='./img/"+name+"/"+m+".jpg' style='display:none'>");
		$('.gallery img').fadeIn(500);
		movepic();
		m++;
		if (m <= n) {
			setTimeout("$('.gallery img').remove()", 3000);
			clear = window.setTimeout(function(){picShow(name, part, m, n)}, 3000);
		}else{
			m = 1;
			setTimeout("$('.gallery img').remove()", 3000);
			clear = window.setTimeout(function(){picShow(name, part, m, n)}, 3000);
		}
	};
// initback();