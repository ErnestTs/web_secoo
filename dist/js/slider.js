define(function(){
	function slider(){
		$('#slider').mouseover(function(){
			$(".arr").css('opacity','0.5');
		});
		$('#slider').mouseout(function(){
			$(".arr").css('opacity','0');
		});
		$.ajax({
			url:'../data/slider.json',
			type:'GET',
			success:function(data){
				var count = 0;
				for(var i=0;i < data.length;i++){
					$('#slider').append(`<a href='#'><img src='../${data[i]}' id='banner${i}'></a>`);
					$('#slider').find('img').css('opacity','0')
					$(`#banner0`).css({opacity:1});
				}
				function timerInner(){
					count++
					if(count>5){
						count = 0;
					}
					//图片切换
					if(count == 0){
						$(`#banner5`).animate({opacity:0},300).css('zIndex','0');
					}else{
						$(`#banner${count-1}`).animate({opacity:0},300).css('zIndex','0');
					}
					$(`#banner${count}`).animate({opacity:1},300).css('zIndex','1');
					//button切换
					$('#bannerButton span').removeClass('activeBtn',300);
					$('#bannerButton span').eq(count).addClass('activeBtn',300);
				}
				var timer = setInterval(timerInner,3000);
				$('#slider').hover(function(){
					clearInterval(timer);
				},function(){
					timer = setInterval(timerInner,3000)
				})
				//点击箭头切换
				$('#arrLeft').click(function(){
					count--
					if(count<0){
						count = 5;
					}
					$(`#banner${count+1}`).animate({opacity:0},300).css('zIndex','0');
					$(`#banner${count}`).animate({opacity:1},300).css('zIndex','1');
					//button切换
					$('#bannerButton span').removeClass('activeBtn',300);
					$('#bannerButton span').eq(count).addClass('activeBtn',300);
					
				})
				$('#arrRight').click(function(){
					count++
					if(count>5){
						count = 0;
						$(`#banner5`).animate({opacity:0},300).css('zIndex','0');
					}else{
						$(`#banner${count-1}`).animate({opacity:0},300).css('zIndex','0');
					}
					$(`#banner${count}`).animate({opacity:1},300).css('zIndex','1');
					//button切换
					$('#bannerButton span').removeClass('activeBtn',300);
					$('#bannerButton span').eq(count).addClass('activeBtn',300);
				});
				//点击button切换
				$('#bannerButton').click(function(evt){
					var target = evt.target;
					if(target.nodeName.toLowerCase() == 'span'){
						var lastCount = count;
						count = $(target).index();
						$(`#banner${lastCount}`).animate({opacity:0},300).css('zIndex','0');
						$(`#banner${count}`).animate({opacity:1},300).css('zIndex','1');
						//button切换
						$('#bannerButton span').removeClass('activeBtn',300);
						$('#bannerButton span').eq(count).addClass('activeBtn',300);
					}
				})
				$('#bannerButton span').hover(function(){
					clearInterval(timer);
				},function(){
					timer = setInterval(timerInner,3000)
				})
			}
		})
	}
	return{
		slider:slider
	}
})