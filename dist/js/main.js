require.config({
	paths:{
		nav:'nav',
		slider:'slider',
		webBody:'webBody',
		subSlider:'subSlider',
		search:'search',
//		shoppingCart:'shoppingCart'
	}
})

define(['nav','slider','webBody','subSlider','search'],function(nav,slider,webBody,subSlider,search){
	function main(){
		sc_car();
		nav.nav();
		slider.slider();
		webBody.webBody();
		subSlider.subSlider();
		search.search();
//		shoppingCart.shoppingCart();
		function sc_car(){
			var sc_str = $.cookie("goods");
			if(sc_str){
				var sc_arr = eval(sc_str);
				var sc_num = 0;
				for(var i in sc_arr){
					sc_num = Number(sc_arr[i].num) + sc_num;
				}
				$("#numSc").html(`(${sc_num})`);
			}
		}
	}
	return {
		main:main
	}
})