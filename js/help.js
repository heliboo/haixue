//回答展开收起
function helpSwitch(){
	$("#helpMainCon .a-box:gt(0)").hide();
	$("#helpMainCon .q-box").find("span").click(function() {
		var sibAbox=$(this).parent().siblings(".a-box");
        if(sibAbox.css("display")=="none"){
			sibAbox.slideDown();
		}else{
			sibAbox.slideUp();
		};
    });
	$(".a-up").click(function() {
        $(this).parents(".a-box").slideUp();
    });
};
$(document).ready(function() {
    helpSwitch();
});






