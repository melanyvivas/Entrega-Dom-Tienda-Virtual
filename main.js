const products = [
  {
    name: 'Nintendo-Nes',
    price: 59,
    stars: 4.5,
    reviews: 3200,
    seller: 'Nintendo',
    image:
      'https://th.bing.com/th/id/OIP.IVOFw5ukvS_5ZzxLEi3qxgHaE8?rs=1&pid=ImgDetMain'
  },
  {
    name: 'Gameboy',
    price: 39.99,
    stars: 5,
    reviews: 1500,
    seller: 'Nintendo',
    image:
      'https://th.bing.com/th/id/R.5981d95c187b0a566ce7e69c509f9dac?rik=jCm3KrQGYFzkmQ&pid=ImgRaw&r=0'
  },
  {
    name: 'Nintendo-64',
    price: 25.99,
    stars: 3.5,
    reviews: 2000,
    seller: 'Nintendo',
    image:
      'https://th.bing.com/th/id/OIP.9d0AuwVvzkghZ8AmKgVrzAHaE8?rs=1&pid=ImgDetMain'
  },
  {
    name: 'Nintendo GameCube',
    price: 49.99,
    stars: 4,
    reviews: 2700,
    seller: 'Nintendo',
    image:
      'https://th.bing.com/th/id/OIP.qksbrtPxPHxZM3mahQu0CgHaEK?rs=1&pid=ImgDetMain'
  },
  {
    name: 'Nintendo PlayStation',
    price: 89.99,
    stars: 4.5,
    reviews: 9500,
    seller: 'Nintendo',
    image:
      'https://www.retro32.com/wp-content/uploads/2020/03/nintendo-playstation-1024x906.jpg'
  },
  {
    name: 'Nintendo DS',
    price: 15.99,
    stars: 3.5,
    reviews: 2400,
    seller: 'Nintendo',
    image:
      'https://vignette.wikia.nocookie.net/nintendo3ds/images/6/64/Original_Nintendo_DS.jpg/revision/latest?cb=20110327210453'
  }
]

const listaProductos = document.getElementById('lista-productos')

function displayProducts(productList) {
  listaProductos.innerHTML = ''
  productList.forEach((product) => {
    const productElement = document.createElement('li')
    productElement.classList.add('producto')
    productElement.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>Precio: €${product.price}</p>
          <p>Valoración: ${product.stars} estrellas</p>
          <p>Opiniones: ${product.reviews}</p>
          <p>Vendedor: ${product.seller}</p>
      `
    listaProductos.appendChild(productElement)
  })
}

function filterProductsByPrice(min, max) {
  return products.filter(
    (product) => product.price >= min && product.price <= max
  )
}

document.getElementById('filtrar-precio').addEventListener('click', () => {
  const minPrice = parseFloat(document.getElementById('precio-min').value) || 0
  const maxPrice =
    parseFloat(document.getElementById('precio-max').value) || Infinity
  const filteredProducts = filterProductsByPrice(minPrice, maxPrice)
  displayProducts(filteredProducts)
})

displayProducts(products)
