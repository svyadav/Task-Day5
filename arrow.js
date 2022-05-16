//Question 3-a
//Print odd numbers in an array
const odd=(arr)=>{
    let oddnumber=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2 !=0){
            oddnumber.push(arr[i]);
        }
    }
    return oddnumber.join(",");

}
console.log(odd([1,2,3,4,5,6,7,8,8]));





//Question 3-b
//Convert all the strings to title caps in a string array

const capital=(arr)=>{
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1).toLowerCase();
    }
    return arr;

}
console.log(capital(["sachin","SAURABH","rohit","rahul"]));




//Question 3-c
//Sum of all numbers in an array

const sum=(num)=>{
    let sumOfNumber=0;
    for(let i=0;i<num.length;i++){
        sumOfNumber=sumOfNumber+num[i];

    }
    return sumOfNumber;

}
console.log(sum([1,6,9,8,7,3,6,8]));




//Question 3-d
//Return all the prime numbers in an array

const p=(array)=>{
    let primeNumber=[];
  
    for(let num of array){
        let isprime=true;
        for(let i=2;i<num;i++){
        if(num%i==0){
            isprime=false;
            break;
        }
    }
        if(isprime && num!=1){
            primeNumber.push(num);
        }
    }
    return primeNumber.join(",");

}
console.log(p([1,23,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]));




//Question 3-e
//Return all the palindromes in an array

const pal=(arr)=>{
    let palindrome=[];
    for(let str of arr){
        let isplain=true;
        let len=str.length;
        for(let i=0;i<len/2;i++){
            if(str[i]!=str[len -1 -i]){
                isplain=false;
                break;
            }
        }
        if(isplain==true){
            palindrome.push(str);
        }
    }
    return palindrome.join(",");

}
console.log(pal(["Sachin","Saurabh","mam","rahul","dad","madam"]));