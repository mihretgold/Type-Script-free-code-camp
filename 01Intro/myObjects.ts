
function createUser({name: string, isPaid: boolean}){}

createUser({name: "Mihret", isPaid:true})

function createUserCourse1() : {}{
    return {name: "Mihret", isPaid:true}
}

function createUserCourse2() : {name: string, isPaid: boolean}{
    return {name: "Mihret", isPaid:true}
}

// type alias and readonly
type User = {
    readonly _id: string;
    name: string;
    email: string;
    isAlive: boolean;
    //makes the creditcard not required when creating a type User
    creditcard?: number;
}

function create (user: User){

}
// create({_id: "",name: "", email: "", isAlive: true})

let myUser: User ={
_id: '1234',
name: 'Mihret',
email: 'm@sd.com',
isAlive: true

}

myUser.email = "mih@email.con"
// myUser._id = "efef" read only can't be assigned

type cardNumber = {
    cardnumber: string
}

type cardDate= {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}


export{}