 // JavaScript Document

//文本框触发
$(function(){
    $(".text-input").bind("focus",function(){
        $(this).addClass("text-inputHover");
        if($(this).val() ==this.defaultValue){
            $(this).val("");
        };
        $(this).next("label").css('display','block');
        }).bind("blur",function(){
            $(this).removeClass("text-inputHover");
            if ($(this).val() == '') {
                $(this).val(this.defaultValue);
            };
            $(this).next("label").css('display','none');
    });
});



//自由做题首页
function examSecSub(){
    //类别切换
    $("div.freeExam-L").find(".sort .sort-E").mouseover(function() {
        $(this).addClass("current").siblings(".sort-E").removeClass("current");
        $("div.freeExam-L").find("div.hi-from:eq("+$(".sort .sort-E").index(this)+")").show().siblings("div.hi-from").hide();
        return false;
    });

    //科目太多隐藏
    // $(".examSecSubject .hi-from-text span.inputClick:gt(5)").hide();
    $(".examSecSubject .hi-from-text .inputCO").live("click",function(){
        $(".examSecSubject .hi-from-text span.inputClick:gt(5)").toggle();
        $(".examSecSubject .hi-from-text .inputCO1,.examSecSubject .hi-from-text .inputCO2").toggle();
    });

};

//收藏及消除收藏
// function questionActionFav(){
//     $(".questionAction .action-favorite .fav-cancel").hide();
//     $(".questionAction #favorite-add").click(function(){
//         $.dialog({
//             follow: document.getElementById('favorite-add'),
//             title:false,
//             content: '收藏成功，请到我的收藏查看！',
//             time:3
//         });
//         $(this).hide();
//         $(this).siblings(".fav-cancel").show();
//         return false;
//     });
//     $(".questionAction .fav-cancel").click(function(){
//         $(this).hide();
//         $(this).siblings(".fav-add").show();
//     });
// };


//试题单选选中
function questionItemChecked(){
    $(".questionContent .itemClick").mouseenter(function(){
        $(this).addClass("itemHover");
    }).mouseleave(function(){
        $(this).removeClass("itemHover");
    }).click(function(){
        $(this).children("input").attr("checked",true);
        // $(".questionContent a:first").removeClass("disable");
        if($(".questionContent .itemCurrent")!=$(this)){
            $(".questionContent .itemCurrent").removeClass("itemCurrent");
            $(this).addClass("itemCurrent");
        };
    });
};

//单选、多选选中状态
function inputClickChange(){
    $("span.inputClick label").click(function(){
        $(this).parent("span.inputClick").children("input").attr("checked",true);
    });
};

//表格单行加重色
function examTableOdd(){
    $(".examTable tr:odd td").css("background-color","#f2f7fc");
    $(".examTable thead th:first").css("background","none");
};

//材料解析滑动导航
function questionMaterialHover(){
    $("div.questionMat-con:gt(0)").hide();
    var titLeft,remL;
    // var $cur=$(".questionMat-tit").find("a.current"),
    //     curLeft = $cur.position().left;

    //     $cur.stop(true, true).animate({
    //         "left" : curLeft
    //     });

    // $("h3.questionMat-tit .hover").mouseover(function(){
    //     alert($(this).position().left);
    // })

    $("h3.questionMat-tit a").mouseover(function(){
        titLeft=$(this).position().left;
        $(".hover").animate({left:titLeft});
        clearTimeout(remL);
    }).click(function(){
        $(this).addClass("current").siblings("a").removeClass("current");
        $("div.questionMat-con:eq("+$("h3.questionMat-tit a").index(this)+")").show().siblings("div.questionMat-con").hide();
    }).mouseout(function(){
        clearTimeout(remL);
        remL=setTimeout(function(){
        $(".hover").animate({left:$("h3.questionMat-tit").find("a.current").position().left});
        },"fast");
    });
};

//我的练习本划过删除
function examListH(){
    $(".examListHover .examList-sub").mouseover(function(){
        $(this).css("background","#fafdff");
        $(this).find(".del").show();
    }).mouseleave(function(){
        $(this).css("background","none");
        $(this).find(".del").hide();
    });
    $(".examListHover .examList-sub .del").click(function(){
        $.dialog({
            title:'',
            content:'<span class="f14">确认取消收藏该试题?</span>',
            width:300,
            height:140,
            left:300,
            padding:'0 20px 0 0',
            icon:'question',
            ok:true,
            cancel:true});
        return false;
        // $(this).parent(".examList-sub").hide(200);
    });
};

