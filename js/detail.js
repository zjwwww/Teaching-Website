function courseContent() {
	var command = document.getElementById("detail_command_de");
	var content = document.getElementById("detail");
	command.style.display = "none";
	content.style.display = "block";
}

function courseCommand() {
	var command = document.getElementById("detail_command_de");
	var content = document.getElementById("detail");
	command.style.display = "block";
	content.style.display = "none";
}


//支付页面的js
function clickBoder() {
	var weixin = document.getElementById("weixin");
	var zhifubao = document.getElementById("zhifubao");
	weixin.style.cssText += 'border: 2px solid red';
	zhifubao.style.cssText += 'border: 0px solid red';
}

//支付页面的js
function clickBoderZi() {
	var weixin = document.getElementById("weixin");
	var zhifubao = document.getElementById("zhifubao");
	zhifubao.style.cssText += 'border: 2px solid red';
	weixin.style.cssText += 'border: 0px solid red';
}