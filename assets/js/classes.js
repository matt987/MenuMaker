/**
*
* Meal class
*
**/
function Meal(id, name, description, calories, image, className) {
	this.id = id;
	this.name = (typeof(name) == "undefined" ? "" : name); 
	this.description = (typeof(description) == "undefined" ? "" : description); 
	this.calories = (typeof(calories) == "undefined" ? 0 : calories); 
	this.image = (typeof(image) == "undefined" ? "" : image);
	this.className = className;
	this.draw = function(menu_id, day_id) {
		var data = "";
		if (typeof(menu_id) != 'undefined'){
			data = 'data-menu="' + menu_id + '" data-day="' + day_id + '"'
		}
		var buffer = [];
		buffer.push('<div ' + data + ' data-class="' + this.className + '" data-key="' + this.id + '" class="mealToAdd draggable drag-drop">');
		buffer.push('	<span class="name-meal">');
		buffer.push(this.name);
		buffer.push('	</span>');
		if (typeof(this.image) == 'string' && this.image.length > 0) {			
			buffer.push('	<img style="width:80px;" src="' + this.image + '" alt="' + this.name + '">');
		}
		buffer.push('</div>');
		return buffer.join("");
	} 
}

Meal.findById = function(meal_id) {
	for (var i = 0; i < database.meals.length; i++) {
		if (database.meals[i].id == parseInt(meal_id)) {
			return database.meals[i];
		}
	};
}


/**
*
* BreakFast class
*
**/
function BreakFast(id, name, description, calories, image) {
	Meal.call(this, id, name, description, calories, image, domIds.breakfast.className);
	this.domListId = domIds.breakfast.id;
}
BreakFast.prototype = Object.create(Meal.prototype);    
BreakFast.prototype.constructor = BreakFast;


/**
*
* Lunch class
*
**/
function Lunch(id, name, description, calories, image) {
	Meal.call(this, id, name, description, calories, image, domIds.lunch.className);
	this.domListId = domIds.lunch.id;
}
Lunch.prototype = Object.create(Meal.prototype);    
Lunch.prototype.constructor = Lunch;


/**
*
* Dinner class
*
**/
function Dinner(id, name, description, calories, image) {
	Meal.call(this, id, name, description, calories, image, domIds.dinner.className);
	this.domListId = domIds.dinner.id;
}
Dinner.prototype = Object.create(Meal.prototype);    
Dinner.prototype.constructor = Dinner;


/**
*
* Collation class
*
**/
function Collation(id, name, description, calories, image) {
	Meal.call(this, id, name, description, calories, image, domIds.collation.className);
	this.draw = function() {
		return this.name;
	}
}
Collation.prototype = Object.create(Meal.prototype);    
Collation.prototype.constructor = Collation;

