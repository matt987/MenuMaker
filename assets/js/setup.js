$(document).ready(function() {
	loadToDB();
	drawMealsList();
	//	drawMenus();
});

function drawMealsList() {
	var buffer = [];
    buffer.push('<div class="col-md-3" id="' + domIds.breakfast.id + '">');
	buffer.push('	<h4 class="title-meal">' + domIds.breakfast.title + '</h4> ');
	buffer.push('</div>');
	buffer.push('<div class="col-md-3" id="' + domIds.lunch.id + '">');
	buffer.push('	<h4 class="title-meal">' + domIds.lunch.title + '</h4>');
	buffer.push('</div>');
	buffer.push('<div class="col-md-3" id="' + domIds.dinner.id + '">');
	buffer.push('	<h4 class="title-meal">' + domIds.dinner.title + '</h4>');
	buffer.push('</div>  ');
	$("#meal-list").html(buffer.join(""));
	for (var i = database.meals.length - 1; i >= 0; i--) {
		$("#" + database.meals[i].domListId).append(database.meals[i].draw());
	};
}


function drawMenus() {
	var buffer = [];
	buffer.push('<div class="row">');
	buffer.push('<div class="col-md-12">');
	buffer.push('</div>');
	buffer.push('</div>');
	$("#menu-list").html(buffer.join(""));
}

//Carga todos los datos del config.js
function loadToDB() {
	meals = [[breakfasts, BreakFast], [lunches, Lunch], [dinners, Dinner]]
	for (var j = 0; j < meals.length; j++) {
		var specific_meals = meals[j][0];
		var class_name = meals[j][1];
		for (var i = specific_meals.length - 1; i >= 0; i--) {
			var key = database.meals.length + 1;
			var meal = new class_name(key, specific_meals[i].name, specific_meals[i].description, specific_meals[i].calories, specific_meals[i].image);
			database.meals.push(meal);
		};		
	}
	//Esto agrega la primer comida de colacion a la base de datos, no se tienen en cuenta si existieran mas.
	var c = collations[0];
	var key = database.meals.length + 1;
	database.meals.push(new Collation(key, c.name, c.description, c.calories, c.image))	

	for (var i = 0; i < menus.length; i++) {
		var days = [];
		for (var j = 0; j < menus[i].days.length; j++) {
			var day = new Day(j+1,menus[i].days[j]);
			days.push(day);
		};
		var key = database.menus.length + 1;
		var menu = new Menu(key, menus[i].name, days);
		database.menus.push(menu);
	};	

}
