// ==========================================
// 💡 CONFIGURATION: SALES TAX
// ==========================================
// NY standard rate (Machias / Cattaraugus County = 8.00% or 0.08)
window.SALES_TAX_RATE = 0.08;

function getCalculatedTax(subtotal) {
  const rate = typeof window.SALES_TAX_RATE === "number" ? window.SALES_TAX_RATE : 0.08;
  return Math.round(subtotal * rate * 100) / 100;
}

// EmailJS Initialization for GitHub Pages
if (typeof emailjs !== "undefined") {
  emailjs.init("9BQ6lNs0zSSHVD459");
}

// 1. Products Catalog with Flavor-Specific Sizes & Images (All items $6.00)
window.PRODUCTS = window.PRODUCTS || [
  // --- Bunkleberries & Rings ---
  {
    handle: "bunkleberrys",
    title: "Bunkleberrys",
    category: "Chews & Fruity",
    price: 6.00,
    size: "4oz",
    description: "The freeze-dried treat — fruity clouds that shatter with bursts of flavor.",
    defaultImage: "krephoto/bunkleberries.jpg",
    flavors: [
      { name: "Rainbow", size: "4oz", image: "krephoto/bunkleberries.jpg" },
      { name: "Wild", size: "4oz", image: "krephoto/wild_bunkleberries.jpeg" },
      { name: "Tropical", size: "3oz", image: "krephoto/tropical_bunkleberries.jpeg" },
      { name: "Sour", size: "3oz", image: "krephoto/sour_bunkleberries.jpg" },
      { name: "Smoothie", size: "3oz", image: "krephoto/smoothie_bunkleberries.jpg" }
    ]
  },
  {
    handle: "rings",
    title: "Rings",
    category: "Gummies & Rings",
    price: 6.00,
    size: "2oz",
    description: "Sweet-and-tangy puffed rings. Melts on the tongue with pure fruity goodness.",
    defaultImage: "images/peaches.webp",
    flavors: [
      { name: "Peach", size: "2oz", image: "krephoto/peach_rings.jpeg" },
      { name: "Watermelon", size: "2oz", image: "krephoto/watermelon_rings.jpeg" },
      { name: "Strawberry Banana", size: "2oz", image: "krephoto/straw_banana_rings.jpeg" },
      { name: "Apple", size: "2oz", image: "krephoto/apple_rings.jpeg" },
      { name: "Blue Raspberry", size: "2oz", image: "krephoto/blue_raspberry_rings.jpeg" }
    ]
  },
  {
    handle: "happy-rancheros",
    title: "Happy Rancheros",
    category: "Meltaways",
    price: 6.00,
    size: "3oz",
    description: "Happy Rancheros — same bold flavor, no dental drama.",
    defaultImage: "krephoto/happy_rancheros.jpg",
    flavors: []
  },

  // --- Gummies & Novelties ---
  {
    handle: "gummy-worms",
    title: "Gummy Worms",
    category: "Gummies & Rings",
    price: 6.00,
    size: "2oz",
    description: "Classic crawlers puffed up double their size into crispy, fruity crunch sticks.",
    defaultImage: "krephoto/gummy_worms.jpg",
    flavors: [
      { name: "Original", size: "2oz", image: "krephoto/gummy_worms.jpg" },
      { name: "Sour", size: "2oz", image: "krephoto/sour_worms.jpg" }
    ]
  },
  {
    handle: "bears",
    title: "Gummy Bears",
    category: "Gummies & Rings",
    price: 6.00,
    size: "2oz",
    description: "The classic gummi bears puffed up into delightfully crunchy fruity bites.",
    defaultImage: "krephoto/bears.jpg",
    flavors: [
      { name: "Original", size: "2oz", image: "krephoto/bears.jpg" },
      { name: "Sour", size: "2oz", image: "krephoto/sourbears.jpg" },
      { name: "Pineapple", size: "2oz", image: "krephoto/pineapple_bears.jpg" }
    ]
  },
  {
    handle: "blue-sharks",
    title: "Sharks",
    category: "Gummies & Rings",
    price: 6.00,
    size: "2oz",
    description: "Sweet blue raspberry sharks puffed into airy, ocean-blue crunchy treats with a marshmallow base.",
    defaultImage: "krephoto/blue_sharks.JPEG",
    flavors: []
  },
  {
    handle: "guppies",
    title: "Guppies",
    category: "Gummies & Rings",
    price: 6.00,
    size: "2oz",
    description: "Little Swedish-style red fish transformed into crisp, airy cherry-berry crunch poppers.",
    defaultImage: "krephoto/guppies.jpg",
    flavors: []
  },
  {
    handle: "bitter-toddlers",
    title: "Bitter Toddlers",
    category: "Gummies & Rings",
    price: 6.00,
    size: "2oz",
    description: "Sour, then sweet, then delightfully puffed! A crunchy take on legendary sour kids.",
    defaultImage: "krephoto/bitter_toddlers.jpg",
    flavors: []
  },

  // --- Taffy & Chews ---
  {
    handle: "salt-water-taffy",
    title: "Salt Water Taffy",
    category: "Taffy & Puffs",
    price: 6.00,
    size: "2oz",
    description: "Traditional boardwalk taffy puffed into melt-in-your-mouth crispy airy pillows.",
    defaultImage: "krephoto/saltwater_taffy.JPG",
    flavors: [
      { name: "Watermelon", size: "2oz", image: "krephoto/saltwater_taffy.JPG" },
      { name: "Root Beer", size: "2oz", image: "krephoto/saltwater_taffy.JPG" },
      { name: "Orange Creamsicle", size: "2oz", image: "krephoto/saltwater_taffy.JPG" },
      { name: "Frosted Cupcake", size: "2oz", image: "krephoto/saltwater_taffy.JPG" },
      { name: "Cinnamon", size: "2oz", image: "krephoto/saltwater_taffy.JPG" },
      { name: "Strawberry Banana", size: "2oz", image: "krephoto/saltwater_taffy.JPG" }
    ]
  },
  {
    handle: "puffy-taffy",
    title: "Puffy Taffy",
    category: "Taffy & Puffs",
    price: 6.00,
    size: "1oz",
    description: "Super-expanded chewy taffy with an irresistible crunch that instantly dissolves.",
    defaultImage: "krephoto/puffy_taffy.jpg",
    flavors: []
  },
  {
    handle: "fruity-twists",
    title: "Fruity Twists",
    category: "Chews & Fruity",
    price: 6.00,
    size: "1.5oz",
    description: "Chewy twists blasted into brittle, flavor-concentrated crunchy sticks.",
    defaultImage: "krephoto/fruity_twists.jpg",
    flavors: []
  },
  {
    handle: "fruit-puffs",
    title: "Fruit Poofs",
    category: "Chews & Fruity",
    price: 6.00,
    size: "1oz",
    description: "Bite-sized fruity bursts transformed into light, crispy air pockets.",
    defaultImage: "krephoto/fruit_puffs.jpg",
    flavors: []
  },
  {
    handle: "starfire",
    title: "Starfire",
    category: "Chews & Fruity",
    price: 6.00,
    size: "1.5oz",
    description: "Juicy fruit chews puffed into crispy mega-cubes bursting with flavor.",
    defaultImage: "krephoto/starfire.jpg",
    flavors: []
  },
  {
    handle: "berry-delicious",
    title: "Berry Delicious",
    category: "Chews & Fruity",
    price: 6.00,
    size: "2oz",
    description: "A blend of berries in crispy freeze-dried clouds.",
    defaultImage: "krephoto/berry_delicious.JPEG",
    flavors: []
  },

  // --- Chocolates, Caramels & Kreeze Originals ---
  {
    handle: "pb-drizzle",
    title: "PB Drizzles",
    category: "Chocolate & Caramel",
    price: 6.00,
    size: "2.5oz",
    description: "A Kreeze Candies Original! Chocolate and peanut butter crisped to perfection and drizzled fresh.",
    defaultImage: "krephoto/pb_drizzle.jpg",
    flavors: []
  },
  {
    handle: "pb-crunchies",
    title: "PB Crunchies (Limited Time)",
    category: "Chocolate & Caramel",
    price: 6.00,
    size: "2.5oz",
    description: "Limited Edition! Rich peanut butter crunch blasted to crispy perfection.",
    defaultImage: "krephoto/pb_crunchies.jpeg",
    flavors: []
  },
  {
    handle: "left-and-rights",
    title: "Left & Rights",
    category: "Chocolate & Caramel",
    price: 6.00,
    size: "2oz",
    description: "Crunchy cookie bars with caramel and chocolate that shatter with buttery decadence.",
    defaultImage: "krephoto/left_and_rights.JPEG",
    flavors: []
  },
  {
    handle: "caramels",
    title: "Caramels",
    category: "Chocolate & Caramel",
    price: 6.00,
    size: "4oz",
    description: "Chewy golden caramels puffed into honeycomb crunch nuggets.",
    defaultImage: "krephoto/caramel_yums.JPEG",
    flavors: []
  },
  {
    handle: "caramel-pops",
    title: "Caramel Pops *Pickup Only*",
    category: "Chocolate & Caramel",
    price: 6.00,
    size: "3.5oz",
    description: "Rich caramel suckers transformed into crunchy, stick-free caramel crisps.",
    defaultImage: "krephoto/caramel_pops.jpg",
    pickupOnly: true,
    flavors: []
  },
  {
    handle: "duds",
    title: "Duds",
    category: "Chocolate & Caramel",
    price: 6.00,
    size: "2oz",
    description: "Chocolate-covered caramels exploded into giant, crisp caramel nuggets.",
    defaultImage: "krephoto/duds.jpg",
    flavors: []
  },
  {
    handle: "charlies",
    title: "Charlies",
    category: "Chocolate & Caramel",
    price: 6.00,
    size: "2oz",
    description: "Fluffy nougat and rich chocolate bars turned into light-as-air crisp honeycomb bites.",
    defaultImage: "krephoto/charlies.jpg",
    flavors: []
  },
  {
    handle: "cluster-bombs",
    title: "Cluster Bombs",
    category: "Chocolate & Caramel",
    price: 6.00,
    size: "1.5oz",
    description: "Gummy, crunchy, tangy candy clusters blasted into crunchy flavor meteorites.",
    defaultImage: "krephoto/cluster_bombs.jpg",
    flavors: []
  },
  {
    handle: "peanut-brittle",
    title: "Brittle",
    category: "Chocolate & Caramel",
    price: 6.00,
    size: "2.5oz",
    description: "Small-batch homemade brittle freeze-dried for an ultra-light, buttery snap.",
    defaultImage: "krephoto/peanut_brittle.jpg",
    flavors: []
  },

  // --- Novelty, Spicy & Meltaways ---
  {
    handle: "lemon-puffs",
    title: "Lemon Puffs",
    category: "Meltaways",
    price: 6.00,
    size: "2.5oz",
    description: "Bright citrus drops expanded into airy candy clouds that melt in seconds.",
    defaultImage: "krephoto/lemon_puffs.JPEG",
    flavors: [
      { name: "Original", size: "2.5oz", image: "krephoto/lemon_puffs.JPEG" },
      { name: "Sour Cherry", size: "2.5oz", image: "krephoto/sour_cherry_puffs.jpeg" },
      { name: "Blue Raspberry", size: "2.5oz", image: "krephoto/blue_raspberry_puffs.jpeg" }
    ]
  },
  {
    handle: "candy-corn",
    title: "Candy Corn",
    category: "Meltaways",
    price: 6.00,
    size: "2.5oz",
    description: "Traditional seasonal candy corn puffed into airy, melt-in-your-mouth crispy bites.",
    defaultImage: "krephoto/candy_corn.jpeg",
    flavors: []
  },
  {
    handle: "power-pellets",
    title: "Power Pellets",
    category: "Meltaways",
    price: 6.00,
    size: "3.5oz",
    description: "Tangy tart-compressed candies that puff into instantly melting power pellets.",
    defaultImage: "krephoto/power_pellets.JPEG",
    flavors: []
  },
  {
    handle: "bit-o-honey",
    title: "Bit-O-Honey",
    category: "Meltaways",
    price: 6.00,
    size: "1oz",
    description: "Pure honey candy freeze-dried into crunchy, sweet golden honeycomb crystals.",
    defaultImage: "krephoto/bit-o-honey.jpg",
    flavors: []
  },
  {
    handle: "watermelon-pops",
    title: "Watermelon Pops",
    category: "Meltaways",
    price: 6.00,
    size: "2oz",
    description: "Sweet and tangy watermelon lollipops turned into airy, crunchy flavor sponges.",
    defaultImage: "krephoto/watermelon_pops.jpg",
    flavors: []
  },
  {
    handle: "red-hots",
    title: "Red Hots",
    category: "Meltaways",
    price: 6.00,
    size: "2oz",
    description: "Fiery cinnamon balls puffed up into crunchy spheres packed with serious heat.",
    defaultImage: "krephoto/hot_hot_hot.jpg",
    flavors: []
  }
];

