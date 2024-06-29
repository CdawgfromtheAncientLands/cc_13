document.addEventListener('DOMContentLoaded', () => {
    const loadingElement = document.getElementById('loading');
    const errorElement = document.getElementById('error');
    const productsContainer = document.getElementById('products');
    const navigationElement = document.getElementById('navigation');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    const products = [
        {"id":"recZkNf2kwmdBcqd0","name":"accent chair","price":25999,"image":"https://www.course-api.com/images/store/product-1.jpeg","colors":["#ff0000","#00ff00","#0000ff"],"company":"marcos","description":"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge","category":"office","shipping":true},
        {"id":"recEHmzvupvT8ZONH","name":"albany sectional","price":109999,"image":"https://www.course-api.com/images/store/product-2.jpeg","colors":["#000","#ffb900"],"company":"liddy","description":"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge","category":"living room"},
        {"id":"rec5NBwZ5zCD9nfF0","name":"albany table","price":309999,"image":"https://www.course-api.com/images/store/product-3.jpeg","colors":["#ffb900","#0000ff"],"company":"liddy","description":"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge","category":"kitchen"},
        {"id":"recd1jIVIEChmiwhe","name":"armchair","price":12599,"image":"https://www.course-api.com/images/store/product-4.jpeg","colors":["#000","#00ff00","#0000ff"],"company":"marcos","description":"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge","category":"bedroom","shipping":true},
        {"id":"recotY5Nh00DQFdkm","name":"dining table","price":42999,"image":"https://www.course-api.com/images/store/product-5.jpeg","colors":["#00ff00","#0000ff","#ff0000"],"company":"ikea","description":"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge","category":"dining","shipping":true},
        {"id":"rec1Ntk7siEEW9ha1","name":"emperor bed","price":23999,"image":"https://www.course-api.com/images/store/product-6.jpeg","colors":["#0000ff","#000"],"company":"ikea","description":"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge","category":"bedroom","shipping":true},
        {"id":"recNZ0koOqEmilmoz","name":"entertainment center","price":59999,"image":"https://www.course-api.com/images/store/product-7.jpeg","featured":true,"colors":["#000","#ff0000"],"company":"caressa","description":"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge","category":"living room","shipping":true},
        {"id":"recrfxv3EwpvJwvjq","name":"high-back bench","price":39999,"image":"https://www.course-api.com/images/store/product-8.jpeg","featured":true,"colors":["#000","#00ff00"],"company":"ikea","description":"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge","category":"office","shipping":true},
        {"id":"recoW8ecgjtKx2Sj2","name":"leather chair","price":20099,"image":"https://www.course-api.com/images/store/product-9.jpeg","colors":["#ff0000","#ffb900","#00ff00"],"company":"caressa","description":"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge","category":"bedroom"},
        {"id":"recEOA6qtDag1hRbU","name":"leather sofa","price":99999,"image":"https://www.course-api.com/images/store/product-10.jpeg","colors":["#00ff00","#0000ff"],"company":"caressa","description":"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge","category":"office"},
        {"id":"recoAJYUCuEKxcPSr","name":"modern bookshelf","price":31999,"image":"https://www.course-api.com/images/store/product-11.jpeg","featured":true,"colors":["#ffb900","#ff0000","#00ff00"],"company":"caressa","description":"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge","category":"kids"},
        {"id":"recQ0fMd8T0Vk211E","name":"modern poster","price":3099,"image":"https://www.course-api.com/images/store/product-12.jpeg","colors":["#000"],"company":"liddy","description":"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge","category":"living room","shipping":true},
        {"id":"rec7CjDWKRgNQtrKe","name":"shelf","price":30999,"image":"https://www.course-api.com/images/store/product-13.jpeg","colors":["#00ff00"],"company":"ikea","description":"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge","category":"living room"},
        {"id":"recF0KpwlkF7e8kXO","name":"simple chair","price":109999,"image":"https://www.course-api.com/images/store/product-14.jpeg","colors":["#0000ff"],"company":"liddy","description":"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge","category":"living room","shipping":true},
        {"id":"recs5BSVU3qQrOj4E","name":"sofa set","price":129999,"image":"https://www.course-api.com/images/store/product-15.jpeg","colors":["#00ff00","#ffb900"],"company":"marcos","description":"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge","category":"living room","shipping":true},
        {"id":"recroK1VD8qVdMP5H","name":"suede armchair","price":15999,"image":"https://www.course-api.com/images/store/product-16.jpeg","colors":["#ffb900"],"company":"caressa","description":"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge","category":"office"},
        {"id":"rec7JInsuCEHgmaGe","name":"utopia sofa","price":79999,"image":"https://www.course-api.com/images/store/product-17.jpeg","featured":true,"colors":["#ff0000","#00ff00"],"company":"liddy","description":"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge","category":"living room"},
        {"id":"rec3jeKnhInKHJuz2","name":"vase table","price":120999,"image":"https://www.course-api.com/images/store/product-18.jpeg","featured":true,"colors":["#ff0000"],"company":"marcos","description":"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge","category":"office"},
        {"id":"recv2ohxljlK2FZO7","name":"wooden bed","price":250099,"image":"https://www.course-api.com/images/store/product-19.jpeg","colors":["#000","#ffb900"],"company":"ikea","description":"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge","category":"bedroom"},
        {"id":"recJIjREF3dlFi3sR","name":"wooden desk","price":150999,"image":"https://www.course-api.com/images/store/product-20.jpeg","colors":["#000"],"company":"ikea","description":"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge","category":"office"},
        {"id":"recm7wC8TBVdU9oEL","name":"wooden table","price":234999,"image":"https://www.course-api.com/images/store/product-21.jpeg","featured":true,"colors":["#ffb900","#ff0000"],"company":"caressa","description":"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge","category":"kitchen"},
        {"id":"rectfNsySwAJeWDN2","name":"wooden bookshelf","price":150999,"image":"https://www.course-api.com/images/store/product-22.jpeg","colors":["#ff0000","#0000ff","#ffb900"],"company":"caressa","description":"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge","category":"kids","shipping":true},
        {"id":"recnmyquxrNBJkv02","name":"wooden chair","price":40099,"image":"https://www.course-api.com/images/store/product-23.jpeg","colors":["#000","#00ff00","#0000ff"],"company":"caressa","description":"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge","category":"kids","shipping":true}
    ];

    let currentIndex = 0;

    function displayProduct() {
        if (products.length === 0) return;

        const product = products[currentIndex];
        productsContainer.innerHTML = `
            <div class="product" style="opacity: 0;">
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>$${(product.price / 100).toFixed(2)}</p>
                <p>${product.description}</p>
            </div>
        `;

        const productElement = document.querySelector('.product');
        setTimeout(() => {
            productElement.style.opacity = 1;
        }, 50);

        navigationElement.style.display = products.length > 1 ? 'block' : 'none';
    }

    function showLoading() {
        loadingElement.style.display = 'block';
    }

    function hideLoading() {
        loadingElement.style.display = 'none';
    }

    function showError() {
        errorElement.style.display = 'block';
    }

    function hideError() {
        errorElement.style.display = 'none';
    }

    function loadProducts() {
        try {
            hideLoading();
            hideError();
            displayProduct();
        } catch (error) {
            showError();
            hideLoading();
        }
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + products.length) % products.length;
        displayProduct();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % products.length;
        displayProduct();
    });

    showLoading();
    loadProducts();
});