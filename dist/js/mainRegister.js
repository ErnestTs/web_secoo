require.config({
	paths:{
		nav:'nav',
		registerInput:'registerInput'
	}
})

define(['nav','registerInput'],function(nav,registerInput){
	function mainRegister(){
		nav.nav()
		registerInput.registerInput()
	}
	return {
		mainRegister:mainRegister
	}
})