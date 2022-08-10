// function getInput(callback) {
//     $('.container').html( "<input type='button' id='mybutton' name='Click Me' placeholder='Class'></input>" );
//     $('#mybutton').click( function() { callback("result"); } );
// }

// function processInput (result) {
//     alert(result);
// }

// getInput(processInput);
// show a message with a type of the input
function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}


const form = document.querySelector("#apply");

const CLASS_REQUIRED = "Please enter your class";
const SUBJECT_REQUIRED = "Please enter your subject";
const DATE_INVALID = "Please enter the correct date";

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let classValid = hasValue(form.elements["class"], CLASS_REQUIRED);
    let subjectValid = hasValue(form.elements["subject"], SUBJECT_REQUIRED);
    let dateValid = hasValue(form.elements["date"], DATE_REQUIRED);

	
	// if valid, submit the form.
	if (classValid && subjectValid && dateValid) {
		alert("Please fill all the information required");
	}
});

