$(document).ready(function() {
	loadToDB();
	drawMealsList();
	drawMenus();
	$('body').on('click', '.menuAction', function (e){
		e.preventDefault();
        Menu.doAction($(this).data("id"), $(this).data("action"));
        drawMenus();
    });

interact('.draggable')
  .draggable({
    inertia: true,
    onmove: dragMoveListener,
    onend: function (event) {
    	var target = event.target;
    	target.style.transform = 'translate(' + event.x0 + 'px, ' + event.y0 + 'px)';
    	drawMealsList();
    }
  });
interact('.dropzone').dropzone({
  ondrop: function (event) {  
    var meal_id = event.relatedTarget.getAttribute('data-key');
    var menu_id = event.target.getAttribute('data-menu');
    var day_id = event.target.getAttribute('data-day');
    Menu.addMeal(parseInt(menu_id), parseInt(meal_id), parseInt(day_id));
    drawMenus();
  }
});

   function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  // this is used later in the resizing demo
  window.dragMoveListener = dragMoveListener;    
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
