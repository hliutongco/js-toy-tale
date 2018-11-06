
// toyCollection.addEventListener('click', function(event){
//
//   if(event.target.className==="like-btn"){
//     const likes = document.querySelector('span[data-id]')
//     const paragraphTag = likes.parentElement
//     const id = event.target.dataset.id
//     const newLikes = parseInt(likes.innerText) + 1
//
//     paragraphTag.innerHTML = `
//     <span data-id=${id}>${newLikes}</span> Likes`
//
//     fetch(`http://localhost:3000/toys/${id}`, {
//       method: 'PATCH',
//       headers: {
//         'content-type': 'application/json'
//       },
//       body: JSON.stringify({likes: newLikes})
//     })
//   }
//
// })
//
// form.addEventListener('submit', function(event){
//   event.preventDefault()
//
//   fetch('http://localhost:3000/toys', {
//     method: 'post',
//     headers: {
//       "content-type": "application/json",
//       "accepts": "application/json"
//     },
//     body: JSON.stringify({
//       name: inputName.value,
//       image: inputImage.value,
//       likes: 0
//     })
//   }).then(response => response.json()).then(data => {
//     toyCollection.innerHTML += `<div class="card">
//       <h2>${data.name}</h2>
//       <img src=${data.image} class="toy-avatar" />
//       <p><span data-id=${data.id}>${data.likes}</span> Likes </p>
//       <button data-id=${data.id} class="like-btn">Like <3</button>
//     </div>`
//   })
// })

// const form = document.querySelector('.add-toy-form')
