function ContactItem(contact){
    const contactItemElement = document.createElement('li')

    contactItemElement.classList.add('list-item')
    contactItemElement.innerHTML = 
    `
        <span>${contact.name} - ${contact.phone} - ${contact.email}</span>
        <div>
            <button id="btn-edit-contact" class="form-control bg-blue">Editar</button>
            <button class="form-control bg-red" id="btn-elim-contact">Apagar</button>
        </div>
    `

    
    const btnEdit = contactItemElement.querySelector('#btn-edit-contact');

    btnEdit.onclick = function() {
        
        const fields = form.querySelectorAll('[name]');

        fields.forEach(function(field) {
            const name = field.name.split("_");
            console.log(name[1])
            field.value = contact[name[1]];
        })
    }

    const btnElim = contactItemElement.querySelector('#btn-elim-contact');

    btnElim.onclick = function(){
        deleteContactItemList(contact.id)
    }
    return contactItemElement 
}