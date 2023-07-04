const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number{
    return val
}
function identityTwo(val:any): any{
    return val
}
function identityThree<Type>(val:Type): Type{
    return val
}
function identityFour<T>(val:T): T{
    return val
}

interface Bottle{
    brand: string,
    type: number
}

identityFour<Bottle>({brand: "yes", type:10})

function getSearchProducts<T>(products: T[]):T{
    // so some database operations
    
    return products[0]
}

const getMoreSearchProd = <T,>(products: T[]): T => {
    const myIndex = 0
    return products[0]
}

interface Database{
    connection: string,
    username: string,
    password: string
}

// function anotherFunction<T, U extends number>(valOne:T, valTwo :U):object{
//     return{
//         valOne,
//         valTwo
//     }
// }

function anotherFunction<T, U extends Database>(valOne:T, valTwo :U):object{
    return{
        valOne,
        valTwo
    }
}
// anotherFunction(3, "4")

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}
