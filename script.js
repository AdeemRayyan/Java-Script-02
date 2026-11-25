//chapter 2 to 5 

                //Variable for strings

//Q1.Declare a variable called username

var userName;

//Q2.Declare a variable called myname & assign it to a string that represents your full name

var myName = "Adeem Rayyan";

//Q3.Write script to : Declare a js variable titled message, assign hello world to it and display that in alert box

var message  = "Hello World"
alert(message);

//Q4.Write a script to save students bio data in JS variables and show it in alert box

var studentName = "Adi";
var studentAge = "15 years old";
var studentCertification = "Certified mobile application development";

alert(studentName);
alert(studentAge);
alert(studentCertification);

//Q5.Write a script to display the following alert using one js variable

var text = "PIZZA \n PIZZ \n PIZ \n PI \n P"
alert(text);

//Q6.Script to show text using string concatenation

var emailText = "My email address is"
var email = "workwithadeem@gmail.com"

alert(emailText + " " + email);

//Q7.declare a variable called book and  give it a value A Smarter way to learn java script and show that in alert

var book = "A Smarter Way to Learn Java Script"
alert("I am tring to learn from the book" + " " + book);


//Q8.Display text in browser through JS

document.write("Yah! I can write HTML content through JavaScript");

//Q9. 

var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"

alert(design);

                //Variable for numbers

//Q1.declare a variable called age and assign it to your age ans show it in  alert box

var age = 16 
var ageText = "years old"

alert("I'm "+ age  +" " + ageText);

//Q2.Declare and initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: "You have visited this site N times"

var visitorCount = 14
alert("you have visited this site " + visitorCount +" " + "times")

//Q3.declare a variable called birtyear & assin it to your birth year. show the following message in browser

var birthYear = 2009
document.write("My birth year is " + birthYear);

//Q4.

var visitorName = "John Doe"
var quantityOfProduct = 5
var productTitle = "T-Shirts(s)"

document.write(visitorName + " Ordered " + quantityOfProduct + productTitle + " on XYZ clothing store")

                //Variable name: legal & illegal

//Q1.declare three variable in one statement

var name, f_name, age;

//Q2.Declare 5 legal and 5 illegal variable names

var name, total$, name123, name_2, name_total_$
// var 12name, first-name, email@1, last name, user#&^*, alert

//Q3.Display this n your browser

document.write("<h1> Rules for naming JS variables </h1> <br>");
document.write("Variables name can only contain numbers,$ and _, fr example: $ny_firstVariable <br>");
document.write("Variables must begin with letter,$ and _ , fr example: $name, _name or name <br>");
document.write("variables name are case sensitive <br>")
document.write("variables name shoud nt be JS alerts <br>")


//Math Expressions

//Q1.write a program to add two numbers and show ouput in browser

var num1 = Number(prompt("Enter first number"))
var num2 = Number(prompt("Enter second number"))

var sum = num1 + num2

document.write("The sum of " +num1 +" and " +num2  +" is "+sum )

//Q2.Repeat the task 1 for subtraction, multiplication, division and modulas

//Subtraction

var num1 = Number(prompt("Enter first number"))
var num2 = Number(prompt("Enter second number"))

var sum = num1 - num2

document.write("The value of " +num1 +" and " +num2  +" is "+sum )

multiplication

 var num1 = Number(prompt("Enter first number"))
 var num2 = Number(prompt("Enter second number"))

 var sum = num1 * num2

 document.write("The value of " +num1 +" and " +num2  +" is "+sum )

division

var num1 = Number(prompt("Enter first number"))
 var num2 = Number(prompt("Enter second number"))

 var sum = num1 / num2

 document.write("The value of " +num1 +" and " +num2  +" is "+sum )

modulas

var num1 = Number(prompt("Enter first number"))
var num2 = Number(prompt("Enter second number"))

var sum = num1 % num2

document.write("The modulas of " +num1 +" and " +num2  +" is "+sum )

//Q3.

var num;
document.write("value after variable declaration is " +(typeof num) +"</br>")

num = 5
document.write("Initial Value: " + num + "</br>");

var incrementNumber = num + 1
document.write("Value after increment is: " +incrementNumber +"</br>")

incrementNumber = incrementNumber + 7
document.write("Value after addition is: " +incrementNumber +"</br>")

