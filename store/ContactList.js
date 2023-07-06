const listContacts = []

function setListContacts(id, name, phone, email) {
    if (id == "") {
        //Create
        const new_contact = new Contact(id, name, email, phone);
        listContacts.push(new_contact);
    } else {
        //Update
        const contact = listContacts.find(function (contact) {
            return contact.id == id;
        });
        contact.name = name;
        contact.phone = phone;
        contact.email = email;
    }

    renderList(listContacts)

}

function deleteContactItemList(id) {
    
    let index
    listContacts.forEach(function (element, indexIn) {
        if (id == element.id)
            index = indexIn
    });
    if (index > -1) { // only splice array when item is found
        listContacts.splice(index, 1); // 2nd parameter means remove one item only
    }

    renderList(listContacts)

}