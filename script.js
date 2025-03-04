// تابع برای مدیریت تب‌ها
function handleTabs(tabContainerId, contentClass) {
    const tabContainer = document.getElementById(tabContainerId);
    const tabs = tabContainer.querySelectorAll('li');
    const contents = document.querySelectorAll(`.${contentClass}`);

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', function () {
            // حذف کلاس active از همه تب‌ها و محتواها
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // اضافه کردن کلاس active به تب و محتوای کلیک‌شده
            this.classList.add('active');
            if (contents[index]) {
                contents[index].classList.add('active');
            }
        });
    });
}

// اعمال تابع روی تب‌های اصلی و فرعی
handleTabs('main-tabs', 'tab-pane');
handleTabs('sub-tabs', 'sub-tab-pane');
