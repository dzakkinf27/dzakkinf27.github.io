// Data Konten Halaman (SPA)
const pages = {
    home: `
    <!-- Main Banner -->
    <section class="main-banner">
        <div class="main-slider">
            <!-- Slide 1 (Active initially) -->
            <div class="main-slide active"
                style="background-image: url('bg1.webp');">
            </div>
            <!-- Slide 2 -->
            <div class="main-slide"
                style="background-image: url('bg2.webp');">
            </div>
            <!-- Slide 3 -->
            <div class="main-slide"
                style="background-image: url('bg3.webp');">
            </div>
            <!-- Slide 4 -->
            <div class="main-slide"
                style="background-image: url('bg4.webp');">
            </div>
            <!-- Slide 5 -->
            <div class="main-slide"
                style="background-image: url('bg5.webp');">
            </div>
        </div>
        <div class="main-overlay">
            <h1 class="main-title">BLUEPRINT</h1>
            <p class="main-subtitle">CAFÉ</p>
        </div>
    </section>

    <!-- Info Section -->
    <section class="info-section">
        <div class="container">
            <div class="info-grid">
                <!-- Motto -->
                <div class="info-box">
                    <h3>MOTTO KAMI</h3>
                    <p>“Lebih dari sekadar kopi, ini adalah rumah kedua. Nikmati kehangatan komunitas, ditemani hidangan
                        ringan dan minuman yang dibuat dengan cinta.”</p>
                </div>

                <!-- Hours -->
                <div class="info-box">
                    <h3>JAM OPERASIONAL</h3>
                    <div class="hours-list">
                        <p>Senin - Kamis : 10.00 - 23.00 WIB</p>
                        <p>Jum'at - Minggu : 10.00 - 01.00 WIB</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Kesan dan Saran Section -->
    <section class="pesan-section">
        <div class="container center-text">
             <div class="pesan-header">
                <h2>KESAN ANDA</h2>
                <p>Kunjungi kami atau hubungi via WhatsApp.</p>
            </div>
            
            <div class="pesan-card">
                <div class="pesan-grid">
                    <!-- Contact Info Side -->
                    <div class="contact-info-side">
                        <div class="contact-item">
                            <div class="icon-box">
                                <!-- Location Pin Icon - Simple SVG -->
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                </svg>
                            </div>
                            <p>Tulungagung, Jawa Timur</p>
                        </div>
                        
                        <div class="contact-item">
                            <div class="icon-box">
                                <!-- Phone Icon -->
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                     <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                                </svg>
                            </div>
                            <p>+62 123 4567 8910</p>
                        </div>
                        
                        <div class="contact-item">
                            <div class="icon-box">
                                <!-- Email Icon -->
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                </svg>
                            </div>
                            <p>blueprintcafe@gmail.com</p>
                        </div>
                    </div>

                    <!-- Form Side -->
                    <div class="pesan-form-side">
                        <form onsubmit="event.preventDefault(); alert('Terima kasih atas kesan dan saran Anda!'); this.reset();">
                            <div class="form-group">
                                <input type="text" placeholder="Nama Anda" class="pesan-input" required>
                            </div>
                            <div class="form-group">
                                <input type="email" placeholder="Email" class="pesan-input" required>
                            </div>
                            <div class="form-group">
                                <textarea placeholder="Pesan Anda..." class="pesan-textarea" required></textarea>
                            </div>
                            <button type="submit" class="btn-pesan">Kirim Pesan</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `,
    about: `
    <div class="container" style="padding-top: 40px;">
        <div class="about-images-grid">
            <div class="about-img-box">
                <img src="bg1.webp" alt="Cafe Interior 1">
            </div>
            <div class="about-img-box">
                <img src="bg2.webp" alt="Cafe Interior 2">
            </div>
        </div>

        <div class="quote-section">
            <h3>"Layaknya sebuah cetak biru (blueprint) yang menjadi dasar bangunan kokoh, kami percaya bahwa hari yang
                hebat dimulai dari fondasi yang kuat: secangkir kopi yang sempurna. BluePrint Cafe hadir memadukan
                presisi racikan barista dengan kenyamanan ruang, menciptakan atmosfer ideal bagi para pemimpi dan
                perancang masa depan."</h3>
        </div>
    </div>
    `,
    menu: `
    <div class="page-layout" style="padding-top: 20px;">
        <div class="menu-section">
            <h3 class="section-heading-small">Drink</h3>
            <div class="menu-grid-new" id="drinks-list">
                <!-- Javascript will inject here -->
            </div>

            <h3 class="section-heading-small">Snack</h3>
            <div class="menu-grid-new" id="snacks-list">
                <!-- Javascript will inject here -->
            </div>

            <h3 class="section-heading-small">Food</h3>
            <div class="menu-grid-new" id="food-list">
                <!-- Javascript will inject here -->
            </div>
        </div>

        <aside class="keranjang-section">
            <h3 style="text-align: center; margin-bottom: 20px; font-weight: 700; color: var(--bg-color);">Pesanan</h3>
            <div class="keranjang-card-bg">
                <div id="keranjangItems" style="flex: 1; overflow-y: auto;">
                    <!-- Cart items here -->
                </div>

                <div class="total-display-bar">
                    <span class="total-label">Total :</span>
                    <div class="total-value-btn" id="grandTotal" onclick="alert('Pesanan Diproses!')">0</div>
                </div>
            </div>
        </aside>
    </div>
    `,
    contact: `
    <!-- Top Image Banner -->
    <div class="contact-main" style="margin-top: 20px;">
        <img src="bg1.webp" alt="Coffee Machine">
    </div>

    <div class="container">
        <h1 class="contact-title">Contact Us</h1>

        <div class="team-contact-grid">
            <!-- Person 1 -->
            <div class="contact-card">
                <div class="contact-avatar"><img src="dzakki.webpp" alt=""></div>
                <div class="contact-name">Muhammad Dzakki Nur F.</div>
                <div class="contact-id">24183207022</div>
            </div>

            <!-- Person 2 -->
            <div class="contact-card">
                <div class="contact-avatar"><img src="anisa.webp" alt=""></div>
                <div class="contact-name">Annisa 'Ulaanurul Aini</div>
                <div class="contact-id">24183207013</div>
            </div>

            <!-- Person 3 -->
            <div class="contact-card">
                <div class="contact-avatar"><img src="farrel.webp" alt=""></div>
                <div class="contact-name">Jauza Daffa Farrela</div>
                <div class="contact-id">24183207004</div>
            </div>
        </div>
    </div>
    `,
    login: `
    <div class="login-bg-container" style="top: 0; position: fixed; width: 100%; height: 100%; z-index: 1000; padding-top: 0;">
        <div class="login-modal">
            <h2>Welcome</h2>
            <p class="login-subtitle">Silahkan masukkan email dan password</p>

            <form onsubmit="event.preventDefault(); ShowPage('home');">
                <div class="input-group">
                    <label>Email :</label>
                    <input type="email" class="custom-input" placeholder="Email....">
                </div>

                <div class="input-group">
                    <label>Password :</label>
                    <input type="password" class="custom-input" placeholder="Password....">
                </div>
                <div class="remember-forget">
                    <label><input type="checkbox"> Remember me</label>
                    <a href="#">Forgot Password?</a>
                </div>
                <button type="submit" class="btn-green">LOGIN</button>
            </form>

            <a href="#" onclick="ShowPage('home')" class="back-link">Kembali ke Beranda</a>
        </div>
    </div>
    `
};

