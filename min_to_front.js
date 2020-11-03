
//Min to Front

//Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. 
//Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.
function moveToFront(arr, ind){
    temp = arr[ind];
    for(var i = ind; i>=0; i--){
        arr[i] = arr[i-1];
    }
    arr[0] = temp;
    return arr;
}

function minToFront(arr){
    var min = Infinity;
    var minIND = 0;
    for(var i = 0;i<arr.length;i++){
        if (arr[i]<min){
            min = arr[i];
            minIND= i;
        }
    }
    console.log(moveToFront(arr, minIND))
}

array = [12,23,42,35,23,31 ,45623,46,34,635,43,5,2,2,1];

minToFront(array);
