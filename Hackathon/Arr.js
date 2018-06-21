let arr = ["World", "Hello"]
let count = 0;
let num = 0;
let max = arr[0].length
arr.sort();
for(let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  count = arr[i].length;

  if(count > max) {
    max = count;
    num = 1;
  }
  else if(count == max) {
    num++;
  }

}
console.log("there are " + num + " that share the same max length.")
console.log("biggest word is " + max);  
