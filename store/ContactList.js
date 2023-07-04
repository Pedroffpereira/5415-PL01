const listContacts = []

function setListContacts(id, name, phone, email) {
    console.log(id == "")
    debugger
    if(id == ""){
        //Create
        const new_contact = new Contact(id, name, phone, email);
        listContacts.push(new_contact);
    } else {
        //Update
        const contact = listContacts.find(function(contact) {
            return contact.id == id;
        });
        contact.name = name;
        contact.email = phone;
        contact.phone = email;
    }

    setListContacts();

}