class Adapter {
  static getToys(){
    return fetch('http://localhost:3000/toys')
    .then(response => response.json())
  }

  static getToy(id){
    return fetch(`http://localhost:3000/toys/${id}`)
    .then(response => response.json())
  }

  static updateToy(id, data){
    return fetch(`http://localhost:3000/toys/${id}`, {
      method: 'PATCH',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
  }

  static makeToy(data){
    return fetch('http://localhost:3000/toys', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
  }
}
