function closeCatagory() {
	var scroll = document.getElementById("scroll_catagory");
	var vidioCatalogueBox = document.getElementById("vidio_catalogue_box");
	var vidioSreen = document.getElementById("vidio_see_box");
	var player = document.getElementById("my-player");
	scroll.style.display = "none";
	vidioCatalogueBox.style.display = "block";
	vidioSreen.style.width = "85%";
	vidioSreen.style.left = "5%";
	player.style.top = "-110%";
}

function show_catagory() {
	var scroll = document.getElementById("scroll_catagory");
	var vidioSreen = document.getElementById("vidio_see_box");
	var vidioCatalogueBox = document.getElementById("vidio_catalogue_box");
	var player = document.getElementById("my-player");

	scroll.style.display = "block";
	vidioCatalogueBox.style.display = "none";
	vidioSreen.style.width = "70%";
	vidioSreen.style.left = "20%";
	player.style.height = "100%";
	player.style.top = "0px";
}

function resourse() {
	var resourse = document.getElementById("resourse_li");
	var discuss = document.getElementById("resourse_saw");
	resourse.style.color = "red";
	discuss.style = "#545c63";
}

function discuss() {
	var resourse = document.getElementById("resourse_li");
	var discuss = document.getElementById("resourse_saw");
	resourse.style.color = "#545c63";
	discuss.style.color = "red";
}