define(['gVerify'],function(gVerify){
	function registerInput(){
//---------------------------------用户名验证-----------------------------
		$('#username input').blur(function(){
			if(/^1+\d{10,10}/.test($('#username input').eq(0).val()) || /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test($('#username input').eq(0).val())){
				$('#code').css('display','block')
				$('#username').find('.inputBoxRight').html('')
				$('#username .inputText').css({border:'#dedede 1px solid',boxShadow:'0 0 0 0'})
			}else{
				if ($('#username input').eq(0).val().length > 25 || $('#username input').eq(0).val().length < 4 && $('#username input').eq(0).val() != "") {
					$('#username').find('.inputBoxRight').html('<span class="error">用户名长度应为4~25个字符</span>')
					$('#username .inputText').css({border:'red 1px solid',boxShadow:'0 0 0 0'})
				}else if($('#username input').eq(0).val() == "") {
					$('#username').find('.inputBoxRight').html('<span class="error">请输入手机号或者邮箱</span>')
					$('#username .inputText').css({border:'red 1px solid',boxShadow:'0 0 0 0'})
				}else{
					$('#username').find('.inputBoxRight').html('<span class="error">请输入正确的手机号或者邮箱</span>')
					$('#username .inputText').css({border:'red 1px solid',boxShadow:'0 0 0 0'})
				}
			}
		})
		$('#username input').focus(function(){
			$('#username').find('.inputBoxRight').html('请输入手机号或者邮箱')
			$('#username .inputText').css({border:'#9d003f 1px solid',boxShadow:'0 0 1px 0 #9d003f'})
		})
		
//---------------------------------验证码-----------------------------
		var verifyCode = new GVerify("codeImg");
		$("#code").find('a').eq(1).click(function(){
			verifyCode.refresh()
		})
		$('#canvasInput').blur(function(){
			if(verifyCode.validate($('#canvasInput').val())){
				$('#canvasInput').parent('.inputCode').css({border:'#dedede 1px solid',boxShadow:'0 0 0 0'});
			}else{
				$('#canvasInput').parent('.inputCode').css({border:'red 1px solid',boxShadow:'0 0 0 0'});
			}
		})
		$('#phoneCode').blur(function(){
			$('#phoneCode').parent('.inputCode').css({border:'#dedede 1px solid',boxShadow:'0 0 0 0'});
		})
		$('#code .inputCode').find('input').focus(function(evt){
			$(evt.target).parent('.inputCode').css({border:'#9d003f 1px solid',boxShadow:'0 0 1px 0 #9d003f'});
		})
//---------------------------------密码验证-----------------------------
		$('#password input').blur(function(){
			if ($('#password input').eq(0).val().length > 25 || $('#password input').eq(0).val().length < 4 && $('#password input').eq(0).val() != "") {
				$('#password').find('.inputBoxRight').html('<span class="error">密码的长度只能在6-25位之间！</span>')
				$('#password .inputText').css({border:'red 1px solid',boxShadow:'0 0 0 0'})
			}else if($('#password input').eq(0).val() == "") {
				$('#password').find('.inputBoxRight').html('<span class="error">请输入密码！</span>')
				$('#password .inputText').css({border:'red 1px solid',boxShadow:'0 0 0 0'})
			}else{
				$('#password').find('.inputBoxRight').html('')
				$('#password .inputText').css({border:'#dedede 1px solid',boxShadow:'0 0 0 0'})
			}
		})
		$('#password input').focus(function(){
			$('#password').find('.inputBoxRight').html('')
			$('#password .inputText').css({border:'#9d003f 1px solid',boxShadow:'0 0 1px 0 #9d003f'})
		})
//---------------------------------确认密码-----------------------------
		$('#passwordagain input').blur(function(){
			if ($('#passwordagain input').eq(0).val() != $('#password input').eq(0).val()) {
				$('#passwordagain').find('.inputBoxRight').html('<span class="error">两次密码输入不一致，请重新输入</span>')
				$('#passwordagain .inputText').css({border:'red 1px solid',boxShadow:'0 0 0 0'})
			}else if($('#passwordagain input').eq(0).val() == "") {
				$('#passwordagain').find('.inputBoxRight').html('<span class="error">请再次确认密码</span>')
				$('#passwordagain .inputText').css({border:'red 1px solid',boxShadow:'0 0 0 0'})
			}else{
				$('#passwordagain').find('.inputBoxRight').html('')
				$('#passwordagain .inputText').css({border:'#dedede 1px solid',boxShadow:'0 0 0 0'})
			}
		})
		$('#passwordagain input').focus(function(){
			$('#passwordagain').find('.inputBoxRight').html('')
			$('#passwordagain .inputText').css({border:'#9d003f 1px solid',boxShadow:'0 0 1px 0 #9d003f'})
		})
//---------------------------------邀请码-----------------------------

		$('#invitationCode input').blur(function(){
			if ($('#invitationCode input').eq(1).val() != 'invitationCode') {
				if ($('#invitationCode .inputText').css('display') == 'block') {
					$('#invitationCode').find('.inputBoxRight').html('<span class="error">请输入正确的邀请码！</span>')
					$('#invitationCode .inputText').css({border:'red 1px solid',boxShadow:'0 0 0 0'})
				}
			}else if($('#invitationCode input').eq(1).val() == "") {
				$('invitationCode').find('.inputBoxRight').html('<span class="error">请输入邀请码！</span>')
				$('#invitationCode .inputText').css({border:'red 1px solid',boxShadow:'0 0 0 0'})
			}else{
				$('#invitationCode').find('.inputBoxRight').html('')
				$('#invitationCode .inputText').css({border:'#dedede 1px solid',boxShadow:'0 0 0 0'})
			}
		})
		$('#invitationCode input').focus(function(){
			$('#invitationCode').find('.inputBoxRight').html('')
			$('#invitationCode .inputText').css({border:'#9d003f 1px solid',boxShadow:'0 0 1px 0 #9d003f'})
		})
		var isCheck = 0;
		$('#checkbox input').click(function(){
			isCheck++
			if( isCheck % 2 != 0){
				$('#invitationCode .inputText').css('display','block');
				$('#invitationCode .inputText').css({border:'#dedede 1px solid',boxShadow:'0 0 0 0'})
			}else{
				$('#invitationCode .inputText').css('display','none');
				$('invitationCode').find('.inputBoxRight').html('');
			}
		})
//		$.ajax({
//			type:"post",
//			url:"../",
//			async:true
//		});
		$("#button").click(function(){
//			alert(1)
			if($("#username input").eq(0).val()){
				var oUser = $("#username input").eq(0).val();
				var oPass = $("#password input").eq(0).val();
				$.ajax({
					type:"get",
					url:"../php/registerIndex.php",
					data:`username=${oUser}&password=${oPass}`,
					success:function(data){
						if(data == 0){
							alert('ok');
						}else if(data == 1){
							alert("注册成功!正在调转");
							window.open('../index.html',self);
						}else{
							alert("数据传输异常,请稍候再试,或联系管理员");
						}
					},
					error:function(e){
						alert(e)
						alert('ca')
					}
				})
			}else{
				alert("请输入用户名")
			}
		})
	}
	return {
		registerInput:registerInput
	}
})