//评价
function assessRating(){
    $(".rating-bar a").bind("mouseover",function(){
        $(this).siblings(".rating-curent").hide();
    });
    $(".rating-bar a").bind("mouseout",function(){
        $(this).siblings(".rating-curent").show();
    });

    $(".rating-bar-hard a").bind("mouseover",function(){
        $(this).siblings(".rating-curent").hide();
    });
    $(".rating-bar-hard a").bind("mouseout",function(){
        $(this).siblings(".rating-curent").show();
    });
};

//问题列表与评论列表切换
// function assessTab() {
//     $("div.eDetail-listCon:gt(0)").hide();
//     $(".tab-menu li a").click(function() {
//         $(this).addClass("current").siblings("a").removeClass("current");
//         $("div.eDetail-listCon:eq("+$(".tab-menu li a").index(this)+")").show().siblings("div.eDetail-listCon").hide();
//         return false;
//     });
// };

//提交答案
function submitAnswers(){
    $(".q-selctAnalyze,.q-selctTrue,.q-selctError,.q-QAAnalyze,.q-MaterialAnalyze").hide();
    $(".exam-con .q-selctClick").click(function(){//选择题
        $(this).find("a").removeClass("btn-orange");
        //$(this).addClass("q-selctClickCurrent");
		$(this).hide().siblings(".q-nextBtn").show();
        $(this).parent(".questionAction").find(".action-skip").addClass("q-selctClickCurrent");
        $(this).parent(".questionAction").find(".action-skip a").removeAttr("href");
        $(".q-selctAnalyze").slideDown(200);
        $(".item").css("cursor","auto").prop("onclick", null);
        $(".item input").attr("disabled",true);
    });
    $(".exam-con .q-QAClick").click(function(){//问答题
        $(this).find("a").removeClass("btn-orange");
        $(this).addClass("q-QAClickCurrent");
        $(this).parent(".questionAction").find(".action-skip").addClass("q-selctClickCurrent");
        $(this).parent(".questionAction").find(".action-skip a").removeAttr("href");
        $(this).parent(".questionAction").siblings(".answerQA-textareaBox").find("textarea").attr("disabled",true);
        $(".q-QAAnalyze").slideDown(200);
    });
    $(".exam-con .q-MaterialClick").click(function(){//材料解析题
        $.dialog({
            title:'',
            content:'<span class="f14">您是否确认所有的小题已全部做完？</span>',
            width:370,
            height:140,
            padding:'0 20px 0 0',
            icon:'question',
            ok:function(){
                $(".q-MaterialClick").find("a").removeClass("btn-orange");
                $(".q-MaterialClick").addClass("q-MaterialClickCurrent");
                $(".q-MaterialClick").parent(".questionAction").find(".action-skip").addClass("q-selctClickCurrent");
                $(".q-MaterialClick").parent(".questionAction").find(".action-skip a").removeAttr("href");
                $(".q-MaterialClick").parent(".questionAction").siblings(".questionMat-con").find(".answerQA-textareaBox textarea").attr("disabled",true);
                $(".q-MaterialAnalyze").slideDown(200);
                $(".item").css("cursor","auto").removeClass("itemClick");
                $(".item input").attr("disabled",true);
            },
            cancel:true});
        return false;
    });
    $(".ActiveLearn .q-selctClick").click(function(){//随堂练习
        $(this).find("a").removeClass("btn-orange");
        $(this).addClass("q-selctClickCurrent");
        $(this).parent(".questionAction").find(".action-skip").addClass("q-selctClickCurrent");
        $(this).parent(".questionAction").find(".action-skip a").removeAttr("href");
        $(".questionAnalyze").slideDown(200);
        $(".item").css("cursor","auto").prop("onclick", null);
        $(".item input").attr("disabled",true);
    });

    $(".testP-con .q-MaterialClick").click(function(){//考试中材料解析题
        $.dialog({
            title:'',
            content:'<span class="f14">您是否确认所有的小题已全部做完？</span>',
            width:370,
            height:140,
            left:250,
            padding:'0 20px 0 0',
            icon:'question',
            ok:function(){
                // $(".q-MaterialClick").find("a").removeClass("btn-orange");
                // $(".q-MaterialClick").addClass("q-MaterialClickCurrent");
                // $(".q-MaterialClick").parent(".questionAction").find(".action-skip").addClass("q-selctClickCurrent");
                // $(".q-MaterialClick").parent(".questionAction").find(".action-skip a").removeAttr("href");
                // $(".q-MaterialClick").parent(".questionAction").siblings(".questionMat-con").find(".answerQA-textareaBox textarea").attr("disabled",true);
                $(".q-MaterialAnalyze").slideDown(200);
                // $(".item").css("cursor","auto").removeClass("itemClick");
                // $(".item input").attr("disabled",true);
            },
            cancel:true});
        return false;
    });
};

