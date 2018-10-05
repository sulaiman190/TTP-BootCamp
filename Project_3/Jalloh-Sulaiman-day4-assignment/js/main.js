/* 1. Create an HTML page with two buttons that argue with each other. When one button is clicked, the text "I'm right" should be placed next to it. When the other button is clicked, the text is replaced with, "No, I'm right!" */

function btn1() {
	var str = "I am right";
	var result = str.bold();
	document.getElementById("result").innerHTML = result;
}

function btn2() {
	document.getElementById("result").innerText = "No, I'm Right!";
}

/* 2. Create an HTML page with a large element on the page that says "Don't hover over me" inside of it. When you hover over the element, send an alert to the user that says, "Hey, I told you not to hover over me!" */

function changeText(text) {
	var display = document.getElementById('display-text');
	display.innerHTML = text;
}

/* 3. Create an HTML page with javascript that listens for a keypress.
    - When the user presses that key, the text of the H1 should show the value of the key they have pressed.
    - Example: If the user presses "J", the text inside the H1 should be "J". */

function changeH1(event) {
	var x = event.keyCode;
	var title = document.getElementsByTagName('h1');
	title[0].innerHTML = String.fromCharCode(x);
}

/* 4. Create an HTML page with a form. The form should include inputs for a username, email, and password as well as a submit button.    
	- In a Javascript file, write code that does the following things:
        - checks that the password is 12345678
        - checks that the username contains at least one number
        - if anything is wrong, send an alert message saying "incorrect"
    - Your page should also include an H1 tag. If the information in the form is correct, have Javascript change the text in the H1. */



function formCheck() {
	var user = document.getElementById('username').value;
	var pw = document.getElementById('password').value;
	var title = document.getElementsByTagName('h1');
	var correct = false;

	if (pw==12345678) {
		if (user.length > 1) {
			title[0].innerHTML = "Congrats on knowing ";
		} else {
			alert("Congrats on knowing ");
		}
	} else {
		alert("Incorrect username or password");
	}
}