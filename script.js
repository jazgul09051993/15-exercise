const output = document.querySelector(".output");

function products() {
    fetch("db.json")
      .then((res) => {
          return res.json();
      })
      .then ((products) => {
         
         products.forEach((product) => {
            
            const card = document.createElement("div");
            card.setAttribute('class','card');

            const divImg = document.createElement("div");
            divImg.setAttribute('class', 'div-img');

            const img = document.createElement('img');
            img.setAttribute('alt', 'img');
            img.setAttribute('src', `${product.img}`);

            const divText = document.createElement("div");
            divText.setAttribute('class', 'div-text');
            const h2 = document.createElement('h2');
            const h3 = document.createElement('h3');
            const p = document.createElement('p');

            h2.innerHTML = `${product.title}`;
            h3.innerHTML = `Цена: ${product.price}`;
            p.innerHTMl = `${product.desc}`;
            
            divImg.appendChild(img);
            divText.appendChild(h2);
            divText.appendChild(h3);
            divText.appendChild(p);

            card.appendChild(divImg);
            card.appendChild(divText);

            output.appendChild(card)
          })
        })
    }

    products();

