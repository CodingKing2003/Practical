const choice=Number(prompt("Enter the choice"));

switch(choice){
    case 1:
        const arr=[];
        for(let i=1;i<=5;i++){
            arr[i]=parseInt(prompt("Enter value"));

        }
        console.log(arr);

        const average=(a)=>{
            let s=0;
            for(let i=1;i<=5;i++){
                s=s+a[i];
            }
            let avg=s/5;
            console.log(avg);
        }

        average(arr);
        break;

    case 2:
        const n=prompt("Enter a number");
        let a=0;
        let b=1;

       const fib=()=>{
        for(let i=0;i<=n;i++){
            console.log(a);
            let c=a+b;
            a=b;
            b=c;

        }
       }

       fib(n);
       break;

    case 3:
        var string=prompt("Enter the string");
       const palindrome=(string)=>{
        let flag=true;
        for(let i=0;i<string.length/2;i++){
            if(string[i]!=string[string.length-i-1]){
                flag=false;
                break;
            }
        }
        if(flag){
            console.log("Palindrome");
        }else{
            console.log("Not palindrome");
        }
       }

       palindrome(string);
       break;

}
