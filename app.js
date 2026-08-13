// EmailJS Initialization
if (typeof emailjs !== "undefined") {
  emailjs.init("9BQ6lNs0zSSHVD459");
}

// Products catalog
window.PRODUCTS = window.PRODUCTS || [
  { handle: "bunkleberrys", title: "Bunkleberrys", price: 6.00, size: "4oz",
    image: "images/Skittles_Original.webp",
    description: "The freeze-dried treat, fruity clouds that shatter noah's mouth with flavor." },
  { handle: "noahs-peaches", title: "Rings", price: 6.00, size: "4oz",
    image: "images/peaches.webp",
    description: "Rings - sweet-and-tangy crunch. Melts on the tongue and made with pure peachy goodness." },
  { handle: "fluff-balls", title: "Happy Rancheros", price: 5.00, size: "3oz",
    image: "images/Jolly_Ranchers.webp",
    description: "Happy Rancheros - same bold flavor, no dental drama." },
];

// Cart
var CART_KEY = "kreeze-cart";
var cart = {
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
  clear() { this.items = []; this.save(); },
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
        const title = p ? p.title : i.handle;
        const price = p ? p.price * i.qty : 0;
        return `<div class="line">
          <img src="${p ? p.image : ''}" alt="${title}">
          <div class="info">
            <strong>${title}</strong>
            <span class="p">$${price.toFixed(2)} · qty ${i.qty}</span>
            <button class="rm" onclick="cart.remove('${i.handle}')">Remove</button>
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
  closeDrawer();

  const title = document.getElementById("checkout-title");
  const form = document.getElementById("checkout-form");
  const screen = document.getElementById("confirmation-screen");

  if (title) title.innerText = "Complete Your Order";
  if (form) form.style.display = "block";
  if (screen) screen.style.display = "none";

  document.getElementById("checkout-modal")?.classList.add("open");
  document.getElementById("checkout-scrim")?.classList.add("open");
}

function closeCheckoutModal() {
  document.getElementById("checkout-modal")?.classList.remove("open");
  document.getElementById("checkout-scrim")?.classList.remove("open");
}

function processOrder(event) {
  event.preventDefault();

  const submitBtn = document.getElementById("submit-order-btn");
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerText = "Submitting Order...";
  }

  const orderNum = Math.floor(1000 + Math.random() * 9000);
  const orderId = `KC-${orderNum}`;
  const name = document.getElementById("cust-name")?.value || "Customer";
  const contact = document.getElementById("cust-contact")?.value || "N/A";
  const selectedMethod = document.getElementById("payment-method")?.value || "venmo";
  const totalFormatted = "$" + cart.total().toFixed(2);
  const numericAmount = cart.total().toFixed(2);

  // Format order items
  const itemsList = cart.items.map(item => {
    const p = PRODUCTS.find(prod => prod.handle === item.handle) || {};
    const title = p.title || item.handle;
    const price = p.price || 6.00;
    return `- ${title} (x${item.qty}) — $${(price * item.qty).toFixed(2)}`;
  }).join("\n");

  // Payment configuration
  let appName = "";
  let handle = "";
  let payUrl = "";

  switch (selectedMethod) {
    case "cashapp":
      appName = "Cash App";
      handle = "$CarrieBunk";
      payUrl = `https://cash.app/$CarrieBunk/${numericAmount}`;
      break;

    case "paypal":
      appName = "PayPal";
      handle = "paypal.me/krecandy";
      payUrl = `https://paypal.me/krecandy/${numericAmount}`;
      break;

    case "venmo":
    default:
      appName = "Venmo";
      handle = "@Carrie-Bunk";
      payUrl = `https://venmo.com/Carrie-Bunk?txn=pay&note=Order%20%23${orderId}&amount=${numericAmount}`;
      break;
  }

  // Email parameters
  const templateParams = {
    order_id: orderId,
    customer_name: name,
    customer_contact: contact,
    payment_method: appName,
    order_total: totalFormatted,
    order_items: itemsList
  };

  if (typeof emailjs !== "undefined") {
    emailjs.send("service_yqb5b0h", "template_xcvjrjz", templateParams)
      .then(function(response) {
        console.log("Email successfully sent!", response.status, response.text);
      })
      .catch(function(error) {
        console.error("EmailJS error:", error);
      });
  }

  // Populate confirmation display
  if (document.getElementById("conf-order-id")) document.getElementById("conf-order-id").innerText = `#${orderId}`;
  if (document.getElementById("conf-total")) document.getElementById("conf-total").innerText = totalFormatted;
  if (document.getElementById("conf-app-name")) document.getElementById("conf-app-name").innerText = appName;
  if (document.getElementById("conf-handle")) document.getElementById("conf-handle").innerText = handle;
  if (document.getElementById("conf-amount")) document.getElementById("conf-amount").innerText = totalFormatted;
  if (document.getElementById("conf-pay-id")) document.getElementById("conf-pay-id").innerText = `#${orderId}`;

  const payBtn = document.getElementById("pay-direct-link");
  if (payBtn) {
    payBtn.innerText = `Pay $${numericAmount} on ${appName}`;
    payBtn.href = payUrl;
  }

  // Show confirmation screen
  const checkoutTitle = document.getElementById("checkout-title");
  const checkoutForm = document.getElementById("checkout-form");
  const confScreen = document.getElementById("confirmation-screen");

  if (checkoutTitle) checkoutTitle.innerText = "Order Submitted!";
  if (checkoutForm) checkoutForm.style.display = "none";
  if (confScreen) confScreen.style.display = "block";

  cart.clear();

  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.innerText = "Place Order & Get Payment Details";
  }
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
