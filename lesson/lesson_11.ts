// Function overloading
function addNew(a: number, b: number): number;

function addNew(a: string, b: string): string;
function addNew(a: any, b: any) {
    return a + b;
}
const age = !!1;
// @ts-ignore
const arr1 = new Set([1, 2, 2, 4]); // => {1, 2, 4}
// @ts-ignore
const arr2 = new Set([2, 4, 5, 2]); // => {2, 4, 5}
const million = 1_000_000_000;
// console.log(">>> check add new: ", addNew(6, 9), addNew("Duc Anh", " Le Kha"));

console.log(">>> check age: ", age);

console.log(arr1);
console.log([...arr1]);
const findDuplicateInTwoArr = [...arr1].filter((item) => arr2.has(item));
console.log(findDuplicateInTwoArr);

console.log(million);

class Person {
    private _fullName: string;

    constructor(_fullName: string) {
        this._fullName = _fullName;
    }
    set fullName(_fullName: string) {
        this._fullName = _fullName;
    }
    get fullName(): string {
        return this._fullName;
    }
}
abstract class Employee {
    constructor(private firstName: string, private lastName: string) {}

    public abstract getSalary(): number;

    public get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    public output(test: string): string {
        return test;
    }
}
class Contractor extends Employee {
    getSalary(): number {
        return 0;
    }
}
