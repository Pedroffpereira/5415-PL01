class Contact {
    constructor(id, name, email, phone) {
        if(id == ""){
            this.id = listContacts.length + 1;
        }else{
            this.id = id
        }
        // this.id = id === 0 ? listContacts.length + 1 : id
        
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
}