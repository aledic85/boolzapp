function feedGenerator() {

	var feeds = ["Ancora con questa storia Giacomì, se ti ho detto di no è no.",
							"Sono tua cugina.", "No.", "Basta."];
	var randomIndexCalc = Math.floor(Math.random()*(4-0))+0;
	var randomIndex = feeds[randomIndexCalc];

	return randomIndex;
}

function dynamicClock() {

	var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
	var hours;

	if(m < 10) {

		hours = h + ":" + "0" + m;
	} else {

		hours = h + ":" + m;
	}

	return hours;
}

function sendMessage(input) {

	var data = {
		class: "message-cont-send",
		class1: "wrapper-send",
		text: input,
		hours: dynamicClock(),
	}

	var wrapper = $(".wrapper.active");
	var messageTemplate = $("#message-template").html();
	var compile = Handlebars.compile(messageTemplate);
	var finalHtml = compile(data);

	wrapper.append(finalHtml);
	wrapper.animate({scrollTop: wrapper.prop("scrollHeight")});
}

function receivedMessage(wrapper) {

	var data = {
		class: "message-cont-received",
		class1: "wrapper-rec",
		text: feedGenerator(),
		hours: dynamicClock(),
	}

	var messageTemplate = $("#message-template").html();
	var compile = Handlebars.compile(messageTemplate);
	var finalHtml = compile(data);

	wrapper.append(finalHtml);
	wrapper.animate({scrollTop: wrapper.prop("scrollHeight")});
}

function textEnter(e) {

	var keyPress = e.which;
	var input = $("#text-box");
	var inputVal = input.val();
	var wrapper = $(".wrapper.active");

	if (keyPress == 13) {

		sendMessage(inputVal);

		input.val("");

		setTimeout(function() {

			receivedMessage(wrapper);
		}, 2000);
	}
}

function userClick() {

	var me = $(this);
	meInd = me.index();
	var wrapAct = $(".active");

	wrapAct.removeClass("active");

	var wrappers = $(".right-cont > .wrapper");
	var nextWrap = wrappers.eq(meInd);

	nextWrap.addClass("active");
}

function userSearch() {

	var me = $(this);
	var val = me.val().toLowerCase();
	var users = $(".user > .header");

	users.removeClass("hidden");
	users.removeClass("height");

	for (var i = 0; i < users.length; i++) {

		var user = users.eq(i);
		var userCont = user.find("h4").text().toLowerCase();

		if (!userCont.includes(val)) {

			user.addClass("hidden");
			users.addClass("height");
		}
	}
}

function dropdownMenu() {

	var me = $(this);
	var drop = $(".drop");

	me.siblings(drop).toggle();
}

function deleteMessage() {

	var me = $(this);

	me.siblings("div").addClass("hidden");
	me.hide();
}

function init() {

	var textBox = $("#text-box");
	var user = $(".user > .header");
	var search = $("#search");

	textBox.keyup(textEnter);
	user.click(userClick);
	search.keyup(userSearch);

	$(document).on("click", ".wrapper-send", dropdownMenu);
	$(document).on("click", ".wrapper-rec", dropdownMenu);
	$(document).on("click", ".drop", deleteMessage);
}

$(document).ready(init);
