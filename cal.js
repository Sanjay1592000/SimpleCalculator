let number1 = document.getElementById("value1");
let number2 = document.getElementById("value2");
let disp = document.getElementById("output");
class Cal 
{
    constructor ( num1, num2)
    {
        this.num1 = num1;
        this.num2 = num2;
    }
    add()
    {
        return this.num1 + this.num2;
         
    }
    minus()
    {
        return this.num1 - this.num2;
         
    }
    multi()
    {
        return this.num1 * this.num2;
         
    }
    divi()
    {
        let dav;
        dav = this.num1 / this.num2;
        return "The answer is "+dav+" The divident is "+ this.num1 +" The divisor is "+ this.num2;
    }
    mod()
    {
        return this.num1 % this.num2;     
    }
    equals()
    {
        if(this.num1 == this.num2)
        {
            return "the numbers are equals";
        }
        else if(this.num1 > this.num2)
        {
            return "the largest number is number1";
        }
        else
        {
            return "the largest number is number2";
        }
    }
    pow()
    {
        let x;
        x = Math.pow(this.num1,this.num2);
        return "The answer is "+ x +" The base value is "+ this.num1 +" The power value is "+ this.num2;    
    }
    square()
    {
        let x,y;
        x = Math.sqrt(this.num1);
        y = Math.sqrt(this.num2);
        return "The sqrt of first number is "+ x +" and the second number is "+ y;   
    }
}
function adding()
{
    let a,b,sum;
    a = parseFloat(number1.value);
    b = parseFloat(number2.value);
    sum = new Cal(a,b);
    document.getElementById("output").innerHTML = sum.add(a,b);
}
function subing()
{
    let a,b,sum;
    a = parseFloat(number1.value);
    b = parseFloat(number2.value);
    sum = new Cal(a,b);
    document.getElementById("output").innerHTML = sum.minus(a,b);    
}
function multing()
{
    let a,b,sum;
    a = parseFloat(number1.value);
    b = parseFloat(number2.value);
    sum = new Cal(a,b);
    document.getElementById("output").innerHTML = sum.multi(a,b);
}
function divide()
{
    let a,b,sum;
    a = parseFloat(number1.value);
    b = parseFloat(number2.value);
    sum = new Cal(a,b);
    document.getElementById("output").innerHTML = sum.divi(a,b);
}
function printval()
{
    let a,b,sum;
    a = parseFloat(number1.value);
    b = parseFloat(number2.value);
    sum = new Cal(a,b);
    document.getElementById("output").innerHTML = sum.equals(a,b);    
}
function modi()
{
    let a,b,sum;
    a = parseFloat(number1.value);
    b = parseFloat(number2.value);
    sum = new Cal(a,b);
    document.getElementById("output").innerHTML = sum.mod(a,b);
}
function power()
{
    let a,b,sum;
    a = parseFloat(number1.value);
    b = parseFloat(number2.value);
    sum = new Cal(a,b);
    document.getElementById("output").innerHTML = sum.pow(a,b);
}
function sqrt()
{
    let a,b,sum;
    a = parseFloat(number1.value);
    b = parseFloat(number2.value);
    sum = new Cal(a,b);
    document.getElementById("output").innerHTML = sum.square(a,b);    
}
function clean1()
{
    document.getElementById("value1").value="   ";
}
function clean2()
{
    document.getElementById("value2").value="   ";
}
function cleanall()
{
    document.getElementById("value1").value="   ";
    document.getElementById("value2").value="   ";
    document.getElementById("output").innerHTML="   ";
}