/**
*
* Menu class
*
**/
function Menu(id, name,days) {
	this.id = id;
	this.name = name;
	this.days = days;
	this.domListId = domIds.menu.id;

	this.draw = function() {
		var buffer = [];
		buffer.push('<div id="menu1" class="single-menu">');
		buffer.push(this.drawTable());
		buffer.push(this.drawButtons());
		buffer.push('</div>');
		return buffer.join("");
	}

	this.drawTable = function() {
		var buffer = [];
		buffer.push('	<table border="0">');
		buffer.push(this.drawTableHead());
		buffer.push(this.drawBreakfastRow());
		buffer.push(this.drawCollationRow(true));
		buffer.push(this.drawLunchRow());
		buffer.push(this.drawCollationRow(false));
		buffer.push(this.drawDinnerRow());
		buffer.push(this.drawTotalRow());
		buffer.push('	</table>');
		return buffer.join("");
	}

	this.drawTableHead = function() {
		var buffer = [];
		buffer.push('<tr>');
		buffer.push('<td  class="menu-name">' + this.name + '</td>');
		for (var i = 0; i < this.days.length; i++) {
			var day = this.days[i];
			buffer.push('<td class="menu-cell" data-id="' + day.id + '">' + day.name + '</td>');
		};
		buffer.push('</tr>');
		return buffer.join("");
	}

	this.drawBreakfastRow = function() {
		var buffer = [];
		buffer.push('<tr class="meal-cell" >');
		buffer.push('<td class="breakfast-head meal-head">' + domIds.breakfast.tableTitle + '</td>');
		for (var i = 0; i < this.days.length; i++) {
			var day = this.days[i];
			buffer.push('<td data-class="' + domIds.breakfast.className + '" data-menu="' + this.id + '" data-day="' + day.id + '" class="breakfast-cell dropzone">' + day.breakfast.draw(this.id, day.id) + '</td>');
		};
		buffer.push('</tr>');
		return buffer.join("");
	};
	this.drawLunchRow = function() {
		var buffer = [];
		buffer.push('<tr class="meal-cell" >');
		buffer.push('<td class="lunch-head meal-head">' + domIds.lunch.tableTitle + '</td>');
		for (var i = 0; i < this.days.length; i++) {
			var day = this.days[i];
			buffer.push('<td  data-class="' + domIds.lunch.className + '" data-menu="' + this.id + '" data-day="' + day.id + '"  class="lunch-cell dropzone">' + day.lunch.draw(this.id, day.id) + '</td>');
		};		
		buffer.push('</tr>');
		return buffer.join("");
	};	
	this.drawDinnerRow = function() {
		var buffer = [];
		buffer.push('<tr class="meal-cell" >');
		buffer.push('<td class="dinner-head meal-head">' + domIds.dinner.tableTitle + '</td>');
		for (var i = 0; i < this.days.length; i++) {
			var day = this.days[i];
			buffer.push('<td  data-class="' + domIds.dinner.className + '" data-menu="' + this.id + '" data-day="' + day.id + '" class="dinner-cell dropzone">' + day.dinner.draw(this.id, day.id) + '</td>');
		};		
		buffer.push('</tr>');		
		return buffer.join("");
	};
	this.drawCollationRow = function(first) {

		var buffer = [];
		buffer.push('<tr>');
		buffer.push('<td  class="collation-head meal-head">' + domIds.collation.tableTitle + '</td>');	
		for (var i = 0; i < this.days.length; i++) {
			var day = this.days[i];
			var collation = first ? day.first_collation.draw() : day.second_collation.draw();
			buffer.push('<td class="collation-cell">' + collation + '</td>');
		};	
		buffer.push('</tr>');
		return buffer.join("");
	}	

	this.drawTotalRow = function() {
		var buffer = [];
		buffer.push("<tr>");
		buffer.push('<td  class="total-name">' + domIds.menu.totalHead + '</td>')		
		for (var i = 0; i < this.days.length; i++) {
			var day = this.days[i];
			console.log(day.totalCalories() + " >>>>>>>>>>>");
			buffer.push('<td  class="total-cell">' + day.totalCalories() + '</td>');
		};		
		buffer.push("</tr>");
		return buffer.join("");
	}	

	this.drawButtons = function() {
		var buffer = [];
        buffer.push('<div class="col-md-10 buttons-bar col-md-offset-2">');
        buffer.push('<div class="trash col-md-4">' + domIds.menu.trash +'</div>')
		buffer.push('<a href="#" data-id="' + this.id + '" data-action="clear" class="myButton menuAction">' + domIds.menu.resetButton + '</a>');
		buffer.push('<a href="#" data-id="' + this.id + '" data-action="save" class="myButton menuAction">' + domIds.menu.saveButton + '</a>');
		buffer.push('<a href="#" data-id="' + this.id + '" data-action="print" class="myButton menuAction">' + domIds.menu.printButton + '</a>');
        buffer.push('</div>');
        return buffer.join("");
	}

}

Menu.findById = function(menu_id) {
	for (var i = 0; i < database.menus.length; i++) {
		if (database.menus[i].id == parseInt(menu_id)) {
			return database.menus[i];
		}
	};
}

Menu.clear = function(menu_id) {
	var c = collations[0];
	var collation;
	for (var i = database.meals.length - 1; i >= 0; i--) {
		if (database.meals[i] instanceof Collation) {
			collation = database.meals[i];
			break;
		}
	};
	for (var i = 0; i < database.menus.length; i++) {
		var menu = database.menus[i];
		if (menu.id === parseInt(menu_id)){
			var days = [];
			for (var j = 0; j < menu.days.length; j++) {
				var day = new Day(j+1,menu.days[j].name, null, null, null, collation, collation);
				days.push(day);
			};
			menu.days = days;
			break;
		}
	};
}

