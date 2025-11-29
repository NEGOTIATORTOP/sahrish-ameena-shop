// ============================================
// STATE MANAGEMENT (In-Memory Storage)
// ============================================

let appState = {
  currentUser: null,
  cart: [],
  wishlist: [],
  products: [],
  orders: [],
  reviews: [],
  complaints: [],
  addresses: [],
  appliedPromo: null,
  currentPage: 'home',
  filteredProducts: [],
  selectedCategory: 'all',
  theme: 'light',
  heroSlideIndex: 0,
  heroInterval: null
};

// ============================================
// DATA INITIALIZATION
// ============================================

const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Silk Evening Gown",
    category: "Dresses",
    price: 15999,
    image: "https://images.unsplash.com/photo-1595777707802-41d6b3b66269?w=500",
    description: "Luxurious silk evening gown with elegant draping. Perfect for special occasions and formal events. Made from premium quality silk with delicate hand-stitched details.",
    rating: 4.8,
    reviews: 127,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Gold", "Navy"],
    in_stock: true,
    featured: true,
    bestseller: true
  },
  {
    id: 2,
    name: "Casual Linen Dress",
    category: "Dresses",
    price: 4999,
    image: "https://images.unsplash.com/photo-1612336307429-8a88e8d08dbb?w=500",
    description: "Light and breathable linen dress perfect for summer. Features a relaxed fit and natural fabric that keeps you cool all day.",
    rating: 4.6,
    reviews: 89,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Beige", "Mint"],
    in_stock: true,
    sale: true,
    salePrice: 3999
  },
  {
    id: 3,
    name: "Designer Leather Handbag",
    category: "Handbags",
    price: 12999,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500",
    description: "Premium leather handbag with gold hardware. Spacious interior with multiple compartments for organization.",
    rating: 4.9,
    reviews: 156,
    sizes: ["One Size"],
    colors: ["Black", "Cognac", "Cream"],
    in_stock: true,
    bestseller: true
  },
  {
    id: 4,
    name: "Gold Statement Necklace",
    category: "Jewelry",
    price: 8999,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500",
    description: "Elegant gold statement necklace for special occasions. Handcrafted with attention to detail.",
    rating: 4.7,
    reviews: 73,
    sizes: ["One Size"],
    colors: ["Gold", "Rose Gold"],
    in_stock: true
  },
  {
    id: 5,
    name: "Classic Black Heels",
    category: "Shoes",
    price: 7999,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
    description: "Timeless black heel pumps, perfect for any occasion. Comfortable insole with elegant silhouette.",
    rating: 4.8,
    reviews: 142,
    sizes: ["5", "6", "7", "8", "9", "10"],
    colors: ["Black"],
    in_stock: true,
    bestseller: true
  },
  {
    id: 6,
    name: "White Silk Blouse",
    category: "Tops",
    price: 4499,
    image: "https://images.unsplash.com/photo-1595541096051-073f62d4acdf?w=500",
    description: "Crisp white silk blouse with pearl buttons. Professional and elegant for office or formal wear.",
    rating: 4.5,
    reviews: 64,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Cream"],
    in_stock: true
  },
  {
    id: 7,
    name: "Floral Maxi Dress",
    category: "Dresses",
    price: 6999,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500",
    description: "Beautiful floral maxi dress with flowing fabric. Perfect for garden parties and summer events.",
    rating: 4.7,
    reviews: 98,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Floral Blue", "Floral Pink"],
    in_stock: true,
    featured: true
  },
  {
    id: 8,
    name: "Leather Crossbody Bag",
    category: "Handbags",
    price: 5999,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500",
    description: "Compact leather crossbody bag perfect for everyday use. Adjustable strap and secure closure.",
    rating: 4.6,
    reviews: 112,
    sizes: ["One Size"],
    colors: ["Black", "Brown", "Red"],
    in_stock: true,
    sale: true,
    salePrice: 4999
  },
  {
    id: 9,
    name: "Pearl Drop Earrings",
    category: "Jewelry",
    price: 3999,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500",
    description: "Elegant pearl drop earrings with gold accents. Classic and sophisticated jewelry piece.",
    rating: 4.8,
    reviews: 87,
    sizes: ["One Size"],
    colors: ["Gold", "Silver"],
    in_stock: true
  },
  {
    id: 10,
    name: "Strappy Sandals",
    category: "Shoes",
    price: 5499,
    image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=500",
    description: "Comfortable strappy sandals with cushioned sole. Perfect for warm weather and casual outings.",
    rating: 4.5,
    reviews: 76,
    sizes: ["5", "6", "7", "8", "9", "10"],
    colors: ["Tan", "Black", "White"],
    in_stock: true
  },
  {
    id: 11,
    name: "Embroidered Tunic",
    category: "Tops",
    price: 3999,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500",
    description: "Beautiful embroidered tunic with intricate details. Comfortable and stylish for casual wear.",
    rating: 4.6,
    reviews: 54,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Coral"],
    in_stock: true
  },
  {
    id: 12,
    name: "Cocktail Dress",
    category: "Dresses",
    price: 9999,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500",
    description: "Stunning cocktail dress for evening events. Figure-flattering design with elegant details.",
    rating: 4.9,
    reviews: 134,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Red", "Navy"],
    in_stock: true,
    featured: true,
    bestseller: true
  },
  {
    id: 13,
    name: "Tote Bag",
    category: "Handbags",
    price: 4999,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
    description: "Spacious tote bag perfect for work or travel. Durable material with reinforced handles.",
    rating: 4.7,
    reviews: 91,
    sizes: ["One Size"],
    colors: ["Black", "Brown", "Grey"],
    in_stock: true
  },
  {
    id: 14,
    name: "Layered Chain Necklace",
    category: "Jewelry",
    price: 2999,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500",
    description: "Trendy layered chain necklace with adjustable length. Perfect for everyday styling.",
    rating: 4.5,
    reviews: 68,
    sizes: ["One Size"],
    colors: ["Gold", "Silver", "Rose Gold"],
    in_stock: true,
    sale: true,
    salePrice: 2499
  },
  {
    id: 15,
    name: "Ankle Boots",
    category: "Shoes",
    price: 8999,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
    description: "Stylish ankle boots with block heel. Comfortable for all-day wear with premium leather.",
    rating: 4.8,
    reviews: 103,
    sizes: ["5", "6", "7", "8", "9", "10"],
    colors: ["Black", "Brown"],
    in_stock: true
  },
  {
    id: 16,
    name: "Knit Sweater",
    category: "Tops",
    price: 4999,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500",
    description: "Cozy knit sweater perfect for cooler weather. Soft fabric with relaxed fit.",
    rating: 4.7,
    reviews: 82,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Beige", "Grey", "Navy"],
    in_stock: true
  },
  {
    id: 17,
    name: "Evening Clutch",
    category: "Handbags",
    price: 3499,
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500",
    description: "Elegant evening clutch with chain strap. Perfect for formal events and parties.",
    rating: 4.6,
    reviews: 59,
    sizes: ["One Size"],
    colors: ["Gold", "Silver", "Black"],
    in_stock: true
  },
  {
    id: 18,
    name: "Diamond Bracelet",
    category: "Jewelry",
    price: 12999,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500",
    description: "Stunning diamond bracelet with premium quality stones. Timeless and luxurious piece.",
    rating: 4.9,
    reviews: 145,
    sizes: ["One Size"],
    colors: ["White Gold", "Yellow Gold"],
    in_stock: true,
    featured: true
  },
  {
    id: 19,
    name: "Platform Heels",
    category: "Shoes",
    price: 6999,
    image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=500",
    description: "Trendy platform heels with comfortable height. Perfect for parties and special occasions.",
    rating: 4.6,
    reviews: 94,
    sizes: ["5", "6", "7", "8", "9", "10"],
    colors: ["Black", "Nude", "Red"],
    in_stock: true
  },
  {
    id: 20,
    name: "Printed Scarf",
    category: "Accessories",
    price: 1999,
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=500",
    description: "Luxurious printed silk scarf. Versatile accessory for multiple styling options.",
    rating: 4.7,
    reviews: 72,
    sizes: ["One Size"],
    colors: ["Multi", "Blue", "Red"],
    in_stock: true,
    sale: true,
    salePrice: 1499
  }
];

