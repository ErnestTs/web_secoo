define(function(){
	function bagsGoodsFixNav(){
		$('#checkBoxGroup').click(function(evt){
			if($(evt.target).parent().find('input').attr('checked')){
				$(evt.target).parent().find('input').removeAttr('checked');
			}else{
				$(evt.target).parent().find('input').attr('checked','checked');
			}
		});
		$("#goodsNav").css({position:'relative'})
		var oFixNav = document.getElementById('fixNav');
		var pos = 0;
		window.onload = function(){
			$(oFixNav).css({position:'absolute',top:0,zIndex:'9999'})
		}
		document.onscroll= function(){
			pos = $('#goodsNav').offset().top;
			if(pos <= $(document).scrollTop()){
				$(oFixNav).css({position:'fixed',top:'0',zIndex:'9999'})
			}
			if(pos > $(document).scrollTop()){
				$(oFixNav).css({position:'absolute',top:0,zIndex:'9999'})
			}
		}
	}
	return {
		bagsGoodsFixNav:bagsGoodsFixNav
	}
})