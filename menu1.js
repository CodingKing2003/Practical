            console.log(`1.compare largest among 3 numbers
2.To display even numbers less than 20.
3.To calculate area of a triangle.
4.To find if the entered year is a leap year or not
5.To display a table of number n.
6.To find the entered number is a perfect number or not.`);
           
            var ch= Number(prompt("enter your choice:"));
            switch(ch)
            {
                case 1: var a,b,c;
                var a= Number(prompt("enter 1st number:"));
                var b= Number(prompt("enter 2nd number:"));
                var c= Number(prompt("enter 3rd number:"));
                if(a>b && a>c)
                {
                    console.log(a+" is largest number");

                }
                else if(a<b && b>c)
                {
                    console.log(b+" is largest");
                    
                }
                else(c>b && c>b)
                {
                    console.log(c+" is largest");
                    
                }
                break;

                case 2: var i;
                        for(i=0; i<20; i++)
                        {
                           if(i%2==0)
                           {
                            console.log(i);
                           }
                        }
                break;
                case 3: var l =Number(prompt("enter length of Triangle "));
                        var h =Number(prompt("enter height of Triangle "));              
                        var area = 0.5*l*h;
                        console.log("AREA of triangle is:"+area);
                break;
                case 4: var yr =Number(prompt("Enter a year:"));
                        if(yr%100==0 && yr%4==0)
                        {
                            console.log("entered year is a leap year");

                        }
                        else
                        {
                            console.log("Entered year is not a leap year");
                        }
                break;
                case 5: var n =Number(prompt("Enter a number of a table to be displayed:"));
                        var i=0;
                        for(i=1;i<11;i++)
                        {
                            console.log(i*n);
                        }
                break;
                case 6: var n =Number(prompt("Enter a number :"));
                        var i,s=0;
                        for(i=1;i<n;i++)
                        {
                           if(n%i==0)
                           {
                            s=s+i;
                           }
                        }
                        if(s==n)
                        {
                            console.log(s+" is a perfect number");

                        }
                        else
                        {
                            console.log(s+" not a perfect number");
                        }


            }
