document.addEventListener('DOMContentLoaded', () => {
    let currentIdx = 0;
    const allSlides = document.querySelectorAll('.slide');
    const allDots = document.querySelectorAll('.dot');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    function updateSlider(index) {
        // Logic to loop around
        if (index >= allSlides.length) {
            currentIdx = 0;
        } else if (index < 0) {
            currentIdx = allSlides.length - 1;
        } else {
            currentIdx = index;
        }

        // Remove active class from everything
        allSlides.forEach(s => s.classList.remove('active'));
        allDots.forEach(d => d.classList.remove('active'));

        // Add active class to current slide and dot
        allSlides[currentIdx].classList.add('active');
        allDots[currentIdx].classList.add('active');
    }

    // Event Listeners for Buttons
    nextBtn.addEventListener('click', () => {
        updateSlider(currentIdx + 1);
    });

    prevBtn.addEventListener('click', () => {
        updateSlider(currentIdx - 1);
    });

    // Event Listeners for Dots
    allDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            updateSlider(index);
        });
    });

    // Auto-play every 5 seconds
    setInterval(() => {
        updateSlider(currentIdx + 1);
    }, 5000);
});

window.addEventListener('load', () => {
    const track = document.getElementById('promoTrack');
    const next = document.getElementById('nextCardBtn');
    const prev = document.getElementById('prevCardBtn');
    const dots = document.querySelectorAll('.p-dot');
    
    let index = 0;

    function move() {
        const cardWidth = document.querySelector('.promo-card').offsetWidth + 20;
        track.style.transform = `translateX(-${index * cardWidth}px)`;
        
        // Update dots (0 or 1 since we have 2 sets of 3)
        dots.forEach(d => d.classList.remove('active'));
        if (index < 3) dots[0].classList.add('active');
        else dots[1].classList.add('active');
    }

    next.addEventListener('click', () => {
        index = (index >= 3) ? 0 : index + 3; // Moves by 3 cards
        move();
    });

    prev.addEventListener('click', () => {
        index = (index <= 0) ? 3 : index - 3;
        move();
    });
});


