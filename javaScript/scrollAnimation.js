const headerLis = document.querySelectorAll('.header li');
const menuImg = document.querySelectorAll('.menu-image');
const menuItems1 = document.querySelectorAll('#menu-container-1 .menu-item');
const menuItems2 = document.querySelectorAll('#menu-container-2 .menu-item');
const menuItems3 = document.querySelectorAll('#menu-container-3 .menu-item');
const menuContainerImage1 = document.querySelector('#menu-container-1 .menu-image img');
const menuContainerImage2 = document.querySelector('#menu-container-2 .menu-image img');
const menuContainerImage3 = document.querySelector('#menu-container-3 .menu-image img');
const titles = document.querySelectorAll('#title');
function checkItems() {
    const scrollPosition = window.scrollY + window.innerHeight;

    function setAnimationTo(items, animation, delay = 0) {

        items.forEach((item, index) => {
            if (!item.classList.contains('animated')) {
                item.style.opacity = 0;
                setTimeout(() => {
                    const itemTop = item.getBoundingClientRect().top + window.scrollY;
                    const itemBottom = itemTop + item.offsetHeight;
                    if (scrollPosition > itemTop && window.scrollY < itemBottom) {
                        item.classList.add(animation);
                        item.style.opacity = 1;
                        item.classList.add('animated'); // إضافة الفئة التي تشير إلى أن الأنيميشن تم تطبيقه
                    }
                    else {
                        item.classList.remove(animation);
                    }
                }, index * delay);
            }
        });

    }
    setAnimationTo(titles, 'show-item');

    setAnimationTo([menuContainerImage1, menuContainerImage3], 'show-from-right');
    setAnimationTo([menuContainerImage2], 'show-from-left');
    setTimeout(() => {
        setAnimationTo(menuItems1, 'show-from-left', 1000);
        setAnimationTo(menuItems2, 'show-from-right', 1000);
        setAnimationTo(menuItems3, 'show-from-left', 1000);
    }, 2400);
}

// تشغيل الدالة عند التمرير
window.addEventListener('scroll', checkItems);

// تشغيل الدالة عند تحميل الصفحة للتأكد من حالة الأقسام
window.addEventListener('load', () => {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
    checkItems();
});
