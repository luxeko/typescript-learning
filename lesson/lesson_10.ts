// rest parameter
const getTotal = (...numbers: (number | string)[]): number => {
    let total: (number | string) = 0;
    // @ts-ignore
    numbers.forEach(num => total += num)
    return total
}

console.log(">>> check: ", getTotal(10, '20')) // 30
console.log(">>> check: ", getTotal()) // 0
console.log(">>> check: ", getTotal(50, 60)) // 110

const multiply = (n: number, ...m: number[]): number[] => {
    return m.map(x => n * x)
}
console.log(">>> check: ", multiply(10, 1, 2, 3, 4)) // [ 10, 20, 30, 40 ]
