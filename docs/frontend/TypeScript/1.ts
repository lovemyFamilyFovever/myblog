

interface iNum {
    a: number;
    b: string | number;
}

function test<T extends U, U>(a: T, b: U): U {
    return b
}