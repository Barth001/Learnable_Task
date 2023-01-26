class Telephone{
    constructor(){
        this._dataBase = Set()
    }

    addPhoneNumber(phoneNumber){
        this._dataBase.push(phoneNumber)
    }

    removePhoneNumber(phoneNumber){
        this._dataBase = this._dataBase.filter(num => num !== phoneNumber)
    }

    dialPhoneNumber(phoneNumber){
        let isAvailable = this._dataBase.includes(phoneNumber);
        if (isAvailable)
        console.log(`Now Dialling ${phoneNumber}`);
    }

    notifyObserver(args){
        this._observers.forEach(observer => {
            observer(args)
        });
    }
    
}

// Observer class
class Observer{
    constructor(){
        this._observers = []
    }

    addObserver(observer){
        this._observers.push(observer)
    }
}