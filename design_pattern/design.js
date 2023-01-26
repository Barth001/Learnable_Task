class Telephone{
    constructor(){
        this._observers = Set()
    }

    addPhoneNumber(phoneNumber){
        this._observers.push(phoneNumber)

        return () => {
            this._observers.filter(num => num !== phoneNumber);
        }
    }

    removePhoneNumber(phoneNumber){
        let observers = this._observers.filter(num => num !== phoneNumber)
        this._observers = observers
    }

    dailPhoneNumber(phoneNumber){
        let isAvailable = this._observers.includes(phoneNumber);
        if (isAvailable)
        console.log(`Now Dialling ${phoneNumber}`);
    }
    
}

class Observer{

}