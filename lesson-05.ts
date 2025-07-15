const sqr = (num: number) => {
    console.log('call')
    return num*num
}
function memoize(sqr){
    let cash = {}
    return function (n) {
        if (cash[n] !== undefined) {
            return cash[n]
        }
        return cash[n] = sqr(n)
    }

}

const memoizedSqr = memoize(sqr)

console.log(memoizedSqr(5))
console.log(memoizedSqr(5))
console.log(memoizedSqr(6))
console.log(memoizedSqr(6))

