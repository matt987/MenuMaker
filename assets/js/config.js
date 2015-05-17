// NO MODIFICAR database
//Esta variable es la base de datos, no modificar
var database = {meals: [],menus: []}; 

var domIds = {
	meal: {id: "meal-list"},
	breakfast: {id: "breakfast-list", title: "Desayuno", tableTitle: "Desayuno 50 Kcal"},
	lunch: {id: "lunch-list", title: "Almuerzo", tableTitle: "Comida 80 Kcal"},
	dinner: {id: "dinner-list", title: "Cena", tableTitle: "Cena 70 Kcal"},
	menu: { id: "menu-list", 
			totalHead :"Total Kcal", 
			resetButton: '<i class="fa fa-cog fa-spin"></i> Resetear/limpiar', 
			printButton: '<i class="fa fa-print"></i> Imprimir', 
			saveButton: '<i class="fa fa-floppy-o"></i> Guardar'},
	collation: {tableTitle: "Colación"}
}

//url de las imagenes de las comidas
var images_url = 'assets/images/meals/'; 

//Esta variable tiene la lista de los desayunos que se van a mostrar para poder agregar al menu
var breakfasts = [
	{name:"Un desayuno", description: "", calories: 6, image: images_url + "desayuno1.png"},
	{name:"Un desayuno", description: "", calories: 6, image: images_url + "desayuno2.png"},
	{name:"Un desayuno", description: "", calories: 6, image: images_url + "desayuno1.png"},
	{name:"Un desayuno", description: "", calories: 6, image: images_url + "desayuno2.png"},
	{name:"Un desayuno", description: "", calories: 6, image: images_url + "desayuno1.png"},
	{name:"Un desayuno", description: "", calories: 6, image: images_url + "desayuno2.png"},
	{name:"Un desayuno", description: "", calories: 6, image: images_url + "desayuno1.png"}
]

//Esta variable tiene la lista de los almuerzos que se van a mostrar para poder agregar al menu
var lunches = [
	{name:"Comida", description: "", calories: 8, image: images_url + "comida1.png"},
	{name:"Comida", description: "", calories: 8, image: images_url + "comida2.png"},
	{name:"Comida", description: "", calories: 8, image: images_url + "comida1.png"},
	{name:"Comida", description: "", calories: 8, image: images_url + "comida2.png"},
	{name:"Comida", description: "", calories: 8, image: images_url + "comida1.png"},
	{name:"Comida", description: "", calories: 8, image: images_url + "comida2.png"},
	{name:"Comida", description: "", calories: 8, image: images_url + "comida1.png"}
]

//Esta variable tiene la lista de las cenas que se van a mostrar para poder agregar al menu
var dinners = [
	{name:"Cena", description: "", calories: 3, image: images_url + "cena1.png"},
	{name:"Cena", description: "", calories: 3, image: images_url + "cena2.png"},
	{name:"Cena", description: "", calories: 3, image: images_url + "cena1.png"},
	{name:"Cena", description: "", calories: 3, image: images_url + "cena2.png"},
	{name:"Cena", description: "", calories: 3, image: images_url + "cena1.png"},
	{name:"Cena", description: "", calories: 3, image: images_url + "cena2.png"},
	{name:"Cena", description: "", calories: 3, image: images_url + "cena1.png"}
]


//Esta variable tiene la lista de colaciones, actualmente solo se maneja una para todos los menus
var collations = [
	{name:"7 onzas de leche", description: "", calories: 1, image: ""}
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
