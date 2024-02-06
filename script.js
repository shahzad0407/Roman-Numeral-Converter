const input = document.getElementById("number");
const button = document.getElementById("convert-btn");
const output = document.getElementById("output");

button.onclick = check;
function check(){
  let string = "";
  if(input.value == ""){
    output.innerText = "Please enter a valid number";
  }else if(input.value <= 0){
    output.innerText = "Please enter a number greater than or equal to 1";
  }else if(input.value >= 4000){
    output.innerText = "Please enter a number less than or equal to 3999";
  }else{
    let i = input.value;
    
    while(i>0){
      while(i < 4 && i>=1){
      string += "I";
      i--;
    }while(i<5 && i>=4){
      string += "IV";
      i-=4;
    }while(i<9 && i>=5){
      string += "V";
      i-=5;
    }while(i<10 && i>=9){
      string += "IX";
      i-=9;
    }while(i<40 && i>=10){
      string += "X";
      i-=10;
    }while(i<50 && i>=40){
      string += "XL";
      i-=40;
    }while(i<90 && i>=50){
      string += "L";
      i-=50;
    }while(i<100 && i>=90){
      string += "XC";
      i-=90;
    }while(i<400 && i>=100){
      string += "C";
      i-=100;
    }while(i<500 && i>=400){
      string += "CD";
      i-=400;
    }while(i<900 && i>=500){
      string += "D";
      i-=500;
    }while(i<1000 && i>=900){
      string += "CM";
      i-=900;
    }while(i<4000 && i>=1000){
      string += "M";
      i-=1000;
    }
    }
    output.innerText = string;
  }
}