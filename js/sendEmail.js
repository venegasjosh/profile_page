function sendEmail() {
    // console.log("SLDFKJS:LF")
    
    let nameValue = document.getElementById("name1").value;
    let emailValue = document.getElementById("email1").value;
    let subjectValue = document.getElementById("subject1").value;
    let messageValue = document.getElementById("message1").value;
    // console.log(nameValue, emailValue, subjectValue, messageValue);

	Email.send({
	Host: "smtp.elasticemail.com",
	Username : "venegasjosh@gmail.com",
	Password : "dfab1899-481a-49a2-ab32-7e99dc2f890f",
	To : "venegasjosh@gmail.com",
	From : emailValue.toString(),
	Subject : nameValue.toString() + ' : '+ subjectValue.toString(),
	Body : messageValue.toString(),
	}).then(
		message => alert("mail sent successfully")
	)
}   