Menu.save = function(menu_id) {
	// var menu = Menu.findById(menu_id);
	var menu = Menu.findById(menu_id);
	var form = [];
	form.push('<form action="' + url_actions.saveMenu + '">');
	form.push('<input type="hidden" name="menu" value="' + JSON.stringify(menu)} + '">');
	form.push('</form>');	
	formJquery = $(form.join(""));
	formJquery.submit();	
	// $.ajax({
	//   type: "POST",
	//   url: url_actions.saveMenu,
	//   data: {"menu": JSON.stringify(menu)},
	//   dataType: 'html',
	//   success: function(data) {
	//   	window.location = url_actions.saveMenu
	//   }
	// });
}

Menu.print = function(menu_id) {
	var menu = Menu.findById(menu_id);
	var form = [];
	form.push('<form action="' + url_actions.printMenu + '">');
	form.push('<input type="hidden" name="menu" value="' + JSON.stringify(menu)} + '">');
	form.push('</form>');	
	formJquery = $(form.join(""));
	formJquery.submit();
	// $.ajax({
	//   type: "POST",
	//   url: url_actions.printMenu,
	//   data: {"menu": JSON.stringify(menu)},
	//   dataType: 'html',
	//   success: function(data) {
	//   	window.location = url_actions.printMenu
	//   }	  
	// });
}

Menu.doAction = function(menu_id, action) {
	switch(action) {
    case 'clear':
        Menu.clear(menu_id);
        break;
    case 'save':
        Menu.save(menu_id);
        break;
    case 'print':
    	Menu.print(menu_id);
    	break;
    default:
        return false;
	}
}

Menu.addMeal = function(menu_id, meal_id, day_id) {
	var mealToAdd = Meal.findById(meal_id);
	var menu = Menu.findById(menu_id);
	var day = Day.findInMenu(menu, day_id);
	day.addMeal(mealToAdd);
}

Menu.removeMeal = function(menu_id, meal_id, day_id) {
	var mealToRemove = Meal.findById(meal_id);
	var menu = Menu.findById(menu_id);
	var day = Day.findInMenu(menu, day_id);
	day.removeMeal(mealToRemove);
}


/**
*
* Day class
*
**/
function Day(id, name, breakfast, lunch, dinner, first_collation, second_collation) {
	this.id = id;
	this.name = name;
	this.breakfast = (breakfast instanceof BreakFast ? breakfast : new BreakFast());
	this.lunch = (lunch instanceof Lunch ? lunch : new Lunch());
	this.dinner = (dinner instanceof Dinner ? dinner : new Dinner());
	this.first_collation = (first_collation instanceof Collation ? first_collation : new Collation());
	this.second_collation = (second_collation instanceof Collation ? second_collation : new Collation());
	this.totalCalories = function() {
		return this.breakfast.calories + this.lunch.calories + this.dinner.calories + this.first_collation.calories + this.second_collation.calories;
	}

	this.draw = function() {
		var buffer = [];
		return buffer.join("")

	}

	this.addMeal = function(meal) {	
		if (meal instanceof BreakFast && this.breakfast.id == undefined) {
			this.breakfast = meal;
		}
		if (meal instanceof Lunch && this.lunch.id == undefined) {
			this.lunch = meal;
		}
		if (meal instanceof Dinner && this.dinner.id == undefined) {
			this.dinner = meal;
		}				
	}

	this.removeMeal = function(meal) {
		if (meal instanceof BreakFast) {
			this.breakfast = new BreakFast();
		}
		if (meal instanceof Lunch) {
			this.lunch = new Lunch;
		}
		if (meal instanceof Dinner) {
			this.dinner = new Dinner;
		}			
	}
}

Day.findInMenu = function(menu, day_id) {
	for (var i = 0; i < menu.days.length; i++) {
		if(menu.days[i].id == parseInt(day_id)){
			return menu.days[i];
		}
	};
}