const SAMPLE_ORDERS = [
  {
    id: "ORD-001",
    userId: "demo@example.com",
    date: "2025-11-25",
    status: "Delivered",
    items: [
      { productId: 1, quantity: 1, size: "M", color: "Black" },
      { productId: 3, quantity: 1, size: "One Size", color: "Black" }
    ],
    total: 28998,
    shipping: "standard",
    address: "123 Fashion Street, Mumbai, Maharashtra 400001"
  },
  {
    id: "ORD-002",
    userId: "demo@example.com",
    date: "2025-11-28",
    status: "Shipped",
    items: [
      { productId: 12, quantity: 1, size: "S", color: "Red" }
    ],
    total: 9999,
    shipping: "express",
    address: "456 Style Avenue, Delhi, Delhi 110001"
  }
];

const SAMPLE_REVIEWS = [
  {
    id: 1,
    productId: 1,
    userId: "demo@example.com",
    userName: "Priya M.",
    rating: 5,
    text: "Absolutely stunning! The quality is premium and the fit is perfect. Worth every penny.",
    date: "2025-11-20",
    verified: true,
    likes: 23
  },
  {
    id: 2,
    productId: 3,
    userId: "demo@example.com",
    userName: "Anjali K.",
    rating: 5,
    text: "Beautiful handbag! The leather quality is excellent and it's very spacious.",
    date: "2025-11-22",
    verified: true,
    likes: 18
  },
  {
    id: 3,
    productId: 12,
    userId: "demo@example.com",
    userName: "Sneha R.",
    rating: 5,
    text: "Perfect cocktail dress! Received so many compliments at the party.",
    date: "2025-11-26",
    verified: true,
    likes: 31
  }
];

const PROMO_CODES = [
  { code: "WELCOME20", discount: 20, type: "percentage" },
  { code: "LUXURY10", discount: 10, type: "percentage" },
  { code: "SAVE500", discount: 500, type: "fixed" }
];

