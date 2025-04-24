$(document).ready(function() {
	// preload images
	$("#image_list a").each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});
	
	// set up event handlers for links    
	$("#image_list a").click(function(evt) {
		evt.preventDefault(); // link davranışını iptal hemen başta yapıyoruz

		var imageURL = $(this).attr("href");
		var caption = $(this).attr("title");

		// önce hem resim hem caption'ı 1 saniyede gizle
		$("#image, #caption").fadeOut(1000, function() {
			// fadeOut bittikten sonra yeni resmi ve yazıyı değiştir
			$("#image").attr("src", imageURL);
			$("#caption").text(caption);

			// sonra yeni içeriği 1 saniyede görünür yap
			$("#image, #caption").fadeIn(1000);
		});
	});
	
	// move focus to first thumbnail
	$("li:first-child a").focus();
});
