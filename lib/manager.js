const employee = require('./Employee')

class manager extends employee {
    constructor(name,email,id,office){
        super(name,email,id)
        this.office = office
    }

    getOffice() {
        return this.office
    }
    getRole(){
        return "Manager"
    }
}

module.exports = manager;