const elementsArray = [];

fetch('http://localhost:3000/')
  .then(response => response.json())
  .then(data => {
    elementsArray.push(...data);
    const container = document.querySelector(".wrapper")
    elementsArray.forEach(item => {
      container.innerHTML += `<div>
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p>${item.price}</p>
      </div>`;
    });
    document.body.appendChild(container);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });

