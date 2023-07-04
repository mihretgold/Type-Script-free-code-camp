//Tuple
// const user: (string | number)[] = [1, "hc"]
let tUser: [string, number, boolean]
tUser = ["hc", 9, true]
let rgb: [number, number, number] = [255, 123, 112]

type User = [number, string]

const newUser: User = [112, "mi@kd"]

newUser[1] = "hc.com"
// newUser.push(true)

//Enums: for restricted option

enum SeatChoice {
    AISLE = 10,
    MIDDLE = 22, 
    WINDOW, 
    FOURTH
}

const hcSeat = SeatChoice.AISLE

export {}