//查看答案和解析
function viewAnswers(){
    $(".action-view").click(function(){
        $(".q-MaterialAnalyze").toggle();
    });
};


//习题本筛选条件
function examNavFilter(){
    $(".examNav-Filter,.examNav-Filter-hide").hide();
    $(".examNav-Filter-show").click(function(){
        $(this).hide();
        $(".examNav-Filter").show(200);
        $(".examNav-Filter-hide").show();
    });
    $(".examNav-Filter-hide").click(function(){
        $(this).hide();
        $(".examNav-Filter").hide(200);
        $(".examNav-Filter-show").show();
    });
};


//全部试卷--更多试卷/收起更多
function tQList(){
    var $tpl = $(".testPapers-list .tp-item");
    $tpl.find("ul.tp-list").css("height","175px");
    $tpl.find("div.pager,.tp-moreLess").hide();
    $tpl.find(".tp-moreBtn").click(function(){
        $(this).parent(".tp-more").parent(".tp-item").find("ul.tp-list").animate({height:'525px'});
        $(this).parent(".tp-more").parent(".tp-item").find("div.pager,.tp-moreLess").show();
        $(this).hide();
        return false;
    });
    $tpl.find(".tp-moreLess").click(function(){
        $(this).parent(".tp-more").parent(".tp-item").find("ul.tp-list").animate({height:'175px'});
        $(this).parent(".tp-more").parent(".tp-item").find("div.pager").hide();
        $(this).hide();
        $(this).parent(".tp-more").parent(".tp-item").find(".tp-moreBtn").show();
        return false;
    });
};




//试卷结果页面查看解析
function tQEndResolve(){
    $(".t-qEnd-resolveClick .up,.t-qEnd-resolveClick .up2,.t-qEnd-resolveCon").hide();
    $(".t-qEnd-resolveClick").click(function(){
        $(this).next(".t-qEnd-resolveCon").slideToggle(200);
        $(this).find(".down,.up,.down2,.up2").toggle();
    });
};


//习题详情页材料解析题
$(document).ready(function(){
    $(".examDetail .e-answer-con .e-answer-conE:gt(0),.examDetail .e-answer-con .examBorder01,.examDetail .num-partsH").hide();

    $(".examDetail .num-partsC").click(function(){
        $(".examDetail .e-answer-con .e-answer-conE:gt(0),.examDetail .e-answer-con .examBorder01").slideDown();
        $(this).hide();
        $(".examDetail .num-partsH").show();
    });

    $(".examDetail .num-partsH").click(function(){
        $(".examDetail .e-answer-con .e-answer-conE:gt(0),.examDetail .e-answer-con .examBorder01").slideUp();
        $(this).hide();
        $(".examDetail .num-partsC").show();
    });
});


$(document).ready(function(){
    examSecSub();//打开关闭科目
    // questionActionFav();//收藏及消除收藏
    questionItemChecked();//试题单选选中
    inputClickChange();//单选、多选选中状态
    examTableOdd();//表格单行加重色
    questionMaterialHover();//材料解析滑动导航
    examListH();//我的练习本划过删除
    assessRating();//评价
    // assessTab();//问题列表与评论列表切换
    submitAnswers();//提交答案
    viewAnswers();//查看答案和解析
    examNavFilter();//习题本筛选条件

    tQList();//全部试卷--更多试卷/收起更多
    tQEndResolve();//试卷结果页面查看解析
});

//材料解析题弹窗
function questionErrorCorPop(){
    $.dialog({title:'试题纠错',content:'<div class="q-pop"><p class="f14">非常感谢您向我们报告错误，我们将会尽力为您提供最优质的服务~</p><div class="q-con"><div class="q-item"><span class="q-item-tt">错误类型：</span><span class="radio-item"><input id="qKnowRadio" class="radioInput" type="radio" value="" checked="checked"><label for="qKnowRadio">解析错误</label></span><span class="radio-item"><input id="qVideoRadio" class="radioInput" type="radio" value=""><label for="qVideoRadio">答案错误</label></span><span class="radio-item"><input id="qServeRadio" class="radioInput" type="radio" value=""><label for="qServeRadio">文字错误</label></span></div><div class="q-item"><span class="q-item-tt">错误描述：</span><textarea class="q-textarea" name="" cols="" rows=""></textarea></div><div class="q-bar"><div class="clear"></div></div></div></div>',width:530,height:210,ok:true,okVal:"提交纠错",lock:true,cancel:true});
        
};


