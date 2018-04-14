define(function(){
	function subSlider(){
		$.ajax({
			type:"get",
			url:"../data/subSilder.json",
			success:function(data){
				for(var i = 0 ; i < 4 ; i++){
					$("#subSlider").append('<li></li>')
					for (var j = 0; j < data[i].length; j++ ){
						$("#subSlider li").eq(i).append(`<a href='#'><div class='sublike'><img src='../images${data[i][j].src}'></div><h4>${data[i][j].title}</h4><h4>${data[i][j].price}</h4></a>`);
					}
					$("#subSlider").find('li').css({left:"100%",width:"14.2rem"})
					$("#subSlider li").find('a').css({float:'left',marginRight:'1.06rem',width:'2.2rem'})
				}
				$("#subSlider li").eq(0).css({left:'0'})
				var count = 4;
				function timerInner(){
					count++
					$("#subSlider li").eq(count%4).css({left:'100%'}).stop().animate({left:'0'},500)
					$("#subSlider li").eq(count%4-1).stop().animate({left:'-100%'},500)
					//btn
					$('#subSliderButton span').removeClass('activeBtn',500);
					$('#subSliderButton span').eq(count%4).addClass('activeBtn',500);
				}
				//btn
				$('#subSliderButton').click(function(evt){
					var target = evt.target;
					if(target.nodeName.toLowerCase() == 'span'){
						var lastCount = count;
						count = $(target).index()+4;
						if(lastCount%4 < count%4){
							$("#subSlider li").eq(count%4).css('left','100%').animate({left:'0'},500)
							$("#subSlider li").eq(lastCount%4).stop().animate({left:'-100%'},500)
						}else if(lastCount%4 == count%4){
							$("#subSlider li").eq(count%4).css({left:'0'});
						}else{
							$("#subSlider li").eq(count%4).css('left','-100%').animate({left:'0'},500)
							$("#subSlider li").eq(lastCount%4).stop().animate({left:'100%'},500)
						}
						//button切换
						$('#subSliderButton span').removeClass('activeBtn',500);
						$('#subSliderButton span').eq(count%4).addClass('activeBtn',500);
					}
				})
				$(".arrSS").eq(1).click(function(evt){
						count++
						$("#subSlider li").eq(count%4).css('left','100%').stop().animate({left:'0'},500)
						$("#subSlider li").eq(count%4 - 1).stop().animate({left:'-100%'},500)
					//button切换
					$('#subSliderButton span').removeClass('activeBtn',500);
					$('#subSliderButton span').eq(count%4).addClass('activeBtn',500);
				
				})
				$(".arrSS").eq(0).click(function(evt){
					count--
					if(count==0){
						count = 4;
					}
					$("#subSlider li").eq(count%4).css('left','-100%').stop().animate({left:'0'},500);
					$("#subSlider li").eq((count%4 + 1)%4).stop().animate({left:'100%'},500)
					//button切换
					$('#subSliderButton span').removeClass('activeBtn',500);
					$('#subSliderButton span').eq(count%4).addClass('activeBtn',500);
				
				})
				
				timer = setInterval(timerInner,2000);
				$("#subSlider").hover(function(){clearInterval(timer)},function(){timer=setInterval(timerInner,2000)})
				$("#subSliderButton span").hover(function(){clearInterval(timer)},function(){timer=setInterval(timerInner,2000)})
				$(".arrSS").eq(0).hover(function(){clearInterval(timer)},function(){timer=setInterval(timerInner,2000)})
				$(".arrSS").eq(1).hover(function(){clearInterval(timer)},function(){timer=setInterval(timerInner,2000)})
				
				for(var i = 0 ; i < $('.sublike').length;i++){
					$('.sublike').eq(i).css({position:'relative',zIndex:'9'}).append(`<div class='bortop'></div><div class='borright'></div><div class='borbottom'></div><div class='borleft'></div>`)
					$('.sublike').eq(i).find('div').css({position:'absolute'})
					$('.bortop').css({left:'0',top:'0',height:'2px',width:'0',backgroundColor:'black',opacity:'0.5'})
					$('.borright').css({right:'0',bottom:'0',width:'2px',height:'0',backgroundColor:'black',opacity:'0.5'})
					$('.borbottom').css({bottom:'0',right:'0',height:'2px',width:'0',backgroundColor:'black',opacity:'0.5'})
					$('.borleft').css({left:'0',top:'0',width:'2px',height:'0',backgroundColor:'black',opacity:'0.5'})
					$('.sublike').eq(i).hover(
						function(){
							$(this).find('.bortop').eq(0).animate({width:'100%'},300);	
							$(this).find('.borbottom').eq(0).animate({width:'100%'},300);
							$(this).find('.borright').eq(0).animate({height:'100%'},300);	
							$(this).find('.borleft').eq(0).animate({height:'100%'},300);
						},function(){
							$(this).find('.bortop').eq(0).animate({width:0},300);	
							$(this).find('.borbottom').eq(0).animate({width:0},300);
							$(this).find('.borright').eq(0).animate({height:0},300);
							$(this).find('.borleft').eq(0).animate({height:0},300);
						}
					)
				}
			}
		})
	}
	return {
		subSlider:subSlider
	}
})
 