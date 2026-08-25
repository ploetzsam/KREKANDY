// EmailJS Initialization
if (typeof emailjs !== "undefined") {
  emailjs.init("9BQ6lNs0zSSHVD459");
}

// 1. Products Catalog with Flavors & Image Links
window.PRODUCTS = window.PRODUCTS || [
  // --- Featured / Original Classics ---
  {
    handle: "bunkleberrys",
    title: "Bunkleberrys",
    category: "Chews & Fruity",
    price: 6.00,
    size: "4oz",
    description: "The freeze-dried treat, fruity clouds that shatter noah's mouth with flavor.",
    defaultImage: "krephoto/bunkleberries.jpg",
    flavors: [
      { name: "Original", image: "krephoto/bunkleberries.jpg" },
      { name: "Sour", image: "krephoto/sour_bunkleberries.jpg" },
      { name: "Smoothie", image: "krephoto/smoothie_bunkleberries.jpg" },
      { name: "Cotton Candy", image: "krephoto/cotton_candy_bunkleberries.jpg" }
    ]
  },
  {
    handle: "rings",
    title: "Rings",
    category: "Gummies & Rings",
    price: 6.00,
    size: "4oz",
    description: "Rings - sweet-and-tangy crunch. Melts on the tongue and made with pure peachy goodness.",
    defaultImage: "images/peaches.webp",
    flavors: [
      { name: "Peach", image: "images/peaches.webp" },
      { name: "Blue Raspberry", image: "images/peaches.webp" },
      { name: "Apple", image: "images/peaches.webp" },
      { name: "Strawberry Banana", image: "images/peaches.webp" }
    ]
  },
  {
    handle: "happy-rancheros",
    title: "Happy Rancheros",
    category: "Meltaways",
    price: 5.00,
    size: "3oz",
    description: "Happy Rancheros - same bold flavor, no dental drama.",
    defaultImage: "krephoto/happy_rancheros.jpg",
    flavors: []
  },


  // --- Gummies, Bears & Worms ---
  {
    handle: "gummy-worms",
    title: "Gummy Worms",
    category: "Gummies & Rings",
    price: 6.00,
    size: "3.5oz",
    description: "Classic crawlers puffed up double their size into crispy, fruity crunch sticks.",
    defaultImage: "krephoto/gummy_worms.jpg",
    flavors: [
      { name: "Original", image: "krephoto/gummy_worms.jpg" },
      { name: "Sour", image: "krephoto/sour_worms.jpg" }
    ]
  },
  
  {
    handle: "bears",
    title: "Bears",
    category: "Gummies & Rings",
    price: 6.00,
    size: "4oz",
    description: "The classic gummi bears puffed up into delightfully crunchy, giant fruity cubes.",
    defaultImage: "krephoto/bears.jpg",
    flavors: [
      { name: "Original", image: "krephoto/bears.jpg" },
      { name: "Sour", image: "krephoto/sour_bears.jpg" },
      { name: "Pineapple", image: "krephoto/pineapple_bears.jpg" }
    ]
  },
  {
    handle: "blue-sharks",
    title: "Blue Sharks",
    category: "Gummies & Rings",
    price: 6.00,
    size: "3.5oz",
    description: "Sweet blue raspberry sharks puffed into airy, ocean-blue crunchy treats with a marshmallow base.",
    defaultImage: "krephoto/blue_sharks.JPEG",
    flavors: []
  },
  {
    handle: "guppies",
    title: "Guppies",
    category: "Gummies & Rings",
    price: 5.50,
    size: "3.5oz",
    description: "Little Swedish-style red fish transformed into crisp, airy cherry-berry crunch poppers.",
    defaultImage: "krephoto/guppies.jpg",
    flavors: []
  },
  {
    handle: "bitter-toddlers",
    title: "Bitter Toddlers",
    category: "Gummies & Rings",
    price: 6.00,
    size: "4oz",
    description: "Sour, then sweet, then delightfully puffed! A crunchy take on the legendary sour kids.",
    defaultImage: "krephoto/bitter_toddlers.jpg",
    flavors: []
  },

  // --- Taffy & Chews ---
  {
    handle: "salt-water-taffy",
    title: "Salt Water Taffy",
    category: "Taffy & Puffs",
    price: 5.50,
    size: "3oz",
    description: "Traditional boardwalk taffy puffed into melt-in-your-mouth crispy airy pillows.",
    defaultImage: "krephoto/saltwater_taffy.JPG",
    flavors: [
      { name: "Watermelon", image: "krephoto/saltwater_taffy.JPG" },
      { name: "Root Beer", image: "krephoto/saltwater_taffy.JPG" },
      { name: "Orange Creamsicle", image: "krephoto/saltwater_taffy.JPG" },
      { name: "Frosted Cupcake", image: "krephoto/saltwater_taffy.JPG" },
      { name: "Cinnamon", image: "krephoto/saltwater_taffy.JPG" },
      { name: "Strawberry Banana", image: "krephoto/saltwater_taffy.JPG" },

    ]
  },
  {
    handle: "puffy-taffy",
    title: "Puffy Taffy",
    category: "Taffy & Puffs",
    price: 5.50,
    size: "3oz",
    description: "Super-expanded chewy taffy with an irresistible crunch that instantly dissolves.",
    defaultImage: "krephoto/puffy_taffy.jpg",
    flavors: []
  },
  {
    handle: "fruity-twists",
    title: "Fruity Twists",
    category: "Chews & Fruity",
    price: 5.50,
    size: "3.5oz",
    description: "Chewy licorice twists blasted into brittle, flavor-concentrated crunchy sticks.",
    defaultImage: "krephoto/fruity_twists.jpg",
    flavors: []
  },
  {
    handle: "fruit-puffs",
    title: "Fruit Puffs",
    category: "Chews & Fruity",
    price: 5.50,
    size: "3.5oz",
    description: "Bite-sized fruity bursts transformed into light, crispy air pockets.",
    defaultImage: "krephoto/fruit_puffs.jpg",
    flavors: []
  },
  {
    handle: "starfire",
    title: "Starfire",
    category: "Chews & Fruity",
    price: 6.00,
    size: "4oz",
    description: "Juicy square fruit chews puffed into crispy mega-cubes bursting with flavor.",
    defaultImage: "krephoto/starfire.jpg",
    flavors: []
  },
  {
    handle: "berry-delicious",
    title: "Berry Delicious",
    category: "Chews & Fruity",
    price: 6.00,
    size: "4oz",
    description: "A wild blend of strawberries, blueberries, and raspberries in crispy freeze-dried clouds.",
    defaultImage: "krephoto/berry_delicious.JPEG",
    flavors: []
  },
  {
    handle: "rainbow-tarts",
    title: "Rainbow Tarts",
    category: "Chews & Fruity",
    price: 5.50,
    size: "3.5oz",
    description: "Sweet, tangy candy discs that puff up into a chalky-crunch explosion.",
    defaultImage: "krephoto/rainbow_tarts.jpg",
    flavors: []
  },

  // --- Chocolates, Caramels & Kreeze Originals ---
  {
    handle: "pb-drizzle",
    title: "PB Drizzle",
    category: "Chocolate & Caramel",
    price: 7.00,
    size: "4oz",
    description: "A Kreeze Candies Original! Rich chocolate and peanut butter crisped to perfection and drizzled fresh.",
    defaultImage: "krephoto/pb_drizzle.jpg",
    flavors: []
  },
  {
    handle: "left-and-rights",
    title: "Left & Rights",
    category: "Chocolate & Caramel",
    price: 6.50,
    size: "4oz",
    description: "Crunchy cookie bars with caramel and chocolate that shatter with buttery decadence.",
    defaultImage: "krephoto/left_and_rights.JPEG",
    flavors: []
  },
  {
    handle: "caramel-yums",
    title: "Caramel Yums",
    category: "Chocolate & Caramel",
    price: 6.00,
    size: "4oz",
    description: "Chewy golden caramels puffed into honeycomb crunch nuggets.",
    defaultImage: "krephoto/caramel_yums.JPEG",
    flavors: []
  },
  {
    handle: "caramel-pops",
    title: "Caramel Pops",
    category: "Chocolate & Caramel",
    price: 5.50,
    size: "3.5oz",
    description: "Caramel-apple and rich caramel suckers transformed into crunchy, stick-free caramel crisps.",
    defaultImage: "krephoto/caramel_pops.jpg",
    flavors: []
  },
  {
    handle: "duds",
    title: "Duds",
    category: "Chocolate & Caramel",
    price: 6.00,
    size: "4oz",
    description: "Chocolate-covered caramels exploded into giant, crisp caramel malt-like nuggets.",
    defaultImage: "krephoto/duds.jpg",
    flavors: []
  },
  {
    handle: "charlies",
    title: "Charlies",
    category: "Chocolate & Caramel",
    price: 6.00,
    size: "4oz",
    description: "Fluffy nougat and rich chocolate bars turned into light-as-air crisp honeycomb bites.",
    defaultImage: "krephoto/charlies.jpg",
    flavors: []
  },
  {
    handle: "cluster-bombs",
    title: "Cluster Bombs",
    category: "Chocolate & Caramel",
    price: 6.50,
    size: "4oz",
    description: "Gummy, crunchy, tangy candy clusters blasted into crunchy flavor meteorites.",
    defaultImage: "krephoto/cluster_bombs.jpg",
    flavors: []
  },
  {
    handle: "peanut-brittle",
    title: "Homemade Peanut Brittle",
    category: "Chocolate & Caramel",
    price: 6.50,
    size: "4.5oz",
    description: "Small-batch, homemade roasted peanut brittle freeze-dried for an ultra-light, buttery snap.",
    defaultImage: "krephoto/peanut_brittle.jpg",
    flavors: []
  },

  // --- Novelty, Spicy & Meltaways ---
  {
    handle: "power-pellets",
    title: "Power Pellets",
    category: "Meltaways",
    price: 5.50,
    size: "3.5oz",
    description: "Tangy, tart-compressed candies that puff into instantly melting power pellets.",
    defaultImage: "krephoto/power_pellets.JPEG",
    flavors: []
  },
  {
    handle: "bit-o-honey",
    title: "Bit-O-Honey",
    category: "Meltaways",
    price: 5.50,
    size: "3.5oz",
    description: "Pure honey candy freeze-dried into crunchy, sweet golden honeycomb crystals.",
    defaultImage: "krephoto/bit-o-honey.jpg",
    flavors: []
  },
  {
    handle: "watermelon-pops",
    title: "Watermelon Pops",
    category: "Meltaways",
    price: 5.00,
    size: "3oz",
    description: "Sweet and tangy watermelon lollipops turned into airy, crunchy flavor sponges.",
    defaultImage: "krephoto/watermelon_pops.jpg",
    flavors: []
  },
  {
    handle: "lemon-puffs",
    title: "Lemon Puffs",
    category: "Meltaways",
    price: 5.00,
    size: "3oz",
    description: "Bright, zesty lemon drops expanded into airy citrus clouds that melt in seconds.",
    defaultImage: "krephoto/lemon_puffs.JPEG",
    flavors: []
  },
  {
    handle: "hot-hot-hot",
    title: "Hot, Hot, Hot",
    category: "Meltaways",
    price: 5.50,
    size: "3oz",
    description: "Fiery cinnamon balls puffed up into crunchy spheres packed with serious cinnamon heat.",
    defaultImage: "krephoto/hot_hot_hot.jpg",
    flavors: []
  },
  
  // {
  //   handle: "candy-corn",
  //   title: "Candy Corn",
  //   category: "Meltaways",
  //   price: 5.00,
  //   size: "3.5oz",
  //   description: "The classic autumn treat puffed up into honeycomb-crisp honey vanilla bites.",
  //   defaultImage: "krephoto/candy_corn.jpg",
  //   flavors: []
  // }
  
];

