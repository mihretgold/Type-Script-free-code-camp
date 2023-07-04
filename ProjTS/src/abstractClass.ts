//cant create object from i
abstract class TakePhoto{
    constructor(public cameraMode: string, public filter: string){}

    abstract getSepia(): void
    getReelTime(): number{
        return 9
    }
}

class Insta extends TakePhoto{
    constructor(public cameraMode: string, public filter: string, public burst: number){
        super(cameraMode, filter)
    }

    getSepia(): void{
        console.log("Sepia");
        
    }

    
}
const mer = new Insta("mermer", "Test", 3)
