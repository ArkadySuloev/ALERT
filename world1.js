var elem1 = document.getElementById('test') //получаем объект из веб страницы

var elemtext = elem1.innertext// получаем содержимое текста

elem1.innertext = 123 //изменяем содержимое текста

var textbox = document.getElementById('text-box')
var button = document.getElementById('button')

button.onclick = function () {
	alert (textbox.value)
	
}
