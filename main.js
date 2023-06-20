const form = document.querySelector('form');

const listContacts = []

form.onsubmit = function(event) {
    event.preventDefault();
    
    const fields = form.querySelectorAll('[name]');

    fields.forEach(function(field) {
        
    }
    );
}


const btnEdit = document.querySelector('#btn-edit-contact');

btnEdit.onclick = function() {
    const contact = new Contact(1, 'João', 'mail@mail.joao', 91919191919);
    
    const fields = form.querySelectorAll('[name]');

    fields.forEach(function(field) {
        const name = field.name.split("_");
        console.log(name[1])
        field.value = contact[name[1]];
    })
}