const BreakException = {};

const isAsc = a => a.slice(1)
                        .map((e,i) => e > a[i])
                        .every(x => x);

const isDesc = a => a.slice(1)
                        .map((e,i) => e < a[i])
                        .every(x => x);

const validMountainArray = (arr) => {
   if(arr.length <= 2 || isAsc(arr) || isDesc(arr)) return false
   try {
       let goingDown = false
       arr.forEach((item, i) => {
           const next = arr[i+1]
           if(next !== undefined) {
               if(!goingDown && item > next) goingDown = true
               else if(goingDown && item < next || item === next) throw BreakException
           }
       })
   }
    catch(e) {
        if(e !== BreakException) throw e
        return false
    }
    return true
}
