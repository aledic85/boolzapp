function feedGenerator() {

	var feeds = ["Ancora con questa storia Giacomì, se ti ho detto di no è no.",
							"Sono tua cugina.", "No.", "Basta."];
	var randomIndexCalc = Math.floor(Math.random()*(4-0))+0;
	var randomIndex = feeds[randomIndexCalc];

	return randomIndex;
}

function sendMessage(input) {

	var wrapper = $(".wrapper.active");

	var messageContSend = document.createElement("div");
	var wrapperSend = document.createElement("div");
	var message = document.createElement("p");
	var span = document.createElement("span");

	$(messageContSend).addClass("message-cont-send");
	$(wrapperSend).addClass("wrapper-send");

	$(message).text(input);
	$(span).text("17.30");

	wrapperSend.append(message);
	wrapperSend.append(span);
	messageContSend.append(wrapperSend);

	wrapper.append(messageContSend);
}

function receivedMessage() {

	var wrapper = $(".wrapper.active");

	var messageContReceived = document.createElement("div");
	var wrapperReceived = document.createElement("div");
	var message = document.createElement("p");
	var span = document.createElement("span");

	$(messageContReceived).addClass("message-cont-received");
	$(wrapperReceived).addClass("wrapper-rec");

	$(message).text(feedGenerator);
	$(span).text("17.30");

	wrapperReceived.append(message);
	wrapperReceived.append(span);
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

function userClick() {

	var me = $(this);
	meInd = me.index();
	var wrapAct = $(".active");

	wrapAct.removeClass("active");

	var wrappers = $(".right-cont > .wrapper");
	var nextWrap = wrappers.eq(meInd);

	nextWrap.addClass("active")
}

function userSearch() {

	var me = $(this);
	var val = me.val();
	var users = $(".user > .header");

	users.removeClass("hidden");
	users.removeClass("height");

	for (var i = 0; i < users.length; i++) {

		var user = users.eq(i);
		var userCont = user.text();

		if (!userCont.includes(val)) {

			user.addClass("hidden");
			users.addClass("height");
		}
	}
}

function init() {

	var textBox = $("#text-box");
	var user = $(".user > .header");
	var search = $("#search");

	textBox.keyup(textEnter);
	user.click(userClick);
	search.keyup(userSearch)
}

$(document).ready(init)