// Initialize data
function initializeData() {
  appState.products = [...PRODUCTS_DATA];
  appState.filteredProducts = [...PRODUCTS_DATA];
  
  // Check if user was previously logged in
  const savedTheme = getFromStorage('theme');
  if (savedTheme) {
    appState.theme = savedTheme;
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
  
  const savedUser = getFromStorage('currentUser');
  if (savedUser) {
    appState.currentUser = savedUser;
    appState.cart = getFromStorage('cart_' + savedUser.email) || [];
    appState.wishlist = getFromStorage('wishlist_' + savedUser.email) || [];
    appState.orders = getFromStorage('orders_' + savedUser.email) || SAMPLE_ORDERS;
    appState.reviews = getFromStorage('reviews_' + savedUser.email) || SAMPLE_REVIEWS;
    appState.complaints = getFromStorage('complaints_' + savedUser.email) || [];
    appState.addresses = getFromStorage('addresses_' + savedUser.email) || [
      {
        id: 1,
        name: "Home",
        address: "123 Fashion Street",
        city: "Mumbai",
        state: "Maharashtra",
        zip: "400001",
        phone: "+91 98765 43210"
      }
    ];
  }
}

// Simple in-memory storage helper
function saveToStorage(key, data) {
  try {
    const tempStorage = window._tempStorage || {};
    tempStorage[key] = JSON.stringify(data);
    window._tempStorage = tempStorage;
  } catch (e) {
    console.log('Storage not available');
  }
}

function getFromStorage(key) {
  try {
    const tempStorage = window._tempStorage || {};
    const data = tempStorage[key];
    return data ? JSON.parse(data) : null;
  } catch (e) {
    return null;
  }
}

// Save current state
function saveState() {
  if (appState.currentUser) {
    saveToStorage('currentUser', appState.currentUser);
    saveToStorage('cart_' + appState.currentUser.email, appState.cart);
    saveToStorage('wishlist_' + appState.currentUser.email, appState.wishlist);
    saveToStorage('orders_' + appState.currentUser.email, appState.orders);
    saveToStorage('reviews_' + appState.currentUser.email, appState.reviews);
    saveToStorage('complaints_' + appState.currentUser.email, appState.complaints);
    saveToStorage('addresses_' + appState.currentUser.email, appState.addresses);
  }
  saveToStorage('theme', appState.theme);
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function formatPrice(price) {
  return '₹' + price.toLocaleString('en-IN');
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
}

function generateId() {
  return 'ID-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// ============================================
// NAVIGATION
// ============================================

function navigateTo(page) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  
  // Close mobile menu and cart drawer
  closeMobileMenu();
  closeCartDrawer();
  
  // Check authentication for protected pages
  const protectedPages = ['checkout', 'dashboard'];
  if (protectedPages.includes(page) && !appState.currentUser) {
    navigateTo('login');
    showToast('Please login to continue', 'info');
    return;
  }
  
  // Show selected page
  appState.currentPage = page;
  
  switch(page) {
    case 'home':
      document.getElementById('homePage').classList.add('active');
      startHeroCarousel();
      renderFlashSale();
      renderBestsellers();
      break;
    case 'products':
      document.getElementById('productsPage').classList.add('active');
      renderProductsPage();
      break;
    case 'checkout':
      document.getElementById('checkoutPage').classList.add('active');
      renderCheckoutPage();
      break;
    case 'login':
      document.getElementById('loginPage').classList.add('active');
      break;
    case 'register':
      document.getElementById('registerPage').classList.add('active');
      break;
    case 'dashboard':
      document.getElementById('dashboardPage').classList.add('active');
      renderDashboard();
      break;
    case 'wishlist':
      document.getElementById('wishlistPage').classList.add('active');
      renderWishlistPage();
      break;
  }
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showProductDetail(productId) {
  const product = appState.products.find(p => p.id === productId);
  if (!product) return;
  
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('productDetailPage').classList.add('active');
  
  const container = document.getElementById('productDetailContainer');
  container.innerHTML = `
    <div class="breadcrumb">
      <a href="#" onclick="navigateTo('home')">Home</a>
      <span>/</span>
      <a href="#" onclick="filterByCategory('${product.category}')">${product.category}</a>
      <span>/</span>
      <span>${product.name}</span>
    </div>
    
    <div class="product-detail-layout">
      <div class="product-gallery">
        <img src="${product.image}" alt="${product.name}" class="product-main-image" id="mainProductImage">
        <div class="product-thumbnails">
          <img src="${product.image}" alt="${product.name}" class="product-thumbnail active" onclick="changeMainImage('${product.image}')">
          <img src="${product.image}" alt="${product.name}" class="product-thumbnail" onclick="changeMainImage('${product.image}')">
          <img src="${product.image}" alt="${product.name}" class="product-thumbnail" onclick="changeMainImage('${product.image}')">
        </div>
      </div>
      
      <div class="product-detail-info">
        <div class="product-detail-category">${product.category}</div>
        <h1 class="product-detail-name">${product.name}</h1>
        
        <div class="product-detail-rating">
          <span class="product-stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
          <span>${product.rating} (${product.reviews} reviews)</span>
        </div>
        
        <div class="product-detail-price">
          ${product.sale ? `
            <span style="text-decoration: line-through; opacity: 0.5; font-size: 20px; margin-right: 12px;">${formatPrice(product.price)}</span>
            ${formatPrice(product.salePrice)}
          ` : formatPrice(product.price)}
        </div>
        
        <p class="product-detail-description">${product.description}</p>
        
        <div class="product-options">
          <div class="option-group">
            <label class="option-label">Select Size:</label>
            <div class="option-values" id="sizeOptions">
              ${product.sizes.map(size => `
                <button class="option-value" onclick="selectOption('size', '${size}', this)">${size}</button>
              `).join('')}
            </div>
          </div>
          
          <div class="option-group">
            <label class="option-label">Select Color:</label>
            <div class="option-values" id="colorOptions">
              ${product.colors.map(color => `
                <button class="option-value" onclick="selectOption('color', '${color}', this)">${color}</button>
              `).join('')}
            </div>
          </div>
        </div>
        
        <div class="product-detail-actions">
          <button class="btn-add-to-cart" onclick="addToCartFromDetail(${product.id})">Add to Cart</button>
          <button class="btn-add-wishlist ${isInWishlist(product.id) ? 'active' : ''}" onclick="toggleWishlist(${product.id})">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="${isInWishlist(product.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <div class="product-reviews">
      <div class="reviews-header">
        <h3 class="reviews-title">Customer Reviews (${product.reviews})</h3>
      </div>
      ${renderProductReviews(product.id)}
    </div>
  `;
  
  // Auto-select first size and color
  setTimeout(() => {
    const firstSize = document.querySelector('#sizeOptions .option-value');
    const firstColor = document.querySelector('#colorOptions .option-value');
    if (firstSize) firstSize.click();
    if (firstColor) firstColor.click();
  }, 100);
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

let selectedSize = null;
let selectedColor = null;

function selectOption(type, value, element) {
  // Remove selected class from siblings
  element.parentElement.querySelectorAll('.option-value').forEach(btn => {
    btn.classList.remove('selected');
  });
  
  // Add selected class to clicked element
  element.classList.add('selected');
  
  // Store selection
  if (type === 'size') {
    selectedSize = value;
  } else if (type === 'color') {
    selectedColor = value;
  }
}

function changeMainImage(imageUrl) {
  document.getElementById('mainProductImage').src = imageUrl;
  document.querySelectorAll('.product-thumbnail').forEach(thumb => {
    thumb.classList.remove('active');
  });
  event.target.classList.add('active');
}

function renderProductReviews(productId) {
  const productReviews = appState.reviews.filter(r => r.productId === productId);
  
  if (productReviews.length === 0) {
    return '<p style="opacity: 0.7; text-align: center; padding: 40px;">No reviews yet. Be the first to review!</p>';
  }
  
  return productReviews.map(review => `
    <div class="review-item">
      <div class="review-header">
        <div>
          <div class="review-user">${review.userName}</div>
          ${review.verified ? '<div class="review-verified">✓ Verified Purchase</div>' : ''}
          <div class="review-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
        </div>
        <div style="opacity: 0.7; font-size: 12px;">${formatDate(review.date)}</div>
      </div>
      <p class="review-text">${review.text}</p>
      <div class="review-likes">${review.likes} people found this helpful</div>
    </div>
  `).join('');
}

// ============================================
// CART FUNCTIONALITY
// ============================================

function addToCart(productId) {
  const product = appState.products.find(p => p.id === productId);
  if (!product) return;
  
  const cartItem = {
    ...product,
    quantity: 1,
    size: product.sizes[0],
    color: product.colors[0],
    cartId: generateId()
  };
  
  appState.cart.push(cartItem);
  saveState();
  updateCartUI();
  showToast('Added to cart!', 'success');
}

function addToCartFromDetail(productId) {
  if (!selectedSize || !selectedColor) {
    showToast('Please select size and color', 'error');
    return;
  }
  
  const product = appState.products.find(p => p.id === productId);
  if (!product) return;
  
  const cartItem = {
    ...product,
    quantity: 1,
    size: selectedSize,
    color: selectedColor,
    cartId: generateId()
  };
  
  appState.cart.push(cartItem);
  saveState();
  updateCartUI();
  showToast('Added to cart!', 'success');
}

function removeFromCart(cartId) {
  appState.cart = appState.cart.filter(item => item.cartId !== cartId);
  saveState();
  updateCartUI();
  showToast('Removed from cart', 'info');
}

function updateCartQuantity(cartId, change) {
  const item = appState.cart.find(item => item.cartId === cartId);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(cartId);
    } else {
      saveState();
      updateCartUI();
    }
  }
}

function calculateCartTotal() {
  const subtotal = appState.cart.reduce((sum, item) => {
    const price = item.sale ? item.salePrice : item.price;
    return sum + (price * item.quantity);
  }, 0);
  
  let discount = 0;
  if (appState.appliedPromo) {
    if (appState.appliedPromo.type === 'percentage') {
      discount = subtotal * (appState.appliedPromo.discount / 100);
    } else {
      discount = appState.appliedPromo.discount;
    }
  }
  
  return {
    subtotal,
    discount,
    total: subtotal - discount
  };
}

function updateCartUI() {
  // Update badge
  const badge = document.getElementById('cartBadge');
  const totalItems = appState.cart.reduce((sum, item) => sum + item.quantity, 0);
  badge.textContent = totalItems;
  badge.style.display = totalItems > 0 ? 'block' : 'none';
  
  // Update cart drawer
  const cartBody = document.getElementById('cartDrawerBody');
  const cartFooter = document.getElementById('cartDrawerFooter');
  
  if (appState.cart.length === 0) {
    cartBody.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    cartFooter.style.display = 'none';
  } else {
    cartBody.innerHTML = appState.cart.map(item => {
      const price = item.sale ? item.salePrice : item.price;
      return `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item-image">
          <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-details">Size: ${item.size}, Color: ${item.color}</div>
            <div class="cart-item-controls">
              <div class="cart-item-quantity">
                <button class="cart-qty-btn" onclick="updateCartQuantity('${item.cartId}', -1)">-</button>
                <span>${item.quantity}</span>
                <button class="cart-qty-btn" onclick="updateCartQuantity('${item.cartId}', 1)">+</button>
              </div>
              <div class="cart-item-price">${formatPrice(price * item.quantity)}</div>
            </div>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart('${item.cartId}')">&times;</button>
        </div>
      `;
    }).join('');
    
    const totals = calculateCartTotal();
    document.getElementById('cartSubtotal').textContent = formatPrice(totals.subtotal);
    document.getElementById('cartTotal').textContent = formatPrice(totals.total);
    
    if (totals.discount > 0) {
      document.getElementById('discountRow').style.display = 'flex';
      document.getElementById('cartDiscount').textContent = '-' + formatPrice(totals.discount);
    } else {
      document.getElementById('discountRow').style.display = 'none';
    }
    
    cartFooter.style.display = 'block';
  }
}

function applyPromoCode() {
  const input = document.getElementById('promoCodeInput');
  const code = input.value.trim().toUpperCase();
  
  const promo = PROMO_CODES.find(p => p.code === code);
  
  if (promo) {
    appState.appliedPromo = promo;
    updateCartUI();
    showToast(`Promo code applied! ${promo.discount}${promo.type === 'percentage' ? '%' : '₹'} off`, 'success');
    input.value = '';
  } else {
    showToast('Invalid promo code', 'error');
  }
}

function toggleCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  drawer.classList.toggle('active');
}

function closeCartDrawer() {
  document.getElementById('cartDrawer').classList.remove('active');
}

// ============================================
// WISHLIST FUNCTIONALITY
// ============================================

function toggleWishlist(productId) {
  const index = appState.wishlist.indexOf(productId);
  
  if (index > -1) {
    appState.wishlist.splice(index, 1);
    showToast('Removed from wishlist', 'info');
  } else {
    appState.wishlist.push(productId);
    showToast('Added to wishlist!', 'success');
  }
  
  saveState();
  updateWishlistUI();
  
  // Update current page if on product detail or wishlist page
  if (appState.currentPage === 'wishlist') {
    renderWishlistPage();
  }
}

function isInWishlist(productId) {
  return appState.wishlist.includes(productId);
}

function updateWishlistUI() {
  const badge = document.getElementById('wishlistBadge');
  badge.textContent = appState.wishlist.length;
  badge.style.display = appState.wishlist.length > 0 ? 'block' : 'none';
}

function renderWishlistPage() {
  const grid = document.getElementById('wishlistGrid');
  
  if (appState.wishlist.length === 0) {
    grid.innerHTML = '<p style="text-align: center; opacity: 0.7; padding: 60px 20px;">Your wishlist is empty</p>';
    return;
  }
  
  const wishlistProducts = appState.products.filter(p => appState.wishlist.includes(p.id));
  grid.innerHTML = wishlistProducts.map(product => createProductCard(product)).join('');
}

// ============================================
// PRODUCT RENDERING
// ============================================

function createProductCard(product) {
  const price = product.sale ? product.salePrice : product.price;
  const inWishlist = isInWishlist(product.id);
  
  return `
    <div class="product-card">
      <div class="product-image-container">
        <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
        ${product.sale ? '<div class="product-badge">SALE</div>' : ''}
        <button class="product-wishlist-btn ${inWishlist ? 'active' : ''}" onclick="toggleWishlist(${product.id})">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="${inWishlist ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>
      <div class="product-info">
        <div class="product-category">${product.category}</div>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-rating">
          <span class="product-stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
          <span class="product-reviews">(${product.reviews})</span>
        </div>
        <div class="product-price">
          ${product.sale ? `<span style="text-decoration: line-through; opacity: 0.5; font-size: 14px; margin-right: 8px;">${formatPrice(product.price)}</span>` : ''}
          ${formatPrice(price)}
        </div>
        <div class="product-actions">
          <button class="btn-add-cart" onclick="addToCart(${product.id})">Add to Cart</button>
          <button class="btn-quick-view" onclick="showProductDetail(${product.id})">View</button>
        </div>
      </div>
    </div>
  `;
}

function renderFlashSale() {
  const grid = document.getElementById('flashSaleGrid');
  const saleProducts = appState.products.filter(p => p.sale).slice(0, 4);
  grid.innerHTML = saleProducts.map(product => createProductCard(product)).join('');
  
  // Start countdown
  startCountdown();
}

function renderBestsellers() {
  const container = document.getElementById('bestsellersCarousel');
  const bestsellers = appState.products.filter(p => p.bestseller);
  container.innerHTML = bestsellers.map(product => createProductCard(product)).join('');
}

function renderProductsPage() {
  const grid = document.getElementById('productsGrid');
  const title = document.getElementById('productsTitle');
  
  title.textContent = appState.selectedCategory === 'all' ? 'All Products' : appState.selectedCategory;
  
  if (appState.filteredProducts.length === 0) {
    grid.innerHTML = '<p style="text-align: center; opacity: 0.7; padding: 60px 20px;">No products found</p>';
    return;
  }
  
  grid.innerHTML = appState.filteredProducts.map(product => createProductCard(product)).join('');
}

// ============================================
// FILTERING & SORTING
// ============================================

function filterByCategory(category) {
  appState.selectedCategory = category;
  
  if (category === 'all') {
    appState.filteredProducts = [...appState.products];
  } else {
    appState.filteredProducts = appState.products.filter(p => p.category === category);
  }
  
  navigateTo('products');
  applyFilters();
}

function applyFilters() {
  let filtered = appState.selectedCategory === 'all' 
    ? [...appState.products]
    : appState.products.filter(p => p.category === appState.selectedCategory);
  
  // Price filter
  const priceFilter = document.querySelector('input[name="price"]:checked')?.value;
  if (priceFilter && priceFilter !== 'all') {
    const [min, max] = priceFilter.split('-').map(Number);
    filtered = filtered.filter(p => {
      const price = p.sale ? p.salePrice : p.price;
      if (max) {
        return price >= min && price <= max;
      } else {
        return price >= min;
      }
    });
  }
  
  // Rating filter
  const ratingFilter = document.querySelector('input[name="rating"]:checked')?.value;
  if (ratingFilter && ratingFilter !== 'all') {
    const minRating = parseFloat(ratingFilter);
    filtered = filtered.filter(p => p.rating >= minRating);
  }
  
  appState.filteredProducts = filtered;
  applySorting();
}

function applySorting() {
  const sortValue = document.getElementById('sortSelect')?.value || 'featured';
  
  switch(sortValue) {
    case 'newest':
      appState.filteredProducts.sort((a, b) => b.id - a.id);
      break;
    case 'bestseller':
      appState.filteredProducts.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
      break;
    case 'price-low':
      appState.filteredProducts.sort((a, b) => {
        const priceA = a.sale ? a.salePrice : a.price;
        const priceB = b.sale ? b.salePrice : b.price;
        return priceA - priceB;
      });
      break;
    case 'price-high':
      appState.filteredProducts.sort((a, b) => {
        const priceA = a.sale ? a.salePrice : a.price;
        const priceB = b.sale ? b.salePrice : b.price;
        return priceB - priceA;
      });
      break;
    case 'rating':
      appState.filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
  }
  
  renderProductsPage();
}

function resetFilters() {
  document.querySelectorAll('input[name="price"]').forEach(input => {
    input.checked = input.value === 'all';
  });
  document.querySelectorAll('input[name="rating"]').forEach(input => {
    input.checked = input.value === 'all';
  });
  applyFilters();
}

// ============================================
// SEARCH
// ============================================

function initSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchDropdown = document.getElementById('searchDropdown');
  
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    
    if (query.length < 2) {
      searchDropdown.classList.remove('show');
      return;
    }
    
    const results = appState.products.filter(p => 
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query)
    ).slice(0, 5);
    
    if (results.length > 0) {
      searchDropdown.innerHTML = results.map(product => `
        <div class="search-result-item" onclick="showProductDetail(${product.id})">
          <img src="${product.image}" alt="${product.name}" class="search-result-image">
          <div class="search-result-info">
            <div class="search-result-name">${product.name}</div>
            <div class="search-result-price">${formatPrice(product.sale ? product.salePrice : product.price)}</div>
          </div>
        </div>
      `).join('');
      searchDropdown.classList.add('show');
    } else {
      searchDropdown.innerHTML = '<div style="padding: 20px; text-align: center; opacity: 0.7;">No results found</div>';
      searchDropdown.classList.add('show');
    }
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
      searchDropdown.classList.remove('show');
    }
  });
}

