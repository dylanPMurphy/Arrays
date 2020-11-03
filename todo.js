// console.log("test")

// Push Front

// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

function AddToFront(arr, val) {
    // var temp = arr[0];
    // arr[0] = val;
    for(var i = arr.length-1; i<=0; i--){
        arr[i] = arr[i+1];
    }
    arr[0] = val;
    return arr;
}

var test = [12,12,34,542,35,2];

var v = 234;


var x = AddToFront(test, v);

console.log(x)
// Pop Front

//Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
function popFront(arr){
    for(var i = 0; i < arr.length-1; i++){
        arr[i] = arr[i+1];
    }
    return arr;
}

console.log(popFront(x));
// Insert At

// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
function insertAt(arr, index, val){
    for(var i = arr.length-1; i<=index; i--){
        arr[i] = arr[i+1];
    }
    arr[index] = val;
    return arr;
}

x = insertAt(x,3,3);

console.log(x)

// Remove At

// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).


// Swap Pairs

// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.


// Remove Duplicates

// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.

// Second: Solve this without using any nested loops.