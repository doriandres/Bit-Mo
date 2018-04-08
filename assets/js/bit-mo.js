// Put all the needed code for the app here
var getElm = function(id){
	return document.getElementById(id);
};
var screen = getElm("screen");
var oneBtn = getElm("oneBtn");
var zeroBtn = getElm("zeroBtn");
var plusBtn = getElm("plusBtn");
var lessBtn = getElm("lessBtn");
var divideBtn = getElm("divideBtn");
var multiplyBtn = getElm("multiplyBtn");
var deleteBtn = getElm("deleteBtn");
var cleanBtn = getElm("acBtn")

var addClick = function(elm, fn){
	elm.addEventListener("click", fn);
};

var addOneToScreen = function(){
	screen.value += "1";
}
var addZeroToScreen = function(){
	screen.value += "0";	
}
var addPlusToScreen = function(){
	screen.value += "+";
}
var addLessToScreen = function(){
	screen.value += "-";
}
var addDivideToScreen = function(){
	screen.value += "/";
}
var addMultiplyToScreen = function(){
	screen.value += "*";
}
var deleteFromScreen = function(){
	screen.value = screen.value.replace(/.$/,'');
}
var cleanScreen = function(){
	screen.value = '';
}

var initBtnEvents = (function(){	
	addClick(oneBtn, addOneToScreen);
	addClick(zeroBtn, addZeroToScreen);
	addClick(plusBtn, addPlusToScreen);
	addClick(lessBtn, addLessToScreen);
	addClick(divideBtn, addDivideToScreen);
	addClick(multiplyBtn, addMultiplyToScreen);
	addClick(deleteBtn, deleteFromScreen);
	addClick(cleanBtn, cleanScreen);
})();