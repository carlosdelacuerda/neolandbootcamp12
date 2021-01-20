let sectionAgenda = document.querySelector('#agenda');


const printContact = function (pContactList) {
    for (let contact of pContactList) {
        sectionAgenda.innerHTML += `<article>
            <h2>${contact.name}</h2>
            <ul>
                <li>telefono: ${contact.phone}</li>
                <li>email: ${contact.email}</li>
            </ul>
        </article>`;
    }
}

printContact(contactos)

//pintar solo los laborales.
