define(function(){
	function selectCondition(){
		$.ajax({
			type:"get",
			url:"../data/bagsSelectCondition.json",
			async:true,
			success:function(data){
				for (var i = 0;i < data.length;i++ ) {
					$('#selectCondition').append(`
						<dl class='cl'>
							<dt>${data[i].title}:</dt>
							<dd>
								<div class='subBox'>
									<ul></ul>
								</div>
							</dd>
						</dl>
					`);
				}
//------------------------------------------第一栏品牌和dl dt样式--------------------------------------------------------
//------------------------------------------第一栏品牌更多--------------------------------------------------------
//				$('#selectCondition dd').eq(0).prepend(`
//					<div id='subBox2'>
//						<div id='brandSearch'>
//							<div class="brand_search_box"><input type="text"></div>
//							<strong>所有品牌</strong>
//							<a href="javascript:;">A</a><a href="javascript:;">B</a><a href="javascript:;">C</a><a href="javascript:;">D</a>
//							<a href="javascript:;">E</a><a href="javascript:;">F</a><a href="javascript:;">G</a><a href="javascript:;">H</a>
//							<a href="javascript:;">I</a><a href="javascript:;">J</a><a href="javascript:;">K</a><a href="javascript:;">L</a>
//							<a href="javascript:;">M</a><a href="javascript:;">N</a><a href="javascript:;">O</a><a href="javascript:;">P</a>
//							<a href="javascript:;">Q</a><a href="javascript:;">R</a><a href="javascript:;">S</a><a href="javascript:;">T</a>
//							<a href="javascript:;">U</a><a href="javascript:;">V</a><a href="javascript:;">W</a><a href="javascript:;">X</a>
//							<a href="javascript:;">Y</a><a href="javascript:;">Z</a><a href="javascript:;">其他</a>
//						</div>
//					</div>
//				`)
//				$('#brandSearch').css({float:'left'})
//				$('#brandSearch div').css({float:'left'})
//				$('#brandSearch strong').css({float:'left'})
//				$('#brandSearch a').css({float:'left'})
//				$.ajax({
//					type:"get",
//					url:"../data/bagsBrandList.json",
//					async:true,
//					success:function(BList){
//						for(var j = 0;j < BList.length; j++){
//							$('#subBox2 div ul').eq(0).append(`
//								<div>
//									<ul>
//										<li>
//											<a href='#'>
//												<span>${BList.name}</span>
//											</a>
//											<div></div>
//										</li>
//									</ul>
//								</div>
//							`);
//						}
//					}
//				});
//				$('#selectCondition dd').eq(0).find('.subBox').css({display:'none'});
//------------------------------------------第一栏品牌更多--------------------------------------------------------
				for(var j = 0;j < data[0].child.length; j++){
					$('#selectCondition dd div ul').eq(0).append(`
						<li>
							<a href='#'>
								<span>${data[0].child[j].name}</span>
								<img src='${data[0].child[j].src}'>
							</a>
							<div></div>
						</li>
					`);
				}
				$('#selectCondition dl').css({background:'#f5f5f5',paddingLeft:'0.3rem',borderBottom:'1px solid #f5f5f5',position:'relative',color:'#666'});
				$('#selectCondition dl a').hover(function(evt){
					$(this).css('color','#e93b39')
				},function(){
					$(this).css('color','#666')
				})
				$('#selectCondition dt').css({float:'left',marginTop:'0.15rem',width:'0.8rem'});
				$('#selectCondition dd').css({float:'left',padding:'0.17rem 0.1rem',background:'#fff',width:'10.7rem',overflow:'hidden'});
				$('#selectCondition dd div ul').css({float:'left',width:'10rem',paddingLeft:'0.1rem'});
				$('#selectCondition dd').eq(0).find('div').css({width:'8.92rem',borderLeft:'1px solid #ededed',float:'left',borderTop:'1px solid #ededed'});
				$('#selectCondition dd').eq(0).find('li').css({float:'left',width:'0.98rem',height:'0.98rem',position:'relative',borderRight:'1px solid #ededed',borderBottom:'1px solid #ededed',textAlign:'center'});
				$('#selectCondition dd').eq(0).find('li img').css({left:'0',top:'0',right:'0',bottom:'0',margin:'auto',width:'80%',height:'80%',position:'absolute'});
				$('#selectCondition dd').eq(0).find('li a').css({display:'block',lineHeight:'0.98rem',width:'100%',height:'100%'});
				$('#selectCondition dd').eq(0).find('li a span').css({display:'none'});
				$('#selectCondition dd').eq(0).find('div ul').css({float:'left',width:'8.92rem',paddingLeft:'0'});
				$('#selectCondition dd').eq(0).find('li div').css({width:'100%',height:'99%',left:'0',top:'0',position:'absolute',zIndex:'9999',border:'0'});
				$('#selectCondition dd').eq(0).find('li div').mouseover(function(evt){
					$(evt.target).parent().find('img').css('display','none');
					$(evt.target).parent().find('span').css('display','block');
					$(evt.target).css({border:'1px solid #000'})
				}).mouseout(function(evt){
					$(evt.target).parent().find('img').css('display','block');
					$(evt.target).parent().find('span').css('display','none');
					$(evt.target).css({border:'0'})
				})
				$('#selectCondition dl').eq(0).append(`<a class='Mc'>+ 多选</a> <a class='Gm'>更多 ∨</a>`)
				
//------------------------------------------第一栏品牌--------------------------------------------------------
//------------------------------------------第二栏分类--------------------------------------------------------
				for(var j = 0;j < data[1].child.length; j++){
					$('#selectCondition dd div ul').eq(1).append(`
						<li>
							<a href='#'>
								<span>${data[1].child[j].name}</span>
								<span class='gray'>(${data[1].child[j].num})</span>
							</a>
						</li>
					`);
				}
				$('.gray').css('color','#999')
				$('#selectCondition dl').eq(1).css({paddingBottom:'0'});
				$('#selectCondition dd div ul').eq(1).find('li').css({float:'left',lineHeight:'0.38rem',marginRight:'0.35rem'})
				$('#selectCondition dl').eq(1).append(`<a class='Gm'>更多 ∨</a>`);
//------------------------------------------第二栏分类--------------------------------------------------------
//------------------------------------------第三栏价格--------------------------------------------------------
				for(var j = 0;j < data[2].child.length; j++){
					$('#selectCondition dd div ul').eq(2).append(`
						<li>
							<a href='#'>
								<span>${data[2].child[j]}</span>
							</a>
						</li>
					`);
				}
				$('#selectCondition dl').eq(2).find('li').css({float:'left',lineHeight:'0.12rem',marginRight:'0.35rem'});
//------------------------------------------第三栏价格--------------------------------------------------------
//------------------------------------------第四款式说明------------------------------------------------------
				for(var j = 0;j < data[3].child.length; j++){
					$('#selectCondition dd div ul').eq(3).append(`
						<li>
							<a href='#'>
								<span>${data[3].child[j]}</span>
							</a>
						</li>
					`);
				}
				$('#selectCondition dl').eq(3).find('li').css({float:'left',lineHeight:'0.12rem',marginRight:'0.35rem'});
				$('#selectCondition dl').eq(3).append(`<a class='Mc'>+ 多选</a>`);
//------------------------------------------第四款式说明------------------------------------------------------
//------------------------------------------第五栏附属肩带------------------------------------------------------
				for(var j = 0;j < data[4].child.length; j++){
					$('#selectCondition dd div ul').eq(4).append(`
						<li>
							<a href='#'>
								<span>${data[4].child[j]}</span>
							</a>
						</li>
					`);
				}
				$('#selectCondition dl').eq(4).find('li').css({float:'left',lineHeight:'0.12rem',marginRight:'0.35rem'});
//------------------------------------------第五栏附属肩带------------------------------------------------------
//------------------------------------------第六栏五金颜色------------------------------------------------------
				for(var j = 0;j < data[5].child.length; j++){
					$('#selectCondition dd div ul').eq(5).append(`
						<li>
							<a href='#'>
								<span>${data[5].child[j]}</span>
							</a>
						</li>
					`);
				}
				$('#selectCondition dl').eq(5).find('li').css({float:'left',lineHeight:'0.12rem',marginRight:'0.35rem'});
				$('#selectCondition dl').eq(5).append(`<a class='Mc'>+ 多选</a>`)
//------------------------------------------第六栏五金颜色------------------------------------------------------
//------------------------------------------第七栏五金材质------------------------------------------------------
				for(var j = 0;j < data[6].child.length; j++){
					$('#selectCondition dd div ul').eq(6).append(`
						<li>
							<a href='#'>
								<span>${data[6].child[j]}</span>
							</a>
						</li>
					`);
				}
				$('#selectCondition dl').eq(6).find('li').css({float:'left',lineHeight:'0.12rem',marginRight:'0.35rem'});
				$('#selectCondition dl').eq(6).append(`<a class='Mc'>+ 多选</a>`)
//------------------------------------------第七栏五金材质------------------------------------------------------
//------------------------------------------第八栏材质------------------------------------------------------
				for(var j = 0;j < data[7].child.length; j++){
					$('#selectCondition dd div ul').eq(7).append(`
						<li>
							<a href='#'>
								<span>${data[7].child[j]}</span>
							</a>
						</li>
					`);
				}
				$('#selectCondition dl').eq(7).find('li').css({float:'left',lineHeight:'0.12rem',paddingRight:'0.36rem',marginBottom:'0.25rem'});
				$('#selectCondition dl').eq(7).find('dd').css({paddingBottom:'0',overflow:'hidden',height:'0.35rem'});
				$('#selectCondition dl').eq(7).append(`<a class='Mc'>+ 多选</a><a class='Gm'>更多 ∨</a>`)
				$('#selectCondition dl').eq(7).find('.Gm').eq(0).click(function(){
					if($(this).html()=='更多 ∨'){
						$('#selectCondition dl').eq(7).find('dd').css({height:'auto'});
					}else{
						$('#selectCondition dl').eq(7).find('dd').css({height:'0.35rem'});
					}
				})
//------------------------------------------第八栏材质------------------------------------------------------
//------------------------------------------第九栏适用人群------------------------------------------------------
				for(var j = 0;j < data[8].child.length; j++){
					$('#selectCondition dd div ul').eq(8).append(`
						<li>
							<a href='#'>
								<span>${data[8].child[j]}</span>
							</a>
						</li>
					`);
				}
				$('#selectCondition dl').eq(8).find('li').css({float:'left',lineHeight:'0.12rem',marginRight:'0.35rem'});
//------------------------------------------第九栏适用人群------------------------------------------------------
//------------------------------------------第十栏开合方式------------------------------------------------------
				for(var j = 0;j < data[9].child.length; j++){
					$('#selectCondition dd div ul').eq(9).append(`
						<li>
							<a href='#'>
								<span>${data[9].child[j]}</span>
							</a>
						</li>
					`);
				}
				$('#selectCondition dl').eq(9).find('li').css({float:'left',lineHeight:'0.12rem',paddingRight:'0.36rem',marginBottom:'0.25rem'});
				$('#selectCondition dl').eq(9).find('dd').css({paddingBottom:'0',overflow:'hidden',height:'0.35rem'});
				$('#selectCondition dl').eq(9).append(`<a class='Mc'>+ 多选</a><a class='Gm'>更多 ∨</a>`)
				$('#selectCondition dl').eq(9).find('.Gm').eq(0).click(function(){
					if($(this).html()=='更多 ∨'){
						$('#selectCondition dl').eq(9).find('dd').css({height:'auto'});
					}else{
						$('#selectCondition dl').eq(9).find('dd').css({height:'0.35rem'});
					}
				})
//------------------------------------------第十栏开合方式------------------------------------------------------
//------------------------------------------第十一栏发货地点------------------------------------------------------
				for(var j = 0;j < data[10].child.length; j++){
					$('#selectCondition dd div ul').eq(10).append(`
						<li>
							<a href='#'>
								<span>${data[10].child[j]}</span>
							</a>
						</li>
					`);
				}
				$('#selectCondition dl').eq(10).find('li').css({float:'left',lineHeight:'0.12rem',marginRight:'0.35rem'});
				$('#selectCondition dl').eq(10).append(`<a class='Mc'>+ 多选</a>`)
//------------------------------------------第七栏发货地点------------------------------------------------------
//--------------------------------------添加右侧按钮------------------------------------------------------
				$('.Gm').css({position:'absolute',top:'0.12rem',right:'0.3rem'}).click(function(evt){
					if($(evt.target).html()=='更多 ∨'){
						$(evt.target).html('收起 ∧ ');
					}else{
						$(evt.target).html('更多 ∨');
					}
				})
				$('.Mc').css({position:'absolute',top:'0.12rem',right:'0.75rem'})
				$('#selectCondition dl').css({display:'none'});
				$('#selectCondition dl').eq(0).css({display:'block'});
				$('#selectCondition dl').eq(1).css({display:'block'});
				$('#selectCondition dl').eq(2).css({display:'block'});
				$('#selectCondition dl').eq(8).css({display:'block'});
			}
		});
		var yooo = 1;
		$("#selectConditionButton").click(function(){
			yooo++;
			if(yooo%2 != 0){
				$('#selectCondition dl').css({display:'none'});
				$('#selectCondition dl').eq(0).css({display:'block'});
				$('#selectCondition dl').eq(1).css({display:'block'});
				$('#selectCondition dl').eq(2).css({display:'block'});
				$('#selectCondition dl').eq(8).css({display:'block'});
				$("#selectConditionButton").html('更多选项  ∨ ')
			}else{
				$('#selectCondition dl').css({display:'block'});
				$("#selectConditionButton").html('收起 ∧ ')
			}
		})
	}
	return{
		selectCondition:selectCondition
	}
})