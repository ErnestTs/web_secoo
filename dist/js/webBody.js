define(function(){
	function webBody(){
		$.ajax({
			url:'../data/webBody.json',
			success:function(data){
				for (var i=0; i<data.length;i++) {
					$("#webBody").append(`<a href='#'><div id='body${i}'><img src='../images${data[i].src}'><div id='shutter${i}'><h4>${data[i].title}</h4></div></div><h3>${data[i].title}</h3></a>`);
					$(`#body${i}`).css('position','relative')
					$(`#shutter${i}`).css({position:'absolute',left:0,top:0,background:'#000',zIndex:2,height:'100%',width:'100%',opacity:'0.6',fontWeight:'normal'})
					$(`#shutter${i} h4`).css({margin:'0.5rem',textAlign:'center',lineHeight:'2.3rem',color:'#fff',fontSize:'0.4rem',border:'3px solid #fff'})
					if(i%2 != 0){
						$("#webBody a").eq(i).css('marginRight','0');
					}
				}
			}
		})
	}
	return {
		webBody:webBody
	}
})