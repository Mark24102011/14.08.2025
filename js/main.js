const elementsArray = [];

fetch('http://localhost:000')
  .then(response => response.json())
  .then(data => {
    elementsArray.push(...data);
    const container = document.createElement('div');
    elementsArray.forEach(item => {
      container.innerHTML += <div>${item.html}</div>;
    });
    document.body.appendChild(container);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
