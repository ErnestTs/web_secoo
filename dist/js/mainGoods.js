require.config({
	nav:'nav',
	search:'search',
	goodsInfo:'goodsInfo',
//	shoppingCart:'shoppingCart'
})

define(['nav','search','goodsInfo'],function(nav,search,goodsInfo){
	function mainGoods(){
		nav.nav();
		search.search();
		goodsInfo.goodsInfo();
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
		sc_car()
	}
	return {
		mainGoods:mainGoods
	}
})