
document.getElementById('BackDropParent').style["width"] = window.innerWidth+"px";
document.getElementById('BackDropParent').style["height"] = window.innerHeight+"px";

var header = document.getElementById('roundedBoxHeader');
var buttons = document.getElementsByClassName('menuButton');

var page_state = "day";



const backDropBackground = new BackDropBackground('BackDropParent');
backDropBackground.setBackgroundColor("#b3ffff");

const sun = new BackDropElement({
	id: 'sun',
	curr_state: 'day',
	src: 'res/sun.png',
	x_pos: backDropBackground.getWidth()*0.1,
	y_pos: backDropBackground.getHeight()*0.15,
	width: "400px",
	height: "400px",
	x_scale: 1,
	y_scale: 1,
	opacity: null
});

const sunNightToDayTransition = new BackDropStateTransition({
	transition_id: 'sunNightToDay', 
	old_state: 'night', 
	new_state: 'day', 
	new_src: null, 
	new_x_pos: backDropBackground.getWidth()*0.1, 
	new_y_pos: backDropBackground.getHeight()*0.15, 
	new_x_scale: 1, 
	new_y_scale: 1, 
	new_background_color: "#b3ffff",
	new_opacity: null,
	trigger_ids: ["sun", "moon"]
});

const sunDayToNightTransition = new BackDropStateTransition({
	transition_id: 'sunDayToNight', 
	old_state: 'day', 
	new_state: 'night', 
	new_src: null, 
	new_x_pos: 0, 
	new_y_pos: backDropBackground.getHeight(), 
	new_x_scale: 0.7, 
	new_y_scale: 0.7, 
	new_background_color: "#004d4d",
	new_opacity: null,
	trigger_ids: ["sun", "moon"]
});

sun.addStateTransition(sunNightToDayTransition);
sun.addStateTransition(sunDayToNightTransition);

backDropBackground.addElement(sun);



const moon = new BackDropElement({
	id: 'moon',
	curr_state: 'day',
	src: 'res/moon.png',
	x_pos: backDropBackground.getWidth()*0.8,
	y_pos: backDropBackground.getHeight(),
	width: "400px",
	height: "400px",
	x_scale: 0.75,
	y_scale: 0.75,
	opacity: null
});

const moonNightToDayTransition = new BackDropStateTransition({
	transition_id: 'moonNightToDay', 
	old_state: 'night', 
	new_state: 'day', 
	new_src: null, 
	new_x_pos: backDropBackground.getWidth()*0.8, 
	new_y_pos: backDropBackground.getHeight(), 
	new_x_scale: 0.7, 
	new_y_scale: 0.7, 
	new_background_color: "#b3ffff",
	new_opacity: null,
	trigger_ids: ["sun", "moon"]
});

const moonDayToNightTransition = new BackDropStateTransition({
	transition_id: 'moonDayToNight', 
	old_state: 'day', 
	new_state: 'night', 
	new_src: null, 
	new_x_pos: backDropBackground.getWidth()*0.7, 
	new_y_pos: backDropBackground.getHeight()*0.15, 
	new_x_scale: 1, 
	new_y_scale: 1, 
	new_background_color: "#004d4d",
	new_opacity: null,
	trigger_ids: ["sun", "moon"]
});

moon.addStateTransition(moonNightToDayTransition);
moon.addStateTransition(moonDayToNightTransition);

backDropBackground.addElement(moon);








const groundDay = new BackDropElement({
	id: 'groundDay',
	curr_state: 'day',
	src: 'res/groundDay.png',
	x_pos: 0,
	y_pos: backDropBackground.getHeight()*0.8,
	width: "100%",
	height: "20%",
	x_scale: 1,
	y_scale: 1,
	opacity: 1
});

const groundDay_dayToNightTransition = new BackDropStateTransition({
	transition_id: 'groundDay_dayToNightTransition', 
	old_state: 'day', 
	new_state: 'night', 
	new_src: null, 
	new_x_pos: null, 
	new_y_pos: null, 
	new_x_scale: null, 
	new_y_scale: null, 
	new_background_color: null,
	new_opacity: 1,
	trigger_ids: ["sun", "moon"]
});


const groundDay_nightToDayTransition = new BackDropStateTransition({
	transition_id: 'groundDay_nightToDayTransition', 
	old_state: 'night', 
	new_state: 'day', 
	new_src: null, 
	new_x_pos: null, 
	new_y_pos: null, 
	new_x_scale: null, 
	new_y_scale: null, 
	new_background_color: null,
	new_opacity: 1,
	trigger_ids: ["sun", "moon"]
});

groundDay.addStateTransition(groundDay_dayToNightTransition);
groundDay.addStateTransition(groundDay_nightToDayTransition);

backDropBackground.addElement(groundDay);




