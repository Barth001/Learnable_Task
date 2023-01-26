class Telephone{
    constructor(){
        this._observers = Set()
    }

    addPhoneNumber(){
        this._observers.push(phoneNumber)

        return () => {
            this._observers.filter(num => num !== phoneNumber);
        }
    }

    removePhoneNumber(){}

    dailPhoneNumber(){}
    
}

class Observer{

}