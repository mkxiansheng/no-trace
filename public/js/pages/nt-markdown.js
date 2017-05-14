(function () {
	$('#nt-markdown').markdown({
		hiddenButtons:'cmdPreview',
		footer:'<div id="nt-footer" class="well" style="display:none;"></div>',
		onChange:function(e){
			var content = e.parseContent();
			if (content == '') {
				$('#nt-markdown-content').hide()
			} else {
				var title = $("#nt-title").val();
				var _html = "<h1>"+title+"</h1><hr />"+content;
				$('#nt-markdown-content').show().html(_html);
			}
		}
	})
})()