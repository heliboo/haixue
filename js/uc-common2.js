//头部下拉菜单
$(document).ready(function() {
	$(".hnav-li").hover(function(){
		$(this).addClass("hover").find(".sdrop-box").stop(true,true).slideDown(300);
	},function(){
		$(this).removeClass("hover").find(".sdrop-box").stop(true,false).slideUp(300);
	});
	
});

//返回顶部
$(function() {
    var $backToTopEle = $("div.goto_top");
    $("div.goto_top").click(function() {
            $("html, body").animate({ scrollTop: 0 }, 400);
            return false;
    }), $backToTopFun = function() {
        var st = $(document).scrollTop(), winh = $(window).height();
        (st > 600)? $backToTopEle.show(): $backToTopEle.hide();    
        //IE6下的定位
        if (!window.XMLHttpRequest) {
            $backToTopEle.css("top", st + winh - 280);
        }
    };
    $(window).bind("scroll", $backToTopFun);
    $(function() { $backToTopFun(); });
})
// 选项卡
$(document).ready(function() {
	$("div.tab").find("ul.tab-menu a").click(function() {
		$(this).addClass("current").parent("li").siblings("li").find("a").removeClass("current");
		$("div.tab").find("div.tab-con:eq("+$("ul.tab-menu a").index(this)+")").show().siblings("div.tab-con").hide();
		return false;
	});
});
$(document).ready(function() {
	$("div.tab").find("ul.tab-nav a").click(function() {
		$(this).parent("li").addClass("current").siblings("li").removeClass("current");
		$("div.tab").find("div.tab-item:eq("+$("ul.tab-nav a").index(this)+")").show().siblings("div.tab-item").hide();
		return false;
	});
});
//我要回复
$(document).ready(function() {
	$(".J-replyBtn").toggle(function(){
		$(this).parents(".qa-box").find(".hi-reply").slideDown();
	},function(){
		$(this).parents(".qa-box").find(".hi-reply").slideUp();
	});
	$(".J-askSbtn").click(function() {
		$("#qaTextarea").focus();
	});
	$(".J-replySbtn").toggle(function(){
		$(this).parents(".hi-reply-box").find(".hi-reply-s-input").slideDown();
	},function(){
		$(this).parents(".hi-reply-box").find(".hi-reply-s-input").slideUp();
	});
	$(".hi-reply-box").hover(function(){
		$(this).find(".J-askSbtn").show();
	},function(){
		$(this).find(".J-askSbtn").hide();
	});
});
//选购课程选择
$(document).ready(function() {
	$("#J-secCourse").hover(function(){
		$(this).find(".popup").show();
	},function(){
		$(this).find(".popup").hide();
	});
});
//全部课程
$(document).ready(function() {
    $("#J-allCourse").mouseover(function(){
		$(this).find(".all-pop").fadeIn(200);
	});
	$("#J-allPop").mouseleave(function() {
        $(this).fadeOut(200);
    });
	$(".all-close").bind("click",function(){
		$(this).parents("#J-allPop").hide();
		return false;
	});
});
//搜索框状体
$(document).ready(function() {
	$(".search-input").focus(function() {
		$(this).addClass("focus");
		if($(this).val()==this.defaultValue){
			$(this).val("");
		};
	}).blur(function() {
		$(this).removeClass("focus");
		if($(this).val()==""){
			$(this).val(this.defaultValue);
		};
	});;
});
//我的评论回复删除显示隐藏
$(document).ready(function() {
	$(".hi-reply-box").hover(function(){
		$(this).find(".hi-reply-del").show();
	},function(){
		$(this).find(".hi-reply-del").hide();
	})
});
//视频播放页上滚下滚
function rollTopStudyBox(){
	var rollBox=$(".study-inner");
	var windowH=$(window).height();
	rollBox.css({"top":windowH,"bottom":-windowH});
	rollBox.animate({top:0,bottom:0},1000);
}
function rollBottomStudyBox(){
	var rollBox=$(".study-inner");
	var windowH=$(window).height();
	rollBox.css({"top":-windowH,"bottom":windowH});
	rollBox.animate({top:0,bottom:0},1000);
}



//随堂练习提交
$(document).ready(function() {
	$(".j-vtestSend").click(function() {
		$(".vtest-option").find(".vtest-result-icon").show();
		$(this).hide().siblings(".vtestNextBtn").css("display","inline-block");
		return false;
	});
});

//ie6提示
$(document).ready(function() {
	$("#tipie6 .close").live("click",function(){
		$("#tipie6").hide();
		return false;
	});
});
//文本框触发
$(document).ready(function() {
	$(function(){
		$(".text-input").bind("focus",function(){
			if($(this).val() ==this.defaultValue){
				$(this).val("");
			};
		}).bind("blur",function(){
			if ($(this).val() == '') {
				$(this).val(this.defaultValue);
			}
		});
	});
});









