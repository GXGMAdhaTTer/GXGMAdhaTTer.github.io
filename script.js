let cart = [];
let total = 0;

function showProducts(id) {
    document.querySelectorAll('.products').forEach(product => product.classList.remove('active'));
    document.querySelectorAll('.product-tab').forEach(tab => tab.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    event.currentTarget.classList.add('active');
}

function addToCart(name, price, event) {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = Math.max(event.target.offsetWidth, event.target.offsetHeight) + 'px';
    ripple.style.left = (event.offsetX - ripple.offsetWidth / 2) + 'px';
    ripple.style.top = (event.offsetY - ripple.offsetHeight / 2) + 'px';
    event.target.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);

    cart.push({ name, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `${item.name} - ¥${item.price}`;
        cartItems.appendChild(div);
    });
    document.getElementById('total').textContent = total;
}

function showModal() {
  const modal = document.getElementById('modal');
  const contactInfo = document.getElementById('contact-info');
  modal.style.display = 'flex';
  setTimeout(() => {
      modal.style.display = 'none';
      contactInfo.innerHTML = `
          <p>请联系天使热线18868116065取货。</p>
          <img src="qrcode.jpg" alt="二维码" style="width: 100%; height: auto; max-width: 500px; margin-top: 10px; display: block; margin-left: auto; margin-right: auto;">
      `;
  }, 3000);
}