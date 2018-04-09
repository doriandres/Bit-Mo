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
var cleanBtn = getElm("acBtn");
var equalBtn = getElm("equalsBtn");
var decBtn = getElm("decBtn");
var octBtn = getElm("octBtn");
var hexBtn = getElm("hexBtn")

var getScreenLastChar = function(){
	return screen.value[screen.value.length - 1];
};

var changeScreenLastChar = function(char){
	screen.value = screen.value.replace(/.$/, char);
};

var addClick = function(elm, fn){
	elm.addEventListener("click", fn);
};

var removeClick = function(elm, fn){
	elm.removeEventListener("click", fn);
};

var addOneToScreen = function(){
	screen.value += "1";
};

var addZeroToScreen = function(){
	screen.value += "0";	
};

var addSymbolToScreen = function(symbol){
	var lastChar = getScreenLastChar();
	if(isNaN(lastChar)){
		changeScreenLastChar(symbol);
	}else{
		screen.value += symbol;
	}
};

var addPlusToScreen = function(){
	if(screen.value){
		var symbol = "+";
		addSymbolToScreen(symbol);	
	}	
};

var addLessToScreen = function(){	
	if(screen.value){
		var symbol = "-";
		addSymbolToScreen(symbol);	
	}	
};

var addDivideToScreen = function(){
	if(screen.value){
		var symbol = "/";
		addSymbolToScreen(symbol);	
	}	
};

var addMultiplyToScreen = function(){
	if(screen.value){
		var symbol = "*";
		addSymbolToScreen(symbol);	
	}
};

var deleteFromScreen = function(){
	changeScreenLastChar("");
};

var initBtnEvents = function(){	
	addClick(oneBtn, addOneToScreen);
	addClick(zeroBtn, addZeroToScreen);
	addClick(plusBtn, addPlusToScreen);
	addClick(lessBtn, addLessToScreen);
	addClick(divideBtn, addDivideToScreen);
	addClick(multiplyBtn, addMultiplyToScreen);
	addClick(deleteBtn, deleteFromScreen);
	addClick(cleanBtn, cleanScreen);
	addClick(equalBtn, getResult);
	addClick(decBtn, getDec);
	addClick(octBtn, getOct);
	addClick(hexBtn, getHex);
};

var cleanScreen = function(){
	removeEvents();
	screen.value = '';
	initBtnEvents();
};

var isValidExpression = function(){
	if(!!(screen.value && !isNaN( getScreenLastChar()))){
		if(!isNaN(screen.value[0])){
			return true;
		}
	}
	return false;
}

var removeEvents = function(){
	removeClick(oneBtn, addOneToScreen);
	removeClick(zeroBtn, addZeroToScreen);
	removeClick(plusBtn, addPlusToScreen);
	removeClick(lessBtn, addLessToScreen);
	removeClick(divideBtn, addDivideToScreen);
	removeClick(multiplyBtn, addMultiplyToScreen);
	removeClick(deleteBtn, deleteFromScreen);	
	removeClick(equalBtn, getResult);
	removeClick(decBtn, getDec);
	removeClick(octBtn, getOct);
	removeClick(hexBtn, getHex);
};

var performCalculation = function(binaries, operations){
	var binary = new Binary(binaries[0]);
	for(var i = 1; i < binaries.length ; i++){
		var nextBinary =  new Binary(binaries[i]);
		var currentOperation = operations[i-1];
		switch(currentOperation){
			case "+":
				binary.add(nextBinary);
				break;
			case "-":
				binary.substract(nextBinary);
				break;
			case "*":
				binary.multiply(nextBinary);
				break;
			case "/":
				binary.divide(nextBinary);
				break;
		}
	}
	return binary.val();
};

var getResult = function(){
	if (isValidExpression()){		
		var binaryExpressions = screen.value.split(/[\+\-\*\/]/);
		var operations = screen.value.split(/[01]+/);
		if(!operations[0]){
			operations.shift();
		}		
		operations.pop();
		if(operations && operations.length){
			screen.value = performCalculation(binaryExpressions, operations);	
		}else{
			screen.value = binaryExpressions[0];
		}		
	}else{
		screen.value = "ERROR";
		removeEvents();
	}
};

var getDec = function(){
	removeEvents();
	getResult();
	var binary = new Binary(screen.value);
	screen.value = binary.toDecimal();
};

var getOct = function(){
	removeEvents();
	getResult();
	var binary = new Binary(screen.value);
	screen.value = binary.toOctal();	
};

var getHex = function(){
	removeEvents();
	getResult();
	var binary = new Binary(screen.value);
	screen.value = binary.toHex();
};

initBtnEvents();