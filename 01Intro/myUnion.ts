let score: number | string = 33

score = 44
score = "55"

type User = {
    name: string
    id: number
}
type Admin = {
    username: string
    id: number
}

let mihret: User | Admin = {name: 'mihret', id: 445}
mihret = {username: "kl", id: 343}

function getDbId(id: number | string){
    // console.log('DB id is: ${id}');
    if(typeof id === 'string'){
        id.toLowerCase()
    }else{
        id.toFixed()
    }
}

getDbId(3)
getDbId("3")

//array

const data: number[] = [1,2,3]
const data2: string[] = ['1','2','3']
const data3: number[] | string[] = ['1','2','3']
const data4: (number| string)[] = ['1','2',3]

let pi : 3.14 = 3.14
let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle"

export{}