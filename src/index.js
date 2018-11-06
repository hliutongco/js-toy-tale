const toyCollection = document.getElementById('toy-collection')
const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
const inputs = document.getElementsByClassName('input-text')
let addToy = false


document.addEventListener('DOMContentLoaded', () => {
  (Adapter.getToys().then(data => {
    data.forEach((obj) => {
      const card = new Card(obj)
      toyCollection.appendChild(card.render())
    })
  }))

  toyCollection.addEventListener('click', (event) => {
    const id = event.target.dataset.id

    if(event.target.tagName === 'BUTTON'){
      Adapter.getToy(id).then(originalData => {
        Adapter.updateToy(id, {likes: originalData.likes + 1})
        .then(updatedData => {
          const likes = event.target.previousElementSibling
          likes.innerText = `Likes: ${updatedData.likes}`
        })
      })
    }
  })

  addBtn.addEventListener('click', () => {
    // hide & seek with the form
    addToy = !addToy
    if (addToy) {
      toyForm.style.display = 'block'
      // submit listener here
    } else {
      toyForm.style.display = 'none'
    }
  })

  toyForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const name = inputs[0].value
    const image = inputs[1].value

    Adapter.makeToy({name: name, image: image, likes: 0})
    .then(toy => {
      const card = new Card(toy)
      toyCollection.appendChild(card.render())
    })
  })
}
)