//-------------------------试卷册考试中--开始----------------------
$(document).ready(function(){
    //试题单选选中
    $(".t-qDo .itemClick").mouseenter(function(){
        $(this).addClass("itemHover");
    }).mouseleave(function(){
        $(this).removeClass("itemHover");
    }).click(function(){
        $(this).children("input").attr("checked",true);
        // $(".questionContent a:first").removeClass("disable");
        if($(".t-qDo .itemCurrent")!=$(this)){
            $(".t-qDo .itemCurrent").removeClass("itemCurrent");
            $(this).addClass("itemCurrent");
        };
    });

    //操作区
    var $backToTopEle2 = $("div.exam-edit");
        $backToTopFun2 = function() {
        var st = $(document).scrollTop(), winh = $(window).height();
        (st > -1)? $backToTopEle2.show(): $backToTopEle2.hide();    
        //IE6下的定位
        if (!window.XMLHttpRequest) {
            $backToTopEle2.css("top", st + winh - 280);
        }
    };
    $(window).bind("scroll", $backToTopFun2);
    $(function() { $backToTopFun2(); });

    //返回顶部
    var $backToTopEle3 = $("div.goto_top_e");
    $("div.goto_top_e").click(function() {
            $("html, body").animate({ scrollTop: 0 }, 400);
            return false;
    }), $backToTopFun3 = function() {
        var st = $(document).scrollTop(), winh = $(window).height();
        (st > 600)? $backToTopEle3.show(): $backToTopEle3.hide();    
        //IE6下的定位
        if (!window.XMLHttpRequest) {
            $backToTopEle3.css("top", st + winh);
        }
    };
    $(window).bind("scroll", $backToTopFun3);
    $(function() { $backToTopFun3(); });

    //答题卡
    var $tQNumH = $(".t-qNums").outerHeight();
    $(".exam-edit").find(".btn-Card").toggle(function(){
        $(".exam-edit").find(".t-qNums").animate({top:-$tQNumH});
    },function(){
        $(".exam-edit").find(".t-qNums").animate({top:0});
    });
    $(".exam-edit").find(".btn-Pause").bind("click",function(){
        $.dialog({title:'提示',content:'<p class="fb mb5">你已暂停考试</p>',width:300,height:100,padding:'10px 20px 0 0',icon:'warning',ok:true,okVal:'继续考试'});
        return false;
    });

    //试卷收藏
    // $("#favorite-add2").click(function(){
    //     $.dialog({
    //         follow: document.getElementById('favorite-add2'),
    //         title:false,
    //         content: '收藏成功，请到我的试卷薄查看！',
    //         time:3
    //     });
    //     $(this).hide();
    //     $(this).next(".fav-cancel").show();
    //     return false;
    // });

    //排行榜
    $(".testP-rank ul li").live({
        mouseover: function() {
            $(this).find(".r-other").show();
        },
        mouseout: function() {
            $(this).find(".r-other").hide();
        }
    });


});

//-------------------------试卷册考试中--结束----------------------
/*试卷试题类型定位随滚动固定*/
$(document).ready(function() {
	$(window).scroll(function() {
		var bh=$(document).scrollTop();
		var $secMenu=$("#J-secMenu");
		if(bh>=280){
			
			$secMenu.addClass("sec-menu-scroll");
			if(!window.XMLHttpRequest){
				$secMenu.css("top",bh-50)
			};
		}else{
			$secMenu.removeClass("sec-menu-scroll");
		} 
	});
});


//----------------------做题结束 2013-08-08--------------------------

$(document).ready(function() {
    //收藏
    $(".eResolveDo").click(function() {
        var ResolveDo=$(this).parent().parent(".exercise-key").siblings(".exercise-resolve");
        if(ResolveDo.css("display")=="none"){
            ResolveDo.slideDown();
            $(this).find(".resDo-open").hide();
            $(this).find(".resDo-close").show();
        }else{
            ResolveDo.slideUp();
            $(this).find(".resDo-close").hide();
            $(this).find(".resDo-open").show();
        };
    });
    //收藏
    $(".eFavorite .fav-add").click(function(){
        $.dialog({
            title:false,
            content: '收藏成功，请到我的收藏查看！',
            time:3
        });
        $(this).hide();
        $(this).siblings(".fav-cancel").show();
        return false;
    });
    $(".eFavorite .fav-cancel").click(function(){
        $(this).hide();
        $(this).siblings(".fav-add").show();
    });
})




//