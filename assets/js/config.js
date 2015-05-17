// NO MODIFICAR database
//Esta variable es la base de datos, no modificar
var database = {meals: [],menus: []}; 

var domIds = {
	breakfast: {id: "breakfast-list", title: "Desayuno"},
	lunch: {id: "lunch-list", title: "Almuerzo"},
	dinner: {id: "dinner-list", title: "Cena"}
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
