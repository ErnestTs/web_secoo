define(function(){
	function search(){
		$.ajax({
			url:'../data/search.json',
			type:'get',
			success:function(data){
				var oInput = document.getElementById('searchInput');
				oInput.setAttribute('placeholder',data)
			}
		})
	}
	return {
		search:search
	}
})