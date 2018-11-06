class Card {
  constructor(data){
    this.id = data.id
    this.name = data.name
    this.image = data.image
    this.likes = data.likes
  }

  render(){
    const div = document.createElement('div')
    div.className = 'card'
    div.innerHTML = `<p>Name: ${this.name}</p>
    <img src=${this.image}>
    <p>Likes: ${this.likes}</p>
    <button data-id=${this.id} class="like-btn">💖 Add a Like! 💖</button>`
    return div
  }
}