const groundNight = new BackDropElement({
	id: 'groundNight',
	curr_state: 'day',
	src: 'res/groundNight.png',
	x_pos: 0,
	y_pos: backDropBackground.getHeight()*0.8,
	width: "100%",
	height: "20%",
	x_scale: 1,
	y_scale: 1,
	opacity: 0
});

const groundNight_dayToNightTransition = new BackDropStateTransition({
	transition_id: 'groundNight_dayToNightTransition', 
	old_state: 'day', 
	new_state: 'night', 
	new_src: null, 
	new_x_pos: null, 
	new_y_pos: null, 
	new_x_scale: null, 
	new_y_scale: null, 
	new_background_color: null,
	new_opacity: 1,
	trigger_ids: ["sun", "moon"]
});

const groundNight_nightToDayTransition = new BackDropStateTransition({
	transition_id: 'groundNight_nightToDayTransition', 
	old_state: 'night', 
	new_state: 'day', 
	new_src: null, 
	new_x_pos: null, 
	new_y_pos: null, 
	new_x_scale: null, 
	new_y_scale: null, 
	new_background_color: null,
	new_opacity: 0,
	trigger_ids: ["sun", "moon"]
});


groundNight.addStateTransition(groundNight_dayToNightTransition);
groundNight.addStateTransition(groundNight_nightToDayTransition);

backDropBackground.addElement(groundNight);





const logoDay = new BackDropElement({
	id: 'logoDay',
	curr_state: 'day',
	src: 'res/logoLight.png',
	x_pos: backDropBackground.getWidth()*0.39,
	y_pos: backDropBackground.getWidth()*0.05,
	width: "22%",
	height: "25%",
	x_scale: 1,
	y_scale: 1,
	opacity: 1
});

const logoDay_dayToNightTransition = new BackDropStateTransition({
	transition_id: 'logoDay_dayToNightTransition', 
	old_state: 'day', 
	new_state: 'night', 
	new_src: null, 
	new_x_pos: null, 
	new_y_pos: null, 
	new_x_scale: null, 
	new_y_scale: null, 
	new_background_color: null,
	new_opacity: 1,
	trigger_ids: ["sun", "moon"]
});


const logoDay_nightToDayTransition = new BackDropStateTransition({
	transition_id: 'logoDay_nightToDayTransition', 
	old_state: 'night', 
	new_state: 'day', 
	new_src: null, 
	new_x_pos: null, 
	new_y_pos: null, 
	new_x_scale: null, 
	new_y_scale: null, 
	new_background_color: null,
	new_opacity: 1,
	trigger_ids: ["sun", "moon"]
});


logoDay.addStateTransition(logoDay_dayToNightTransition);
logoDay.addStateTransition(logoDay_nightToDayTransition);

backDropBackground.addElement(logoDay);



const logoNight = new BackDropElement({
	id: 'logoNight',
	curr_state: 'day',
	src: 'res/logoDark.png',
	x_pos: backDropBackground.getWidth()*0.39,
	y_pos: backDropBackground.getWidth()*0.05,
	width: "22%",
	height: "25%",
	x_scale: 1,
	y_scale: 1,
	opacity: 0
});

const logoNight_dayToNightTransition = new BackDropStateTransition({
	transition_id: 'logoNight_dayToNightTransition', 
	old_state: 'day', 
	new_state: 'night', 
	new_src: null,
	new_x_pos: null,
	new_y_pos: null,
	new_x_scale: null,
	new_y_scale: null,
	new_background_color: null,
	new_opacity: 1,
	trigger_ids: ["sun", "moon"]
});


const logoNight_nightToDayTransition = new BackDropStateTransition({
	transition_id: 'logoNight_nightToDayTransition', 
	old_state: 'night', 
	new_state: 'day', 
	new_src: null, 
	new_x_pos: null, 
	new_y_pos: null, 
	new_x_scale: null, 
	new_y_scale: null, 
	new_background_color: null,
	new_opacity: 0,
	trigger_ids: ["sun", "moon"]
});


logoNight.addStateTransition(logoNight_dayToNightTransition);
logoNight.addStateTransition(logoNight_nightToDayTransition);

backDropBackground.addElement(logoNight);




document.getElementById('BackDropParent').addEventListener("backDropStateChange", function(e) {
	
	if(page_state === "day" && e.detail.new_state === "night") {
		page_state = e.detail.new_state;
		setPageToDark();
	}
	else if(page_state === "night" && e.detail.new_state === "day") {
		page_state = e.detail.new_state;
		setPageToLight();
	}
})

function setPageToLight() {
	header.classList.remove('dark');
	header.classList.add('light');

	for (let i = 0; i < buttons.length; i++) {
		buttons[i].classList.remove('dark');
		buttons[i].classList.add('light');
	}
}

function setPageToDark() {
	header.classList.remove('light');
	header.classList.add('dark');

	for (let i = 0; i < buttons.length; i++) {
		buttons[i].classList.remove('light');
		buttons[i].classList.add('dark');
	}
}