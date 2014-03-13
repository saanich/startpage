 $(document).ready(function() {
 	$("a[rel=fancygroup]").fancybox({
 		'titlePosition': 'inside',
 		'titleFormat': function(title, currentArray, currentIndex, currentOpts) {
 			return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + ' ' + title + '</span>';
 		}
 	});
 });
