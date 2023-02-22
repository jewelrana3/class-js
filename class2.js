
class TeamMember{
    name;
    location;
    constructor(name,location){
        this.name = name;
        this.location = location;
    }
    providedFeedback(){
        console.log(`${this.name} the student inspire side `)
    }
}

class Instructor extends TeamMember {
  
    degingation='web course side'
    team = 'web development team'
    constructor(name,location,tech){
        super(name,location)
        this.tech = tech;
    }
    startSaportSassion(time){
        console.log(`have a new line time ${time}`)
    }
    createQuiz(module){
        console.log(`quiz is a very deficalt side${module}`)
    }
    
}
class Devoloper extends TeamMember{
 
    degingation='web course side Devopment '
    team = 'web development team'
    tech;
    constructor(name,location,tech){
        super(name,location);
        this.tech = tech;
    }
    devoloperFeature(feature){
        console.log(`have a new devoloper feature ${feature}`)
    }
    release(version){
        console.log(`quiz is a very deficalt side releae a video${version}`)
    }
   
}
class JobPlacement extends TeamMember {
  
    degingation='Job placement condas'
    team = 'web development team'
    tech;
    constructor(name,location,tech){
        super(name,location)
        this.tech = tech;
    }
    provideResume(feature){
        console.log(`have a new devoloper provideResume ${feature}`)
    }
    inspireStudent(version){
        console.log(`quiz is a very deficalt side inspireStudent${version}`)
    }
   
}
const alia = new Devoloper('juyel','alomdanga','rect');
console.log(alia);

// const mama = new JobPlacement('kaka','dhaka','js');
// console.log(mama)