function ShowPage(pageName) {
    const mainContainer = document.getElementById('halaman');
    if (!mainContainer) return;

    // Inject konten
    mainContainer.classList.remove('animate-fade-in'); // Reset animation
    void mainContainer.offsetWidth; // Trigger reflow
    mainContainer.innerHTML = pages[pageName] || '<h2 style="text-align:center; padding:100px;">Halaman tidak ditemukan</h2>';
    mainContainer.classList.add('animate-fade-in'); // Start animation

    // Update state navigasi (Active State Refactor)
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        // Remove active class
        link.classList.remove('active');

        // Add active class if onclick matches current pageName
        // Note: checking if string representation of onclick contains pageName
        const onClickAttr = link.getAttribute('onclick');
        if (onClickAttr && onClickAttr.includes(`'${pageName}'`)) {
            link.classList.add('active');
        }
    });

    // Logika khusus per halaman
    if (pageName === 'menu') {
        renderMenu();
        updateKeranjangUI();
    } else if (pageName === 'home') {
        initMainSlider();
        initScrollAnimations();
    }

    // Scroll ke atas saat pindah halaman
    window.scrollTo(0, 0);
}

// Inisialisasi awal
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Load halaman awal
    ShowPage('home');
});

function initMainSlider() {
    // Main Slider Auto-Slide
    const slides = document.querySelectorAll('.main-slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        const slideInterval = 2500; // 2,5 seconds

        function nextSlide() {
            // Check if slides still exist in DOM
            if (!document.querySelector('.main-slide')) return;

            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        if (window.mainInterval) clearInterval(window.mainInterval);
        window.mainInterval = setInterval(nextSlide, slideInterval);
    }

    // Main Animation on Load
    const mainElements = document.querySelectorAll('.main-content > *');
    mainElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            el.style.transition = 'all 0.8s ease-out';
        }, index * 200);
    });
}