window.currentCategory = "All";

// 2. Cart Engine
var CART_KEY = "kreeze-cart";
var cart = {
  getShippingFee() {
    const totalItems = this.count();
    if (totalItems === 0) return 0;
    if (totalItems <= 5) return 10;
    return 10 + (totalItems - 5) * 1;
  },
  hasPickupOnlyItems() {
    return this.items.some(item => {
      const p = PRODUCTS.find(prod => prod.handle === item.handle);
      return p && p.pickupOnly;
    });
  },

  items: JSON.parse(localStorage.getItem(CART_KEY) || "[]"),
  save() {
    localStorage.setItem(CART_KEY, JSON.stringify(this.items));
    this.render();
  },
  add(handle, qty = 1, flavor = "", customSize = "") {
    const p = PRODUCTS.find(p => p.handle === handle);
    if (!p) return;

    const selectedFlavor = flavor || (p.flavors && p.flavors.length > 0 ? p.flavors[0].name : "");
    const cartItemId = selectedFlavor ? `${handle}__${selectedFlavor}` : handle;

    const ex = this.items.find(i => i.id === cartItemId);
    if (ex) {
      ex.qty += qty;
    } else {
      this.items.push({ 
        id: cartItemId, 
        handle: handle, 
        flavor: selectedFlavor, 
        size: customSize || p.size,
        qty: qty 
      });
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
        const flavorText = i.flavor ? `<span style="font-size:0.8rem; color:var(--coral); font-weight:700; display:block;">Flavor: ${i.flavor} (${i.size || p?.size})</span>` : "";
        const price = p ? p.price * i.qty : 0;

        let itemImage = p ? p.defaultImage : '';
        if (p && i.flavor && p.flavors) {
          const match = p.flavors.find(f => f.name === i.flavor);
          if (match && match.image) itemImage = match.image;
        }

        const imgTag = itemImage ? `<img src="${itemImage}" alt="${title}">` : `<div style="width:64px;height:64px;border-radius:.75rem;border:2px solid var(--ink);background:var(--pink);display:flex;align-items:center;justify-content:center;font-size:1.5rem">🍬</div>`;

        return `<div class="line">
          ${imgTag}
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

// 3. Dropdown Change Listener
function handleFlavorChange(selectEl) {
  const selectedOption = selectEl.options[selectEl.selectedIndex];
  const newImgSrc = selectedOption.getAttribute("data-image");
  const newSize = selectedOption.getAttribute("data-size");
  const card = selectEl.closest(".card");
  
  if (card) {
    if (newImgSrc) {
      const cardImg = card.querySelector(".img img");
      if (cardImg) cardImg.src = newImgSrc;
    }
    if (newSize) {
      const badge = card.querySelector(".badge");
      if (badge) badge.textContent = newSize;
    }
  }
}

// 4. Add to Bag
function addProductFromCard(btnEl, handle) {
  const card = btnEl.closest(".card");
  let chosenFlavor = "";
  let chosenSize = "";
  if (card) {
    const select = card.querySelector(".flavor-select");
    if (select) {
      chosenFlavor = select.value;
      const selectedOption = select.options[select.selectedIndex];
      chosenSize = selectedOption.getAttribute("data-size") || "";
    }
  }
  cart.add(handle, 1, chosenFlavor, chosenSize);
}

// 5. Filter Category
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

// 6. Unified Renderer
function renderAllGrids() {
  const featuredEl = document.getElementById("product-grid");
  const shopEl = document.getElementById("shop-product-grid");
  const bgs = ["bg-1", "bg-2", "bg-3", "bg-4"];

  const buildCardHTML = (p, idx, gridPrefix = "grid") => {
    const hasFlavors = p.flavors && p.flavors.length > 0;
    const initialImg = (hasFlavors && p.flavors[0].image) ? p.flavors[0].image : p.defaultImage;
    const initialSize = (hasFlavors && p.flavors[0].size) ? p.flavors[0].size : p.size;

    const dropdownHTML = hasFlavors ? `
      <div class="flavor-select-container">
        <label class="flavor-label" for="flavor-${gridPrefix}-${p.handle}-${idx}">Flavor:</label>
        <select id="flavor-${gridPrefix}-${p.handle}-${idx}" class="flavor-select" onchange="handleFlavorChange(this)">
          ${p.flavors.map(f => `<option value="${f.name}" data-size="${f.size || p.size}" data-image="${f.image || ''}">${f.name}</option>`).join("")}
        </select>
      </div>
    ` : '';

    const imageElement = initialImg 
      ? `<img src="${initialImg}" alt="${p.title}">` 
      : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:3rem;background:var(--pink);">🍬</div>`;

    return `
      <div class="card">
        <div class="img ${bgs[idx % bgs.length]}">
          <span class="badge">${initialSize}</span>
          <a href="product.html?item=${p.handle}" style="display:block; width:100%; height:100%;">
            ${imageElement}
          </a>
        </div>
        <div class="body">
          <a href="product.html?item=${p.handle}">
            <h3 style="cursor:pointer">${p.title}</h3>
          </a>
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

  if (featuredEl) {
    featuredEl.innerHTML = PRODUCTS.slice(0, 3).map((p, i) => buildCardHTML(p, i, "home")).join("");
  }

  if (shopEl) {
    let list = PRODUCTS;
    if (window.currentCategory && window.currentCategory !== "All") {
      list = PRODUCTS.filter(p => p.category === window.currentCategory);
    }
    shopEl.innerHTML = list.map((p, i) => buildCardHTML(p, i, "shop")).join("");
  }
}

// 7. Dynamic Product Detail Page Loader
function adjustPdpQty(delta) {
  const qtyEl = document.getElementById("pdp-qty");
  if (!qtyEl) return;
  let current = parseInt(qtyEl.textContent) || 1;
  current = Math.max(1, current + delta);
  qtyEl.textContent = current;
}

function loadProductDetailPage() {
  const container = document.getElementById("pdp-container");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const handle = params.get("item");
  const p = PRODUCTS.find(prod => prod.handle === handle) || PRODUCTS[0];

  if (!p) return;

  document.title = `${p.title} - Kreeze Candies`;
  const metaTitle = document.getElementById("pdp-meta-title");
  if (metaTitle) metaTitle.textContent = `${p.title} - Kreeze Candies`;

  document.getElementById("pdp-title").textContent = p.title;
  document.getElementById("pdp-price").textContent = `$${p.price.toFixed(2)}`;
  document.getElementById("pdp-desc").textContent = p.description;

  const hasFlavors = p.flavors && p.flavors.length > 0;
  const initialImg = (hasFlavors && p.flavors[0].image) ? p.flavors[0].image : p.defaultImage;
  const initialSize = (hasFlavors && p.flavors[0].size) ? p.flavors[0].size : p.size;

  const imgContainer = document.getElementById("pdp-img-container");
  if (initialImg) {
    imgContainer.innerHTML = `<img id="pdp-image" src="${initialImg}" alt="${p.title}" style="width:100%; height:100%; object-fit:cover;">`;
  } else {
    imgContainer.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:4rem;background:var(--pink);">🍬</div>`;
  }

  document.getElementById("pdp-size").textContent = initialSize;

  const flavorArea = document.getElementById("pdp-flavor-area");
  if (hasFlavors) {
    flavorArea.innerHTML = `
      <div class="flavor-select-container">
        <label class="flavor-label" for="pdp-flavor-select">Flavor:</label>
        <select id="pdp-flavor-select" class="flavor-select" onchange="handlePdpFlavorChange(this)">
          ${p.flavors.map(f => `<option value="${f.name}" data-size="${f.size || p.size}" data-image="${f.image || ''}">${f.name} (${f.size || p.size})</option>`).join("")}
        </select>
      </div>
    `;
  } else {
    flavorArea.innerHTML = "";
  }

  const addBtn = document.getElementById("pdp-add-btn");
  if (addBtn) {
    addBtn.onclick = function() {
      const qty = parseInt(document.getElementById("pdp-qty").textContent) || 1;
      let chosenFlavor = "";
      let chosenSize = p.size;
      const select = document.getElementById("pdp-flavor-select");
      if (select) {
        chosenFlavor = select.value;
        const opt = select.options[select.selectedIndex];
        chosenSize = opt.getAttribute("data-size") || p.size;
      }
      cart.add(p.handle, qty, chosenFlavor, chosenSize);
    };
  }
}

function handlePdpFlavorChange(selectEl) {
  const selectedOption = selectEl.options[selectEl.selectedIndex];
  const newImgSrc = selectedOption.getAttribute("data-image");
  const newSize = selectedOption.getAttribute("data-size");
  
  const imgEl = document.getElementById("pdp-image");
  if (imgEl && newImgSrc) {
    imgEl.src = newImgSrc;
  }
  if (newSize) {
    document.getElementById("pdp-size").textContent = newSize;
  }
}

// 8. Drawer & Modal Controls
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
  const shippingOption = document.getElementById("delivery-shipping");
  const shippingNotice = document.getElementById("pickup-only-notice");

  if (title) title.innerText = "Complete Your Order";
  if (form) form.style.display = "block";
  if (screen) screen.style.display = "none";

  if (cart.hasPickupOnlyItems()) {
    if (shippingOption) shippingOption.disabled = true;
    document.getElementById("delivery-pickup").checked = true;
    if (shippingNotice) shippingNotice.style.display = "block";
    toggleShippingAddressFields(false);
  } else {
    if (shippingOption) shippingOption.disabled = false;
    if (shippingNotice) shippingNotice.style.display = "none";
    if (shippingOption) shippingOption.checked = true;
    toggleShippingAddressFields(true);
  }

  updateCheckoutTotals();

  document.getElementById("checkout-modal")?.classList.add("open");
  document.getElementById("checkout-scrim")?.classList.add("open");
}

