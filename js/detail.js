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