"use strict";
// class User{
//     email: string
//     private name: string
//     readonly city: string = ""
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name;
//     }
// }
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = "";
        this._courseCount = 1;
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return "apple ${this.email}";
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    chngeCourseCount() {
        this._courseCount = 4;
    }
}
const mihret = new User("miji", "me", "kok");
// mihret.city = "Addis"
// mihret.deleteToken()
