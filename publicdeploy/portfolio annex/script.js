const main = document.querySelector('main');
const tabs = document.querySelectorAll('.tab');
const articles = Array.from(main.querySelectorAll(':scope > article'));
let currentFilter = 'all';

function getColumnCount() {
    if (window.matchMedia('(min-width: 992px)').matches) return 3;
    if (window.matchMedia('(min-width: 768px)').matches) return 2;
    return 1;
}

function layoutArticles() {
    const columns = Array.from({ length: getColumnCount() }, () => {
        const column = document.createElement('div');
        column.className = 'masonry-column';
        return column;
    });
    const visibleArticles = currentFilter === 'all'
        ? articles
        : articles.filter(article => article.classList.contains(currentFilter));

    visibleArticles.forEach((article, index) => {
        columns[index % columns.length].appendChild(article);
    });

    main.replaceChildren(...columns);
}

layoutArticles();
window.addEventListener('resize', layoutArticles);

tabs.forEach(tab => {
    tab.addEventListener('click', e => {
        const activeTab = e.currentTarget;
        currentFilter = activeTab.dataset.filter;

        tabs.forEach(inactiveTab => {
            inactiveTab.classList.remove('active');
        });
        activeTab.classList.add('active');

        layoutArticles();
    });
});
