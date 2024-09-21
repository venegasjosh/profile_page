function sendEmail() {
    // console.log("SLDFKJS:LF")
    console.log("here")
    let nameValue = document.getElementById("name1").value;
    let emailValue = document.getElementById("email1").value;
    let subjectValue = document.getElementById("subject1").value;
    let messageValue = document.getElementById("message1").value;
    // console.log(nameValue, emailValue, subjectValue, messageValue);

	Email.send({
	Host: "smtp.elasticemail.com",
	Username : "venegasjosh@gmail.com",
	Password : "4b6475cd-9b13-4431-abbf-e2a959e86c8b",
	To : "venegasjosh@gmail.com",
	From : emailValue.toString(),
	Subject : nameValue.toString() + ' : '+ subjectValue.toString(),
	Body : messageValue.toString(),
	}).then(
		message => alert("mail sent successfully")
	)
}   