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
    
}

// Observer class
