// NO MODIFICAR database
//Esta variable es la base de datos, no modificar
var database = {meals: [],menus: []}; 

var url_actions = {
	saveMenu: "http://httpbin.org/post",
	printMenu: "http://httpbin.org/post",
}
var domIds = {
	meal: {id: "meal-list"},
	breakfast: {id: "breakfast-list", title: "Desayuno", tableTitle: "Desayuno 50 Kcal", className: "breakfastMeal"},
	lunch: {id: "lunch-list", title: "Almuerzo", tableTitle: "Comida 80 Kcal", className: "lunchMeal"},
	dinner: {id: "dinner-list", title: "Cena", tableTitle: "Cena 70 Kcal", className: "dinnerMeal"},
	menu: { id: "menu-list", 
			totalHead :"Total Kcal", 
			trash: '<i class="fa fa-cog fa-trash"></i> Arrastre aquí para eliminar',
			resetButton: '<i class="fa fa-cog fa-spin"></i> Resetear/limpiar', 
			printButton: '<i class="fa fa-print"></i> Imprimir', 
			saveButton: '<i class="fa fa-floppy-o"></i> Guardar'},
	collation: {id: "collation-list",title: "Colación", tableTitle: "Colación", className: "collationMeal", firstClass: "first", secondClass: "second"}
}

//url de las imagenes de las comidas
var images_url = 'assets/images/meals/'; 

//Esta variable tiene la lista de los desayunos que se van a mostrar para poder agregar al menu
var breakfasts = [
	{name:"Un desayuno 1", description: "", calories: 1, image: images_url + "desayuno1.png"},
	{name:"Un desayuno 2", description: "", calories: 2, image: images_url + "desayuno2.png"},
	{name:"Un desayuno 3", description: "", calories: 3, image: images_url + "desayuno1.png"},
	{name:"Un desayuno 4", description: "", calories: 4, image: images_url + "desayuno2.png"},
	{name:"Un desayuno 5", description: "", calories: 5, image: images_url + "desayuno1.png"},
	{name:"Un desayuno 6", description: "", calories: 6, image: images_url + "desayuno2.png"},
	{name:"Un desayuno 7", description: "", calories: 7, image: images_url + "desayuno1.png"}
]

//Esta variable tiene la lista de los almuerzos que se van a mostrar para poder agregar al menu
var lunches = [
	{name:"Comida 1", description: "", calories: 1, image: images_url + "comida1.png"},
	{name:"Comida 2", description: "", calories: 2, image: images_url + "comida2.png"},
	{name:"Comida 3", description: "", calories: 3, image: images_url + "comida1.png"},
	{name:"Comida 4", description: "", calories: 4, image: images_url + "comida2.png"},
	{name:"Comida 5", description: "", calories: 5, image: images_url + "comida1.png"},
	{name:"Comida 6", description: "", calories: 6, image: images_url + "comida2.png"},
	{name:"Comida 7", description: "", calories: 7, image: images_url + "comida1.png"}
]

//Esta variable tiene la lista de las cenas que se van a mostrar para poder agregar al menu
var dinners = [
	{name:"Cena 1", description: "", calories: 1, image: images_url + "cena1.png"},
	{name:"Cena 2", description: "", calories: 2, image: images_url + "cena2.png"},
	{name:"Cena 3", description: "", calories: 3, image: images_url + "cena1.png"},
	{name:"Cena 4", description: "", calories: 4, image: images_url + "cena2.png"},
	{name:"Cena 5", description: "", calories: 5, image: images_url + "cena1.png"},
	{name:"Cena 6", description: "", calories: 6, image: images_url + "cena2.png"},
	{name:"Cena 7", description: "", calories: 7, image: images_url + "cena1.png"}
]


//Esta variable tiene la lista de colaciones, actualmente solo se maneja una para todos los menus
var collations = [
	{name:"7 onzas de leche", description: "", calories: 1, image: images_url + "colacion1.png"},
	{name:"6 onzas de leche", description: "", calories: 1, image: images_url + "colacion1.png"},
	{name:"5 onzas de leche", description: "", calories: 1, image: images_url + "colacion1.png"},
	{name:"4 onzas de leche", description: "", calories: 1, image: images_url + "colacion1.png"}
]


//Esta variable tiene la lista de menus que se van a mostrar en la pagina
var menus = [
   {
   	name: 'Menu 1',
   	days: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
   },

  {
   	name: 'Menu 2',
   	days: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
   }
]
