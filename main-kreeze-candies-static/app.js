// Products catalog
window.PRODUCTS = [
  { handle: "bunkleberrys", title: "Bunkleberrys", price: 6.00, size: "4oz",
    image: "images/Skittles_Original.webp",
    description: "The freeze-dried treat formerly known as skittles — puffed into crunchy, fruity clouds that shatter with flavor." },
  { handle: "noahs-peaches", title: "Noah's Peaches", price: 6.00, size: "4oz",
    image: "images/peaches.webp",
    description: "Peach rings blasted into airy, sweet-and-tangy crunch. Melts on the tongue with pure peachy goodness." },
  { handle: "fluff-balls", title: "Fluff Balls", price: 5.00, size: "3oz",
    image: "images/Jolly_Ranchers.webp",
    description: "Freeze-dried jolly ranchers turned into crunchy fluff balls — same bold flavor, no dental drama." },
];

// Cart
const CART_KEY = "kreeze-cart";
const cart = {
  items: JSON.parse(localStorage.getItem(CART_KEY) || "[]"),
  save() { localStorage.setItem(CART_KEY, JSON.stringify(this.items)); this.render(); },
  add(handle, qty = 1) {
    const p = PRODUCTS.find(p => p.handle === handle);
    if (!p) return;
    const ex = this.items.find(i => i.handle === handle);
    if (ex) ex.qty += qty; else this.items.push({ handle, qty });
    this.save(); openDrawer();
  },
  remove(handle) { this.items = this.items.filter(i => i.handle !== handle); this.save(); },
  count() { return this.items.reduce((s, i) => s + i.qty, 0); },
  total() { return this.items.reduce((s, i) => {
    const p = PRODUCTS.find(p => p.handle === i.handle); return s + (p ? p.price * i.qty : 0);
  }, 0); },
  render() {
    document.querySelectorAll(".cart-count").forEach(el => {
      const c = this.count();
      el.textContent = c;
      el.style.display = c > 0 ? "inline-flex" : "none";
    });
    const body = document.getElementById("drawer-body");
    if (!body) return;
    if (this.items.length === 0) {
      body.innerHTML = '<div class="empty"><div style="font-size:3rem">🍬</div><p style="margin-top:.5rem">Your cart is empty</p></div>';
    } else {
      body.innerHTML = this.items.map(i => {
        const p = PRODUCTS.find(p => p.handle === i.handle);
        return `<div class="line">
          <img src="${p.image}" alt="${p.title}">
          <div class="info">
            <strong>${p.title}</strong>
            <span class="p">$${(p.price * i.qty).toFixed(2)} · qty ${i.qty}</span>
            <button class="rm" onclick="cart.remove('${p.handle}')">Remove</button>
          </div>
        </div>`;
      }).join("");
    }
    const totalEl = document.getElementById("drawer-total");
    if (totalEl) totalEl.textContent = "$" + this.total().toFixed(2);
  },
};

function openDrawer() {
  document.getElementById("drawer")?.classList.add("open");
  document.getElementById("drawer-scrim")?.classList.add("open");
}
function closeDrawer() {
  document.getElementById("drawer")?.classList.remove("open");
  document.getElementById("drawer-scrim")?.classList.remove("open");
}
function toggleMobileNav() {
  document.getElementById("mobile-nav")?.classList.toggle("open");
}
function checkout() {
  if (cart.items.length === 0) return;
  alert("This is a static demo. In the live site, you'd be redirected to Shopify checkout for Candy Shack pickup.");
}

// Product grid renderer
function renderProductGrid(targetId) {
  const el = document.getElementById(targetId);
  if (!el) return;
  const bgs = ["bg-1","bg-2","bg-3","bg-4"];
  el.innerHTML = PRODUCTS.map((p, i) => `
    <a class="card" href="product-${p.handle}.html">
      <div class="img ${bgs[i % bgs.length]}">
        <span class="badge">${p.size}</span>
        <img src="${p.image}" alt="${p.title}">
      </div>
      <div class="body">
        <h3>${p.title}</h3>
        <p class="desc">${p.description}</p>
        <div class="row">
          <span class="price">$${p.price.toFixed(2)}</span>
          <button class="btn btn-dark" onclick="event.preventDefault();event.stopPropagation();cart.add('${p.handle}')">+ Add</button>
        </div>
      </div>
    </a>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  cart.render();
  renderProductGrid("product-grid");
});
