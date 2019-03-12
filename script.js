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
	var drop = document.createElement("div");
	var h5 = document.createElement("h5");

	$(messageContSend).addClass("message-cont-send");
	$(wrapperSend).addClass("wrapper-send");
	$(drop).addClass("drop");

	$(message).text(input);
	$(span).text("17.30");
	$(h5).text("Delele message");

	drop.append(h5);
	wrapperSend.append(message);
	wrapperSend.append(span);
	messageContSend.append(wrapperSend);
	messageContSend.append(drop);

	wrapper.append(messageContSend);
}

function receivedMessage() {

	var wrapper = $(".wrapper.active");

	var messageContReceived = document.createElement("div");
	var wrapperReceived = document.createElement("div");
	var message = document.createElement("p");
	var span = document.createElement("span");
	var drop = document.createElement("div");
	var h5 = document.createElement("h5");

	$(messageContReceived).addClass("message-cont-received");
	$(wrapperReceived).addClass("wrapper-rec");
	$(drop).addClass("drop");

	$(message).text(feedGenerator);
	$(span).text("17.30");
	$(h5).text("Delele message");

	drop.append(h5);
	wrapperReceived.append(message);
	wrapperReceived.append(span);
	messageContReceived.append(wrapperReceived);
	messageContReceived.append(drop);

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

function dropdownMenu() {

	var me = $(this);
	console.log(me);

	me.siblings(".drop").toggle();

	var drop = $(".drop");
	drop.click(function() {

		me.addClass("hidden");
		me.siblings(".drop").hide();
	})
}


function init() {

	var textBox = $("#text-box");
	var user = $(".user > .header");
	var search = $("#search");
	var wrapperSend = $(".wrapper-send");
	var wrapperRec = $(".wrapper-rec")

	textBox.keyup(textEnter);
	user.click(userClick);
	search.keyup(userSearch);
	wrapperSend.click(dropdownMenu);
	wrapperRec.click(dropdownMenu);
}

$(document).ready(init)
