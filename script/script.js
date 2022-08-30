const form = document.getElementsByTagName('form')[0]
const input = document.getElementsByTagName('input')[0]
const addNotification = document.getElementById('add-notification')
const itemsNotification = document.getElementById('items-notification')
const addingData = document.getElementById('adding-data')
const btn = document.getElementById('btn')

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
        input.value = ''

        setTimeout(() => {
            addNotification.innerText = ''
            addNotification.classList.remove('add-notification-success')
        }, 2000)
    }
})

btn.addEventListener('click', clearAllFn)

function clearAllFn(){
    if(addingData.childNodes.length <= 1){
        itemsNotification.innerText = 'No More Items To Delete';
        itemsNotification.classList.add('add-notification-error')
        setTimeout(() => {
            itemsNotification.innerText = ''
            itemsNotification.classList.remove('add-notification-error')
        }, 4000)
    }else{
        itemsNotification.innerText = 'All Items Deleted'
        itemsNotification.classList.add('add-notification-error')
        addingData.innerHTML = ''
        
        setTimeout(() => {
            itemsNotification.innerText = ''
            itemsNotification.classList.remove('add-notification-error')
        }, 4000)
    }
}

const deleteEachItem = (e) => {
    if(e.target.innerText === 'X'){
        const target = e.target.parentNode
        addingData.removeChild(target)
        const name = target.children[0].innerText

        itemsNotification.innerText = name + ' Removed From The List'
        itemsNotification.classList.add('add-notification-success')
        
        setTimeout(() => {
            itemsNotification.innerText = ''
            itemsNotification.classList.remove('add-notification-success')
        }, 4000)
    }
}

addingData.addEventListener('click', deleteEachItem)