// ============================================
// AUTHENTICATION
// ============================================

function handleLogin(e) {
  e.preventDefault();
  
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  
  // Simple demo authentication
  appState.currentUser = {
    email,
    name: email.split('@')[0],
    profilePicture: null
  };
  
  // Load user data
  appState.cart = getFromStorage('cart_' + email) || [];
  appState.wishlist = getFromStorage('wishlist_' + email) || [];
  appState.orders = getFromStorage('orders_' + email) || SAMPLE_ORDERS;
  appState.reviews = getFromStorage('reviews_' + email) || SAMPLE_REVIEWS;
  appState.complaints = getFromStorage('complaints_' + email) || [];
  appState.addresses = getFromStorage('addresses_' + email) || [
    {
      id: 1,
      name: "Home",
      address: "123 Fashion Street",
      city: "Mumbai",
      state: "Maharashtra",
      zip: "400001",
      phone: "+91 98765 43210"
    }
  ];
  
  saveState();
  updateCartUI();
  updateWishlistUI();
  updateUserMenu();
  
  showToast('Welcome back!', 'success');
  navigateTo('home');
}

function handleRegister(e) {
  e.preventDefault();
  
  const name = document.getElementById('registerName').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  
  appState.currentUser = {
    email,
    name,
    profilePicture: null
  };
  
  saveState();
  updateUserMenu();
  
  showToast('Account created successfully!', 'success');
  navigateTo('home');
}

