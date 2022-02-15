const employee = require('./Employee')

class engineer extends employee {
    constructor(name,email,id,github){
        super(name,email,id)
        this.github = github
    }

    getGithub() {
        return this.github
    }
    getRole(){
        return "Engineer"
    }

}

module.exports = engineer;