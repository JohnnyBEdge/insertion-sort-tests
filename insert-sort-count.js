const insertionSort = (arr) => {
    let outter = 0;
    let inner = 0;
        for(i = 1; i < arr.length; i++){
            console.log(arr)
            outter++
            let curr = arr[i]; 
            let prev = i-1; 
            while(prev >= 0 && arr[prev] > curr){
                inner++
                arr[prev + 1] = arr[prev];
                prev--;
            }
            console.log(prev)
        arr[prev +1] = curr
        }
        console.log("outter: ", outter);
        console.log("inner: ", inner);
        console.log(arr);
        return arr

    } 

    insertionSort([1,2,3,4,5])
    insertionSort([10,1,3,5,4,6,7])
    insertionSort([5,4,3,2,1])