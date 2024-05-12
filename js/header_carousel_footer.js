  fetch('../assets/carousel.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('extr_carousel').innerHTML = html;
      });

        fetch('../assets/header.html')
          .then(response => response.text())
          .then(html => {
            document.getElementById('header').innerHTML = html;
          });

        fetch('../assets/footer.html')
          .then(response => response.text())
          .then(html => {
            document.getElementById('footer').innerHTML = html;
          });