function handleLogout() {
  appState.currentUser = null;
  appState.cart = [];
  appState.wishlist = [];
  appState.orders = [];
  appState.reviews = [];
  appState.complaints = [];
  appState.addresses = [];
  
  saveToStorage('currentUser', null);
  updateCartUI();
  updateWishlistUI();
  updateUserMenu();
  
  showToast('Logged out successfully', 'info');
  navigateTo('home');
}

function updateUserMenu() {
  const userMenuBtn = document.getElementById('userMenuBtn');
  const userDropdown = document.getElementById('userDropdown');
  const dropdownContent = document.getElementById('userDropdownContent');
  
  if (appState.currentUser) {
    dropdownContent.innerHTML = `
      <button class="user-dropdown-item" onclick="navigateTo('dashboard')">
        <strong>${appState.currentUser.name}</strong>
      </button>
      <button class="user-dropdown-item" onclick="navigateTo('dashboard')">Dashboard</button>
      <button class="user-dropdown-item" onclick="navigateTo('dashboard'); showDashboardSection('orders');">Your Orders</button>
      <button class="user-dropdown-item" onclick="navigateTo('wishlist')">Wishlist</button>
      <button class="user-dropdown-item" onclick="handleLogout()" style="color: var(--color-sale);">Logout</button>
    `;
  } else {
    dropdownContent.innerHTML = `
      <button class="user-dropdown-item" onclick="navigateTo('login')">Login</button>
      <button class="user-dropdown-item" onclick="navigateTo('register')">Register</button>
    `;
  }
  
  userMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    userDropdown.classList.toggle('show');
  });
  
  document.addEventListener('click', (e) => {
    if (!userMenuBtn.contains(e.target) && !userDropdown.contains(e.target)) {
      userDropdown.classList.remove('show');
    }
  });
}

