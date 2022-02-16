// creating employee object and return the key display information
class employee{
    constructor(name, email, id){
        this.name=name;
        this.email=email;
        this.id=id;
    }
    getName(){
        return this.name;
    }
    getEmail(){
        return this.email;
    }
    getId(){return this.id
    }
    getRole(){
        return "Employee"
    }
}
module.exports=employee