// Active filter category
window.currentCategory = "All";

// 2. Cart Engine
var CART_KEY = "kreeze-cart";
var cart = {
  items: JSON.parse(localStorage.getItem(CART_KEY) || "[]"),
  save() {
    localStorage.setItem(CART_KEY, JSON.stringify(this.items));
    this.render();
  },
  add(handle, qty = 1, flavor = "") {
    const p = PRODUCTS.find(p => p.handle === handle);
    if (!p) return;

    const selectedFlavor = flavor || (p.flavors && p.flavors.length > 0 ? p.flavors[0].name : "");
    const cartItemId = selectedFlavor ? `${handle}__${selectedFlavor}` : handle;

    const ex = this.items.find(i => i.id === cartItemId);
    if (ex) {
      ex.qty += qty;
    } else {
      this.items.push({ id: cartItemId, handle: handle, flavor: selectedFlavor, qty: qty });
    }
    this.save();
    openDrawer();
  },
  increase(id) {
    const ex = this.items.find(i => i.id === id);
    if (ex) {
      ex.qty += 1;
      this.save();
    }
  },
  decrease(id) {
    const ex = this.items.find(i => i.id === id);
    if (ex) {
      ex.qty -= 1;
      if (ex.qty <= 0) {
        this.remove(id);
      } else {
        this.save();
      }
    }
  },
  remove(id) {
    this.items = this.items.filter(i => i.id !== id);
    this.save();
  },
  clear() {
    this.items = [];
    this.save();
  },
  count() {
    return this.items.reduce((s, i) => s + i.qty, 0);
  },
  total() {
    return this.items.reduce((s, i) => {
      const p = PRODUCTS.find(p => p.handle === i.handle);
      return s + (p ? p.price * i.qty : 0);
    }, 0);
  },
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
        const p = PRODUCTS.find(prod => prod.handle === i.handle);
        const title = p ? p.title : i.handle;
        const flavorText = i.flavor ? `<span style="font-size:0.8rem; color:var(--coral); font-weight:700; display:block;">Flavor: ${i.flavor}</span>` : "";
        const price = p ? p.price * i.qty : 0;

        let itemImage = p ? p.defaultImage : '';
        if (p && i.flavor && p.flavors) {
          const match = p.flavors.find(f => f.name === i.flavor);
          if (match && match.image) itemImage = match.image;
        }

        return `<div class="line">
          <img src="${itemImage}" alt="${title}">
          <div class="info">
            <strong>${title}</strong>
            ${flavorText}
            <span class="p">$${price.toFixed(2)}</span>
            <div class="cart-qty-wrap">
              <button class="cart-qty-btn" type="button" onclick="cart.decrease('${i.id}')">−</button>
              <span class="cart-qty-num">${i.qty}</span>
              <button class="cart-qty-btn" type="button" onclick="cart.increase('${i.id}')">+</button>
              <button class="rm" type="button" style="margin-left:auto" onclick="cart.remove('${i.id}')">Remove</button>
            </div>
          </div>
        </div>`;
      }).join("");
    }
    const totalEl = document.getElementById("drawer-total");
    if (totalEl) totalEl.textContent = "$" + this.total().toFixed(2);
  },
};

