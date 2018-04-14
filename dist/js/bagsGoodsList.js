define(['shoppingCart'],function(shoppingCart){
	function bagsGoodsList(){
		$.ajax({
			type:"get",
			url:"../data/bagsGoodsList.json",
			async:true,
			success:function(data){
//				shoppingCart.shoppingCart();
				for (var i=0; i < data.length; i++) {
					$('#goodsListBody .theBox').append(`
						<dl>
							<div class='hovBox'>
								<dt>
									<a href="#">
										<img src='${data[i].src[0]}' class='mainImg'>
										<div class='tags cl'></div>
									</a>
								</dt>
								<dd>
									<h4><a href="#">${data[i].name}</a></h4>
								</dd>
								<dd>
									<h5><a href="#">${data[i].price}</a></h45>
								</dd>
								<dd class='addButton cl'>
									<span class='addShoppingBag' id='${data[i].goodsNo}'>加入购物车</span>
									<span class='collect'>收藏</span>
								</dd>
							</div>
						</dl>
					`)
//-------------------------购物车----------------------------					
					$('.addButton').eq(i).click(function(evt){
						var id = $(evt.target).attr('id');
						var first = $.cookie("goods") == null ? true : false;
						if(first){
							$.cookie("goods", '[{id:' + id + ',num:1}]', {
								expires: 7,
								path:'/'});
						}else{
							var str = $.cookie("goods");
							var arr = eval(str);
							var same = false; 
							for(var i in arr){
								if(arr[i].id == id){
									arr[i].num = arr[i].num + 1;
									var cookieStr = JSON.stringify(arr);
									$.cookie("goods", cookieStr,  {
										expires: 7,
										path:'/'});
									same = true;
									break;
								}
							}
			
							//没有相同的商品
							if(!same){
								var obj = {id: id, num: 1};
								arr.push(obj);
								var cookieStr = JSON.stringify(arr);
								$.cookie("goods", cookieStr, {
									expires: 7,
									path:'/'});
							}
						}
						sc_car()
					})
//-------------------------购物车----------------------------
					//小图判断
					if(data[i].src.length>1){
						$('#goodsListBody dl').eq(i).find('.hovBox dt img').after(`
							<ul class='thumb cl'></ul>
						`);
						var offWidth = data[i].src.length*0.55
						$('#goodsListBody dl').eq(i).find('ul').css({width:`${offWidth}rem`})
						for(var k = 0; k < data[i].src.length; k++){
							$('#goodsListBody dl').eq(i).find('.hovBox dt .thumb').append(`
								<li>
									<img src='${data[i].src[k]}'>
									<div class='corner1 corner'></div>
									<div class='corner2 corner'></div>
									<div class='corner3 corner'></div>
									<div class='corner4 corner'></div>
								</li>
							`)
						}
					}
					//tag
					for (var j=0; j < data[i].tag.length; j++){
						$('#goodsListBody dl').eq(i).find('.hovBox dt .tags').append(`<span>${data[i].tag[j]}</span>`)
					}
					$('#goodsListBody dl').eq(i).find('.hovBox dt div span').css({background:'#e93b39'});
					$('#goodsListBody dl').eq(i).find('.hovBox dt div span').eq(0).css({background:'#000'});
				}
				$('#goodsListBody dl').eq(0).find('a').attr('href','goods.html');
				
				
//---------------------------------------------------外层dl hov层-------------------------------------------------
				$('#goodsListBody').css({padding:'0.3rem 0.2rem 0.02rem 0.2rem'});
				$('#goodsListBody dl').css({float:'left',width:'2.68rem',height:'3.65rem',textAlign:'center',position:'relative',margin:'0 0.09rem',marginBottom:'0.54rem',border:'0.02rem solid #fff'});
				$('.hovBox').css({position:'absolute',left:0,top:0,width:'2.68rem',border:'0.02rem solid #fff'});
				$('#goodsListBody dl .hovBox').hover(function(evt){
					$(this).css({border:'0.02rem solid #ededed',zIndex:'99',background:'#fff'});
					$(this).find('.addButton').css({display:'block'})
					$(this).find('.thumb').css({display:'block'})
				},function(){
					$(this).css({border:'0.02rem solid #fff',zIndex:'0'});
					$(this).find('.addButton').css({display:'none'})
					$(this).find('.thumb').css({display:'none'})
				})
//---------------------------------------------------内层结构-------------------------------------------------
				$('#goodsListBody dl div dt').css({position:'relative'});
				$('#goodsListBody dl div dt img').css({width:'100%',height:'100%'});
				$('#goodsListBody dl div dt .tags').css({width:'2.4rem',margin:'auto'});
				$('#goodsListBody dl div dt span').css({display:'inline-block',width:'0.32rem',height:'0.16rem',lineHeight:'0.16rem',textAlign:'center',color:'#fff',float:'left',marginRight:'0.03rem'});
				$('#goodsListBody dl div dd').css({width:'2.4rem',margin:'auto'});
				$('#goodsListBody dl div dd h4').css({textAlign:'left',fontWeight:'normal',marginTop:'0.1rem',paddingTop:'0.08rem',borderTop:'1px solid #ccc',height:'0.28rem',lineHeight:'0.14rem',overflow:'hidden'});
				$('#goodsListBody dl div dd h5').css({textAlign:'left',marginBottom:'0.1rem'});
//---------------------------------------------------隐藏结构-------------------------------------------------
				$('#goodsListBody dl div .addButton').css({marginBottom:'0.18rem',display:'none'})
				$('#goodsListBody dl div .addButton span').css({float:'left',display:'inline-block',background:'#e93b39',color:'#fff',padding:'0 0.03rem'});
				$('#goodsListBody dl div .addButton .collect').css({float:'right',color:'#999',background:'#fff'})
//---------------------------------------------------隐藏小图及其变化-------------------------------------------------
				$('.thumb').css({height:'0.52rem',textAlign:'center',margin:'auto',display:'none',marginBottom:'0.1rem',marginTop:'0.1rem'})
				$('.thumb li').css({float:'left',width:'0.5rem',height:'0.5rem',marginLeft:'0.03rem',border:'0.01rem solid #fff',position:'relative'}).hover(function(){
					$(this).css({border:'0.01rem solid #fdfdfd'});
					$(this).find('.corner').css({display:'block'});
					var oSrc = $(this).find('img').attr('src');
					$(this).parents('dl').find('.mainImg').attr('src',`${oSrc}`);
				},function(){
					$(this).css({border:'0.01rem solid #fff'});
					$(this).find('.corner').css({display:'none'})
				})
				$('.thumb li').find('.corner').css({width:'0.04rem',height:'0.04rem',position:'absolute',zIndex:'7',display:'none'});
				$('.thumb li').find('.corner1').css({left:0,top:0,borderTop:'0.01rem solid #000',borderLeft:'0.01rem solid #000'});
				$('.thumb li').find('.corner2').css({right:0,top:0,borderTop:'0.01rem solid #000',borderRight:'0.01rem solid #000',});
				$('.thumb li').find('.corner3').css({right:0,bottom:0,borderBottom:'0.01rem solid #000',borderRight:'0.01rem solid #000'});
				$('.thumb li').find('.corner4').css({left:0,bottom:0,borderBottom:'0.01rem solid #000',borderLeft:'0.01rem solid #000'});
				$('.thumb li img').css({width:'100%',height:'100%'})
			}
		});
//-----------------------------search栏-----------------------------------
		$.ajax({
			url:'../data/search.json',
			success:function(data){
				$('#goodsSearch input').attr('placeholder',data)
			}
		})
		$('#goodsSearch').css({width:'7.05rem',margin:'auto',marginBottom:'0.4rem'})
		$('#goodsSearch').find('input').css({textIndent:'0.1rem',width:'6.32rem',height:'0.31rem',border:'0.02rem solid #463b7f',float:'left'})
		$('#goodsSearch').find('a').css({color:'#fff',width:'0.6rem',height:'0.35rem',lineHeight:'0.35rem',textAlign:'center',display:'inline-block',background:'#594d9a',float:'left'})
	

//-----------------------------doULike栏-----------------------------------
		$('#likeClose').click(function(){
			$("#doULike").css({display:'none'})
		})
	}
	return {
		bagsGoodsList:bagsGoodsList
	}
})