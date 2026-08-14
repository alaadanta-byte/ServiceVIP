/* ==========================================================================
   Service VIP - Product Details Page JavaScript
   Dynamic Data Population, Duration Switcher & Subscription Triggers
   ========================================================================== */

window.addEventListener('load', () => {
    document.body.classList.remove('preload');
});

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.body.classList.remove('preload');
    }, 100);

    // shared Subscriptions Database
    const subscriptionsDB = {
        'chatgpt-plus': {
            id: 'chatgpt-plus',
            title: 'ChatGPT Plus VIP',
            category: 'ذكاء اصطناعي VIP',
            description: 'اشتراك رسمى شامل كامل الصلاحيات لأقوى نموذج ذكاء اصطناعي في العالم GPT-4o مع أداة رسم وتوليد الصور DALL-E 3 وتحليل البرمجيات والملفات بلا حدود.',
            price: 650,
            dollarPrice: '650 ج.م',
            discount: 'خصم 30%',
            badgeBg: '#10a37f',
            iconSvg: `
                <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                    <path d="M22.28 9.87a6.22 6.22 0 0 0-.52-5.18 6.42 6.42 0 0 0-4.05-3.07 6.27 6.27 0 0 0-6.19 1.49 6.25 6.25 0 0 0-5.17.52A6.41 6.41 0 0 0 3.28 7.7a6.28 6.28 0 0 0-.2 6.36 6.22 6.22 0 0 0 .52 5.18 6.42 6.42 0 0 0 4.05 3.07 6.27 6.27 0 0 0 6.19-1.49 6.26 6.26 0 0 0 5.17-.52 6.42 6.42 0 0 0 3.07-4.07 6.28 6.28 0 0 0 .2-6.36zm-9.39 10.9a4.74 4.74 0 0 1-2.92-1.04l.15-.09 3.49-2.01a.76.76 0 0 0 .38-.66v-4.9l1.47.85a.08.08 0 0 1 .04.07v4.06a4.75 4.75 0 0 1-2.61 3.72zm-7.72-3.32a4.72 4.72 0 0 1-.58-3.04l.15.09 3.49 2.01a.76.76 0 0 0 .76 0l4.25-2.45v1.7a.08.08 0 0 1-.04.07l-3.52 2.03a4.75 4.75 0 0 1-4.51-.48zm-1.12-8.47a4.75 4.75 0 0 1 2.33-2.01v4.21a.77.77 0 0 0 .38.66l4.25 2.45-1.47.85a.08.08 0 0 1-.08 0L6.03 14.1a4.75 4.75 0 0 1-1.98-4.12zm13.9 2.44-4.25-2.45 1.47-.85a.08.08 0 0 1 .08 0l3.52 2.03a4.75 4.75 0 0 1 1.98 4.12 4.74 4.74 0 0 1-2.33 2.01v-4.21a.77.77 0 0 0-.38-.66zm1.7-2.12-.15-.09-3.49-2.01a.76.76 0 0 0-.76 0l-4.25 2.45v-1.7a.08.08 0 0 1 .04-.07l3.52-2.03a4.75 4.75 0 0 1 5.09 3.45zM9.54 11.51l1.47-.85 1.47.85v1.7l-1.47.85-1.47-.85v-1.7z"/>
                </svg>
            `,
            features: [
                'وصول مباشر وغير محدود لنموذج GPT-4o السريع والذكي.',
                'أداة Canvas المتطورة للتحرير البرمجي وتوليد النصوص.',
                'توليد ورسم الصور بدقة خيالية عبر DALL-E 3.',
                'رفع وتصفح الملفات بصيغ PDF و Excel والصور بمرونة.',
                'استجابة فورية بدون أي تأخير وبأدوات حصرية.',
                'ضمان ذهبي 100% طوال مدة اشتراكك واستبدال فور انقطاع الخدمة.'
            ]
        },
        'claude-pro': {
            id: 'claude-pro',
            title: 'Claude 3.5 Sonnet Pro',
            category: 'ذكاء اصطناعي VIP',
            description: 'النموذج البرمجي والمنطقي الأكثر ذكاءً بدقة صياغة مذهلة باللغة العربية ونوافذ سياق تفوق 200,000 توكنز.',
            price: 750,
            dollarPrice: '750 ج.م',
            discount: 'خصم 23%',
            badgeBg: '#d96b27',
            iconSvg: `
                <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round">
                    <line x1="12" y1="2" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <line x1="4.9" y1="4.9" x2="19.1" y2="19.1" />
                    <line x1="19.1" y1="4.9" x2="4.9" y2="19.1" />
                    <line x1="7.5" y1="3" x2="16.5" y2="21" />
                    <line x1="16.5" y1="3" x2="7.5" y2="21" />
                </svg>
            `,
            features: [
                'وصول كامل لـ Claude 3.5 Sonnet و Opus.',
                'أفضل أداء عالمي في فهم الأكواد البرمجية والتأكد من صحتها.',
                'سياق ضخم جداً يسع كتباً ومجلدات كاملة 200K Tokens.',
                'ميزة Artifacts لمعاينة الأكواد والمخططات فوراً.',
                'ضمان ذهبي شامل وتسليم فوري عند الشراء.'
            ]
        },
        'midjourney': {
            id: 'midjourney',
            title: 'Midjourney v6 Unlimited',
            category: 'تصميم وجرافيك',
            description: 'اشتراك ميدجورني الاصدار السادس لإنشاء صور وتصاميم فوتوغرافية وتخيلية واقعية جداً لأعمالك وتصاميمك.',
            price: 850,
            dollarPrice: '850 ج.م',
            discount: 'خصم 25%',
            badgeBg: '#ffffff',
            badgeColor: '#0b0d1b',
            iconSvg: `
                <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                    <path d="M4 17.5L12 3l8 14.5H4zm8-11.5L6.5 16h11L12 6z"/>
                    <path d="M2 19.5h20v1.5H2z"/>
                </svg>
            `,
            features: [
                'وضع التوليد السريع Fast Mode لسرعة فائقة.',
                'إمكانية توليد صور غير محدودة.',
                'حقوق استخدام تجاري كاملة لكافة التصاميم.',
                'سيرفر ديسكورد خاص ومنظم وسهل الاستخدام.',
                'ضمان كامل طوال مدة اشتراكك 100%.'
            ]
        },
        'gemini-advanced': {
            id: 'gemini-advanced',
            title: 'Gemini Advanced 1.5 Pro',
            category: 'ذكاء اصطناعي VIP',
            description: 'أداة جوجل العملاقة مع سياق مليون توكن وميزات الربط المباشر مع Google Docs, Drive, YouTube.',
            price: 690,
            dollarPrice: '690 ج.م',
            discount: 'خصم 31%',
            badgeBg: '#13172e',
            iconSvg: `
                <svg viewBox="0 0 24 24" width="32" height="32">
                    <defs>
                        <linearGradient id="gemini-det-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#4285F4" />
                            <stop offset="35%" stop-color="#9B51E0" />
                            <stop offset="70%" stop-color="#EA4335" />
                            <stop offset="100%" stop-color="#FBBC05" />
                        </linearGradient>
                    </defs>
                    <path fill="url(#gemini-det-grad)" d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z"/>
                </svg>
            `,
            features: [
                'نافذة سياق غير مسبوقة تبلغ 1,000,000 Token.',
                'تحليل الفيديوات الطويلة ومقاطع يوتيوب المباشرة.',
                'تكامل مباشر مع حسابات جوجل ومستنداتها.',
                'سرعة فائقة ودعم لغوي استثنائي.',
                'ضمان كامل طوال الفترة وتسليم فوري.'
            ]
        },
        'perplexity-pro': {
            id: 'perplexity-pro',
            title: 'Perplexity Pro',
            category: 'بحث وذكاء اصطناعي',
            description: 'محرك البحث الذكي المباشر الموثق بالمصادر والأدلة مدمجاً مع أفضل نماذج AI في منصة واحدة.',
            price: 490,
            dollarPrice: '490 ج.م',
            discount: 'خصم 33%',
            badgeBg: '#090a0f',
            iconSvg: `
                <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#ffffff" stroke-width="2">
                    <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
                    <circle cx="12" cy="12" r="4" fill="#1f293d" stroke="#ffffff" />
                </svg>
            `,
            features: [
                'بحث Pro Search غير محدود يحلل أعماق الإنترنت.',
                'إمكانية الاختيار بين Claude 3.5, GPT-4o, و Llama 3.',
                'رفع وتلخيص مستندات الـ PDF الكبيرة بدقة.',
                'توليد واستخراج المراجع والمصادر لكل إجابة.',
                'ضمان وتسليم فوري ومباشر.'
            ]
        },
        'canva-pro': {
            id: 'canva-pro',
            title: 'Canva Pro VIP',
            category: 'تصميم وجرافيك',
            description: 'اشتراك كانفا برو الشامل لجميع القوالب المدفوعة وإزالة الخلفيات وتخزين سحابي 1TB.',
            price: 290,
            dollarPrice: '290 ج.م',
            period: 'شهر',
            discount: 'خصم 58%',
            badgeBg: '#00c4cc',
            iconSvg: `
                <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z"/>
                </svg>
            `,
            features: [
                'تنزيل واستخدام ملايين القوالب الاحترافية.',
                'أدوات الذكاء الاصطناعيMagic Studio للصور.',
                'مساحة تخزين سحابية 1 Terabyte.',
                'تفعيل مباشر على إيميلك الشخصي.',
                'ضمان كامل طوال مدة اشتراكك.'
            ]
        }
    };

    // Get URL Parameter ?id=...
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id') || 'chatgpt-plus';

    // Retrieve custom products saved from Admin Dashboard if available
    const customProdsStorage = localStorage.getItem('servicevip_custom_products');
    let customProductRef = null;
    if (customProdsStorage) {
        try {
            const list = JSON.parse(customProdsStorage);
            customProductRef = list.find(item => item.id === productId);
        } catch (e) {}
    }

    const baseProductData = subscriptionsDB[productId] || subscriptionsDB['chatgpt-plus'];
    let product = customProductRef ? { ...baseProductData, ...customProductRef } : baseProductData;
    if (subscriptionsDB[productId]) {
        product.price = subscriptionsDB[productId].price;
    }

    const durationParam = urlParams.get('duration');
    if (durationParam) {
        const targetRadio = document.querySelector(`input[name="duration"][value="${durationParam}"]`);
        if (targetRadio) {
            targetRadio.checked = true;
        }
    }

    // Populate Page Elements
    document.title = `${product.title} - تفاصيل الاشتراك | Service VIP`;
    document.getElementById('breadcrumbProductTitle').textContent = product.title;
    document.getElementById('productTitle').textContent = product.title;
    document.getElementById('productCategory').textContent = product.category;
    document.getElementById('productDesc').textContent = product.description;
    document.getElementById('productDiscountTag').textContent = product.discount || 'اشتراك VIP';

    // Set Guarantee Title & Text strictly from Admin input
    const gTitleEl = document.getElementById('productGuaranteeTitle');
    const gTextEl = document.getElementById('productGuaranteeText');
    if (gTitleEl) {
        gTitleEl.textContent = product.guarantee || 'ضمان كامل 100%';
    }
    if (gTextEl) {
        gTextEl.textContent = product.guaranteeText || 'ضمانك معانا لآخر يوم في اشتراكك';
    }

    // Set Logo Badge
    const logoBadge = document.getElementById('productLogoBadge');
    if (product.image) {
        logoBadge.style.background = 'transparent';
        logoBadge.innerHTML = `<img src="${product.image}" alt="${product.title}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 14px;">`;
    } else {
        logoBadge.style.background = product.badgeBg || '#7c3aed';
        if (product.badgeColor) logoBadge.style.color = product.badgeColor;
        logoBadge.innerHTML = product.iconSvg || '<i class="fa-solid fa-crown"></i>';
    }

    // Set Features Bullet List
    const featuresList = document.getElementById('detailFeaturesList');
    featuresList.innerHTML = (product.features || [
        'وصول مباشر وغير محدود للخدمة مع ضمان كامل.',
        'سرعة استجابة فائقة بدون أي تقطيع.',
        'تفعيل مباشر بضمان 100% طوال فترة الاشتراك.'
    ]).map(f => `
        <li>
            <i class="fa-solid fa-circle-check"></i>
            <span>${f}</span>
        </li>
    `).join('');

    // Currency Switcher System (EGP / USD) - Default: EGP
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

    function setupCurrencyToggle() {
        const btn = document.getElementById('currencyToggleBtn');
        updateCurrencyBtnState();

        if (btn) {
            btn.addEventListener('click', () => {
                currentCurrency = currentCurrency === 'EGP' ? 'USD' : 'EGP';
                localStorage.setItem('servicevip_currency', currentCurrency);
                updateCurrencyBtnState();
                renderDetailPrices();

                const toastMsg = currentCurrency === 'USD' ? 'تم تحويل العملة إلى الدولار الأمريكي ($) 🇺🇸' : 'تم تحويل العملة إلى الجنيه المصري (ج.م) 🇪🇬';
                showToast(toastMsg);
            });
        }
    }

    // Duration Configuration Map
    const durLabelsMap = {
        '1month': { title: '1 شهر (شهر واحد)', short: 'شهر واحد' },
        '2months': { title: '2 شهر (شهرين)', short: '2 شهر' },
        '3months': { title: '3 شهور', short: '3 شهور' },
        '4months': { title: '4 شهور', short: '4 شهور' },
        '5months': { title: '5 شهور', short: '5 شهور' },
        '6months': { title: '6 شهور (نصف سنة)', short: '6 شهور' },
        '7months': { title: '7 شهور', short: '7 شهور' },
        '8months': { title: '8 شهور', short: '8 شهور' },
        '9months': { title: '9 شهور', short: '9 شهور' },
        '10months': { title: '10 شهور', short: '10 شهور' },
        '11months': { title: '11 شهر', short: '11 شهر' },
        '12months': { title: '12 شهر (سنة كاملة)', short: 'سنة كاملة' },
        '15months': { title: '15 شهر (سنة و3 شهور)', short: '15 شهر' },
        '18months': { title: '18 شهر (سنة ونصف)', short: 'سنة ونصف' },
        '24months': { title: '24 شهر (سنتين كاملتين)', short: 'سنتين' }
    };

    const activeDurations = product.durations || (product.period === 'سنة' ? ['12months'] : ['1month', '3months', '12months']);

    // Dynamic Duration Options Generator
    const durationOptionsContainer = document.getElementById('durationOptionsContainer');
    if (durationOptionsContainer) {
        durationOptionsContainer.innerHTML = activeDurations.map((dKey, idx) => {
            let pVal = product.prices?.[dKey];
            if (!pVal) {
                if (dKey === '1month') pVal = product.price;
                else if (dKey === '3months') pVal = Math.round(product.price * 3 * 0.85);
                else if (dKey === '12months') pVal = product.period === 'سنة' ? product.price : Math.round(product.price * 12 * 0.65);
                else pVal = product.price;
            }
            const info = durLabelsMap[dKey] || { title: dKey, short: dKey };
            const checkedAttr = idx === 0 ? 'checked' : '';
            const activeClass = idx === 0 ? 'active' : '';

            return `
                <label class="duration-option ${activeClass}" style="cursor: pointer;">
                    <input type="radio" name="duration" value="${dKey}" ${checkedAttr} data-price="${pVal}" data-short="${info.short}">
                    <span class="opt-label">${info.title}</span>
                    <span class="opt-price">${getFormattedPrice(pVal)}</span>
                </label>
            `;
        }).join('');
    }

    // Price Update Logic
    const finalPriceDisplay = document.getElementById('finalPriceDisplay');
    const finalPeriodText = document.getElementById('finalPeriodText');

    function updatePrice() {
        const selectedRadio = document.querySelector('input[name="duration"]:checked');
        document.querySelectorAll('.duration-option').forEach(el => el.classList.remove('active'));

        if (selectedRadio) {
            selectedRadio.parentElement.classList.add('active');
            const pVal = parseFloat(selectedRadio.getAttribute('data-price')) || product.price;
            const shortText = selectedRadio.getAttribute('data-short') || 'شهر';
            if (finalPriceDisplay) finalPriceDisplay.textContent = getFormattedPrice(pVal);
            if (finalPeriodText) finalPeriodText.innerHTML = `/ <span dir="rtl" style="display:inline-block;">${shortText}</span>`;
        }
    }

    function renderDetailPrices() {
        const activeRadio = document.querySelector('input[name="duration"]:checked') || document.querySelector('input[name="duration"]');
        if (activeRadio) {
            activeRadio.checked = true;
        }
        updatePrice();
    }

    // Attach click and change listeners to all duration cards
    document.querySelectorAll('.duration-option').forEach(optLabel => {
        optLabel.addEventListener('click', () => {
            const radio = optLabel.querySelector('input[name="duration"]');
            if (radio) {
                radio.checked = true;
                updatePrice();
            }
        });
    });

    document.querySelectorAll('input[name="duration"]').forEach(radio => {
        radio.addEventListener('change', updatePrice);
    });

    // Run price update on load
    updatePrice();
    setupCurrencyToggle();

    // --------------------------------------------------------------------------
    // Quick Checkout Modal Popup Handler
    // --------------------------------------------------------------------------
    function setupQuickCheckoutModal() {
        if (!document.getElementById('quickCheckoutModal')) {
            const modalHTML = `
                <div class="checkout-modal-overlay" id="quickCheckoutModal">
                    <div class="checkout-modal-card">
                        <button class="modal-close-icon" id="closeQuickCheckoutModal">&times;</button>
                        <div class="checkout-modal-header">
                            <div class="vodafone-badge-icon" style="background: rgba(192, 132, 252, 0.15); border-color: rgba(192, 132, 252, 0.35);">
                                <i class="fa-solid fa-bolt" style="color: #c084fc; font-size: 1.3rem;"></i>
                            </div>
                            <h3>بيانات طلب الاشتراك والتفعيل</h3>
                        </div>

                        <!-- Subscription Summary Card -->
                        <div class="checkout-summary-box">
                            <div class="summary-item-row">
                                <span>نوع الاشتراك:</span>
                                <span class="summary-item-val" id="checkoutModalTitle">${product.title}</span>
                            </div>
                            <div class="summary-item-row">
                                <span>المدة المختارة:</span>
                                <span class="summary-item-val" id="checkoutModalDuration">شهر واحد</span>
                            </div>
                            <div class="summary-item-row">
                                <span>السعر النهائي:</span>
                                <span class="summary-item-val highlight" id="checkoutModalPrice">--</span>
                            </div>
                        </div>

                        <!-- Customer Details Form -->
                        <form id="quickCheckoutForm" onsubmit="return false;">
                            <div class="checkout-form-group">
                                <label for="custName"><i class="fa-solid fa-user"></i> الاسم الكامل:</label>
                                <input type="text" id="custName" placeholder="أدخل اسمك الكريم..." required>
                            </div>
                            <div class="checkout-form-group">
                                <label for="custEmail"><i class="fa-solid fa-envelope"></i> البريد الإلكتروني:</label>
                                <input type="email" id="custEmail" placeholder="example@domain.com" required>
                            </div>
                            <div class="checkout-form-group">
                                <label for="custPhone"><i class="fa-solid fa-phone"></i> رقم الهاتف / الواتساب:</label>
                                <input type="tel" id="custPhone" placeholder="010XXXXXXXX" required>
                            </div>

                            <!-- Payment Method Selector -->
                            <div class="checkout-form-group">
                                <label><i class="fa-solid fa-wallet"></i> اختر طريقة الدفع المفضلة:</label>
                                <div class="payment-method-selector-grid" id="checkoutPaymentGrid">
                                    <label class="payment-option-pill active">
                                        <input type="radio" name="checkoutPaymentMethod" value="انستا باي (InstaPay)" checked>
                                        <span class="pay-pill-text">انستا باي InstaPay</span>
                                    </label>
                                    <label class="payment-option-pill">
                                        <input type="radio" name="checkoutPaymentMethod" value="فودافون كاش (Vodafone Cash)">
                                        <span class="pay-pill-text">فودافون كاش Vodafone Cash</span>
                                    </label>
                                    <label class="payment-option-pill">
                                        <input type="radio" name="checkoutPaymentMethod" value="فوري باي (Fawry Pay)">
                                        <span class="pay-pill-text">فوري باي Fawry Pay</span>
                                    </label>
                                    <label class="payment-option-pill">
                                        <input type="radio" name="checkoutPaymentMethod" value="بينانس باي (Binance Pay)">
                                        <span class="pay-pill-text">بينانس باي Binance Pay</span>
                                    </label>
                                </div>
                            </div>

                            <div class="vodafone-modal-actions" style="margin-top: 1.5rem;">
                                <button type="submit" class="btn btn-whatsapp-confirm" id="sendWhatsAppOrderBtn">
                                    <i class="fa-brands fa-whatsapp"></i>
                                    <span>إرسال الطلب عبر الواتساب</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalHTML);
        }

        const modal = document.getElementById('quickCheckoutModal');
        const closeBtn = document.getElementById('closeQuickCheckoutModal');
        const form = document.getElementById('quickCheckoutForm');
        const paymentGrid = document.getElementById('checkoutPaymentGrid');

        if (paymentGrid) {
            paymentGrid.querySelectorAll('.payment-option-pill').forEach(pill => {
                pill.addEventListener('click', () => {
                    paymentGrid.querySelectorAll('.payment-option-pill').forEach(p => p.classList.remove('active'));
                    pill.classList.add('active');
                    const radio = pill.querySelector('input[type="radio"]');
                    if (radio) radio.checked = true;
                });
            });
        }

        function openModal() {
            const selectedDurationText = document.getElementById('finalPeriodText')?.textContent?.replace('/', '')?.trim() || 'شهر واحد';
            const finalPriceText = document.getElementById('finalPriceDisplay')?.textContent || '';

            document.getElementById('checkoutModalTitle').textContent = product.title;
            document.getElementById('checkoutModalDuration').textContent = selectedDurationText;
            document.getElementById('checkoutModalPrice').textContent = finalPriceText;

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

        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const name = document.getElementById('custName').value.trim();
                const email = document.getElementById('custEmail').value.trim();
                const phone = document.getElementById('custPhone').value.trim();
                const title = document.getElementById('checkoutModalTitle').textContent;
                const duration = document.getElementById('checkoutModalDuration').textContent;
                const price = document.getElementById('checkoutModalPrice').textContent;
                const selectedPayment = document.querySelector('input[name="checkoutPaymentMethod"]:checked')?.value || 'انستا باي (InstaPay)';

                if (!name || !email || !phone) {
                    showToast('يرجى ملء كافة البيانات المطلوب إدخالها!');
                    return;
                }

                const msg = `مرحباً، أود الاشتراك في الخدمة التالية عبر Service VIP:\n\n📌 *نوع الاشتراك:* ${title}\n⏳ *المدة المختارة:* ${duration}\n💰 *السعر النهائي:* ${price}\n💳 *طريقة الدفع المختارة:* ${selectedPayment}\n\n👤 *بيانات المشترك:*\n• الاسم الكامل: ${name}\n• البريد الإلكتروني: ${email}\n• رقم الهاتف: ${phone}\n\nيرجى إرسال تفاصيل وسيلة الدفع وتأكيد التفعيل الفوري.`;

                const waUrl = `https://wa.me/201010478766?text=${encodeURIComponent(msg)}`;
                window.open(waUrl, '_blank');
                closeModal();
            });
        }

        window.openQuickCheckoutModal = openModal;
        window.closeQuickCheckoutModal = closeModal;
    }

    setupQuickCheckoutModal();

    window.handleBuyNowClick = function() {
        if (window.openQuickCheckoutModal) {
            window.openQuickCheckoutModal();
        } else {
            const title = document.getElementById('productTitle')?.textContent || 'الاشتراك';
            const duration = document.getElementById('finalPeriodText')?.textContent?.replace('/', '')?.trim() || 'شهر واحد';
            const price = document.getElementById('finalPriceDisplay')?.textContent || '';
            const msg = `مرحباً، أود الاشتراك الفوري في:\n📌 *${title}*\n⏳ *المدة:* ${duration}\n💰 *السعر:* ${price}\n\nيرجى تزويدي بتفاصيل الدفع وتأكيد التفعيل الفوري.`;
            window.open(`https://wa.me/201010478766?text=${encodeURIComponent(msg)}`, '_blank');
        }
    };

    window.handleAddToCartClick = function() {
        const title = document.getElementById('productTitle')?.textContent || 'الاشتراك';
        const duration = document.getElementById('finalPeriodText')?.textContent?.replace('/', '')?.trim() || 'شهر واحد';
        const price = document.getElementById('finalPriceDisplay')?.textContent || '';

        showToast(`تمت إضافة "${title}" (${duration} - ${price}) إلى السلة بنجاح! 🛒`);

        setTimeout(() => {
            window.handleBuyNowClick();
        }, 600);
    };

    // Button Interactivity (Buy Now & Add to Cart)
    const buyNowBtn = document.getElementById('buyNowBtn');
    const addToCartDetailBtn = document.getElementById('addToCartDetailBtn');

    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.handleBuyNowClick();
        });
    }

    if (addToCartDetailBtn) {
        addToCartDetailBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.handleAddToCartClick();
        });
    }

    // Toast Function
    function showToast(message) {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `
            <i class="fa-solid fa-circle-check"></i>
            <span>${message}</span>
        `;
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(20px)';
            toast.style.transition = 'all 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // FAQ Accordion Toggle Function
    window.toggleFaqItem = function(btn) {
        if (!btn) return;
        const item = btn.closest('.faq-item');
        if (item) {
            item.classList.toggle('active');
        }
    };

    // Mobile Navigation Menu Toggle Drawer
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

    // Vodafone Cash Interactive Modal (01010478766)
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

    // InstaPay Interactive Modal (QR Code & alaaahmed199873@instapay)
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

    // Binance Pay Interactive Modal (UID: 743063301 & Username: Service VIP)
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

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMobileMenu();
            if (window.closeVodafoneModal) window.closeVodafoneModal();
            if (window.closeInstaPayModal) window.closeInstaPayModal();
            if (window.closeBinanceModal) window.closeBinanceModal();
            if (window.closeQuickCheckoutModal) window.closeQuickCheckoutModal();
        }
    });

});