var decrementtNumber = incrementNumber - 1
document.write("Value after decrement is: " +decrementtNumber +"</br>")

decrementtNumber = decrementtNumber % 3
document.write("The reminder is: " +decrementtNumber)

//Q4.Write a script for movie ticket

var ticketPrice = 600

ticketPrice = ticketPrice*5
document.write("Total cost to buy 5 tickets to a movie is: " +ticketPrice + "PKR")

//Q5.write a script to display multiplication of any tabel

var num = 4;

document.write("<h1>Tabel of 4</h1> <br>")

document.write(num + " * 1 = " + num * 1 + "<br>");
document.write(num + " * 2 = " + num * 2 + "<br>");
document.write(num + " * 3 = " + num * 3 + "<br>");
document.write(num + " * 4 = " + num * 4 + "<br>");
document.write(num + " * 5 = " + num * 5 + "<br>");
document.write(num + " * 6 = " + num * 6 + "<br>");
document.write(num + " * 7 = " + num * 7 + "<br>");
document.write(num + " * 8 = " + num * 8 + "<br>");
document.write(num + " * 9 = " + num * 9 + "<br>");
document.write(num + " * 10 = " + num * 10 + "<br>");

//Q6.The temperature convertor

var celsius = 25
var fahrenheit = (celsius * 9/5) + 32;

document.write(celsius + "°C is " +fahrenheit +"°F <br>");

var fahrenheit2 = 70
var celsius = (fahrenheit2 - 32) * 5/9;
document.write(fahrenheit2 + "°F is " +celsius +"°C");

//Q7.

var priceOfItem1 = 650
var priceOfItem2 = 100
var quantityOfItem1 = 3
var quantityOfItem2 = 7
var shippingCharges = 100

var total = priceOfItem1*quantityOfItem1 + priceOfItem2*quantityOfItem2 + shippingCharges

document.write("<h1>Sopping Cart</h1>");

document.write("Price of item 1 is: " + priceOfItem1 +"<br>");
document.write("quantity of item 1 is: " + quantityOfItem1 +"<br>");
document.write("Price of item 2 is: " + priceOfItem2 +"<br>");
document.write("quantity of item 2 is: " + quantityOfItem2 +"<br>");
document.write("Shipping charges is: " + shippingCharges +"<br><br>");
document.write("Total cost of your order is: " +total);

//Q8.Marks of students

var totalMarks = 980
var obtainedMarks = 804

var calculation = 804/980*100

document.write("Total Marks: " + totalMarks + "<br>");
document.write("Obtained Marks: " + obtainedMarks+"</br>");
document.write("Percentage: " + calculation +"%"+"</br>");

//Q9.currency conversion

var usd = 10
var riyal = 25
var usdRate = 104.80
var riyalRate = 28 

document.write("<h1>Currency in PKR</h1> <br>")
document.write("Total currency in PKR: " + (usd*usdRate + riyal*riyalRate));

Q10.arithmetic

var num_1 = 5
console.log((num_1+5)*10/2);

//Q11.Age CAlculator

var currentYear = 2026;
var birthYear = 2009;

document.write("<h1>Age Calculator</h1> <br>");
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("They are either " + (currentYear - birthYear - 1) + " or " + (currentYear - birthYear) + " years old");

//Q12.The Geometrizer

var radiusOfCircle = 20
var circumference = 2*3.142*20
var areaOfCircle = 3.142*radiusOfCircle*radiusOfCircle

document.write("<h1>The Geometrizer</h1> <br>");
document.write("Radius of circle: " + radiusOfCircle + "<br>")
document.write("circumference of circle: " + circumference + "<br>")
document.write("The area of circle is: " +areaOfCircle)

//Q13.Life time supply calculator

var snackName = "Chocolate Chip";
var currentAge = 15;
var maxAge = 65;
var amountOfSnack = 3;
var total = (maxAge - currentAge)*365*amountOfSnack;

document.write("<h1>The Life Time Supply Calculator</h1> <br>");
document.write("FAvourite Snack: "+snackName + "<br>")
document.write("current age : "+currentAge + "<br>")
document.write("maximum age: "+maxAge + "<br>")
document.write("Amount of snack per day: "+amountOfSnack + "<br>")
document.write("You will need " + total + " " + snackName + " to last you until the ripe old age of " + maxAge);



