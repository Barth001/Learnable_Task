class Telephone {
    constructor() {
      this.phoneNumbers = new Set();
      this.observers = new Set();
    }
    addPhoneNumber(number) {
      this.phoneNumbers.add(number);
     
    }
    removePhoneNumber(number) {
      this.phoneNumbers = this.phoneNumbers.delete(number);
     
    }
    dialPhoneNumber(number) {
      const numExist = this.phoneNumbers.has(number);
      if (!numExist) {
        console.log("Invalid phone number");
        return;
      }
      this.notifyObservers(number);
    }
  // Observers
    addObserver(observer) {
      this.observers.add(observer);
    }
  removeObserver(observer) {
      this.observers = this.observers.delete(observer);
    }
  notifyObservers(number) {
      this.observers.forEach((observer) => observer.notify(number));
    }
  }
  // Observer Class
  class PhoneNumberObserver {
    notify(number) {
      console.log(number);
    }
  }
  class DialingObserver {
    notify(number) {
      console.log(`Now Dialling ${number}......`);
    }
  }
  
  const phoneNO = new Telephone();
  const phoneNumberObserver = new PhoneNumberObserver();
  const dialingObserver = new DialingObserver();
  
  phoneNO.addObserver(phoneNumberObserver);
  phoneNO.addObserver(dialingObserver);
  
  phoneNO.addPhoneNumber(78749088767);
  phoneNO.dialPhoneNumber(78749088767);