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

// var test = [12,12,34,542,35,2];

// var v = 234;




//console.log(AddToFront(test, v));
// Pop Front

//Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
function popFront(arr){
    for(var i = 0; i < arr.length-1; i++){
        arr[i] = arr[i+1];
        
    }
    arr.pop();
    return arr;
}

// console.log(popFront(test));
// Insert At

// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods.\

//You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).


function insertAt(arr, index, val){
    for(var i = arr.length-1; i>=index; i--){

        arr[i+1]=arr[i];
    }
    arr[index] = val;
    return arr;
}

// x = insertAt(test,3,3);

// console.log(x)

// Remove At

// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). 
//Think of popFront(arr) as equivalent to removeAt(arr,0).

function removeAt(arr, index){
    var array = arr;
    if (index == 0){
        return popFront(array);
    }
    else if(index == arr.length-1){
        return arr.pop();
    }
    else{
        for(var i = index; i<arr.length; i++){
            arr[i] = arr[i+1];
        }
        return arr.pop();
    }



}
// x = [0,1,2,3,4,5]
// removeAt(x,6);
// console.log(x);
// removeAt(x,0);
// console.log(x);
// removeAt(x,2)
// console.log(x)

// Swap Pairs

// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. 
//For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.

function swapPairs(arr){
    
        for( var i = 0; i<=arr.length-2; i+=2){
            temp = arr[i+1];
            arr[i+1] = arr[i];
            arr[i] = temp;
        }
        return arr;
    
}
// console.log(swapPairs([0,1,2,3,4,5]));
// console.log(swapPairs([0,1,2,3,4,5,6]));

// Remove Duplicates

// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates.
// Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, 
//do this without using any built-in array methods.

function removeDuplicates(arr){
    var current= null;
    for( var i = 0; i < arr.length; i++ ){
        

        if ( arr[ i ] == current){
            removeAt(arr, i);
            i-=1;
        }
        current = arr[i];
    }
    return arr;
}   
// console.log(removeDuplicates([1,2,2,2,7,7,7,7,7,7,7,7,7,7,7, 7])

// Second: Solve this without using any nested loops.