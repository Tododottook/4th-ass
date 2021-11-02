function  Dowry() {
  var num1 = Number(document.getElementById("education_level").value);
  console.log(num1);
  var result = 100;
  result *= num1;

  var num2 = Number(document.getElementById("family_worth").value);

  result *= num2;
  

  var num3 = document.getElementsByClassName('skills');
  for (i = 0; i < 4; i++) {
    if (num3[i].checked === true) {
      result += parseFloat(num3[i].value);
    }
  }

  var num4 = document.forms.age;
  for (i = 0; i < num4.length; i++) {
    if (num4[i].checked) {
      result *= parseFloat(num4[i].value);
    }
  }

  var num5 = document.getElementsByClassName('reputation');
  console.log(num5);
  for (i = 0; i < 2; i++) {
    if (num5[i].checked === true) {
      result *= parseFloat(num5[i].value);
    }
  }
  if (num5[2].checked === true){
    result -= parseFloat(num5[2].value);
  }
  localStorage.setItem("result", result);
  return false;
}


function calculate(name){
  return "Grooms name"+ name;
 }
 let calculate=(name,price)=>{
   return 'Grooms name ${name}. Grooms price {price}' ; 
   
   price = 100; 
 }
 let a= 'Grooms name $(name). Grooms price ${price}'; 
 
 while(name!=empty && price!=empty){
   price = ((Number(price)*educ.value*worth.value)+caste.value+skills.value)*age.value;
 }  
 

const startingBid = document.getElementById("startingbid"); 
const skills = document.getElementsByClassName("skills"); 

const calculate = () => {
    let price = Number(startingBid.value) 
    price = getCheckboxValuesForLoop(skills, price)
}


const getCheckboxValuesForLoop = (html_collection, price) => { 
	for (let i=0; i < html_collection.length; i++) {  
		if (html_collection[i].checked && Number.isInteger(Number(html_collection[i].value))) {
			price = price + Number(html_collection[i].value)
		}
		else if (html_collection[i].checked && !Number.isInteger(html_collection[i].value)) {
			price = price * Number(html_collection[i].value)
		}
	}
	return price;
} 

const startingBid = document.getElementById("startingbid"); 
const skills = document.getElementsByClassName("skills"); 

const calculate = () => {
    let price = Number(startingBid.value) 
    price = getCheckboxValuesReduce(skills, price)
}
const reducer = (accumulator, item) => {
    return accumulator + Number(item.value);
}
const filteration = (item) => {
    return item.checked;
}


const startingBid = document.getElementById("startingbid"); 
const age = document.getElementsByName("age"); 

const calculate = () => {
    let price = Number(startingBid.value); 
    price = getRadioValue(age, price);
const getRadioValue = (node_list, price) => {  
    node_list.forEach(item => {
        if (item.checked) {
            price = price * Number(item.value)
        }
    })
    return price;
}
}


const startingBid = document.getElementById("startingbid");
const age = document.getElementsByName("age"); 

const calculate = () => {
    let price = Number(startingBid.value); 
    price = getRadioValue(age, price);
}
const getRadioValue = (node_list, price) => {  
    node_list.forEach(item => {
        if (item.checked) {
            price = price * Number(item.value)
        }
    })
    return price;
}

var tag = document.getElementById('demo');
var button = document.button('button');
button.addEventListener('click', function(){
<span id="res"></span>
});