function toggleShippingAddressFields(isShipping) {
  const addrFields = document.getElementById("shipping-address-fields");
  const shipAddress = document.getElementById('ship-address');
  const shipCity = document.getElementById('ship-city');
  const shipState = document.getElementById('ship-state');
  const shipZip = document.getElementById('ship-zip');
  const shippingRow = document.getElementById('checkout-shipping-row');

  if (addrFields) {
    addrFields.style.display = isShipping ? "block" : "none";
  }
  if (shipAddress) shipAddress.required = isShipping;
  if (shipCity) shipCity.required = isShipping;
  if (shipState) shipState.required = isShipping;
  if (shipZip) shipZip.required = isShipping;

  if (shippingRow) shippingRow.style.display = isShipping ? "flex" : "none";

  updateCheckoutTotals();
}

function updateCheckoutTotals() {
  const isShipping = document.getElementById("delivery-shipping")?.checked;
  const subtotal = cart.total();
  const shippingFee = isShipping ? cart.getShippingFee() : 0;
  const salesTax = getCalculatedTax(subtotal);
  const grandTotal = subtotal + shippingFee + salesTax;

  const subtotalDisplay = document.getElementById("checkout-subtotal");
  const feeDisplay = document.getElementById("checkout-shipping-fee");
  const taxDisplay = document.getElementById("checkout-tax-fee");
  const totalDisplay = document.getElementById("checkout-grand-total");

  if (subtotalDisplay) subtotalDisplay.innerText = `$${subtotal.toFixed(2)}`;
  if (feeDisplay) feeDisplay.innerText = isShipping ? `$${shippingFee.toFixed(2)}` : "$0.00";
  if (taxDisplay) taxDisplay.innerText = `$${salesTax.toFixed(2)}`;
  if (totalDisplay) totalDisplay.innerText = `$${grandTotal.toFixed(2)}`;
}

