define(function(){
	function goodsInfo(){
		$.ajax({
			url:'../data/goodsInfo.json',
			success:function(data){
//---------------------------左侧图片展示--------------------------------------
				$("#infoLeft").append(`
					<dl>
						<div id='mo'></div>
						<dd>
						</dd>
						<dt>
							<img src='${data.src[0]}'>
						</dt>
						<div id='putOut'>
							<img src='${data.src[0]}' id='oImg'>
						</div>
					</dl>
				`)
				$("#infoLeft").css({height:'4rem',border:'0.01rem solid #ededed',position:'relative'});
				$("#infoLeft dt").css({height:'4rem',width:'4rem',position:'relative'})
				$("#infoLeft dt").find('img').css({height:'100%'});
				$("#infoLeft dt").css({float:'left'});
				$("#infoLeft dd").css({float:'left',height:'4rem',width:'0.8rem',borderRight:'0.01rem solid #ededed',position:'relative'});
				for(var i = 0 ; i < data.src.length;i++){
					$("#infoLeft dd").append(`
						<div class='thumb'>
							<img src='${data.src[i]}'>
							<div class='corner corner1'></div>
							<div class='corner corner2'></div>
							<div class='corner corner3'></div>
							<div class='corner corner4'></div>
						</div>
					`)
				};
				$("#infoLeft dd .thumb").css({width:'0.8rem',height:'0.79rem',position:'relative'});
				$('#infoLeft dd ').find('.corner').css({width:'0.04rem',height:'0.04rem',position:'absolute',zIndex:'7',display:'none'});
				$('#infoLeft dd ').find('.corner1').css({left:0,top:0,borderTop:'0.02rem solid #554993',borderLeft:'0.02rem solid #554993'});
				$('#infoLeft dd ').find('.corner2').css({right:0,top:0,borderTop:'0.02rem solid #554993',borderRight:'0.02rem solid #554993',});
				$('#infoLeft dd ').find('.corner3').css({right:0,bottom:0,borderBottom:'0.02rem solid #554993',borderRight:'0.02rem solid #554993'});
				$('#infoLeft dd ').find('.corner4').css({left:0,bottom:0,borderBottom:'0.02rem solid #554993',borderLeft:'0.02rem solid #554993'});
				$('#infoLeft dd .thumb img').css({width:'100%',height:'100%'});
				$("#infoLeft dd .thumb").hover(function(){
					var oSrc = $(this).find('img').attr('src');
					$(this).find('.corner').css({display:'block'});
					$(this).parents('dl').find('dt img').attr('src',`${oSrc}`);
					$('#putOut img').attr('src',`${oSrc}`);
				},function(){
					$(this).find('.corner').css({display:'none'});
				})
//-----------------------------放大镜------------------------------
				$('#putOut').css({background:'#fff',overflow:'hidden',display:'none',zIndex:'123456',width:'4.6rem',height:'4rem',position:'absolute',top:'-0.01',right:'-5rem',border:'0.01rem solid #ededed'})
				$('#putOut img').css({position:'absolute',zIndex:'-999',top:'0',left:'0'})
				$('#mo').css({height:'4rem',width:'4rem',position:'absolute',zIndex:'777',left:'0.8rem'})
				var oBox = document.createElement('div');
				$(oBox).css({
					width:100,
					height:100,
					background:'#fff',
					opacity:0.4,
					position: 'absolute',
					zIndex:888888888888888,
				})
				$("#mo").mouseover(function(evt){
//					alert(1)
						$('#putOut').css('display','block');
				}).mouseout(function(evt){
						$('#putOut').css('display','none');
				})
				.mousemove(function(evt){
						var ol = (-1*evt.clientX+302)/100;
						var ot = (-1*evt.clientY+186)/100;
						$('#oImg').css('left',`${ol}rem`);
						$('#oImg').css('top',`${ot}rem`);
//						document.title=$('#oImg').offset().top;
					})
//---------------------------右侧--------------------------------------
				$("#infoRight").append(`
					<h3>${data.name}</h3>
					<div id='price'>
						<h4 id='much'>
							<span>一口价
							$</span>
							${data.price}
						</h4>
						<p>
							<span class='goodsCheckTitle'>发货地</span>
							<span id='madeIn'>${data.madeIn}</span>
							<span>有货</span>
							<span>预计7-20个工作日内送达</span>
						</p>
						<p>
							<span class='goodsCheckTitle'>温馨提示</span>
							<span id='ps'>本商品无质量问题不支持退换货</span>
						</p>
					</div>
					<div id='checkgroup'>
						<div class='cl'>
							<span class='goodsCheckTitle'>颜色</span>
							<ul id='checkColor' class='cl'></ul>
						</div>
						<div class='cl'>
							<span class='goodsCheckTitle'>尺寸 </span>
							<ul id='checkSize' class='cl'></ul>
						</div>
						<div class='cl'>
							<span class='goodsCheckTitle'>购买数量</span>
							<ul id='checkNum' class='cl'>
								<li class='cl'>
									<div>-</div>
									<input type='text'>
									<div>+</div>
								</li>
							</ul>
						</div>
						<div class='cl buyGroup'>
							<div class='buyButton'></div>
							<div class='buyButton'></div>
						</div>
					</div>
				`)
				$("#infoRight").css({marginLeft:'0.3rem',width:'6rem',listStyle:'none'})
				$("#infoRight h3").css({fontSize:'0.16rem',lineHeight:'0.24rem',fontWeight:'normal',width:'4.5rem',paddingLeft:'0.2rem',paddingRight:'1.25rem',paddingBottom:'0.2rem',borderBottom:'1px dotted #999'});
				$("#infoRight #price").css({width:'4.5rem',paddingLeft:'0.2rem',paddingRight:'1.25rem',paddingBottom:'0.2rem',borderBottom:'1px dotted #999'});
				
				$("#infoRight #price h4").css({color:'#e93a38',fontSize:'0.28rem',marginBottom:'0.08rem'})
				$("#infoRight #price h4	 span").css({marginTop:'0.28rem',display:'inline-block',fontSize:'0.18rem',fontWeight:'normal'});
				$("#infoRight #price p span").css({lineHeight:'0.34rem',fontSize:'0.12rem',color:'#999'});
				$("#infoRight #price p #madeIn").css({lineHeight:'0.34rem',fontSize:'0.12rem',color:'#7e68b3'});
				$("#infoRight #price p #ps").css({lineHeight:'0.34rem',fontSize:'0.12rem',color:'#666'});
				
				
				
				
				
				
				$("#infoRight #checkgroup").find('div').css({height:'0.35rem',paddingTop:'0.17rem'})
				$("#infoRight #checkgroup").css({fontWeight:'normal',width:'4.5rem',paddingLeft:'0.2rem',paddingRight:'1.25rem',paddingBottom:'0.2rem'});
				$("#infoRight #checkgroup span").css({lineHeight:'0.34rem',fontSize:'0.12rem',color:'#666',float:'left'});
				
				
				
				for(var i = 0;i < data.checkGroupColor.length;i++){
					$('#checkColor').append(`
						<li>
							<img src='${data.checkGroupColor[i]}'>
							<div class='isCheck'></div>
						</li>`)
				}
				for(var i = 0;i < data.checkGroupSize.length;i++){
					$('#checkSize').append(`
						<li>
							<span>${data.checkGroupSize[i]}</span>
							<div class='isCheck'></div>
						</li>`)
				}
				
				$("#infoRight .goodsCheckTitle").css({lineHeight:'0.34rem',width:'0.6rem',fontSize:'0.12rem',color:'#666',display:'inline-block',marginRight:'0.3rem'});
				$('#checkColor').css({display:'inline-block'});
				$('#checkColor li').css({float:'left',height:'0.3rem',width:'0.3rem',position:'relative'});
				$('#checkColor li .isCheck').css({position:'absolute',height:'0.1rem',width:'0.1rem',bottom:'-0.02rem',right:'-0.02rem',background:'url(../images/detail_icon6.png) -211px -24px no-repeat'})
				$('#checkColor li img').css({height:'100%',width:'100%',border:'0.02rem solid #806ab4'});
				
				
				$('#checkSize').css({display:'inline-block'});
				$('#checkSize li').css({float:'left',height:'0.3rem',width:'0.3rem',position:'relative'});
				$('#checkSize li .isCheck').css({position:'absolute',height:'0.1rem',width:'0.1rem',bottom:'-0.02rem',right:'-0.02rem',background:'url(../images/detail_icon6.png) -211px -24px no-repeat'})
				$('#checkSize li span').css({display:'inline-block',textAlign:'center',height:'100%',width:'100%',border:'0.02rem solid #806ab4'});
				
				$('#checkNum').css({display:'inline-block'});
				$('#checkNum li').css({float:'left',height:'0.2rem',width:'0.75rem',position:'relative',background:'#f6f6f6',border:'0.01rem #ededed solid',marginTop:'0.05rem'});
				$('#checkNum li div').css({height:'0.2rem',width:'0.2rem',background:'#f6f6f6',float:'left',textAlign:'center',padding:'0'});
				$('#checkNum li div').eq(0).click(function(){
					var oNum = $('#checkNum li input').attr('value');
					oNum--; 
					if (oNum<1) {
						oNum = 1
					}
					$('#checkNum li input').attr('value',oNum);
				})
				$('#checkNum li div').eq(1).click(function(){
					var oNum = $('#checkNum li input').attr('value');
					oNum++;
					$('#checkNum li input').attr('value',oNum);
				})
				$('#checkNum li input').css({height:'0.2rem',width:'0.34rem',float:'left',textAlign:'center',padding:'0',border:'0'}).attr('value','1');
				
				$(".buyGroup div").css({height:'0.45rem',width:'1.59rem',marginRight:'0.21rem',float:'left',padding:'0'})
				$(".buyGroup div").eq(0).css({background:'url(../images/detail_icon6.png) -62px -551px no-repeat'}).hover(
					function(){
						$(".buyGroup div").eq(0).css({background:'url(../images/detail_icon6.png) -62px -459px no-repeat'})
					},function(){
						$(".buyGroup div").eq(0).css({background:'url(../images/detail_icon6.png) -62px -551px no-repeat'})
					}
				)
				$(".buyGroup div").eq(1).css({background:'url(../images/detail_icon6.png) -62px -597px no-repeat'}).hover(
					function(){
						$(".buyGroup div").eq(1).css({background:'url(../images/detail_icon6.png) -62px -505px no-repeat'})
					},function(){
						$(".buyGroup div").eq(1).css({background:'url(../images/detail_icon6.png) -62px -597px no-repeat'})
					}
				)
			}
		
		})
		
	}
	return{
		goodsInfo:goodsInfo
	}
})