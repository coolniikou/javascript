jQuery(function($){
	$('#feedList').html('<img src="http://weblibrary.s224.xrea.com/weblog/image/loading.gif">');
	var pattern = /[&\?](p|q|query|MT|qt|searchText|kw)=([^&]+)/;
	var ref = document.referrer.match(pattern);
	var refword = decodeURI(ref[2]);

	$.ajax({

		url: "http://weblibrary.s224.xrea.com/x/mt/mt-search.cgi?search="+refword+"&Template=feed&IncludeBlogs=1",
		type: 'GET',
		timeout: 1000,
		dataType:"xml",
		success: function(xml){
				$(xml).find('feed').find('entry').each(function(){

							var title = $(this).find("title").text();

							var url = $(this).find("link").attr('href');

							$('#feedList').append('<li class="widget-list-item"><a href="'+url+'" style="color:#696768; font-weight:normal;">'+title+'</a></li>');
							});

			}

	});

});
