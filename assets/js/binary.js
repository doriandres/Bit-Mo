var Binary  = function(num){
  var number; // Decimal reference number

  /*
    Returns the Binary number
    Can be used to set a new Binary value
  */
  this.val = function(val){

    /*
      If the function receives a parameter a new value will be set
    */
    if(val && !isNaN(val)){ // isNaN checks if val is not a number
        for(var i = 0 ; i < val.length; i++){ // If the val is a number we still have to check if it is binary
          var currentNumber = val[i];
          if(currentNumber != 1 || currentNumber != 0){ // If val contains a number different from 1 or 0 nothing is gonna happen
            return false;
          }
        }

        number = parseInt(val, 2); // Set the decimal reference number
    }else{
      /*
        If the function does not receive a parameter the binary value will be returned
      */
        return number.toString(2);
    }
  };


  /*
    Converts the Binary value to decimal base
    returns the decimal reference value
  */
  this.toDecimal = function(){
    return number;
  };

  /*
    Converts the Binary value to octal base
  */
  this.toOctal = function(){
    return number.toString(8);
  };

  /*
    Converts the Binary value to hexadecimal base
  */
  this.toHex = function(){
    return number.toString(16);
  };

  /*
    Adds a Binary to the current Binary
    Returns the Binary object
  */
  this.add = function(bNum){
    number += bNum.toDecimal();
    return this;
  }

  /*
    Substracts a Binary to the current Binary
    Returns the Binary object
  */
  this.substract = function(bNum){
    number -= bNum.toDecimal();
    return this;
  }

  /*
    Divides the current Binary using another Binary
    Returns the Binary object
  */
  this.divide = function(bNum){
    number /= bNum.toDecimal();
    return this;
  }

  /*
    Multiplies a Binary to the current Binary
    Returns the Binary object
  */
  this.multiply = function(bNum){
    number *= bNum.toDecimal();
    return this;
  }

  this.val(num); // Init the value with the parameters
};
