// syntigtic suger

class Instructor {
    name;
    degingation='web course side'
    team = 'web development team'
    location;
    constructor(name,location){
        this.name = name;
        this.location =location;
    }
    startSaportSassion(time){
        console.log(`have a new line time ${time}`)
    }
    createQuiz(module){
        console.log(`quiz is a very deficalt side${module}`)
    }
}

const amir = new Instructor('nana','bademaju');
console.log(amir);
amir.startSaportSassion('9:pm');
amir.createQuiz(88)

const bai = new Instructor('babul','dhaka');
console.log(bai)