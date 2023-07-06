const form = document.querySelector('form');

form.onsubmit = function(event) {
    event.preventDefault();
    
    const fields = form.querySelectorAll('[name]');
    
    setListContacts(fields[0].value, fields[1].value, fields[2].value, fields[3].value)
    form.reset();
}