
function persionTeching() {
	 var stu = document.getElementById("persion_stu");
	 stu.checked=false;
}

function persionStu() {
	 var stu = document.getElementById("persion_teching");
	 stu.checked=false;
}

function loginTitle() {
	var loginForm = document.getElementById("login_form");
	var registerForm = document.getElementById("register_form");
	var loginTitle = document.getElementById("login_title");
	var registerTitle = document.getElementById("register_title");
	loginForm.style.display = "block";
	registerForm.style.display = "none";
	loginTitle.style.color = "red";
	registerTitle.style.color="black";
}

function registerTitle() {
	var loginForm = document.getElementById("login_form");
	var registerForm = document.getElementById("register_form");
	var loginTitle = document.getElementById("login_title");
	var registerTitle = document.getElementById("register_title");
	loginForm.style.display = "none";
	registerForm.style.display = "block";
	loginTitle.style.color = "black";
	registerTitle.style.color="red";

}


 
 