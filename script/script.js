const form = document.getElementsByTagName('form')[0]
const input = document.getElementsByTagName('input')[0]
const addNotification = document.getElementById('add-notification')
const itemsNotification = document.getElementById('items-notification')
const addingData = document.getElementById('adding-data')

let addGroceryNotification = '';
form.addEventListener('submit', (e) => {
    e.preventDefault()
    if(!input.value){
        addNotification.innerText = 'Please Add Grocery Item';
        addNotification.classList.remove('add-notification-success')
        addNotification.classList.add('add-notification-error')
        setTimeout(() => {
            addNotification.innerText = ''
            addNotification.classList.remove('add-notification-error')
        }, 2000)
    }else{
        addNotification.innerText = 'Asd Added To The List'
        addNotification.classList.remove('add-notification-success')
        addNotification.classList.add('add-notification-success')
        const p = document.createElement('p')

        p.innerHTML = `
        <span>${input.value}</span>
        <span>X</span>
        `
        addingData.appendChild(p)

        setTimeout(() => {
            addNotification.innerText = ''
            addNotification.classList.remove('add-notification-success')
        }, 2000)
    }
})