const translations = {
    "ka": {
        "nav_home": "მთავარი",
        "nav_info": "ძირითადი ინფორმაცია",
        "nav_contact": "კონტაქტი",
        "nav_promos": "მიმდინარე აქციები %",
        "nav_auth": "ავტორიზაცია",
        "nav_reg": "რეგისტრაცია",
        "nav_brands": "ბრენდები",
        "search_news_ph": "სიახლეების ძიება",
        "news_archive": "სიახლეების არქივი",
        "search_title": "პროდუქციის ძიება",
        "search_prod_ph": "პროდუქტის დასახელება",
        "grid_delivery": "ადგილზე მიტანა",
        "grid_shelf": "სააფთიაქო თარო",
        "grid_products": "პროდუქცია",
        "grid_map": "აფთიაქების რუკა",
        "card_box_title": "მტრედი ბარათი",
        "card_id_ph": "პირადი ნომერი",
        "stats_title": "ავერსის წარმატება",
        "stat_exp": "წლიანი გამოცდილება",
        "stat_pharm": "აფთიაქი",
        "stat_staff": "თანამშრომელი",
        "stat_cust": "ერთგული მომხმარებელი",
        "promo_section_title": "აქციები",
        "p_card_1": "ისარგებლეთ საუკეთესო შეთავაზებით ჩიკოს ეტლის...",
        "p_card_2": "მოემზადე და ისარგებლე აპრილის აქციით...",
        "p_card_3": "ავერსში ომბიეს სრულ ასორტიმენტზე -50%...",
        "p_card_4": "ახალი კოლექცია უკვე ხელმისაწვდომია...",
        "p_card_5": "სპეციალური ფასდაკლება შაბათ-კვირას...",
        "p_card_6": "დააგროვეთ მეტი ქულა მტრედი ბარათით...",
        "p_view_more": "იხილეთ ვრცლად »",
        "p_view_more_short": "იხილეთ ვრცლად",
        "view_all_promos": "იხილეთ ყველა აქცია",
        "contact_title": "კონტაქტი",
        "form_title": "მოგვწერეთ შეტყობინება",
        "f_name": "სახელი *",
        "f_email": "ელ-ფოსტა *",
        "f_subject": "სათაური",
        "f_phone": "ტელეფონი *",
        "f_msg": "წერილი",
        "f_send": "გაგზავნა",
        "captcha_text": "ჩაწერეთ სურათზე მოცემული სიმბოლოები",
        "cat_1": "ავერსის ონლაინ აფთიაქი",
        "cat_2": "შპს ავერსი რაციონალი",
        "cat_3": "ავერსის კლინიკა",
        "cat_4": "სადაზღვევო კომპანია ალფა",
        "cat_5": "ჰოსპიტალური ქსელი მედალფა",
        "cat_6": "ქირურგიის ეროვნული ცენტრი",
        "cat_7": "ახალი სიცოცხლე",
        "cat_8": "ვ.ბოჭორიშვილის კლინიკა",
        "footer_about_text": "კომპანია „ავერსი“ 1994 წლის 14 ნოემბერს დაარსდა. დამფუძნებლის ინიციატივით, მის სახელწოდებად იმთავითვე იქნა შერჩეული ლათინური სიტყვა, რომლის მნიშვნელობაც ყველაზე უკეთ შეესატყვისებოდა კომპანიის განვითარების პრინციპს - უწყვეტ და თანაბარზომიერ განვითარებას, სპირალურ წინსვლას.",
        "work_hours_title": "სამუშაო საათები",
        "mon_fri": "ორშაბათი - პარასკევი:",
        "foot_link_1": "პერსონალურ მონაცემთა დამუშავება",
        "foot_link_2": "კონფიდენციალურობის ფორმა",
        "foot_link_3": "„მზა-ჩანაწერების“ (Cookies) პოლიტიკა",
        "foot_promo_1": "ავერსში ევროპული ხარისხის პრიმის კომპრესიულ წინდებს -20% ფასდაკლებით შეიძენთ",
        "foot_promo_2": "ავერსში ბავშვთა კვების ასორტიმენტზე განსაკუთრებული ფასებით და შეთავაზებებით ისარგებლებთ",
        "foot_promo_3": "ისარგებლეთ საუკეთესო შეთავაზებით ჩიკოს ეტლის ორეულსა და სამეულზე",
        "copy_text": "©2018 ყველა უფლება დაცულია."
    },
    "en": {
        "nav_home": "Main",
        "nav_info": "General Information",
        "nav_contact": "Contact",
        "nav_promos": "Current Promotions %",
        "nav_auth": "Authorization",
        "nav_reg": "Registration",
        "nav_brands": "Brands",
        "search_news_ph": "Search News",
        "news_archive": "News Archive",
        "search_title": "Product Search",
        "search_prod_ph": "Product Name",
        "grid_delivery": "Home Delivery",
        "grid_shelf": "Pharmacy Shelf",
        "grid_products": "Products",
        "grid_map": "Pharmacy Map",
        "card_box_title": "Dove Card",
        "card_id_ph": "Personal ID",
        "stats_title": "Aversi's Success",
        "stat_exp": "Years of Experience",
        "stat_pharm": "Pharmacy",
        "stat_staff": "Employee",
        "stat_cust": "Loyal Customer",
        "promo_section_title": "Promotions",
        "p_card_1": "Enjoy the best offer on Chicco strollers...",
        "p_card_2": "Get ready and benefit from the April promotion...",
        "p_card_3": "At Aversi, -50% on the full range of Ombia...",
        "p_card_4": "New collection is now available...",
        "p_card_5": "Special discount on weekends...",
        "p_card_6": "Collect more points with the Dove card...",
        "p_view_more": "See more »",
        "p_view_more_short": "See more",
        "view_all_promos": "View all promotions",
        "contact_title": "Contact",
        "form_title": "Send us a Message",
        "f_name": "Name *",
        "f_email": "E-mail *",
        "f_subject": "Subject",
        "f_phone": "Phone *",
        "f_msg": "Message",
        "f_send": "Send",
        "captcha_text": "Enter the characters shown in the image",
        "cat_1": "Aversi Online Pharmacy",
        "cat_2": "Aversi-Rational LTD",
        "cat_3": "Aversi Clinic",
        "cat_4": "Alpha Insurance Company",
        "cat_5": "Medalpha Hospital Network",
        "cat_6": "National Surgery Center",
        "cat_7": "New Life",
        "cat_8": "V. Bochorishvili Clinic",
        "footer_about_text": "The company 'Aversi' was founded on November 14, 1994. By the founder's initiative, a Latin word was chosen as its name from the start, the meaning of which best suited the company's development principle - continuous and steady development, spiral progress.",
        "work_hours_title": "Working Hours",
        "mon_fri": "Monday - Friday:",
        "foot_link_1": "Personal Data Processing",
        "foot_link_2": "Privacy Form",
        "foot_link_3": "Cookies Policy",
        "foot_promo_1": "At Aversi you can buy European quality Prim compression socks with a -20% discount",
        "foot_promo_2": "At Aversi you benefit from special prices and offers on the baby food assortment",
        "foot_promo_3": "Take advantage of the best offer on Chicco stroller doubles and triples",
        "copy_text": "©2018 All rights reserved."
    }
};

function setLanguage(lang) {
    // Translate text content
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Translate placeholders
    document.querySelectorAll('[data-key-placeholder]').forEach(el => {
        const key = el.getAttribute('data-key-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // Update the HTML lang attribute
    document.documentElement.lang = lang;
}