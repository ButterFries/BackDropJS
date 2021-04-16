# js-library-czarnec8

### Site link: https://backdropjs.herokuapp.com/index.html

### Docs link: https://backdropjs.herokuapp.com/docs.html

# Getting started
To get started with BackDrop, download the library and include the script in your HTML:

```html
<script defer type="text/javascript" src='js/backdrop.js'></script>
```

You may then access the API through creating BackDropBackground, BackDropElement, and BackDropStateTransition objects.

# HTML
```html
<div style="width:1000px; height:400px">
	<div id="BackDropParent" style="width:1000px; height:400px"></div>
</div>
```

# JS
```javascript
// Create a new background.
const background = new BackDropBackground('BackDropParent');
background.setBackgroundColor("#c2fffd");

// Create a new element.
const elem = new BackDropElement({
	id: 'elem',
	curr_state: 'default',
	src: 'res/logoLight.png',
	x_pos: backDropBackground.getWidth()*0.3,
	y_pos: 0,
	width: '400px',
	height: '250px'
});

// Create a new transition.
const elemDefaultToClicked = new BackDropStateTransition({
	transition_id: 'elemDefaultToClicked ', 
	old_state: 'default', 
	new_state: 'clicked',
	new_src: 'res/logoDark.png'
	trigger_ids: ['elem']
});

// Add the transition to the element
elem.addStateTransition(elemDefaultToClicked);

// Add the element to the background
background.addElement(elem);
```


