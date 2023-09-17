const sum = (x: number, y: number): number => {
    return x + y;
};

console.log("check sum = " + sum(1, 10));

// union type
const addNumberOrString1 = (a: number | string, b: number | string, c?: boolean) => {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    throw new Error("Parameters must be numbers or strings");
};

console.log(">>> check: ", addNumberOrString1("Le Kha", "Duc Anh"));

// aliases
type firstType = number | string;
const addNumberOrString2 = (a: firstType, b: firstType, c: boolean = false) => {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    throw new Error("Parameters must be numbers or strings");
};
console.log(">>> check: ", addNumberOrString2("Le Kha", "Duc Anh"));
