fetch('header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('site-header').innerHTML = data;
      })
      .catch(error => console.error('Error loading header:', error));