// ============================================
// CHECKOUT
// ============================================

function renderCheckoutPage() {
  renderAddressSelector();
  renderCheckoutSummary();
}

function renderAddressSelector() {
  const container = document.getElementById('addressSelector');
  
  if (appState.addresses.length === 0) {
    container.innerHTML = '<p style="opacity: 0.7;">No saved addresses</p>';
    return;
  }
  
  container.innerHTML = appState.addresses.map((addr, index) => `
    <div class="address-item ${index === 0 ? 'selected' : ''}" onclick="selectAddress(${addr.id})">
      <div class="address-name">${addr.name}</div>
      <div class="address-details">
        ${addr.address}<br>
        ${addr.city}, ${addr.state} ${addr.zip}<br>
        Phone: ${addr.phone}
      </div>
    </div>
  `).join('');
}

let selectedAddressId = null;

function selectAddress(addressId) {
  selectedAddressId = addressId;
  document.querySelectorAll('.address-item').forEach(item => {
    item.classList.remove('selected');
  });
  event.target.closest('.address-item').classList.add('selected');
}

function renderCheckoutSummary() {
  const container = document.getElementById('checkoutOrderSummary');
  const totals = calculateCartTotal();
  
  // Get selected shipping
  const shippingCost = getShippingCost();
  const finalTotal = totals.total + shippingCost;
  
  container.innerHTML = `
    ${appState.cart.map(item => {
      const price = item.sale ? item.salePrice : item.price;
      return `
        <div class="order-summary-item">
          <img src="${item.image}" alt="${item.name}" class="order-summary-image">
          <div class="order-summary-info">
            <div class="order-summary-name">${item.name}</div>
            <div class="order-summary-details">Qty: ${item.quantity} | ${item.size}, ${item.color}</div>
          </div>
          <div class="order-summary-price">${formatPrice(price * item.quantity)}</div>
        </div>
      `;
    }).join('')}
    
    <div class="cart-summary" style="margin-top: 20px;">
      <div class="cart-summary-row">
        <span>Subtotal:</span>
        <span>${formatPrice(totals.subtotal)}</span>
      </div>
      ${totals.discount > 0 ? `
        <div class="cart-summary-row discount-row">
          <span>Discount:</span>
          <span>-${formatPrice(totals.discount)}</span>
        </div>
      ` : ''}
      <div class="cart-summary-row">
        <span>Shipping:</span>
        <span>${shippingCost === 0 ? 'Free' : formatPrice(shippingCost)}</span>
      </div>
      <div class="cart-summary-row total-row">
        <span>Total:</span>
        <span>${formatPrice(finalTotal)}</span>
      </div>
    </div>
  `;
}

function updateShipping() {
  renderCheckoutSummary();
}

function getShippingCost() {
  const selected = document.querySelector('input[name="shipping"]:checked')?.value;
  switch(selected) {
    case 'express': return 500;
    case 'overnight': return 1000;
    default: return 0;
  }
}

function placeOrder() {
  if (!appState.currentUser) {
    showToast('Please login to place order', 'error');
    return;
  }
  
  if (appState.cart.length === 0) {
    showToast('Your cart is empty', 'error');
    return;
  }
  
  if (!selectedAddressId && appState.addresses.length > 0) {
    selectedAddressId = appState.addresses[0].id;
  }
  
  const totals = calculateCartTotal();
  const shippingCost = getShippingCost();
  const finalTotal = totals.total + shippingCost;
  const selectedShipping = document.querySelector('input[name="shipping"]:checked')?.value || 'standard';
  const selectedAddress = appState.addresses.find(a => a.id === selectedAddressId);
  
  const order = {
    id: 'ORD-' + Date.now().toString().slice(-6),
    userId: appState.currentUser.email,
    date: new Date().toISOString().split('T')[0],
    status: 'Processing',
    items: appState.cart.map(item => ({
      productId: item.id,
      quantity: item.quantity,
      size: item.size,
      color: item.color,
      price: item.sale ? item.salePrice : item.price
    })),
    total: finalTotal,
    shipping: selectedShipping,
    address: selectedAddress ? `${selectedAddress.address}, ${selectedAddress.city}, ${selectedAddress.state} ${selectedAddress.zip}` : 'Default Address'
  };
  
  appState.orders.unshift(order);
  appState.cart = [];
  appState.appliedPromo = null;
  
  saveState();
  updateCartUI();
  
  showToast('Order placed successfully! Order ID: ' + order.id, 'success');
  navigateTo('dashboard');
  showDashboardSection('orders');
}

// ============================================
// DASHBOARD
// ============================================

function renderDashboard() {
  renderDashboardUserInfo();
  renderDashboardStats();
}

