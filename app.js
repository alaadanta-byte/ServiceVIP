/* ==========================================================================
   Service VIP - Interactive JavaScript Application
   Core Logic: Official AI Brand Logos, Subscriptions Catalog & Navigation
   ========================================================================== */

// Remove transition-disabling preload class once initial DOM paint completes
window.addEventListener('load', () => {
    document.body.classList.remove('preload');
});

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.body.classList.remove('preload');
    }, 100);

    // --------------------------------------------------------------------------
    // 1. Data Catalog: Service VIP Subscriptions with Official SVG Logos
    // --------------------------------------------------------------------------
    // 1. Data Catalog: Service VIP Subscriptions with Official SVG Logos
    // --------------------------------------------------------------------------
    const subscriptions = [
        {
            id: 'chatgpt-plus',
            title: 'ChatGPT Plus',
            category: 'ai',
            description: 'الوصول إلى GPT-4o وأحدث المميزات وتوليد الصور DALL-E 3',
            price: 650,
            dollarPrice: '650 ج.م',
            period: 'شهر',
            badgeBg: '#10a37f',
            iconSvg: `
                <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
                    <path d="M22.28 9.87a6.22 6.22 0 0 0-.52-5.18 6.42 6.42 0 0 0-4.05-3.07 6.27 6.27 0 0 0-6.19 1.49 6.25 6.25 0 0 0-5.17.52A6.41 6.41 0 0 0 3.28 7.7a6.28 6.28 0 0 0-.2 6.36 6.22 6.22 0 0 0 .52 5.18 6.42 6.42 0 0 0 4.05 3.07 6.27 6.27 0 0 0 6.19-1.49 6.26 6.26 0 0 0 5.17-.52 6.42 6.42 0 0 0 3.07-4.07 6.28 6.28 0 0 0 .2-6.36zm-9.39 10.9a4.74 4.74 0 0 1-2.92-1.04l.15-.09 3.49-2.01a.76.76 0 0 0 .38-.66v-4.9l1.47.85a.08.08 0 0 1 .04.07v4.06a4.75 4.75 0 0 1-2.61 3.72zm-7.72-3.32a4.72 4.72 0 0 1-.58-3.04l.15.09 3.49 2.01a.76.76 0 0 0 .76 0l4.25-2.45v1.7a.08.08 0 0 1-.04.07l-3.52 2.03a4.75 4.75 0 0 1-4.51-.48zm-1.12-8.47a4.75 4.75 0 0 1 2.33-2.01v4.21a.77.77 0 0 0 .38.66l4.25 2.45-1.47.85a.08.08 0 0 1-.08 0L6.03 14.1a4.75 4.75 0 0 1-1.98-4.12zm13.9 2.44-4.25-2.45 1.47-.85a.08.08 0 0 1 .08 0l3.52 2.03a4.75 4.75 0 0 1 1.98 4.12 4.74 4.74 0 0 1-2.33 2.01v-4.21a.77.77 0 0 0-.38-.66zm1.7-2.12-.15-.09-3.49-2.01a.76.76 0 0 0-.76 0l-4.25 2.45v-1.7a.08.08 0 0 1 .04-.07l3.52-2.03a4.75 4.75 0 0 1 5.09 3.45zM9.54 11.51l1.47-.85 1.47.85v1.7l-1.47.85-1.47-.85v-1.7z"/>
                </svg>
            `
        },
        {
            id: 'claude-pro',
            title: 'Claude Pro',
            category: 'ai',
            description: 'Claude 3.5 Sonnet أداء متقدم ومتميز في التحليل والبرمجة',
            price: 750,
            dollarPrice: '750 ج.م',
            period: 'شهر',
            badgeBg: '#d96b27',
            iconSvg: `
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round">
                    <line x1="12" y1="2" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <line x1="4.9" y1="4.9" x2="19.1" y2="19.1" />
                    <line x1="19.1" y1="4.9" x2="4.9" y2="19.1" />
                    <line x1="7.5" y1="3" x2="16.5" y2="21" />
                    <line x1="16.5" y1="3" x2="7.5" y2="21" />
                </svg>
            `
        },
        {
            id: 'midjourney',
            title: 'Midjourney',
            category: 'ai',
            description: 'إنشاء صور احترافية بالذكاء الاصطناعي بدقة عالية',
            price: 850,
            dollarPrice: '850 ج.م',
            period: 'شهر',
            badgeBg: '#ffffff',
            badgeColor: '#0b0d1b',
            iconSvg: `
                <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
                    <path d="M4 17.5L12 3l8 14.5H4zm8-11.5L6.5 16h11L12 6z"/>
                    <path d="M2 19.5h20v1.5H2z"/>
                </svg>
            `
        },
        {
            id: 'gemini-advanced',
            title: 'Gemini Advanced',
            category: 'ai',
            description: 'Gemini 1.5 Pro من Google بأقوى نموذج ذكاء اصطناعي',
            price: 690,
            dollarPrice: '690 ج.م',
            period: 'شهر',
            badgeBg: '#13172e',
            iconSvg: `
                <svg viewBox="0 0 24 24" width="26" height="26">
                    <defs>
                        <linearGradient id="gemini-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#4285F4" />
                            <stop offset="35%" stop-color="#9B51E0" />
                            <stop offset="70%" stop-color="#EA4335" />
                            <stop offset="100%" stop-color="#FBBC05" />
                        </linearGradient>
                    </defs>
                    <path fill="url(#gemini-gradient)" d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z"/>
                </svg>
            `
        },
        {
            id: 'perplexity-pro',
            title: 'Perplexity Pro',
            category: 'ai',
            description: 'بحث ذكي بمصادر موثوقة وإجابات فائقة الدقة',
            price: 490,
            dollarPrice: '490 ج.م',
            period: 'شهر',
            badgeBg: '#090a0f',
            iconSvg: `
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#ffffff" stroke-width="2">
                    <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
                    <circle cx="12" cy="12" r="4" fill="#1f293d" stroke="#ffffff" />
                </svg>
            `
        },
        {
            id: 'canva-pro',
            title: 'Canva Pro VIP',
            category: 'design',
            description: 'تصميم جرافيك احترافي وقوالب مدفوعة غير محدودة',
            price: 290,
            dollarPrice: '290 ج.م',
            period: 'شهر',
            badgeBg: '#00c4cc',
            iconSvg: `
                <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z"/>
                </svg>
            `
        }
    ];

    // DOM Elements Reference
    const subscriptionsGrid = document.getElementById('subscriptionsGrid');
    const categoryTabs = document.getElementById('categoryTabs');
    const cartCountEl = document.getElementById('cartCount');
    const cartDrawerCountEl = document.getElementById('cartDrawerCount');
    const cartToggleBtn = document.getElementById('cartToggleBtn');
    const cartDrawer = document.getElementById('cartDrawer');
    const cartOverlay = document.getElementById('cartOverlay');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeIcon = document.getElementById('themeIcon');

    // Auth Modal References
    const openLoginBtn = document.getElementById('openLoginBtn');
    const openRegisterBtn = document.getElementById('openRegisterBtn');
    const authModalOverlay = document.getElementById('authModalOverlay');
    const closeAuthModalBtn = document.getElementById('closeAuthModalBtn');
    const tabLoginBtn = document.getElementById('tabLoginBtn');
    const tabRegisterBtn = document.getElementById('tabRegisterBtn');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    // --------------------------------------------------------------------------
    // Currency Switcher System (EGP / USD) - Default: EGP
    // --------------------------------------------------------------------------
    let currentCurrency = localStorage.getItem('servicevip_currency') || 'EGP';

    function getFormattedPrice(priceEgp) {
        if (currentCurrency === 'USD') {
            const usdVal = Math.round(priceEgp / 50);
            return `$ ${usdVal}`;
        }
        return `${priceEgp} ج.م`;
    }

    function updateCurrencyBtnState() {
        const textEl = document.getElementById('currencyCodeText');
        const btnEl = document.getElementById('currencyToggleBtn');

        if (currentCurrency === 'USD') {
            if (textEl) textEl.textContent = 'US';
            if (btnEl) btnEl.title = 'العملة الحالية: US ($) - انقر للتحويل لـ EG';
        } else {
            if (textEl) textEl.textContent = 'EG';
            if (btnEl) btnEl.title = 'العملة الحالية: EG (ج.م) - انقر للتحويل لـ US';
        }
    }

    function updateOfferCardPrices() {
        document.querySelectorAll('.offer-price-box').forEach(box => {
            const oldEl = box.querySelector('.old-price');
            const newEl = box.querySelector('.new-price');
            if (!oldEl || !newEl) return;

            if (currentCurrency === 'USD') {
                if (oldEl.dataset.usdOld) oldEl.textContent = oldEl.dataset.usdOld;
                if (newEl.dataset.usdNew) newEl.textContent = newEl.dataset.usdNew;
            } else {
                if (oldEl.dataset.egpOld) oldEl.textContent = oldEl.dataset.egpOld;
                if (newEl.dataset.egpNew) newEl.textContent = newEl.dataset.egpNew;
            }
        });
    }

    function setupCurrencyToggle() {
        const btn = document.getElementById('currencyToggleBtn');
        updateCurrencyBtnState();
        updateOfferCardPrices();

        if (btn) {
            btn.addEventListener('click', () => {
                currentCurrency = currentCurrency === 'EGP' ? 'USD' : 'EGP';
                localStorage.setItem('servicevip_currency', currentCurrency);
                updateCurrencyBtnState();
                
                const activeCategory = document.querySelector('.tab-btn.active')?.dataset.category || 'all';
                renderSubscriptions(activeCategory);
                updateOfferCardPrices();

                const toastMsg = currentCurrency === 'USD' ? 'تم تحويل العملة إلى الدولار الأمريكي ($) 🇺🇸' : 'تم تحويل العملة إلى الجنيه المصري (ج.م) 🇪🇬';
                showToast(toastMsg);
            });
        }
    }

    // --------------------------------------------------------------------------
    // 2. Render Cards with Links to product-details.html?id=...
    // --------------------------------------------------------------------------
    function renderSubscriptions(filterCategory = 'all') {
        if (!subscriptionsGrid) return;
        subscriptionsGrid.innerHTML = '';
        
        const customProds = localStorage.getItem('servicevip_custom_products');
        let activeList = subscriptions;
        if (customProds) {
            try {
                const parsed = JSON.parse(customProds);
                activeList = parsed.map(item => {
                    const defaultRef = subscriptions.find(s => s.id === item.id);
                    if (defaultRef) {
                        return { ...item, price: defaultRef.price, period: defaultRef.period };
                    }
                    return item;
                });
            } catch (e) {
                activeList = subscriptions;
            }
        }

        const filtered = filterCategory === 'all' 
            ? activeList 
            : activeList.filter(item => item.category === filterCategory);

        filtered.forEach(sub => {
            const card = document.createElement('div');
            card.className = 'subscription-card text-center';
            const iconSvg = sub.iconSvg || '<i class="fa-solid fa-crown" style="font-size: 1.4rem;"></i>';

            const allowedDurs = sub.durations || (sub.period === 'سنة' ? ['12months'] : ['1month', '3months', '12months']);
            
            const durLabelsMap = {
                '1month': 'شهر',
                '2months': '2 شهر',
                '3months': '3 شهور',
                '4months': '4 شهور',
                '5months': '5 شهور',
                '6months': '6 شهور',
                '7months': '7 شهور',
                '8months': '8 شهور',
                '9months': '9 شهور',
                '10months': '10 شهور',
                '11months': '11 شهر',
                '12months': 'سنة',
                '15months': '15 شهر',
                '18months': 'سنة ونصف',
                '24months': 'سنتين'
            };

            const durationOptions = [];
            allowedDurs.forEach(dKey => {
                let pVal = sub.prices?.[dKey];
                if (!pVal) {
                    if (dKey === '1month') pVal = sub.price;
                    else if (dKey === '3months') pVal = Math.round(sub.price * 3 * 0.85);
                    else if (dKey === '12months') pVal = sub.period === 'سنة' ? sub.price : Math.round(sub.price * 12 * 0.65);
                    else pVal = sub.price;
                }
                durationOptions.push({
                    durationKey: dKey,
                    periodText: durLabelsMap[dKey] || dKey,
                    totalPrice: pVal
                });
            });

            let cheapestOpt = durationOptions[0];
            durationOptions.forEach(opt => {
                if (opt.totalPrice < cheapestOpt.totalPrice) {
                    cheapestOpt = opt;
                }
            });

            const cardPrice = cheapestOpt ? cheapestOpt.totalPrice : sub.price;
            const cardPeriod = cheapestOpt ? cheapestOpt.periodText : (sub.period || 'شهر');

            const logoContent = sub.image ? `<img src="${sub.image}" alt="${sub.title}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 14px;">` : iconSvg;

            card.innerHTML = `
                <!-- Top Official Logo Badge -->
                <div class="card-logo-container">
                    <div class="app-logo-badge" style="background: ${sub.badgeBg || '#7c3aed'}; color: ${sub.badgeColor || '#ffffff'}">
                        ${logoContent}
                    </div>
                </div>

                <!-- Service Info -->
                <h3 class="card-service-title">${sub.title}</h3>
                <p class="card-service-desc">${sub.description}</p>
                
                <!-- Price Display (Lowest Allowed Package Option) -->
                <div class="card-pricing-row">
                    <span class="price-val">${getFormattedPrice(cardPrice)}</span>
                    <span class="price-unit">/ <span dir="rtl" style="display:inline-block;">${cardPeriod}</span></span>
                </div>

                <!-- Action Button Link -->
                <a href="product-details.html?id=${sub.id}" class="btn btn-card-action">
                    <span>اشترك الآن</span>
                    <i class="fa-solid fa-bolt" style="font-size: 0.85rem;"></i>
                </a>
            `;

            subscriptionsGrid.appendChild(card);
        });
    }

    renderSubscriptions('all');
    setupCurrencyToggle();

    if (categoryTabs) {
        categoryTabs.addEventListener('click', (e) => {
            if (e.target.classList.contains('tab-btn')) {
                document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                renderSubscriptions(e.target.dataset.category);
            }
        });
    }

    // --------------------------------------------------------------------------
    // 3. Drawer & Modals
    // --------------------------------------------------------------------------
    function openCart() {
        if(cartDrawer && cartOverlay) {
            cartDrawer.classList.add('active');
            cartOverlay.classList.add('active');
        }
    }

    function closeCart() {
        if(cartDrawer && cartOverlay) {
            cartDrawer.classList.remove('active');
            cartOverlay.classList.remove('active');
        }
    }

    if(cartToggleBtn) cartToggleBtn.addEventListener('click', openCart);
    if(closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
    if(cartOverlay) cartOverlay.addEventListener('click', closeCart);

    // Auth Modals
    function openAuthModal(tab = 'login') {
        if(authModalOverlay) {
            authModalOverlay.classList.add('active');
            if (tab === 'login') {
                tabLoginBtn.classList.add('active');
                tabRegisterBtn.classList.remove('active');
                loginForm.classList.add('active');
                registerForm.classList.remove('active');
            } else {
                tabRegisterBtn.classList.add('active');
                tabLoginBtn.classList.remove('active');
                registerForm.classList.add('active');
                loginForm.classList.remove('active');
            }
        }
    }

    function closeAuthModal() {
        if(authModalOverlay) authModalOverlay.classList.remove('active');
    }

    if(openLoginBtn) openLoginBtn.addEventListener('click', () => openAuthModal('login'));
    if(openRegisterBtn) openRegisterBtn.addEventListener('click', () => openAuthModal('register'));
    if(closeAuthModalBtn) closeAuthModalBtn.addEventListener('click', closeAuthModal);

    // --------------------------------------------------------------------------
    // 4. Mobile Navigation Menu Toggle Drawer
    // --------------------------------------------------------------------------
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const closeNavBtn = document.getElementById('closeNavBtn');
    const navMenu = document.getElementById('navMenu');
    const navOverlay = document.getElementById('navOverlay');

    function openMobileMenu() {
        if (navMenu) navMenu.classList.add('active');
        if (navOverlay) navOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        if (navMenu) navMenu.classList.remove('active');
        if (navOverlay) navOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu);
    if (closeNavBtn) closeNavBtn.addEventListener('click', closeMobileMenu);
    if (navOverlay) navOverlay.addEventListener('click', closeMobileMenu);

    if (navMenu) {
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }

    // --------------------------------------------------------------------------
    // 5. Vodafone Cash Interactive Modal (01010478766)
    // --------------------------------------------------------------------------
    function setupVodafoneModal() {
        if (!document.getElementById('vodafoneModal')) {
            const modalHTML = `
                <div class="vodafone-modal-overlay" id="vodafoneModal">
                    <div class="vodafone-modal-card">
                        <button class="modal-close-icon" id="closeVodafoneModal">&times;</button>
                        <div class="vodafone-modal-header">
                            <div class="vodafone-badge-icon">
                                <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
                                    <rect width="24" height="24" rx="6" fill="#e60000"/>
                                    <path d="M12 4a8 8 0 0 0-8 8c0 4.42 3.58 8 8 8a7.96 7.96 0 0 0 6.5-3.37l-2.07-1.2A5.96 5.96 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6c0 1.25-.38 2.4-1.03 3.36l1.63 1.22A7.94 7.94 0 0 0 20 12a8 8 0 0 0-8-8z" fill="#ffffff"/>
                                </svg>
                            </div>
                            <h3>تحويل فودافون كاش (Vodafone Cash)</h3>
                        </div>
                        <p class="vodafone-modal-desc">يرجى تحويل المبلغ المطلوب إلى رقم فودافون كاش التالي:</p>
                        <div class="number-copy-box">
                            <span class="vodafone-phone-number" id="vodafoneNum">01010478766</span>
                            <button class="btn-copy-num" id="copyVodafoneBtn">
                                <i class="fa-solid fa-copy"></i>
                                <span>نسخ الرقم</span>
                            </button>
                        </div>
                        <div class="vodafone-notice">
                            <i class="fa-solid fa-circle-info"></i>
                            <span>بعد التحويل، أرسل صورة الإيصال أو رقم الهاتف المحول منه على الواتساب لتأكيد الطلب والتفعيل الفوري.</span>
                        </div>
                        <div class="vodafone-modal-actions">
                            <a href="https://wa.me/201010478766?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D9%82%D9%85%D8%AA%20%D8%A8%D8%A7%D9%84%D8%AA%D8%AD%D9%88%D9%8A%D9%84%20%D8%B9%D8%A8%D8%B1%20%D9%81%D9%88%D8%AF%D8%A7%D9%81%D9%88%D9%86%20%D9%83%D8%A7%D9%84%D8%B4%20%D8%A5%D9%84%D9%89%20%D8%A7%D9%84%D8%B1%D9%82%D9%85%2001010478766" target="_blank" class="btn btn-whatsapp-confirm">
                                <i class="fa-brands fa-whatsapp"></i>
                                <span>تأكيد التحويل عبر الواتساب</span>
                            </a>
                        </div>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalHTML);
        }

        const modal = document.getElementById('vodafoneModal');
        const closeBtn = document.getElementById('closeVodafoneModal');
        const copyBtn = document.getElementById('copyVodafoneBtn');

        function openModal() {
            if (modal) modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            if (modal) modal.classList.remove('active');
            document.body.style.overflow = '';
        }

        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeModal();
            });
        }

        if (copyBtn) {
            copyBtn.addEventListener('click', () => {
                navigator.clipboard.writeText('01010478766').then(() => {
                    const span = copyBtn.querySelector('span');
                    const originalText = span.textContent;
                    span.textContent = 'تم النسخ!';
                    copyBtn.style.background = '#10b981';
                    setTimeout(() => {
                        span.textContent = originalText;
                        copyBtn.style.background = '';
                    }, 2000);
                });
            });
        }

        document.querySelectorAll('.payment-pill-row.vodafone').forEach(el => {
            el.addEventListener('click', openModal);
        });

        window.closeVodafoneModal = closeModal;
    }

    setupVodafoneModal();

    // --------------------------------------------------------------------------
    // 6. InstaPay Interactive Modal (QR Code & alaaahmed199873@instapay)
    // --------------------------------------------------------------------------
    function setupInstaPayModal() {
        if (!document.getElementById('instapayModal')) {
            const modalHTML = `
                <div class="instapay-modal-overlay" id="instapayModal">
                    <div class="instapay-modal-card">
                        <button class="modal-close-icon" id="closeInstaPayModal">&times;</button>
                        <div class="vodafone-modal-header" style="justify-content: center;">
                            <div class="payment-logo-badge">
                                <svg viewBox="0 0 98 24" width="70" height="18" fill="none">
                                    <g font-family="'Readex Pro', Arial, sans-serif" font-weight="900" font-style="italic" font-size="14.5">
                                        <text x="0" y="17" fill="#4c1d95" letter-spacing="-0.5">INSTA</text>
                                        <path d="M49 6l3.2 5.5L49 17M53 6l3.2 5.5L53 17" stroke="#ff5500" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
                                        <text x="58" y="17" fill="#9333ea" letter-spacing="-0.5">PAY</text>
                                    </g>
                                </svg>
                            </div>
                            <h3>الدفع عبر انستا باي (InstaPay)</h3>
                        </div>
                        <p class="vodafone-modal-desc">امسح رمز الـ QR أعلاه أو قم بالتحويل إلى عنوان الحساب التالي:</p>

                        <div class="instapay-qr-container">
                            <img src="images/instapay-qr.png" alt="InstaPay QR Code" class="instapay-qr-img" />
                        </div>

                        <div class="instapay-handle-box">
                            <span class="instapay-handle-text" id="instaHandle">alaaahmed199873@instapay</span>
                            <button class="btn-copy-num" id="copyInstaBtn" style="background: var(--primary);">
                                <i class="fa-solid fa-copy"></i>
                                <span>نسخ العنوان</span>
                            </button>
                        </div>

                        <div class="vodafone-notice">
                            <i class="fa-solid fa-circle-info"></i>
                            <span>بعد إتمام التحويل، يرجى إرسال إيصال التحويل على الواتساب لتأكيد الطلب والتفعيل الفوري.</span>
                        </div>

                        <div class="vodafone-modal-actions">
                            <a href="https://wa.me/201010478766?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D9%82%D9%85%D8%AA%20%D8%A8%D8%A7%D9%84%D8%AA%D8%AD%D9%88%D9%8A%D9%84%20%D8%B9%D8%A8%D8%B1%20%D8%A7%D9%86%D8%B3%D8%AA%D8%A7%20%D8%A8%D8%A7%D9%8A%20%D8%A5%D9%84%D9%89%20alaaahmed199873@instapay" target="_blank" class="btn btn-whatsapp-confirm">
                                <i class="fa-brands fa-whatsapp"></i>
                                <span>تأكيد التحويل عبر الواتساب</span>
                            </a>
                        </div>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalHTML);
        }

        const modal = document.getElementById('instapayModal');
        const closeBtn = document.getElementById('closeInstaPayModal');
        const copyBtn = document.getElementById('copyInstaBtn');

        function openModal() {
            if (modal) modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            if (modal) modal.classList.remove('active');
            document.body.style.overflow = '';
        }

        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeModal();
            });
        }

        if (copyBtn) {
            copyBtn.addEventListener('click', () => {
                navigator.clipboard.writeText('alaaahmed199873@instapay').then(() => {
                    const span = copyBtn.querySelector('span');
                    const originalText = span.textContent;
                    span.textContent = 'تم النسخ!';
                    copyBtn.style.background = '#10b981';
                    setTimeout(() => {
                        span.textContent = originalText;
                        copyBtn.style.background = 'var(--primary)';
                    }, 2000);
                });
            });
        }

        document.querySelectorAll('.payment-pill-row.instapay').forEach(el => {
            el.addEventListener('click', openModal);
        });

        window.closeInstaPayModal = closeModal;
    }

    setupInstaPayModal();

    // --------------------------------------------------------------------------
    // 7. Binance Pay Interactive Modal (UID: 743063301 & Username: Service VIP)
    // --------------------------------------------------------------------------
    function setupBinanceModal() {
        if (!document.getElementById('binanceModal')) {
            const modalHTML = `
                <div class="binance-modal-overlay" id="binanceModal">
                    <div class="binance-modal-card">
                        <button class="modal-close-icon" id="closeBinanceModal">&times;</button>
                        <div class="vodafone-modal-header">
                            <div class="binance-badge-icon">
                                <svg viewBox="0 0 24 24" width="30" height="30" fill="none">
                                    <rect width="24" height="24" rx="6" fill="#181a20"/>
                                    <path d="M12 5l2.5 2.5L12 10 9.5 7.5 12 5zm-4.5 4.5L10 12l-2.5 2.5L5 12l2.5-2.5zm9 0L19 12l-2.5 2.5L14 12l2.5-2.5zM12 14l2.5 2.5L12 19l-2.5-2.5L12 14zm0-4.5L14.5 12 12 14.5 9.5 12 12 9.5z" fill="#f0b90b"/>
                                </svg>
                            </div>
                            <h3>الدفع عبر بينانس باي (Binance Pay)</h3>
                        </div>

                        <div class="binance-user-box">
                            <span>اسم المستخدم (User Name):</span>
                            <span class="binance-user-name">Service VIP</span>
                        </div>

                        <p class="vodafone-modal-desc">معرف الحساب (Binance Pay UID):</p>
                        <div class="binance-uid-box">
                            <span class="binance-uid-number" id="binanceUidNum">743063301</span>
                            <button class="btn-copy-num btn-copy-binance" id="copyBinanceBtn">
                                <i class="fa-solid fa-copy"></i>
                                <span>نسخ الـ UID</span>
                            </button>
                        </div>

                        <div class="vodafone-notice">
                            <i class="fa-solid fa-circle-info"></i>
                            <span>يمكنك التحويل المباشر عبر Binance Pay باستخدام معرف الحساب (UID) أعلاه بدون أي رسوم. أرسل رقم عملية التحويل على الواتساب للتفعيل الفوري.</span>
                        </div>

                        <div class="vodafone-modal-actions">
                            <a href="https://wa.me/201010478766?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D9%82%D9%85%D8%AA%20%D8%A8%D8%A7%D9%84%D8%AA%D8%AD%D9%88%D9%8A%D9%84%20%D8%B9%D8%A8%D8%B1%20Binance%20Pay%20%D8%A5%D9%84%D9%89%20UID:%20743063301" target="_blank" class="btn btn-whatsapp-confirm">
                                <i class="fa-brands fa-whatsapp"></i>
                                <span>تأكيد التحويل عبر الواتساب</span>
                            </a>
                        </div>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalHTML);
        }

        const modal = document.getElementById('binanceModal');
        const closeBtn = document.getElementById('closeBinanceModal');
        const copyBtn = document.getElementById('copyBinanceBtn');

        function openModal() {
            if (modal) modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            if (modal) modal.classList.remove('active');
            document.body.style.overflow = '';
        }

        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeModal();
            });
        }

        if (copyBtn) {
            copyBtn.addEventListener('click', () => {
                navigator.clipboard.writeText('743063301').then(() => {
                    const span = copyBtn.querySelector('span');
                    const originalText = span.textContent;
                    span.textContent = 'تم النسخ!';
                    copyBtn.style.background = '#10b981';
                    setTimeout(() => {
                        span.textContent = originalText;
                        copyBtn.style.background = '#f0b90b';
                    }, 2000);
                });
            });
        }

        document.querySelectorAll('.payment-pill-row.binance').forEach(el => {
            el.addEventListener('click', openModal);
        });

        window.closeBinanceModal = closeModal;
    }

    setupBinanceModal();

    // Global FAQ Accordion Toggle Function
    window.toggleFaqItem = function(btn) {
        if (!btn) return;
        const item = btn.closest('.faq-item');
        if (item) {
            item.classList.toggle('active');
        }
    };

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMobileMenu();
            closeCart();
            closeAuthModal();
            if (window.closeVodafoneModal) window.closeVodafoneModal();
            if (window.closeInstaPayModal) window.closeInstaPayModal();
            if (window.closeBinanceModal) window.closeBinanceModal();
        }
    });

});
