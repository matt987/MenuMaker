$(document).ready(function() {
	loadToDB();
	drawMealsList();
	drawMenus();
	$('body').on('click', '.menuAction', function (e){
		e.preventDefault();
        Menu.doAction($(this).data("id"), $(this).data("action"));
        drawMenus();
    });

  interactSetup();  
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
  buffer.push('<div class="col-md-3" id="' + domIds.collation.id + '">');
  buffer.push(' <h4 class="title-meal">' + domIds.collation.title + '</h4>');
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
	meals = [[breakfasts, BreakFast], [lunches, Lunch], [dinners, Dinner], [collations, Collation]]
	for (var j = 0; j < meals.length; j++) {
		var specific_meals = meals[j][0];
		var class_name = meals[j][1];
		for (var i = specific_meals.length - 1; i >= 0; i--) {
			var key = database.meals.length + 1;
			var meal = new class_name(key, specific_meals[i].name, specific_meals[i].description, specific_meals[i].calories, specific_meals[i].image, specific_meals[i].second_collation);
			database.meals.push(meal);
		};		
	}


  var collation;
  for (var i = database.meals.length - 1; i >= 0; i--) {
    if (database.meals[i] instanceof Collation && database.meals[i].second_collation) {
      collation = database.meals[i];
      break;
    }
  };

	for (var i = 0; i < menus.length; i++) {
		var days = [];
		for (var j = 0; j < menus[i].days.length; j++) {
			var day = new Day(j+1,menus[i].days[j], null, null, null, null, collation);
			days.push(day);
		};
		var key = database.menus.length + 1;
		var menu = new Menu(key, menus[i].name, days);
		database.menus.push(menu);
	};	

}
