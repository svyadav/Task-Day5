
//Question 1-a:
//Anonymous Function
//Print odd numbers from array

const a=function(arr){
    for(let i=0;i<arr.length;i++){

        if(arr[i]%2 !=0){
        console.log(arr[i]); 
        }
    };

};
a([1,2,3,4,5,6,7,8,9,10]);



//IIFE Function
//Print odd numbers from array

((arr)=>{
    for(let i=0;i<arr.length;i++){

        if(arr[i]%2 !=0){
        console.log(arr[i]); 
        }
    }
})([1,2,3,4,5,6,7,8,9,10]);




//Question 1-b:
//Anonymous Function
//Convert all the strings to title caps in a string array

const cap=function(arr){
    // arr=arr.toLowerCase().split("index");
 for(let i=0;i<arr.length;i++){
     arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].toLowerCase().slice(1);
 }
 return arr;

}
;
console.log(cap(["RAHUL","virat","sachin","rohit"])); 



//IIFE FUNCTION

((arr)=>{
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].toLowerCase().slice(1);
    }
    console.log(arr);


})(["RAHUL","virat","sachin","rohit"]);







//Question 1-c:
//Anonymous Function
//Sum of aray

const b=function(arr){
    var sum=0;
    for(var i=0;i<arr.length;i++){
    sum+=arr[i]; 
    }
    return sum;
}
let total=b([5,10,5,6,8,9]);
console.log(`sum of number is : ${total}`);


//IIFE Function
//Sum of aray

((arr)=>{
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    console.log(`Total of array is : ${sum}`);

})([5,10,5,6,8,9]);






//Question 1-d:
//Anonymous Function
//Return all the prime numbers in an array

const pm=function(arr){
    let primenumber=[];
    for(let num of arr){
        let isprime=true;
        for(let i=2;i<num;i++){
            if(num%i==0){
                isprime=false;
                break;
            }
        }
        if(isprime==1 && num!=1){
            primenumber.push(num);
        }


    }
    return primenumber.join(",");


}
console.log(pm([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]));


//IIFE Function
//Return all the prime numbers in an array

((arr)=>{
    let primenumber=[];
    for(let num of arr){
        let isprime=true;
        for(let i=2;i<num;i++){
            if(num%i==0){
                isprime=false;
                break;
            }
        }
        if(isprime && num!=1){
            primenumber.push(num);
        }


    }
    console.log(primenumber.join(","));

})([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]);




//Question 1-e;
//Anonymous Functions
//Return all the palindromes in an array

const pal=function(arr){
    let palindrome=[]
    for(var j of arr){
        var ispalin=true;
        var len=j.length;
        for(var i=0;i<len/2;i++){
            if(j[i]!=j[len -1 -i]){
                ispalin=false;
                break;
            }
        }
            if(ispalin==1){ 

                palindrome.push(j);
        }
    }
    return palindrome.join(",");
}
console.log(pal(["sachin","madam","rahul","dad","mom"]));





//IIFE Function
//Return all the palindromes in an array 

((arr)=>{
    let palindrome=[]
    for(var j of arr){
        var ispalin=true;
        var len=j.length;
        for(var i=0;i<len/2;i++){
            if(j[i]!=j[len -1 -i]){
                ispalin=false;
                break;
            }
        }
            if(ispalin==1){ 

                palindrome.push(j);
        }
    }
    console.log(palindrome.join(","));

})(["sachin","madam","rahul","dad","mom"]);




//Question 1-g;
//Anonymous Functions
//Remove duplicates from an array

const diff=function(array){
    const unique=[];
    for(let j of array){
        if(!unique.includes(j)){
            unique.push(j);
        }
    }
    return unique;

}
console.log(diff([1,2,3,4,2,4,9]));


//IIFEFunctions
//Remove duplicates from an array

((arr)=>{
    const unique=[];
    for(let j of arr){
        if(!unique.includes(j)){
            unique.push(j);
        }
      
    }
    console.log(unique);
   

})([1,2,3,4,2,4,9]);




//Question 1-h;
//Anonymous Functions
//Rotate an array by k times
const rotate=function(arr,k){
    for(let i=0;i<k;i++){
        let temp=arr[0];
        for(let j=0;j<arr.length;j++){
            arr[j]=arr[j+1];
        }
        arr[arr.length -1]=temp;
    }
    return arr;

}
console.log(rotate([1,2,3,4,5,6],3));




//IIFEFunctions
//Rotate an array by k times

((arr,k)=>{
    for(let i=0;i<k;i++){
     let temp=arr[0];
        for(let j=0;j<arr.length;j++){
            arr[j]=arr[j+1];
            }
        arr[arr.length -1]=temp;
         }
         console.log(arr);


})([1,2,3,4,5,6],3);

