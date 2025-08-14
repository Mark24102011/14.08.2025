const elementsArray = [];

fetch('http://localhost:3000/')
  .then(response => response.json())
  .then(data => {
    elementsArray.push(...data);
    const container = document.querySelector(".wrapper")
    elementsArray.forEach(item => {
      container.innerHTML += `<div class="card">
      <h3 class="title">${item.name}</h3>
      <p class="descr">${item.description}</p>
      <p class="price">${item.price}</p>
      </div>`;
    });
    document.body.appendChild(container);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
