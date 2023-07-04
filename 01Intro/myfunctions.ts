function addTwo(num: number) : number{
    return num + 2
}

function getUpper(val: string){
    return val.toUpperCase()
}

function signUp(name: string, email: string, isPaid: boolean){

}
let loginUser = (name: string, email: string, isPaid: boolean = false) => {

}

const heros = ['thor', 'siderman', 'ironman']

heros.map((hero): string => {
    return 'hero is ${hero}'
})

function consoleError(errmsg: string): void{
    console.log(errmsg);
}

//the function is never read
function handleError(errmsg: string): never{
    throw new Error(errmsg);
}

let myValue = addTwo(5);
getUpper("kk")
signUp("Mihret", "mfs@fs.com", true)
loginUser("mi", "kfk")

export {}