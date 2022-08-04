{
    let arr=[1,2,3,4,5,6,7,8,9,10,11,12]
    let odds=arr.filter(arr=>arr%2)                       //odd numbers
    console.log(odds);
}

{
    var arr=[1,2,3,4,5,6,7,8,9]
    let sum=0;                                    //sum of arrays
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    console.log(sum);
    }
      
                
      {
        let num = [,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let result = [];
function isPrime(num) {
  if(num < 2) return false;

  for (let i = 2; i< num; i++){
    if(num % i == 0){
      return false;
    }
  }
  return true;                                 //prime numbers
}
num.forEach(function (element) {
  const item = isPrime(element);
  if (item) {
    result.push(element);
  }
});
console.log(result);
      }


{
  function checkPalindrome(string) {
 const len = string.length;
for (let i = 0; i < len / 2; i++) {
if (string[i] !== string[len - 1 - i]) {                     //palindrome
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
const string = prompt('Enter a string: ');
const value = checkPalindrome(string);
console.log(value);

}
{
  function titleCase(str) {
    return str
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}
console.log(titleCase("I'm a little tea pot")); // caps in array

}
{
  function median  (a1, a2) {
    let x = a1.concat(a2);
    x.sort(function (a,b) {
      return a - b;
    });
    let len = x.length;
    
    return len%2 === 0 ? (x[Math.floor(len/2)-1] + x[Math.ceil(len/2)])/2 : x[Math.floor(len/2)];
  
  }
  
  let a = [0,2,3,5,9];                                          
  let b = [1,4];
  console.log(median(a,b));                                           //median of two sorted array

   
}
{
  let chars = ['A', 'B', 'A', 'C', 'B'];               //remove duplicates from an array
let uniqueChars = [...new Set(chars)];

console.log(uniqueChars);
}
{
  const rotate = (arr, count = 1) => {
    return [...arr.slice(count, arr.length), ...arr.slice(0, count)];
  };
  
  const arr = [1,2,3,4,5];
  
  console.log(rotate(arr, 1));  
  console.log(rotate(arr, 2));  
  console.log(rotate(arr, -2));                   //roatate of k arrays
  console.log(rotate(arr, -1)); 
}


                              //using arrow functions
   
   
                              {
     numbers = (l, r) => {
      // l and r are any given numbers
      var x=[];                                 //odd numbers
      var i=l;
      while(x.push(i++)<r){};
      return x;        
    }


console.log(numbers(10, 19));
  }   
    
  
  {
    sum = (a, b) => {
      return(a+b)
    }                                       //sum of array
      x= sum(34,87)
      console.log(x)
  }
  {
    {
       titleCase = (str)=> {
        return str
            .split(' ')
            .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    }
    console.log(titleCase("I'm a little tea pot"));           // caps in array
    
    }
  }
  {
    {
     checkPalindrome=(string) =>{
     const len = string.length;
    for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {                     //palindrome
                return 'It is not a palindrome';
            }
        }
        return 'It is a palindrome';
    }
    const string = prompt('Enter a string: ');
    const value = checkPalindrome(string);
    console.log(value);
    
  }
  }