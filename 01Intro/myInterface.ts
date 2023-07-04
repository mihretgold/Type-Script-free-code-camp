interface User{
    readonly dbId: number
    email: string,
    userId: number
    googleId?: string
    // startTrail: () => string 
    startTrail(): string 
    getCoupon(couponname: string, value: number): number

}
interface User{
    gihubToken: string
}

interface Admin extends User{
    role: "admin" | "ta" | "learner"
}

const mihret: Admin = {dbId: 22, email: "m@m.com", userId: 2323, role: "admin", gihubToken: "github", startTrail: () => {
    return "trail started"
}, getCoupon:( name: "midid", val: 2) => {
    return 10
} }
mihret.email = "mi@im.com"

export{}