function closeCatagory() {
	var scroll = document.getElementById("scroll_catagory");
	var vidioCatalogueBox = document.getElementById("vidio_catalogue_box");
	var vidioSreen = document.getElementById("vidio_see_box");
	scroll.style.display = "none";
	vidioCatalogueBox.style.display = "block";
	vidioSreen.style.width = "85%";
	vidioSreen.style.left = "5%";
}

function show_catagory() {
	var scroll = document.getElementById("scroll_catagory");
	var vidioSreen = document.getElementById("vidio_see_box");
	var vidioCatalogueBox = document.getElementById("vidio_catalogue_box");
	scroll.style.display = "block";
	vidioCatalogueBox.style.display = "none";
	vidioSreen.style.width = "70%";
	vidioSreen.style.left = "20%";
}