// 3. Dropdown Change Listener (Changes Image)
function handleFlavorChange(selectEl) {
  const selectedOption = selectEl.options[selectEl.selectedIndex];
  const newImgSrc = selectedOption.getAttribute("data-image");
  const card = selectEl.closest(".card");
  if (card && newImgSrc) {
    const cardImg = card.querySelector(".img img");
    if (cardImg) cardImg.src = newImgSrc;
  }
}

// 4. Add to Bag with Selected Dropdown Value
function addProductFromCard(btnEl, handle) {
  const card = btnEl.closest(".card");
  let chosenFlavor = "";
  if (card) {
    const select = card.querySelector(".flavor-select");
    if (select) chosenFlavor = select.value;
  }
  cart.add(handle, 1, chosenFlavor);
}

// 5. Filter Category for Shop Page
function filterCategory(categoryName) {
  window.currentCategory = categoryName;
  document.querySelectorAll(".category-pill").forEach(pill => {
    if (pill.getAttribute("data-category") === categoryName) {
      pill.classList.add("active");
    } else {
      pill.classList.remove("active");
    }
  });
  renderAllGrids();
}

// 6. Unified Renderer for both index.html (Featured) and shop.html
function renderAllGrids() {
  const featuredEl = document.getElementById("product-grid");
  const shopEl = document.getElementById("shop-product-grid");
  const bgs = ["bg-1", "bg-2", "bg-3", "bg-4"];

  const buildCardHTML = (p, idx) => {
    const hasFlavors = p.flavors && p.flavors.length > 0;
    const initialImg = (hasFlavors && p.flavors[0].image) ? p.flavors[0].image : p.defaultImage;

    const dropdownHTML = (hasFlavors && p.flavors.length > 0) ? `
      <div class="flavor-select-container">
        <label class="flavor-label" for="flavor-${p.handle}-${idx}">Flavor:</label>
        <select id="flavor-${p.handle}-${idx}" class="flavor-select" onchange="handleFlavorChange(this)">
          ${p.flavors.map(f => `<option value="${f.name}" data-image="${f.image}">${f.name}</option>`).join("")}
        </select>
      </div>
    ` : '';

    return `
      <div class="card">
        <div class="img ${bgs[idx % bgs.length]}">
          <span class="badge">${p.size}</span>
          <img src="${initialImg}" alt="${p.title}">
        </div>
        <div class="body">
          <h3>${p.title}</h3>
          <p class="desc">${p.description}</p>
          ${dropdownHTML}
          <div class="row">
            <span class="price">$${p.price.toFixed(2)}</span>
            <button class="btn btn-dark" type="button" onclick="addProductFromCard(this, '${p.handle}')">+ Add</button>
          </div>
        </div>
      </div>
    `;
  };

  // Render Home Page (Featured)
  if (featuredEl) {
    featuredEl.innerHTML = PRODUCTS.slice(0, 3).map((p, i) => buildCardHTML(p, i)).join("");
  }

  // Render Shop Page
  if (shopEl) {
    let list = PRODUCTS;
    if (window.currentCategory && window.currentCategory !== "All") {
      list = PRODUCTS.filter(p => p.category === window.currentCategory);
    }
    shopEl.innerHTML = list.map((p, i) => buildCardHTML(p, i)).join("");
  }
}

