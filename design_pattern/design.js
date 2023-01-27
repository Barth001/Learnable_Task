// Subject
class Telephone{
    constructor(){
        this.dataBase = []
    }

    addPhoneNumber(phoneNumber){
        this.dataBase.push(phoneNumber)
    }

    removePhoneNumber(phoneNumber){
        this.dataBase = this.dataBase.filter(num => num !== phoneNumber)
    }

    dialPhoneNumber(phoneNumber){
        let isAvailable = this.dataBase.includes(phoneNumber);
        if (isAvailable)
        console.log(`Now Dialling ${phoneNumber}`);
    }

    count(){
        return this.dataBase.length;
    }
    
}

// Subject Interface
class SubjectInterface{
    constructor(){
        this.Observers = new Telephone();
    }

    addObserver(observer){
        this.Observers.addPhoneNumber(observer);
    }

    removeObserver(observer){
        this.Observers.removePhoneNumber(observer)
    }

    notify(obs){
        for(var i = 0; i < this.Observers.count(); i+=1){
            this.Observers.getObj(i).update(obs)
        }
    }
}

// Observers Interface

