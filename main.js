
const contact_list = document.querySelector('ul')



function renderList(listContacts) {
    contact_list.innerHTML = "";
    listContacts.forEach(function(contact) {
        const contactItem = ContactItem(contact);
        contact_list.appendChild(contactItem)
    })
}
