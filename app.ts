const button = document.querySelector('.new-note-button')
const mainn = document.querySelector('.main')
const div:any = document.querySelector('.div')
const buttonremove = document.querySelector('.remove-button')

let divcreate:any

button?.addEventListener('click', () => {
  if (document.querySelectorAll('div').length > 14) return
  
  const h5 = document.createElement('h5')
  const removebutton = document.createElement('button')
  const img = document.createElement('img')
  divcreate = document.createElement('div')
  
  img.src = "https://flexitauctions.com/wp-content/uploads/2019/01/white-x-png-2.png"
  
  removebutton.setAttribute('class', 'remove-button')
  divcreate.setAttribute('class', 'div')
  
  divcreate.appendChild(h5)
  divcreate.appendChild(removebutton)
  removebutton?.appendChild(img)
  mainn?.appendChild(divcreate)
})

buttonremove?.addEventListener('click', () => {
  mainn?.removeChild(div)
})