function renderDashboardUserInfo() {
  const container = document.getElementById('dashboardUserInfo');
  
  if (!appState.currentUser) return;
  
  const avatarUrl = appState.currentUser.profilePicture || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(appState.currentUser.name) + '&background=D4AF37&color=fff&size=200';
  
  container.innerHTML = `
    <img src="${avatarUrl}" alt="${appState.currentUser.name}" class="dashboard-avatar">
    <div class="dashboard-user-name">${appState.currentUser.name}</div>
    <div class="dashboard-user-email">${appState.currentUser.email}</div>
  `;
}

function renderDashboardStats() {
  const container = document.getElementById('dashboardStats');
  
  container.innerHTML = `
    <div class="stat-card">
      <div class="stat-value">${appState.orders.length}</div>
      <div class="stat-label">Total Orders</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${appState.wishlist.length}</div>
      <div class="stat-label">Wishlist Items</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${appState.reviews.length}</div>
      <div class="stat-label">Reviews Written</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${appState.addresses.length}</div>
      <div class="stat-label">Saved Addresses</div>
    </div>
  `;
}

function showDashboardSection(section) {
  // Hide all sections
  document.querySelectorAll('.dashboard-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.dashboard-nav-item').forEach(i => i.classList.remove('active'));
  
  // Show selected section
  document.getElementById('dashboard' + section.charAt(0).toUpperCase() + section.slice(1)).classList.add('active');
  event?.target?.classList.add('active');
  
  // Render section content
  switch(section) {
    case 'overview':
      renderDashboardStats();
      break;
    case 'orders':
      renderOrders();
      break;
    case 'addresses':
      renderAddresses();
      break;
    case 'reviews':
      renderUserReviews();
      break;
    case 'settings':
      renderSettings();
      break;
    case 'complaints':
      renderComplaints();
      break;
  }
}

function renderOrders() {
  const container = document.getElementById('ordersContainer');
  
  if (appState.orders.length === 0) {
    container.innerHTML = '<p style="opacity: 0.7; text-align: center; padding: 40px;">No orders yet</p>';
    return;
  }
  
  container.innerHTML = appState.orders.map(order => `
    <div class="order-card">
      <div class="order-header">
        <div class="order-id">${order.id}</div>
        <div class="order-status ${order.status.toLowerCase()}">${order.status}</div>
      </div>
      <div class="order-info">
        <div class="order-info-item">
          <div class="order-info-label">Date</div>
          <div class="order-info-value">${formatDate(order.date)}</div>
        </div>
        <div class="order-info-item">
          <div class="order-info-label">Items</div>
          <div class="order-info-value">${order.items.length} item(s)</div>
        </div>
        <div class="order-info-item">
          <div class="order-info-label">Total</div>
          <div class="order-info-value">${formatPrice(order.total)}</div>
        </div>
      </div>
      <div class="order-actions">
        <button class="btn-primary btn-small" onclick="viewOrderDetails('${order.id}')">View Details</button>
        ${order.status === 'Delivered' ? '<button class="btn-secondary btn-small" onclick="showToast(\'Return initiated\', \'success\')">Return</button>' : ''}
      </div>
    </div>
  `).join('');
}

function viewOrderDetails(orderId) {
  const order = appState.orders.find(o => o.id === orderId);
  if (!order) return;
  
  showToast('Order details: ' + order.id, 'info');
}

function renderAddresses() {
  const container = document.getElementById('addressesContainer');
  
  if (appState.addresses.length === 0) {
    container.innerHTML = '<p style="opacity: 0.7;">No saved addresses</p>';
    return;
  }
  
  container.innerHTML = appState.addresses.map(addr => `
    <div class="address-item" style="margin-bottom: 16px;">
      <div class="address-name">${addr.name}</div>
      <div class="address-details">
        ${addr.address}<br>
        ${addr.city}, ${addr.state} ${addr.zip}<br>
        Phone: ${addr.phone}
      </div>
      <div style="margin-top: 12px; display: flex; gap: 8px;">
        <button class="btn-secondary btn-small" onclick="editAddress(${addr.id})">Edit</button>
        <button class="btn-secondary btn-small" onclick="deleteAddress(${addr.id})" style="color: var(--color-sale);">Delete</button>
      </div>
    </div>
  `).join('');
}

function renderUserReviews() {
  const container = document.getElementById('reviewsContainer');
  
  if (appState.reviews.length === 0) {
    container.innerHTML = '<p style="opacity: 0.7; text-align: center; padding: 40px;">No reviews yet</p>';
    return;
  }
  
  container.innerHTML = appState.reviews.map(review => {
    const product = appState.products.find(p => p.id === review.productId);
    return `
      <div class="review-item">
        <div class="review-header">
          <div>
            <div class="review-user">Review for: ${product ? product.name : 'Product'}</div>
            <div class="review-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
          </div>
          <div style="opacity: 0.7; font-size: 12px;">${formatDate(review.date)}</div>
        </div>
        <p class="review-text">${review.text}</p>
      </div>
    `;
  }).join('');
}

function renderSettings() {
  if (!appState.currentUser) return;
  
  document.getElementById('settingsName').value = appState.currentUser.name;
  document.getElementById('settingsEmail').value = appState.currentUser.email;
}

function renderComplaints() {
  const container = document.getElementById('complaintsContainer');
  
  if (appState.complaints.length === 0) {
    container.innerHTML = '<p style="opacity: 0.7; text-align: center; padding: 40px; margin-top: 20px;">No complaints submitted</p>';
    return;
  }
  
  container.innerHTML = '<h3 style="margin: 40px 0 20px; font-size: 20px;">Your Complaints</h3>' + 
    appState.complaints.map(complaint => `
      <div class="complaint-card">
        <div class="complaint-header">
          <div class="complaint-id">Ticket #${complaint.id}</div>
          <div class="order-status ${complaint.status.toLowerCase()}">${complaint.status}</div>
        </div>
        <div class="complaint-subject">${complaint.subject}</div>
        <p class="complaint-description">${complaint.description}</p>
        ${complaint.orderId ? `<div class="complaint-date">Order ID: ${complaint.orderId}</div>` : ''}
        <div class="complaint-date">Submitted: ${formatDate(complaint.date)}</div>
      </div>
    `).join('');
}

function handleUpdateProfile(e) {
  e.preventDefault();
  
  const name = document.getElementById('settingsName').value;
  appState.currentUser.name = name;
  
  saveState();
  renderDashboardUserInfo();
  showToast('Profile updated successfully!', 'success');
}

