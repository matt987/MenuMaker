$(document).ready(function() {
	loadToDB();
	drawMealsList();
	drawMenus();
	$('body').on('click', '.menuAction', function (e){
		e.preventDefault();
        Menu.doAction($(this).data("id"), $(this).data("action"));
        drawMenus();
    });
	$('body').on('click', '.mealToAdd', function (e){
		e.preventDefault();
		Menu.addMeal(1, $(this).data("key"), 1);
        drawMenus();
    });    
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
	$("#" + domIds.meal.id).html(buffer.join(""));
	for (var i = database.meals.length - 1; i >= 0; i--) {
		$("#" + database.meals[i].domListId).append(database.meals[i].draw());
	};
}


function drawMenus() {
	var buffer = [];
	for (var i = 0; i < database.menus.length; i++) {
		buffer.push(database.menus[i].draw());
	};
	$("#" + domIds.menu.id).html(buffer.join(""));
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
	var collation = new Collation(key, c.name, c.description, c.calories, c.image);
	database.meals.push(collation)	

	for (var i = 0; i < menus.length; i++) {
		var days = [];
		for (var j = 0; j < menus[i].days.length; j++) {
			var day = new Day(j+1,menus[i].days[j], null, null, null, collation, collation);
			days.push(day);
		};
		var key = database.menus.length + 1;
		var menu = new Menu(key, menus[i].name, days);
		database.menus.push(menu);
	};	

}
