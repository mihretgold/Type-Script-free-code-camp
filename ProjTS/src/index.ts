// class User{
//     email: string
//     private name: string
//     readonly city: string = ""

//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name;
//     }
// }
class User{
   
    readonly city: string = ""
    protected _courseCount: number = 1

    constructor(public email: string, public name: string, private userId: string){

    }

    private deleteToken(){
        console.log("Token deleted");
        
    }

    get getAppleEmail(): string{
        return "apple ${this.email}"
    }

    get courseCount(): number{
        return this._courseCount
    }

    set courseCount(courseNum){
        if(courseNum <= 1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

class SubUser extends User{
    isFamily: boolean = true
    chngeCourseCount(){
        this._courseCount = 4
    }

}

const mihret = new User( "miji", "me", "kok")
// mihret.city = "Addis"
// mihret.deleteToken()