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
                //curr acts a temporary holder/what we're looking to place. 
                //start curr at index 1 since we consider index 0 to be sorted already
                //bc of this, it runs n-1 times, but essentially the same as n
                let curr = arr[i]; //1
                //prev is what we compare curr against
                let prev = i-1; //0
                //prev >= 0 is the sentinel, its a value that stops the while loop
                //this will run as long as the prev value is bigger than the current
                while(prev >= 0 && arr[prev] > curr){
                    //if prev is bigger than curr,
                    //prev gets shifted over one to the right
                    arr[prev + 1] = arr[prev];
                    //when prev goes below 0, the while loop stops
                    prev--;
                }
                //if our conditions are met, we
                //placing it 1 step in front of where we stopped.
                //curr is placed 1 step in front of where we stopped bc we reduced prev in the while loop 
            arr[prev +1] = curr
            }
            return arr
        }   
    
    module.exports = insertionSort 
    
    
      