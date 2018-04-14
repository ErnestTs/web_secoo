define(function(){
	function nav(){ 
		$.ajax({
			url:'../data/nav.json',
			type:'GET',
			success:function(data){
				var json = data;
				for(var i = 0;i < json.length; i++){
					$("#nav").append(`<li id=li_${i}><a>${json[i].title}</a></li>`);
					$(`.bagsNavsCheck #li_${i}`).find('a').attr('href','bags.html');
					$(`.indexNav #li_${i}`).find('a').attr('href','html/bags.html');
					$("#nav").css({position:'relative'});
					$(`#li_${i}`).append('<div></div>')
					for(var j = 0;j < json[i].subTitle.length;j++){
						$(`#li_${i}`).find('div').append(`<dl id=dl_${i}_${j}><dt>${json[i].subTitle[j].title}</dt></dl>`);
						$(`#li_${i}`).find('div').css({zIndex:'7',height:'0',width:'11.99rem',overflow:'hidden',position:'absolute',left:'-0.32rem',background:'#fff',opacity:'0.95'});
						$(`#li_${i}`).find('dl').css({height:'auto',width:'2.5rem',overflow:'hidden',float:'left',marginRight:'2.1rem'});
						$(`#li_${i}`).find('dl').eq(2).css({marginRight:0});
						$(`#li_${i}`).find('dt').css({display:'block',fontSize:'0.16rem',lineHeight:'0.5rem',fontWeight:'bold'})
						$(`#li_${i}`).mouseover(function(){
							$(this).children('a').css({color:'#f8a120'})
							$(this).find('div').css({height:'auto',padding:'0.32rem',background:'write',borderBottom:'3px solid #f8a120'})
							$(this).mouseout(function(){
								$(this).children('a').css({color:'#fff'})
								$(this).find('div').css({height:0,padding:0,border:0})
							})
						})
						for(var k = 0;k < json[i].subTitle[j].child.length;k++){
							$(`#dl_${i}_${j}`).append(`<dd><a href='#'>${json[i].subTitle[j].child[k]}</a><dd>`)
							$(`#dl_${i}_${j}`).find('dd').css({width:'1.25rem',float:'left',lineHeight:'0.30rem',fontSize:'0.12rem'});
							$(`#dl_${i}_${j}`).find('a').css({color:'#666'});
							$(`#dl_${i}_${j}`).find('a').mouseover(function(){
								$(this).css({color:'#f8a120'});
								$(this).mouseout(function(){
									$(this).css({color:'#666'});
								})
							})
						}
					}
				}
			}
		})
		$("#nav").find('li').eq(0).css('padding-left','0');
	}
	return {
		nav:nav
	}
})