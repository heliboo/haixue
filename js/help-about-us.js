// 栏目切换
$(document).ready(function(){
	$(".tab_con:gt(0)").hide();
	$(".tab_menu li").click(function(){
		var num=$('.tab_menu > li').index(this)+1;
		$(this).addClass("current").siblings("li").removeClass("current");
	    $(".tab_con:eq("+num+")").show().siblings(".tab_con").hide();
	});
	$(".tab_menu li").hover(function(){
		$(this).addClass("hoverli").siblings("li").removeClass("hoverli");},
		function(){
		$(this).removeClass("hoverli");
			});
	
});
// 招聘展示
$(document).ready(function(){
	$(".show_job").hide();
	$(".job_show a").click(function(){
		$(this).parents("tr").next(".show_job").show().siblings(".show_job").hide();
		$(this).parents("table").siblings("table").find(".show_job").hide();
	    return false;
	});
	$(".job_close").click(function(){
		$(this).parents(".show_job").hide();
	});
});



// 公司展示
$(document).ready(function(){
	// $(".intro_small").animate({opacity:0.3},1);
	var $bsrc=$(".intro_big img").attr("src");
	$(".intro_small li").click(function(){
		$(this).addClass("current").siblings("li").removeClass("current");
		$ssrc=$(this).find("img").attr("src");
		var index = $ssrc.lastIndexOf('s_');//查找替换字符
        var str_new=$ssrc.substr(0,index)+$ssrc.substr(index+2,$ssrc.length);//字符串拼接
		$(".intro_big img").attr("src",str_new);
		$stext=$(this).find("img").attr("alt");
		$(".pic_text").html($stext);
	});
});
// 团队风采
$(document).ready(function(){
	var $bsrc=$(".team_bigpic img").attr("src");
	$(".small_show li").click(function(){
		$(this).addClass("current").siblings("li").removeClass("current");
		$ssrc=$(this).find("img").attr("src");
		var index = $ssrc.lastIndexOf('s_');//查找替换字符
        var str_new=$ssrc.substr(0,index)+$ssrc.substr(index+2,$ssrc.length);//字符串拼接
		$(".team_bigpic img").attr("src",str_new);
	});
	var page = 1;
    var i = 4; //每版放3个图片
    //向后 按钮
    $("span.tpic_next").click(function(){    //绑定click事件
	     var $parent = $(this).parents("div.team_small_pic");//根据当前点击元素获取到父元素
		 var $v_show = $parent.find("ul"); //寻找到"视频内容展示区域"
		 var $v_content = $parent.find("div.small_show"); //寻找到"视频内容展示区域"外围的DIV元素
		 var v_width = $v_content.width()+20 ;
		 var len = $v_show.find("li").length;
		 var page_count = Math.ceil(len / i) ;   //只要不是整数，就往大的方向取最小的整数
		 if( !$v_show.is(":animated") ){    //判断"视频内容展示区域"是否正在处于动画
			  if( page == page_count ){  //已经到最后一个版面了,如果再向后，必须跳转到第一个版面。
				$v_show.animate({ left : '0px'}, "slow"); //通过改变left值，跳转到第一个版面
				page = 1;
				}else{
				$v_show.animate({ left : '-='+v_width }, "slow");  //通过改变left值，达到每次换一个版面
				page++;
			 }
		 }	
   });
    //往前 按钮
    $("span.tpic_prev").click(function(){
	     var $parent = $(this).parents("div.team_small_pic");//根据当前点击元素获取到父元素
		 var $v_show = $parent.find("ul"); //寻找到"视频内容展示区域"
		 var $v_content = $parent.find("div.small_show"); //寻找到"视频内容展示区域"外围的DIV元素
		 var v_width = $v_content.width()+20;
		 var len = $v_show.find("li").length;
		 var page_count = Math.ceil(len / i) ;   //只要不是整数，就往大的方向取最小的整数
		 if( !$v_show.is(":animated") ){    //判断"视频内容展示区域"是否正在处于动画
		 	 if( page == 1 ){  //已经到第一个版面了,如果再向前，必须跳转到最后一个版面。
				$v_show.animate({ left : '-='+v_width*(page_count-1) }, "slow");
				page = page_count;
			}else{
				$v_show.animate({ left : '+='+v_width }, "slow");
				page--;
			}
		}
    });
	$("span.tpic_next").hover(function () {
        $(this).addClass("tpic_next_hover");
         },
        function () {
       $(this).removeClass("tpic_next_hover");
      });
	  $("span.tpic_prev").hover(function () {
        $(this).addClass("tpic_prev_hover");
         },
        function () {
       $(this).removeClass("tpic_prev_hover");
      });
});
// 团队风采文字
$(function(){
		var i=0;									//声明标识符记录点击次数
		var len = $(".teamp").length;			//获取操作P的个数
		$(".team_next").click(function(){		
				i+=2;							//递增步长为2
				$(".teamp:lt("+i+")").hide();	//小于标识符的全部隐藏
				$(".teamp:eq("+i+")").show();	//大于标识符1和2和显示
				$(".teamp:eq("+(i+1)+")").show();
				if(i >= len){					//当标识符大于操作p的个数时标识符归0重新计数
					i=0;
					//alert(i)
					$(".teamp").hide();			
					$(".teamp:eq("+i+")").show();
					$(".teamp:eq("+(i+1)+")").show();
				};
		});
		$(".team_prev").click(function(){
				//alert(i)
				$(".teamp:eq("+i+")").hide();
				$(".teamp:eq("+(i+1)+")").hide();
				$(".teamp:eq("+(i-1)+")").show();
				$(".teamp:eq("+(i-2)+")").show();
				i-=2;
				if(i<=0){
						i=0;
						$(".teamp:lt(2)").show();	
				};
		});
		
		//$("body").click(function(){
//			$("li:lt(5)").hide()	
//		})
});
