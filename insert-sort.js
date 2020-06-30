//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const insertionSort = (arr) => {
    
//checks for valid input
    if(arr.length === 0){
        throw new Error('Array cannot be empty');
    } else if(!Array.isArray(arr)){
        throw new Error('Input is not an array');
    } else if(arr.some(isNaN)){
        throw new Error('Array should only contain numbers');
    }

        for(i = 1; i < arr.length; i++){
            let curr = arr[i]; //1
            let prev = i-1; //0
            while(prev >= 0 && arr[prev] > curr){
                arr[prev + 1] = arr[prev];
                prev--;
            }
        arr[prev +1] = curr
        }
        return arr
    }   

module.exports = insertionSort 


  