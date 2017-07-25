$(function() {
	//全选 
	$("#btn1").click(function() {
		$("input[name='checkbox']").attr("checked", true);
	})
	//取消全选 
	$("#btn2").click(function() {
		$("input[name='checkbox']").attr("checked",false);
	})
	//反选 
	$("#btn4").click(function() {
		$("input[name='checkbox']").each(function() {
			$(this).attr("checked",!$(this).attr("checked"));
		})
	})

	//下拉
	$(".menu1").hover(function() {
		$("#showList1").stop(true).slideDown(100);
	}, function() {
		$("#showList1").stop(true).slideUp(100);
	})
	
	$(".menu2").hover(function() {
		$("#showList2").stop(true).slideDown(100);
	}, function() {
		$("#showList2").stop(true).slideUp(100);
	})
	
	$(".menu3").hover(function() {
		$("#showList3").stop(true).slideDown(100);
	}, function() {
		$("#showList3").stop(true).slideUp(100);
	})
	
	$(".menu4").hover(function() {
		$("#showList4").stop(true).slideDown(100);
	}, function() {
		$("#showList4").stop(true).slideUp(100);
	})
	
	
	$(".searchTxt").click(function(){
		$(".list").toggle()
	})
	
	$(".list a").click(function(){
		$(".searchTxt").html($(this).html());
	})
	
	
//选项卡
	function fnTab(obj,even){
		var box=document.getElementById(obj);
		var anniu=box.getElementsByClassName('anniu');
		var content=box.getElementsByClassName('kaxiang');
		
		for(var i=0;i<anniu.length;i++){
			anniu[i].index=i;
			anniu[i][even]=function(){
				for(var i=0;i<anniu.length;i++){
					anniu[i].className='';
					content[i].className='';
				}
				this.className='active';
				content[this.index].className='show';	
			};	
		}
	}	
	window.onload=function(){
		fnTab('box1','onmouseover');
	};



//	$(".zuoshang1").css({"borderTop":"3px solid #F60", "background":"#FFF"});
//	$(".zuoshang1").mouseover(function(){
//		$(".zuoshang1-1").show();
//		$(".zuoshang2-2").hide();
//		$(".zuoshang3-3").hide();
//		$(".zuoshang4-4").hide();
//		$(this).css({"borderTop":"3px solid #F60", "background":"#FFF"});
//		$(".zuoshang2").css({"background":"#F8F8F8","border":"none"});
//		$(".zuoshang3").css({"background":"#F8F8F8","border":"none"});
//		$(".zuoshang4").css({"background":"#F8F8F8","border":"none"});
//	})
//	$(".zuoshang2").mouseover(function(){
//		$(".zuoshang1-1").hide();
//		$(".zuoshang2-2").show();
//		$(".zuoshang3-3").hide();
//		$(".zuoshang4-4").hide();
//		$(this).css({"borderTop":"3px solid #f60","backgroundColor":"#FFF"});
//		$(".zuoshang1").css({"background":"#F8F8F8","border":"none"});
//		$(".zuoshang3").css({"background":"#F8F8F8","border":"none"});
//		$(".zuoshang4").css({"background":"#F8F8F8","border":"none"});
//	})
//	$(".zuoshang3").mouseover(function(){
//		$(".zuoshang1-1").hide();
//		$(".zuoshang2-2").hide();
//		$(".zuoshang3-3").show();
//		$(".zuoshang4-4").hide();
//		$(this).css({"borderTop":"3px solid #f60","backgroundColor":"#FFF"});
//		$(".zuoshang1").css({"background":"#F8F8F8","border":"none"});
//		$(".zuoshang2").css({"background":"#F8F8F8","border":"none"});
//		$(".zuoshang4").css({"background":"#F8F8F8","border":"none"});
//	})
//	$(".zuoshang4").mouseover(function(){
//		$(".zuoshang1-1").hide();
//		$(".zuoshang2-2").hide();
//		$(".zuoshang3-3").hide();
//		$(".zuoshang4-4").show();
//		$(this).css({"borderTop":"3px solid #f60","backgroundColor":"#FFF"});
//		$(".zuoshang1").css({"background":"#F8F8F8","border":"none"});
//		$(".zuoshang2").css({"background":"#F8F8F8","border":"none"});
//		$(".zuoshang3").css({"background":"#F8F8F8","border":"none"});
//	})
	
	
//	$(".zhong-shang1").css({"borderTop":"3px solid #f60","backgroundColor":"#FFF"});
//	$(".zhong-shang1").mouseover(function(){
//		$(this).css({"borderTop":"3px solid #f60","backgroundColor":"#FFF"});
//		$(".zhong-shang2").css({"background":"#F8F8F8","border":"none"});
//	})
//	$(".zhong-shang2").mouseover(function(){
//		$(this).css({"borderTop":"3px solid #f60","backgroundColor":"#FFF"});
//		$(".zhong-shang1").css({"background":"#F8F8F8","border":"none"});
//	})
//	
//	
//	$(".zhong-center1").css({"borderTop":"3px solid #f60","backgroundColor":"#FFF"});
//	$(".zhong-center1").mouseover(function(){
//		$(this).css({"borderTop":"3px solid #f60","backgroundColor":"#FFF"});
//		$(".zhong-center2").css({"background":"#F8F8F8","border":"none"});
//		$(".zhong-center3").css({"background":"#F8F8F8","border":"none"});
//	})
//	$(".zhong-center2").mouseover(function(){
//		$(this).css({"borderTop":"3px solid #f60","backgroundColor":"#FFF"});
//		$(".zhong-center1").css({"background":"#F8F8F8","border":"none"});
//		$(".zhong-center3").css({"background":"#F8F8F8","border":"none"});
//	})
//	$(".zhong-center3").mouseover(function(){
//		$(this).css({"borderTop":"3px solid #f60","backgroundColor":"#FFF"});
//		$(".zhong-center1").css({"background":"#F8F8F8","border":"none"});
//		$(".zhong-center2").css({"background":"#F8F8F8","border":"none"});
//	})
//	
//	$(".zhong-center4").css({"borderTop":"3px solid #f60","backgroundColor":"#FFF"});
//	$(".zhong-center4").mouseover(function(){
//		$(this).css({"borderTop":"3px solid #f60","backgroundColor":"#FFF"});
//		$(".zhong-center5").css({"background":"#F8F8F8","border":"none"});
//		$(".zhong-center6").css({"background":"#F8F8F8","border":"none"});
//	})
//	$(".zhong-center5").mouseover(function(){
//		$(this).css({"borderTop":"3px solid #f60","backgroundColor":"#FFF"});
//		$(".zhong-center4").css({"background":"#F8F8F8","border":"none"});
//		$(".zhong-center6").css({"background":"#F8F8F8","border":"none"});
//	})
//	$(".zhong-center6").mouseover(function(){
//		$(this).css({"borderTop":"3px solid #f60","backgroundColor":"#FFF"});
//		$(".zhong-center4").css({"background":"#F8F8F8","border":"none"});
//		$(".zhong-center5").css({"background":"#F8F8F8","border":"none"});
//	})
})