// 7. Drawer & Modal Controls
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
  const phoneInput = document.getElementById("cust-phone")?.value || "";
  const cleanPhone = phoneInput.replace(/\D/g, '');

  if (cleanPhone.length !== 10) {
    alert("Please enter a valid 10-digit phone number so we can text you when your order is ready!");
    return;
  }

  const submitBtn = document.getElementById("submit-order-btn");
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerText = "Submitting Order...";
  }

  const orderNum = Math.floor(1000 + Math.random() * 9000);
  const orderId = `KC-${orderNum}`;
  const name = document.getElementById("cust-name")?.value || "Customer";
  const email = document.getElementById("cust-email")?.value || "N/A";
  const phone = document.getElementById("cust-phone")?.value || "N/A";
  const contactCombined = `Email: ${email} | Phone: ${phone}`;
  const selectedMethod = document.getElementById("payment-method")?.value || "venmo";
  const totalFormatted = "$" + cart.total().toFixed(2);
  const numericAmount = cart.total().toFixed(2);

  const itemsList = cart.items.map(item => {
    const p = PRODUCTS.find(prod => prod.handle === item.handle) || {};
    const title = p.title || item.handle;
    const flavorTag = item.flavor ? ` (${item.flavor})` : "";
    const price = p.price || 6.00;
    return `- ${title}${flavorTag} (x${item.qty}) — $${(price * item.qty).toFixed(2)}`;
  }).join("\n");

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

  const templateParams = {
    order_id: orderId,
    customer_name: name,
    customer_email: email,
    customer_phone: phone,
    customer_contact: contactCombined,
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

// 8. Load Grids
document.addEventListener("DOMContentLoaded", () => {
  cart.render();
  renderAllGrids();
});