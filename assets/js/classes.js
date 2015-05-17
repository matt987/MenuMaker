/**
*
* Meal class
*
**/
function Meal(id, name, description, calories, image) {
	this.id = id;
	this.name = (name == undefined ? "" : name); 
	this.description = (description == undefined ? "" : description); 
	this.calories = (calories == undefined ? 0 : calories); 
	this.image = (image == undefined ? "" : image);
	this.draw = function() {
		var buffer = [];
		buffer.push('<div data-key="' + this.id + '">');
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
		var buffer = [];
		buffer.push('<div id="menu1" class="single-menu">');
		buffer.push('	<table border="0">');
		buffer.push(this.drawTableHead());
		buffer.push(this.drawBreakfastRow());
		buffer.push(this.drawCollationRow(true));
		buffer.push(this.drawLunchRow());
		buffer.push(this.drawCollationRow(false));
		buffer.push(this.drawDinnerRow());
		buffer.push(this.drawTotalRow());
		buffer.push('	</table>');
		buffer.push(this.drawButtons());
		buffer.push('</div>');
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
		buffer.push('<td class="breakfast-head">' + domIds.breakfast.tableTitle + '</td>');
		for (var i = 0; i < this.days.length; i++) {
			var day = this.days[i];
			buffer.push('<td class="breakfast-cell">' + day.breakfast.draw() + '</td>');
		};
		buffer.push('</tr>');
		return buffer.join("");
	};
	this.drawLunchRow = function() {
		var buffer = [];
		buffer.push('<tr class="meal-cell" >');
		buffer.push('<td class="lunch-head">' + domIds.lunch.tableTitle + '</td>');
		for (var i = 0; i < this.days.length; i++) {
			var day = this.days[i];
			buffer.push('<td class="lunch-cell">' + day.lunch.draw() + '</td>');
		};		
		buffer.push('</tr>');
		return buffer.join("");
	};	
	this.drawDinnerRow = function() {
		var buffer = [];
		buffer.push('<tr class="meal-cell" >');
		buffer.push('<td class="dinner-head">' + domIds.dinner.tableTitle + '</td>');
		for (var i = 0; i < this.days.length; i++) {
			var day = this.days[i];
			buffer.push('<td class="dinner-cell">' + day.dinner.draw() + '</td>');
		};		
		buffer.push('</tr>');		
		return buffer.join("");
	};
	this.drawCollationRow = function(first) {

		var buffer = [];
		buffer.push('<tr>');
		buffer.push('<td  class="collation-head">' + domIds.collation.tableTitle + '</td>');	
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
			buffer.push('<td  class="total-cell">' + day.totalCalories() + '</td>');
		};		
		buffer.push("</tr>");
		return buffer.join("");
	}	

	this.drawButtons = function() {
		var buffer = [];
        buffer.push('<div class="col-md-6 buttons-bar col-md-offset-6">');
		buffer.push('<a href="#" class="myButton">' + domIds.menu.resetButton + '</a>');
		buffer.push('<a href="#" class="myButton">' + domIds.menu.saveButton + '</a>');
		buffer.push('<a href="#" class="myButton">' + domIds.menu.printButton + '</a>');
        buffer.push('</div>');
        return buffer.join("");
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
	this.breakfast = (breakfast instanceof BreakFast ? breakfast : new BreakFast());
	this.lunch = (lunch instanceof Lunch ? lunch : new Lunch());
	this.dinner = (dinner instanceof Dinner ? dinner : new Dinner());
	this.first_collation = (first_collation instanceof Collation ? first_collation : new Collation());
	this.second_collation = (second_collation instanceof Collation ? second_collation : new Collation());
	this.totalCalories = function() {
		return this.breakfast.calories + this.lunch.calories + this.lunch.calories + this.first_collation.calories + this.second_collation.calories;
	}

	this.draw = function() {
		var buffer = [];
		return buffer.join("")

	}
}