function initScrollAnimations() {
    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
}

// Menu Data and Logic (Global Scope needed for inline onclick)
const menuItems = [
    { id: 1, name: 'Es Kopi Susu', price: 15000, category: 'drink', img: 'kopi ss.png' },
    { id: 2, name: 'Americano', price: 15000, category: 'drink', img: 'americano.png' },
    { id: 3, name: 'Macha Latte', price: 15000, category: 'drink', img: 'macha.png' },
    { id: 4, name: 'Orange Juice', price: 12000, category: 'drink', img: 'orange juice.png' },
    { id: 5, name: 'Latte', price: 12000, category: 'drink', img: 'latte.png' },
    { id: 6, name: 'Butterscotch', price: 12000, category: 'drink', img: 'butterscotch.png' },
    { id: 11, name: 'Croissant', price: 8000, category: 'snack', img: 'croissant.png' },
    { id: 12, name: 'French fries', price: 10000, category: 'snack', img: 'french fries.png' },
    { id: 13, name: 'Waffle', price: 15000, category: 'snack', img: 'waffel.png' },
    { id: 14, name: 'Cheese Cake', price: 22000, category: 'snack', img: 'cheese cake.png' },
    { id: 15, name: 'Matcha Cake', price: 22000, category: 'snack', img: 'matcha cake.png' },
    { id: 16, name: 'choco Cake', price: 22000, category: 'snack', img: 'choco cake.png' },
    { id: 21, name: 'Rice Bowl', price: 25000, category: 'food', img: 'rice bowl.png' },
    { id: 22, name: 'Chiken Wings', price: 23000, category: 'food', img: 'chiken wings.png' },
    { id: 23, name: 'Mie Ayam', price: 28000, category: 'food', img: 'mie ayam.png' },
];

const keranjang = {};

function renderMenu() {
    const drinksContainer = document.getElementById('drinks-list');
    const snacksContainer = document.getElementById('snacks-list');
    const foodContainer = document.getElementById('food-list');

    if (!drinksContainer || !snacksContainer || !foodContainer) return;

    menuItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card-new';
        card.onclick = () => addToKeranjang(item.id);
        card.innerHTML = `
            <div class="card-img-area">
                <img src="${item.img}" alt="${item.name}">
            </div>
            <div class="card-info-area">
                <h4>${item.name}</h4>
                <span class="price">Rp ${item.price.toLocaleString('id-ID')}</span>
            </div>
        `;

        if (item.category === 'drink') {
            drinksContainer.appendChild(card);
        } else if (item.category === 'snack') {
            snacksContainer.appendChild(card);
        } else if (item.category === 'food') {
            foodContainer.appendChild(card);
        }
    });
}

function addToKeranjang(id) {
    if (keranjang[id]) {
        keranjang[id].qty++;
    } else {
        const item = menuItems.find(i => i.id === id);
        keranjang[id] = { ...item, qty: 1 };
    }
    updateKeranjangUI();
}

function removeFromKeranjang(id) {
    delete keranjang[id];
    updateKeranjangUI();
}

function updateKeranjangUI() {
    const container = document.getElementById('keranjangItems');
    const totalEl = document.getElementById('grandTotal');
    if (!container || !totalEl) return;

    let total = 0;
    let html = '';

    Object.values(keranjang).forEach(item => {
        total += item.price * item.qty;
        html += `
            <div class="keranjang-item-row">
                <span>${item.qty} x ${item.name}</span>
                <div style="display:flex; gap:10px; align-items:center;">
                    <span>${(item.price * item.qty).toLocaleString('id-ID')}</span>
                    <button class="remove-btn-red" onclick="event.stopPropagation(); removeFromKeranjang(${item.id})">X</button>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
    totalEl.textContent = total.toLocaleString('id-ID');
}

