/**
*
* Meal class
*
**/
function Meal(id, name, description, calories, image) {
	this.id = id;
	this.name = name; 
	this.description = description; 
	this.calories = calories; 
	this.image = image;
	this.draw = function() {
		var buffer = [];
		buffer.push('<div data-key="' + this.id + '">');
		buffer.push('	<span class="name-meal">');
		buffer.push(this.name);
		buffer.push('	</span>');
		buffer.push('	<img style="width:80px;" src="' + this.image + '" alt="' + this.name + '">');
		buffer.push('</div>');
		return buffer.join("");
	} 
}


/**
*
* BreakFast class
*
**/
function BreakFast(id, name, description, calories, image) {
	Meal.call(this, id, name, description, calories, image);
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
	Meal.call(this, id, name, description, calories, image);
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
	Meal.call(this, id, name, description, calories, image);
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
	Meal.call(this, id, name, description, calories, image);
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
	this.clear = function() {
		// reset menu
	};
	this.save = function() {
		// save menu
	};
	this.print = function() {
		//print menu
	}

	this.draw = function() {

	}
}


/**
*
* Day class
*
**/
function Day(id, name, breakfast, lunch, dinner, first_collation, second_collation) {
	this.id = id;
	this.name = name;
	this.breakfast = breakfast;
	this.lunch = lunch;
	this.dinner = dinner;
	this.first_collation = first_collation;
	this.second_collation = second_collation;
	this.totalCalories = function() {
		return this.breakfast.calories + this.lunch.calories + this.lunch.calories + this.first_collation.calories + this.second_collation.calories;
	}
}










