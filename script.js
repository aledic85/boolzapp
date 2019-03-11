function sendMessage(input) {

	var wrapper = $(".wrapper");

	var messageContSend = document.createElement("div");
	var wrapperSend = document.createElement("div");
	var message = document.createElement("p");

	$(messageContSend).addClass("message-cont-send");
	$(wrapperSend).addClass("wrapper-send");

	$(message).text(input);

	wrapperSend.append(message)
	messageContSend.append(wrapperSend);

	wrapper.append(messageContSend);
}

function receivedMessage() {
	
	var wrapper = $(".wrapper");

	var messageContReceived = document.createElement("div");
	var wrapperReceived = document.createElement("div");
	var message = document.createElement("p");

	$(messageContReceived).addClass("message-cont-received");
	$(wrapperReceived).addClass("wrapper-rec");

	$(message).text("Ancora con questa storia Giacomì, se ti ho detto di no è no.");

	wrapperReceived.append(message)
	messageContReceived.append(wrapperReceived);

	wrapper.append(messageContReceived);
}

function textEnter(e) {

	var keyPress = e.which;
	var input = $("#text-box");
	var inputVal = input.val();

	if (keyPress == 13) {

		sendMessage(inputVal);

		input.val("");

		setTimeout(receivedMessage, 2000);
	}
}

function init() {

	var textBox = $("#text-box");

	textBox.keyup(textEnter);
}

$(document).ready(init)