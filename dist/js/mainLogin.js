require.config({
	paths:{
		loginInput:'loginInput'
	}
})

define(['loginInput'],function(loginInput){
	function mainLogin(){
		loginInput.loginInput()
	}
	return {
		mainLogin:mainLogin
	}
})