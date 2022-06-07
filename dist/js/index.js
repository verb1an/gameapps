(function () {
    let search_input = document.querySelectorAll('.inp--search');
    if(search_input) {
        search_input.forEach((el) => {
            el.children[0].addEventListener('focus', () => {
                el.classList.add('focus');
            });
            el.children[0].addEventListener('blur', () => {
                el.classList.remove('focus');
            });
        });
    }
})();

//  slider
(function () {
    let slider = document.querySelector('.slider');
    let slides = document.querySelectorAll('.slider .slide');
    let controlls = document.querySelectorAll('.slider .slider__controlls a');

    if(slider) {
        let current_item = 0;
        controlls.forEach((cont) => {
            cont.addEventListener('click', (e) => {
                e.preventDefault();
                console.log(current_item)
                if(cont.classList.contains('left')) {
                    if(current_item != 0) current_item--;
                    else current_item = (slides.length-1);
                }else if(cont.classList.contains('right')) {
                    if(current_item != (slides.length-1)) current_item++;
                    else current_item = 0;
                }

                slides.forEach(slide => slide.classList.remove('current'));
                slides[current_item].classList.add('current');
            })
        });
    }
 
})();

(function () {
    const btnToUp = document.querySelector('.btn--toup');
    if(btnToUp) {
        btnToUp.addEventListener('click', () => {
            window.scrollTo(0, 0);
        });
    }
})();

(function () {
    const html = document.querySelector('html');
    const btnMenu = document.querySelector('.btn--menu');
    const menu = document.querySelector('.nav');
    if(btnMenu) {
        btnMenu.addEventListener('click', () => {
            btnMenu.classList.toggle('active');
            menu.classList.toggle('active');
            html.classList.toggle('hidden');
        });
    }
})();

(function () {
    const itemBuy = document.querySelector('.viewitem__block .item__buy');
    if(itemBuy) {
        window.addEventListener('scroll', () => {
            
            if(window.pageYOffset < 1175) {
                itemBuy.style = `top: ${window.pageYOffset + window.innerHeight - 400}px;`;
            }
        });

    }
})();

(function () {
    const profileTabsTriggers = document.querySelectorAll('.profile .tabs .tabs__triggers a');
    const profileTabsItems = document.querySelectorAll('.profile .tabs .tab__list');

    if(profileTabsTriggers) {
        profileTabsTriggers.forEach((el, count) => {
            el.addEventListener('click', () => {
                profileTabsTriggers.forEach(trg => trg.classList.remove('current'));
                profileTabsItems.forEach(tab => tab.classList.remove('current'));

                el.classList.add('current');
                console.log(count);
                profileTabsItems[count].classList.add('current');
            })
        });
    }

})();