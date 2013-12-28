//文本框触发
$(function(){
    $(".txt-input").bind("focus",function(){
        $(this).addClass("txt-inputHover");
        if($(this).val() ==this.defaultValue){
            $(this).val("");
        };
        $(this).next("label").css('display','block');
        }).bind("blur",function(){
            $(this).removeClass("txt-inputHover");
            if ($(this).val() == '') {
                $(this).val(this.defaultValue);
            };
            $(this).next("label").css('display','none');
    });
});

//进入注册页面输入邮箱默认触发
$(document).ready(function(){
    $("#docFocusEmail").focus();
});


$(document).ready(function(){
    //选择好友
    $(".fr-e-j3").hide();
    $(".addAtten").hide();
    $(".okAtten").show();
    $(".friend-list02").hide();

    $(".friend-e").find(".fr-e-j3").html("<a href='#'>取消关注</a>")
    //点击关注
    $(".friend-e .addAtten").click(function(){
        $(this).toggle();
        $(this).parent(".friend-e-pic").find(".okAtten").toggle();
        $(this).parent(".friend-e-pic").parent(".friend-e").find(".fr-e-j3").html("<a href='#'>取消关注</a>")
    });
    //点击取消
    $(".friend-e .fr-e-j3").click(function(){
        $(this).empty();
        $(this).parent(".friend-e").find(".addAtten").toggle();
        $(this).parent(".friend-e").find(".okAtten").toggle();
    });
    //鼠标划过
    $(".friend-e").mouseover(function(){
        $(this).css({"border-color":"#ffac33"});
        $(this).find(".fr-e-j3").show();
    }).mouseout(function(){
        $(this).css({"border-color":"#ededed"});
        $(this).find(".fr-e-j3").hide();
    });

    //选择好友换一换
    $(".friend-tit-ref a").click(function(){
        $(".friend-list01").toggle();
        $(".friend-list02").toggle();
    });
});


//选择考试  
$(document).ready(function clickExam(){
    // $(".exam-e .exam-sel").click(function(){
    //     $(this).removeClass("exam-sel").addClass("current");
    //     clickExam();
    //     return false;
    // });

    // $(".exam-e .current").click(function(){
    //     $(this).removeClass("current").addClass("exam-sel");
    //     clickExam();
    //     return false;
    // });


    // $(".exam-titClick02,.exam-titClick03,#exam-selClick01B,#exam-selClick02B,#exam-selClick03B").hide();
    // $("#exam-selClick01A").click(function(){
    //     $(this).hide();
    //     $("#exam-selClick01B").show();
    //     $(".exam-titClick01").hide();
    //     $(".exam-titClick02").show();
    // });
    // $("#exam-selClick02A").click(function(){
    //     $(this).hide();
    //     $("#exam-selClick02B").show();
    //     $(".exam-titClick02").hide();
    //     $(".exam-titClick03").show();
    // });
    // $("#exam-selClick03A").click(function(){
    //     examTwo();
    // });
    // $("#exam-selClick01B").click(function(){
    //     $(this).hide();
    //     $("#exam-selClick01A").show();
    //     $(".exam-titClick02").hide();
    //     $(".exam-titClick01").show();
    // });
    // $("#exam-selClick02B").click(function(){
    //     $(this).hide();
    //     $("#exam-selClick02A").show();
    //     $(".exam-titClick03").hide();
    //     $(".exam-titClick02").show();
    // });

    //单一类别选择2013-04-19
    $(".exam-sel").bind('click',function(){
        $(this).toggleClass("current");
        $(".exam-sel").not(this).removeClass("current");
    });



});

//选择考试超过两个的后的弹窗
function examTwo(){
    $.dialog({
        title:false,
        fixed:true,
        content:'<div style="font-size:14px;">你最多只能选择<em class="color_orange fb">两个</em>参加的考试哦！</div>',
        lock:true,
        time:2});
};
//选择考试后点击下一步弹窗
$(document).ready(function() {
	$("#exBtn1").click(function() {
		$.dialog({content:'<p class="f14">你确定选择<span class="color_orange">一级建造师</span>考试吗？选择后不可更改！</p>',width:250,icon:'question',ok:true,cancel:true, lock:true});
		return false;
	});	
});



//返回顶部
// $(function() {
//     var $backToTopEle = $("div.goto_top");
//     $("div.goto_top").click(function() {
//             $("html, body").animate({ scrollTop: 0 }, 400);
//             return false;
//     }), $backToTopFun = function() {
//         var st = $(document).scrollTop(), winh = $(window).height();
//         (st > 600)? $backToTopEle.show(): $backToTopEle.hide();    
//         //IE6下的定位
//         if (!window.XMLHttpRequest) {
//             $backToTopEle.css("top", st + winh - 280);
//         }
//     };
//     $(window).bind("scroll", $backToTopFun);
//     $(function() { $backToTopFun(); });
// })

