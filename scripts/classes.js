class Traveler {
    constructor(name) {
        this._name = name
        this._food = 1
        this._isHealthy = true
    }
    get name() {
         return this._name 
    }
    
    hunt(){
        this._food+=2
    }
    eat(){
        if(this._food>0){
            this._food--
        }else{
            this._isHealthy=false
        }
    }
    get food(){
        return this._food
    }
    get isHealthy() {
        return this._isHealthy
    }
}
class Wagon{
    constructor(capacity) {
        this._capacity = capacity
        this._passageiros = []
    }
    getAvailableSeatCount(){
        const available  = this.capacity-this._passageiros.length
        return available
    }
    join(passageiro){
        if(this._passageiros.length<this._capacity){
            this._passageiros.push(passageiro)
            return true
        }else{
            return false
        }
    }
    shouldQuarantine(){
        return this._passageiros.findIndex((person)=>{!person.isHealthy})===-1
    }
    totalFood(){
        let foodCount = 0
        this._passageiros.forEach((person)=>{foodCount+=person.food })
        return foodCount
    }
    get capacity() {
        return this._capacity
    }
}