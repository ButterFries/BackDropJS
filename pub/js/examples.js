
// EXAMPLE 1 -Creating a background and adding an image
const backDropBackground1 = new BackDropBackground('BackDropParent1');
backDropBackground1.setBackgroundColor("#c2fffd");

// Create a new BackDropElement with initial values
const logo1 = new BackDropElement({
	id: 'logo1',
	curr_state: 'default',
	src: 'res/logoLight.png',
	x_pos: backDropBackground1.getWidth()*0.05,
	y_pos: backDropBackground1.getHeight()*0.1,
	width: "400px",
	height: "250px",
	x_scale: 1,
	y_scale: 1,
	opacity: 1
});
// Create another new BackDropElement
const logo2 = new BackDropElement({
	id: 'logo2',
	curr_state: 'default',
	src: 'res/logoDark.png',
	x_pos: backDropBackground1.getWidth()*0.55,
	y_pos: backDropBackground1.getHeight()*0.35,
	width: "400px",
	height: "250px",
	x_scale: 1,
	y_scale: 1,
	opacity: 1
});

// Adds both logos BackDropElement to the background to be drawn
backDropBackground1.addElement(logo1);
backDropBackground1.addElement(logo2);





// EXAMPLE 2 - Creating a state change
const backDropBackground2 = new BackDropBackground('BackDropParent2');
backDropBackground2.setBackgroundColor("#ffe6a6");

// Create a new BackDropElement
const sun1 = new BackDropElement({
	id: 'sun',
	curr_state: 'state1',
	src: 'res/sun.png',
	x_pos: backDropBackground2.getWidth()*0.05,
	y_pos: backDropBackground2.getHeight()*0.3,
	width: "250px",
	height: "250px",
	x_scale: 1,
	y_scale: 1,
	opacity: 1
});

// Create a new transition between state1 and state2, with the id "sun" being the only trigger
const sunState1ToState2 = new BackDropStateTransition({
	transition_id: 'sunState1ToState2', 
	old_state: 'state1', 
	new_state: 'state2', 
	new_src: null, 
	new_x_pos: backDropBackground2.getWidth()*0.4,
	new_y_pos: 0,
	new_x_scale: 1.5, 
	new_y_scale: 0.5, 
	angle: 90,
	new_background_color: "#f9bfff",
	new_opacity: 0.5,
	trigger_ids: ["sun"]
});

// Create a new transition between state2 and state3
const sunState2ToState3 = new BackDropStateTransition({
	transition_id: 'sunState2ToState3', 
	old_state: 'state2', 
	new_state: 'state3', 
	new_src: null, 
	new_x_pos: backDropBackground2.getWidth()*0.7,
	new_y_pos: backDropBackground2.getHeight()*0.5,
	new_x_scale: 0.5, 
	new_y_scale: 0.5, 
	angle: 180,
	new_background_color: "#bafaff",
	new_opacity: 1,
	trigger_ids: ["sun"]
});

// Create a new transition between state3 and state1
const sunState3ToState1 = new BackDropStateTransition({
	transition_id: 'sunState3ToState1', 
	old_state: 'state3', 
	new_state: 'state1', 
	new_src: null, 
	new_x_pos: backDropBackground2.getWidth()*0.05,
	new_y_pos: backDropBackground2.getHeight()*0.3,
	new_x_scale: 1, 
	new_y_scale: 1, 
	angle: 0,
	new_background_color: "#ffe6a6",
	new_opacity: 1,
	trigger_ids: ["sun"]
});

// Attach all 3 state transitions to the element
sun1.addStateTransition(sunState1ToState2);
sun1.addStateTransition(sunState2ToState3);
sun1.addStateTransition(sunState3ToState1);


// Adds the element to the background
backDropBackground2.addElement(sun1);



//EXAMPLE 3 - Modifying different elements through a state change

const backDropBackground3 = new BackDropBackground('BackDropParent3');
backDropBackground3.setBackgroundColor("#ffadad");

// Create a new BackDropElement
const staticMoon = new BackDropElement({
	id: 'staticMoon',
	curr_state: 'small',
	src: 'res/moon.png',
	x_pos: backDropBackground2.getWidth()*0.05,
	y_pos: backDropBackground2.getHeight()*0.3,
	width: "250px",
	height: "250px",
	x_scale: 1,
	y_scale: 1,
	opacity: 1
});

// Create a new BackDropElement
const animatedLogo = new BackDropElement({
	id: 'animatedLogo',
	curr_state: 'small',
	src: 'res/logoDark.png',
	x_pos: backDropBackground2.getWidth()*0.45,
	y_pos: backDropBackground2.getHeight()*0.2,
	width: "400px",
	height: "250px",
	x_scale: 0.5,
	y_scale: 0.5,
	opacity: 1
});

// Create a new transition which will be added to animatedLogo which uses the id staticMoon as a trigger
const logoSmallToLarge = new BackDropStateTransition({
	transition_id: 'logoSmallToLarge', 
	old_state: 'small', 
	new_state: 'large', 
	new_x_scale: 1.6, 
	new_y_scale: 1.6, 
	trigger_ids: ["staticMoon"]
});

// Create another new transition which will be added to animatedLogo which uses the id staticMoon as a trigger
const logoLargeToSmall = new BackDropStateTransition({
	transition_id: 'logoLargeToSmall', 
	old_state: 'large', 
	new_state: 'small', 
	new_x_scale: 0.5, 
	new_y_scale: 0.5, 
	trigger_ids: ["staticMoon"]
});