function closeCheckoutModal() {
  document.getElementById("checkout-modal")?.classList.remove("open");
  document.getElementById("checkout-scrim")?.classList.remove("open");
}

function processOrder(event) {
  event.preventDefault();

  const phoneInput = document.getElementById("cust-phone")?.value || "";
  const cleanPhone = phoneInput.replace(/\D/g, '');
  const formattedPhone = `(${cleanPhone.slice(0,3)}) ${cleanPhone.slice(3,6)}-${cleanPhone.slice(6)}`;

  if (cleanPhone.length !== 10) {
    alert("Please enter a valid 10-digit phone number!");
    return;
  }

  const isShipping = document.getElementById("delivery-shipping")?.checked;
  if (isShipping && cart.hasPickupOnlyItems()) {
    alert("Your cart contains items that are only available for local pickup. Please select Candy Shack Pickup.");
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
  const deliveryType = isShipping ? "Direct Shipping" : "Candy Shack Pickup";
  
  let shippingAddressStr = "N/A (Local Pickup)";
  if (isShipping) {
    const street = document.getElementById("ship-address")?.value || "";
    const city = document.getElementById("ship-city")?.value || "";
    const state = document.getElementById("ship-state")?.value || "";
    const zip = document.getElementById("ship-zip")?.value || "";
    shippingAddressStr = `${street}, ${city}, ${state} ${zip}`;
  }

  const subtotal = cart.total();
  const shippingFee = isShipping ? cart.getShippingFee() : 0;
  const salesTax = getCalculatedTax(subtotal);
  const grandTotal = subtotal + shippingFee + salesTax;
  const totalFormatted = "$" + grandTotal.toFixed(2);
  const numericAmount = grandTotal.toFixed(2);

  const selectedMethod = document.getElementById("payment-method")?.value || "venmo";
  
  const itemsList = cart.items.map(item => {
    const p = PRODUCTS.find(prod => prod.handle === item.handle) || {};
    const title = p.title || item.handle;
    const flavorTag = item.flavor ? ` (${item.flavor})` : "";
    const sizeTag = item.size ? ` [${item.size}]` : "";
    const price = p.price || 6.00;
    return `- ${title}${flavorTag}${sizeTag} (x${item.qty}) — $${(price * item.qty).toFixed(2)}`;
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

  // Generate current timestamp in US Eastern Time
  const now = new Date();
  const orderTimestamp = now.toLocaleString("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });

  const templateParams = {
    order_id: orderId,
    order_date: orderTimestamp,
    customer_name: name,
    customer_email: email,
    customer_phone: formattedPhone,
    delivery_method: deliveryType,
    shipping_address: shippingAddressStr,
    shipping_fee: `$${shippingFee.toFixed(2)}`,
    sales_tax: `$${salesTax.toFixed(2)}`,
    payment_method: appName,
    order_total: totalFormatted,
    order_items: itemsList
  };

  // 1. Dispatch EmailJS notification
  if (typeof emailjs !== "undefined") {
    emailjs.send("service_yqb5b0h", "template_xcvjrjz", templateParams)
      .then(function(response) {
        console.log("Order email sent!", response.status, response.text);
      })
      .catch(function(error) {
        console.error("EmailJS dispatch error:", error);
      });
  }

  // 2. Auto-log order into Google Sheet
  const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbxROUil2fSrbRJQiPikhD2rvRSXMorTdJxydJdE9wT9hyBpNtq2isFJRRvXHWNb0Zs9xA/exec";

  if (GOOGLE_SHEET_URL && GOOGLE_SHEET_URL.indexOf("PASTE_") === -1) {
    fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(templateParams)
    }).catch(function(err) {
      console.error("Sheet auto-log error:", err);
    });
  }

  // 3. Populate confirmation screen
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
    submitBtn.innerText = "Place Order & Pay";
  }
}

// 9. Initialize
document.addEventListener("DOMContentLoaded", () => {
  cart.render();
  renderAllGrids();
  loadProductDetailPage();
});