function handleProfilePictureChange(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      appState.currentUser.profilePicture = e.target.result;
      saveState();
      renderDashboardUserInfo();
      showToast('Profile picture updated!', 'success');
    };
    reader.readAsDataURL(file);
  }
}

function handleChangePassword(e) {
  e.preventDefault();
  
  const newPassword = document.getElementById('newPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  
  if (newPassword !== confirmPassword) {
    showToast('Passwords do not match', 'error');
    return;
  }
  
  showToast('Password changed successfully!', 'success');
  e.target.reset();
}

function handleSubmitComplaint(e) {
  e.preventDefault();
  
  const orderId = document.getElementById('complaintOrderId').value;
  const subject = document.getElementById('complaintSubject').value;
  const description = document.getElementById('complaintDescription').value;
  
  const complaint = {
    id: Date.now().toString().slice(-6),
    orderId: orderId || null,
    subject,
    description,
    date: new Date().toISOString().split('T')[0],
    status: 'Pending'
  };
  
  appState.complaints.unshift(complaint);
  saveState();
  
  showToast('Complaint submitted! Ticket #' + complaint.id, 'success');
  e.target.reset();
  renderComplaints();
}

function showAddAddressModal() {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title">Add New Address</h3>
        <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">&times;</button>
      </div>
      <div class="modal-body">
        <form id="addAddressForm" onsubmit="handleAddAddress(event)">
          <div class="form-group">
            <label>Address Name (e.g., Home, Office)</label>
            <input type="text" id="addressName" class="form-control" required>
          </div>
          <div class="form-group">
            <label>Address</label>
            <input type="text" id="addressAddress" class="form-control" required>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>City</label>
              <input type="text" id="addressCity" class="form-control" required>
            </div>
            <div class="form-group">
              <label>State</label>
              <input type="text" id="addressState" class="form-control" required>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>ZIP Code</label>
              <input type="text" id="addressZip" class="form-control" required>
            </div>
            <div class="form-group">
              <label>Phone</label>
              <input type="tel" id="addressPhone" class="form-control" required>
            </div>
          </div>
          <button type="submit" class="btn-primary btn-full">Add Address</button>
        </form>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });
}

function handleAddAddress(e) {
  e.preventDefault();
  
  const address = {
    id: Date.now(),
    name: document.getElementById('addressName').value,
    address: document.getElementById('addressAddress').value,
    city: document.getElementById('addressCity').value,
    state: document.getElementById('addressState').value,
    zip: document.getElementById('addressZip').value,
    phone: document.getElementById('addressPhone').value
  };
  
  appState.addresses.push(address);
  saveState();
  
  showToast('Address added successfully!', 'success');
  document.querySelector('.modal-overlay').remove();
  
  if (appState.currentPage === 'dashboard') {
    renderAddresses();
  } else if (appState.currentPage === 'checkout') {
    renderAddressSelector();
  }
}

function editAddress(addressId) {
  showToast('Edit address feature coming soon!', 'info');
}

function deleteAddress(addressId) {
  if (confirm('Are you sure you want to delete this address?')) {
    appState.addresses = appState.addresses.filter(a => a.id !== addressId);
    saveState();
    renderAddresses();
    showToast('Address deleted', 'info');
  }
}

// ============================================
// HERO CAROUSEL
// ============================================

function startHeroCarousel() {
  stopHeroCarousel();
  appState.heroInterval = setInterval(() => {
    changeHeroSlide(1);
  }, 5000);
}

function stopHeroCarousel() {
  if (appState.heroInterval) {
    clearInterval(appState.heroInterval);
  }
}

function changeHeroSlide(direction) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  
  slides[appState.heroSlideIndex].classList.remove('active');
  dots[appState.heroSlideIndex].classList.remove('active');
  
  appState.heroSlideIndex += direction;
  
  if (appState.heroSlideIndex >= slides.length) {
    appState.heroSlideIndex = 0;
  } else if (appState.heroSlideIndex < 0) {
    appState.heroSlideIndex = slides.length - 1;
  }
  
  slides[appState.heroSlideIndex].classList.add('active');
  dots[appState.heroSlideIndex].classList.add('active');
}

function setHeroSlide(index) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  
  slides[appState.heroSlideIndex].classList.remove('active');
  dots[appState.heroSlideIndex].classList.remove('active');
  
  appState.heroSlideIndex = index;
  
  slides[appState.heroSlideIndex].classList.add('active');
  dots[appState.heroSlideIndex].classList.add('active');
  
  startHeroCarousel();
}

// ============================================
// COUNTDOWN TIMER
// ============================================

function startCountdown() {
  const display = document.getElementById('countdownDisplay');
  
  function update() {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    
    const diff = midnight - now;
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    display.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  
  update();
  setInterval(update, 1000);
}

// ============================================
// UI HELPERS
// ============================================

function scrollCarousel(direction) {
  const container = document.querySelector('.product-carousel-container');
  const scrollAmount = 300;
  
  if (direction === 'left') {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

function toggleDarkMode() {
  appState.theme = appState.theme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', appState.theme);
  saveState();
}

function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('active');
}

function closeMobileMenu() {
  document.getElementById('mobileMenu').classList.remove('active');
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleNewsletterSignup(e) {
  e.preventDefault();
  showToast('Thank you for subscribing!', 'success');
  e.target.reset();
}

// ============================================
// INITIALIZATION
// ============================================

window.addEventListener('DOMContentLoaded', () => {
  initializeData();
  initSearch();
  updateCartUI();
  updateWishlistUI();
  updateUserMenu();
  
  // Dark mode toggle
  document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
  
  // Cart drawer
  document.getElementById('cartBtn').addEventListener('click', toggleCartDrawer);
  document.getElementById('cartDrawerOverlay').addEventListener('click', closeCartDrawer);
  document.getElementById('cartDrawerClose').addEventListener('click', closeCartDrawer);
  
  // Mobile menu
  document.getElementById('mobileMenuBtn').addEventListener('click', toggleMobileMenu);
  document.getElementById('mobileMenuClose').addEventListener('click', closeMobileMenu);
  
  // Back to top button
  window.addEventListener('scroll', () => {
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 500) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });
  
  // Start on home page
  navigateTo('home');
  
  console.log('🛍️ Sahrish & Ameena Fashion Hub loaded successfully!');
  console.log('Demo Login: Any email/password combination will work');
});

// Export for debugging
window.appState = appState;