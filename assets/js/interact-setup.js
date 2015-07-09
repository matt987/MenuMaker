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

function interactSetup () {
  interact('.draggable')
  .draggable({
    inertia: true,
    onmove: dragMoveListener,
    onend: function (event) {
    	var target = event.target;
    	target.style.transform = 'translate(' + event.x0 + 'px, ' + event.y0 + 'px)';
    	drawMealsList();
      drawMenus();
    }
  });
  interact('.dropzone').dropzone({
    ondrop: function (event) {  
      var relatedTargetClass = event.relatedTarget.getAttribute('data-class');
      var targetClass = event.target.getAttribute('data-class');
      if (relatedTargetClass == targetClass){
        var related_menu_id = event.relatedTarget.getAttribute('data-menu');
        var related_day_id = event.relatedTarget.getAttribute('data-day');
        var meal_id = event.relatedTarget.getAttribute('data-key');
        var menu_id = event.target.getAttribute('data-menu');
        var day_id = event.target.getAttribute('data-day');
        var collation = event.target.getAttribute('data-collation');

        if (related_day_id && related_menu_id){
          Menu.removeMeal(related_menu_id, meal_id, related_day_id, collation);
        }
        $(event.relatedTarget).data('menu', menu_id);
        Menu.addMeal(parseInt(menu_id), parseInt(meal_id), parseInt(day_id), collation);
      }
      drawMenus();
    }
  });

  interact('.trash').dropzone({
    ondrop: function (event) {  
      var related_menu_id = event.relatedTarget.getAttribute('data-menu');
      var related_day_id = event.relatedTarget.getAttribute('data-day');
      var meal_id = event.relatedTarget.getAttribute('data-key');
      var collation = event.target.getAttribute('data-collation');
      if (related_day_id && related_menu_id){
        Menu.removeMeal(related_menu_id, meal_id, related_day_id,collation);
      }
      drawMenus();
    }
  });

  window.dragMoveListener = dragMoveListener;  
}  