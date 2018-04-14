require.config({
	nav:'nav',
	search:'search',
	selectCondition:'selectCondition',
	bagsGoodFixNav:'bagsGoodsFixNav',
	bagsGoodsList:'bagsGoodsList',
	shoppingCart:'shoppingCart'
})

define(['nav','search','selectCondition','bagsGoodsFixNav','bagsGoodsList'],function(nav,search,selectCondition,bagsGoodsFixNav,bagsGoodsList){
	function mainBags(){
		nav.nav();
		search.search();
		selectCondition.selectCondition();
		bagsGoodsFixNav.bagsGoodsFixNav();
		bagsGoodsList.bagsGoodsList();
//		shoppingCart.shoppingCart()
		function sc_car(){
			var sc_str = $.cookie("goods");
			if(sc_str){ //判断字符串是否存在
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
		mainBags:mainBags
	}
})