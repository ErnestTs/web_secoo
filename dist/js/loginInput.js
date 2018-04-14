define(['gVerify'],function(gVerify){
	function loginInput(){
//---------------------------------登录方式切换-----------------------------
		$('#loginTittle').click(function(evt){
			var e = evt||window.event;
			var target = e.target || window.event.srcElement;
			if (target.nodeName.toLowerCase()=='li') {
				$('#loginTittle li').removeClass('isCheck');
				$(target).addClass('isCheck');
			}
			if($('#loginTittle li').eq(0).attr('class')){
				$('#QRLogin').css('display','block');
				$('#classicLogin').css('display','none');
			}
			if($('#loginTittle li').eq(1).attr('class')){
				$('#classicLogin').css('display','block');
				$('#QRLogin').css('display','none');
			}
		})
//---------------------------------二维码效果-----------------------------
		$('#QRCode').hover(function(){
			$('#QRCodeImg').stop().animate({left:'0',width:'1.36rem'},300);
			$('#howToUse').stop().animate({opacity:'1'},300)
		},function(){
			$('#QRCodeImg').stop().animate({left:'0.58rem',width:'1.92rem'},300);
			$('#howToUse').stop().animate({opacity:'0'},300)
		})


//---------------------------------用户名-----------------------------
		$('#username input').focus(function(){
			$('#username').css({border:'#ffad77 solid 1px',boxShadow:'0 1px 1px rgba(0, 0, 0, .075), 0 0 5px rgba(240, 127, 5, .4)'});
			verifyCode.refresh()
		}).blur(function(){
			$('#username').css({border:'#dedede solid 1px',boxShadow:'0 0 0 0'});
		})
//---------------------------------密码-----------------------------
		$('#password input').focus(function(){
			$('#password').css({border:'#ffad77 solid 1px',boxShadow:'0 1px 1px rgba(0, 0, 0, .075), 0 0 5px rgba(240, 127, 5, .4)'});
			$('#canvasCode').css({display:'block'});
			verifyCode.refresh()
		}).blur(function(){
			$('#password').css({border:'#dedede solid 1px',boxShadow:'0 0 0 0'});
		})
//---------------------------------验证码-----------------------------
		var verifyCode = new GVerify("codeImg");
		$("#canvasCode").find('a').eq(1).click(function(){
			verifyCode.refresh()
		})
		$('#canvasInput').blur(function(){
			if(verifyCode.validate($('#canvasInput').val())){
				$('#canvasInput').parent('.inputText').css({border:'#dedede 1px solid',boxShadow:'0 0 0 0'});
			}else{
				$('#canvasInput').parent('.inputText').css({border:'red 1px solid',boxShadow:'0 0 0 0'});
			}
		})
		$('#canvasInput').focus(function(evt){
			$(evt.target).parent('.inputText').css({border:'#ffad77 solid 1px',boxShadow:'0 1px 1px rgba(0, 0, 0, .075), 0 0 5px rgba(240, 127, 5, .4)'});
		})
	}
	return {
		loginInput:loginInput
	}
})