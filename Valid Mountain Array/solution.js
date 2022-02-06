const BreakException = {};

// simple function to find if array is ascending
const isAsc = a => a.slice(1)
                        .map((e,i) => e > a[i])
                        .every(x => x);

// simple function to find if array is descending
const isDesc = a => a.slice(1)
                        .map((e,i) => e < a[i])
                        .every(x => x);

const validMountainArray = (arr) => {
   // insta kill if meets criteria
   if(arr.length <= 2 || isAsc(arr) || isDesc(arr)) return false
   try {
       // flag to find if
       let goingDown = false
       // for each item in array
       arr.forEach((item, i) => {
           // get next item  
           const next = arr[i+1]
           // if not last item
           if(next !== undefined) {
               // if beginning downward slope set flag to true
               if(!goingDown && item > next) goingDown = true
               // if direction is invalid, throw exception to exit forEach
               else if(goingDown && item < next || item === next) throw BreakException
           }
       })
   }
    catch(e) {
        // if not what im waiting for
        if(e !== BreakException) throw e
        // array is invalid
        return false
    }
    return true
}
