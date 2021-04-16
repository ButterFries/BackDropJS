/* JS Libraries */
"use strict";

(function(global, document, $) { 

	function BackDropBackground(parent_container_id) {

		this.elements = [];
		
		this.parent_container_id = parent_container_id;
		this.parent_container = document.getElementById(parent_container_id);

		this.init();

		// TODO: create div in parent container & fill width and height

	}

	BackDropBackground.prototype = {

		init: function() {

			var temp = this;
			this.parent_container.style["position"] = "absolute";
			this.parent_container.style["overflow"] = "hidden";

			this.parent_container.addEventListener("backDropClick", function(e) {
				temp.click(e.detail.old_state, e.detail.id, e.detail.backgroundColor);
			})
		},

		addElement: function(new_element) {

			for (var i = 0; i < this.elements.length; i++) {
				
				if (this.elements[i].id == new_element.id) {
					throw "error: id already exists";
				}
				
			}

			const elem = document.createElement("img");
			elem.id = new_element.id;
			elem.src = new_element.src;

			elem.style["width"] = new_element.width;
			elem.style["height"] = new_element.height;
			elem.style["position"] = "absolute";
			elem.style["transform"] += "translateX("+new_element.x_pos+"px)";
			elem.style["transform"] += "translateY("+new_element.y_pos+"px)";
			elem.style["transform"] += "scaleX("+new_element.x_scale+")";
			elem.style["transform"] += "scaleY("+new_element.y_scale+")";
			elem.style["opacity"] = new_element.opacity;

			new_element.setElementId(new_element.id);
			new_element.setParentId(this.parent_container_id);

			// Need to use anomynous function for prototype properties to correctly update
			// Cannot bind the function with elem.addEventListener("click", newElement.onElementClick);
			elem.addEventListener("click", function(e) {
				new_element.onElementClick(e);
			});

			this.elements.push(new_element);

			this.parent_container.appendChild(elem);
		},

		//TODO: deleteElement
		deleteElement: function(id) {

			for (var i = 0; i < this.elements.length; i++) {
				
				if (this.elements[i].id == id) {
					document.getElementById(id).remove();
					this.elements.pop(i);
					return;
				}
				
			}
			throw "error: id not found";
		},


		click: function(old_state, id) {

			for (var i = 0; i < this.elements.length; i++) {
				this.elements[i].stateChange(old_state, id);
			}
			
		},

		setBackgroundColor: function(color) {
			this.parent_container.style["backgroundColor"] = color;
		},

		getHeight: function() {
			return this.parent_container.offsetHeight;
		},
		getWidth: function() {
			return this.parent_container.offsetWidth;
		}

	}


	function BackDropElement(args) {

		this.parent_id = null;

		this.id = args.id;
		this.curr_state = args.curr_state;
		this.src = args.src;
		
		this.x_pos = args.x_pos;
		this.y_pos = args.y_pos;
		
		this.width = args.width;
		this.height = args.height;

		this.x_scale = args.x_scale;
		this.y_scale = args.y_scale;

		this.opacity = args.opacity;

		this.states = [];
	}

	BackDropElement.prototype = {

		setElementId: function(elem_id) {
			this.id = elem_id;
		},

		setParentId: function(parent_id) {
			this.parent_id = parent_id;
		},

		addStateTransition: function(state) {

			for (var i = 0; i < this.states.length; i++) {
				
				if (this.states[i].id == state.id) {
					
					throw "error: state already exists with id \'" + state.id + "\'";
					return;
				}

			}

			this.states.push(state);
		},


		removeStateTransition: function(id) {

			for (var i = 0; i < this.states.length; i++) {

				if (this.states[i].id == id) {
					this.states.pop(i);
					return;
				}

			}

			throw "error: state does not exist with id \'" + id + "\'";

		},


		stateChange: function(old_state, id) {

			for (var i = 0; i < this.states.length; i++) {
				if (this.states[i].old_state == this.curr_state) {
					for (var j = 0; j < this.states[i].ids.length; j++) {

						if (this.states[i].ids[j] == id) {

							this.curr_state = this.states[i].new_state;


							this.updateElement(old_state, this.states[i]);


							// Used for developers to add interactions with the background and the webpage
							document.getElementById(this.parent_id).dispatchEvent(new CustomEvent('backDropStateChange', {
								detail: {
									old_state: old_state,
									new_state: this.states[i].new_state,
									elem_id: this.id,
									transition_id: this.states[i].id,
									clicked_elem_id: id
								}
							}));


							return;

						}
					}
				}
			}

		},

		updateElement: function(old_state, new_state) {

			var elem = document.getElementById(this.id);

			elem.style["transition"] = "all 2s ease"
			//elem.toggleClass(old_state, new_state);

			//elem.className = this.id + "-" + old_state;
			elem.style["transform"] = "";

			if (new_state.new_src != undefined && new_state.new_src != null) {
				this.src = new_state.new_src;
				elem.src = this.src;
			}

			if (new_state.new_x_pos != undefined && new_state.new_x_pos != null) {
				elem.style["transform"] += "translateX("+new_state.new_x_pos+"px)";
				this.x_pos = new_state.new_x_pos;
			}
			else
				elem.style["transform"] += "translateX("+this.x_pos+"px)";


			if (new_state.new_y_pos != undefined && new_state.new_y_pos != null) {
				elem.style["transform"] += "translateY("+new_state.new_y_pos+"px)";
				this.y_pos = new_state.new_y_pos;
			}
			else
				elem.style["transform"] += "translateY("+this.y_pos+"px)";


			if (new_state.new_x_scale != undefined && new_state.new_x_scale != null) {
				elem.style["transform"] += "scaleX("+new_state.new_x_scale+")";
				this.x_scale = new_state.new_x_scale;
			}
			else
				elem.style["transform"] += "scaleX("+this.x_scale+")";


			if (new_state.new_y_scale != undefined && new_state.new_y_scale != null) {
				elem.style["transform"] += "scaleY("+new_state.new_y_scale+")";
				this.y_scale = new_state.new_y_scale;
			}
			else
				elem.style["transform"] += "scaleY("+this.y_scale+")";


			if (new_state.new_opacity != undefined && new_state.new_opacity != null) {
				elem.style["opacity"] = new_state.new_opacity;
				this.opacity = new_state.new_opacity;
			}

			if (new_state.new_background_color != undefined && new_state.new_background_color != null) {
				document.getElementById(this.parent_id).style["transition"] = "all 2s ease";
				document.getElementById(this.parent_id).style["backgroundColor"] = new_state.new_background_color;
			}

		},

		onElementClick: function() {
			document.getElementById(this.parent_id).dispatchEvent(new CustomEvent('backDropClick', {
				detail: {
					old_state: this.curr_state,
					id: this.id
				}
			}));

		}


	}


	function BackDropStateTransition(args) {

		this.id = args.transition_id;

		this.old_state = args.old_state;
		this.new_state = args.new_state;
		
		this.new_src = args.new_src;

		this.new_x_pos = args.new_x_pos;
		this.new_y_pos = args.new_y_pos;

		this.new_x_scale = args.new_x_scale;
		this.new_y_scale = args.new_y_scale;

		this.new_background_color = args.new_background_color;

		this.new_opacity = args.new_opacity;

		// Ids that when clicked will cause the state to change
		this.ids = args.trigger_ids;
	}


	global.BackDropBackground = global.BackDropBackground || BackDropBackground;
	global.BackDropElement = global.BackDropElement || BackDropElement;
	global.BackDropStateTransition = global.BackDropStateTransition || BackDropStateTransition;


})(window, window.document, $);