// Apply transitions to element animatedLogo
animatedLogo.addStateTransition(logoSmallToLarge);
animatedLogo.addStateTransition(logoLargeToSmall);

// Adds the elements to the background
backDropBackground3.addElement(staticMoon);
backDropBackground3.addElement(animatedLogo);



// Example 4 - State change event listener

const backDropBackground4 = new BackDropBackground('BackDropParent4');
backDropBackground4.setBackgroundColor("#d3ffb5");

// Create a new BackDropElement
const eventSun = new BackDropElement({
	id: 'eventSun',
	curr_state: 'left',
	src: 'res/sun.png',
	x_pos: 0,
	y_pos: backDropBackground2.getHeight()*0.2,
	width: "250px",
	height: "250px",
	x_scale: 1,
	y_scale: 1,
	opacity: 1
});

// Create transitions for eventSun
const sunLeftToRight = new BackDropStateTransition({
	transition_id: 'sunLeftToRight', 
	old_state: 'left', 
	new_state: 'right',
	new_x_pos: backDropBackground2.getWidth()*0.75,
	trigger_ids: ["eventSun"]
});

const sunRightToLeft = new BackDropStateTransition({
	transition_id: 'sunRightToLeft', 
	old_state: 'right', 
	new_state: 'left', 
	new_x_pos: 0,
	trigger_ids: ["eventSun"]
});

eventSun.addStateTransition(sunLeftToRight);
eventSun.addStateTransition(sunRightToLeft);

// Adds the elements to the background
backDropBackground4.addElement(eventSun)

// Add an eventListener for the background, waiting for the event 'backDropStateChange'
document.getElementById('BackDropParent4').addEventListener("backDropStateChange", function(e) {
	
	if(e.detail.new_state === "left") {
		document.getElementById("eventDiv").innerHTML = "left";
	}
	else if(e.detail.new_state === "right") {
		document.getElementById("eventDiv").innerHTML = "right";
	}
})




// Page
document.getElementById("example1jsBtn").addEventListener("click", function(e) {

	document.getElementById("example1jsBtn").classList.add('selected');
	document.getElementById("example1htmlBtn").classList.remove('selected');

	document.getElementById("example1js").classList.remove('hidden');
	document.getElementById("example1js").classList.add('visible');

	document.getElementById("example1html").classList.remove('visible');
	document.getElementById("example1html").classList.add('hidden');

});


document.getElementById("example1htmlBtn").addEventListener("click", function(e) {
	
	document.getElementById("example1htmlBtn").classList.add('selected');
	document.getElementById("example1jsBtn").classList.remove('selected');

	document.getElementById("example1html").classList.remove('hidden');
	document.getElementById("example1html").classList.add('visible');

	document.getElementById("example1js").classList.remove('visible');
	document.getElementById("example1js").classList.add('hidden');

});




document.getElementById("example2jsBtn").addEventListener("click", function(e) {

	document.getElementById("example2jsBtn").classList.add('selected');
	document.getElementById("example2htmlBtn").classList.remove('selected');

	document.getElementById("example2js").classList.remove('hidden');
	document.getElementById("example2js").classList.add('visible');

	document.getElementById("example2html").classList.remove('visible');
	document.getElementById("example2html").classList.add('hidden');

});


document.getElementById("example2htmlBtn").addEventListener("click", function(e) {
	
	document.getElementById("example2htmlBtn").classList.add('selected');
	document.getElementById("example2jsBtn").classList.remove('selected');

	document.getElementById("example2html").classList.remove('hidden');
	document.getElementById("example2html").classList.add('visible');

	document.getElementById("example2js").classList.remove('visible');
	document.getElementById("example2js").classList.add('hidden');

});




document.getElementById("example3jsBtn").addEventListener("click", function(e) {

	document.getElementById("example3jsBtn").classList.add('selected');
	document.getElementById("example3htmlBtn").classList.remove('selected');

	document.getElementById("example3js").classList.remove('hidden');
	document.getElementById("example3js").classList.add('visible');

	document.getElementById("example3html").classList.remove('visible');
	document.getElementById("example3html").classList.add('hidden');

});


document.getElementById("example3htmlBtn").addEventListener("click", function(e) {
	
	document.getElementById("example3htmlBtn").classList.add('selected');
	document.getElementById("example3jsBtn").classList.remove('selected');

	document.getElementById("example3html").classList.remove('hidden');
	document.getElementById("example3html").classList.add('visible');

	document.getElementById("example3js").classList.remove('visible');
	document.getElementById("example3js").classList.add('hidden');

});




document.getElementById("example4jsBtn").addEventListener("click", function(e) {

	document.getElementById("example4jsBtn").classList.add('selected');
	document.getElementById("example4htmlBtn").classList.remove('selected');

	document.getElementById("example4js").classList.remove('hidden');
	document.getElementById("example4js").classList.add('visible');

	document.getElementById("example4html").classList.remove('visible');
	document.getElementById("example4html").classList.add('hidden');

});


document.getElementById("example4htmlBtn").addEventListener("click", function(e) {
	
	document.getElementById("example4htmlBtn").classList.add('selected');
	document.getElementById("example4jsBtn").classList.remove('selected');

	document.getElementById("example4html").classList.remove('hidden');
	document.getElementById("example4html").classList.add('visible');

	document.getElementById("example4js").classList.remove('visible');
	document.getElementById("example4js").classList.add('hidden');

});