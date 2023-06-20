class Contact {
    constructor(id, name, email, phone) {
        if(id === 0){
            this.id = listContacts.length + 1;
        }else{
            this.id = id
        }
        // this.id = id === 0 ? listContacts.length + 1 : id
        
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}