<?php

var_dump(json_decode($_POST["menu"]));
$menu = json_decode($_POST["menu"]);
foreach ($menu->days as &$day) {
	$return = "Desayuno: " . $day->breakfast->name . ". Almuerzo: " . $day->lunch->name . ". Cena: " . $day->dinner->name . ". <br>";
	echo $return;
}