var arr = ["vijay", "aniketh", "bharathi", "akash", "deba"];
var x = process.argv.slice(2);
console.log(x);
var size = arr.length;
arr.sort();
console.log(arr);
/*binary_search funcionis used to search the element 
that given by the user by left and right sub arrays */
var binary_search = function(arr, l, r, x) {
  if (r >= l) {
    var mid = Math.ceil( l + (r - l) / 2);

    if (arr[mid] == x) return mid;

    if (arr[mid] > x) return binary_search(arr, l, mid - 1, x);

    else return binary_search(arr, mid + 1, r, x);
  }
  return -1
}

var result = binary_search(arr, 0, size - 1, x);
if (result == -1) {
  console.log("string is not present there");
} else {
  console.log("string is present ");
}
