var ch =Number(prompt("Enter Your Choice: "));
 switch(ch){
 case 1:
 class Accholder{
 constructor(accnum,name,age,balance){
 this.accnum = accnum;
 this.name = name;
 this.age = age;
 this.balance = balance;
 }
 display(){
 console.log("Account Number: "+this.accnum);
 console.log("Name: "+this.name);
 console.log("Age: "+this.age);
 console.log("Balance: "+this.balance);
 }
 }
 var obj1 = new Accholder(123456789123,"Piyush",20,20000000);
 obj1.display();
 var obj2 = new Accholder(924456749423,"Shon",21,30000000);
 obj2.display();
 break;
 case 2:{
 class Calculator{
 constructor(length,width){
 this.length = length;
 this.width = width;
 }
 }
 class rectArea extends Calculator{
 constructor(length,width,radius){
 super(length,width);
 this.radius = radius;
 }
 displayAreaRect(){
 var area = this.length*this.width;
 console.log("Area of the Reactangle is: "+area);
 }
 }
 class circleArea extends rectArea{
 displayAreaCircle(){
 var res = 3.14*this.radius*this.radius;
 console.log("Area of the Circle is: "+res);
 }
 }
 var obj1 = new circleArea(2,2,2);
 obj1.displayAreaRect();
 obj1.displayAreaCircle();
 break;
 }
 case 3:{
 class CheckNum{
 constructor(num1,num2){
 this.num1 = num1;
 this.num2 = num2;
 }
 }
 class CheckNeonSpy extends CheckNum{
 constructor(num1,num2){
 super(num1,num2);
 }
 CheckNeon(){
 var res = 0;
 var rem = 0;
 var org = this.num1;
 var sqr = this.num1*this.num1;
 while(sqr != 0 ){
 rem = sqr%10;
 res = res + rem;
 sqr = Math.floor(sqr/10);
 }
 if(res == org){
 console.log("Entered Number, "+org+" is a Neon Number.");
 }
 else{
 console.log("Entered Number, "+org+" is not a Neon Number.");
 }
 }
 CheckSpy(){
 var res = 0;
 var res1 = 1;
 var rem = 0;
 var org = this.num2;
 var num = this.num2;
 while(num != 0 ){
 rem = num%10;
 res = res + rem;
 res1 = res1*rem;
 num = Math.floor(num/10);
 }
 if(res == res1){
 console.log("Entered Number, "+org+" is a Spy Number.");
 }
 else{
 console.log("Entered Number, "+org+" is not a Spy Number.");
 }
 }
 }
 var obj1 = new CheckNeonSpy(9,1124);
 obj1.CheckNeon();
 obj1.CheckSpy();
 break;
 }
 }
