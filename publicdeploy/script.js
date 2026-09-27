/* For making tabs functional */
const tabButtons = document.querySelectorAll('.tab');
const tabPanels = document.querySelectorAll('.tab-content');

tabButtons.forEach((tabButton) => {
    tabButton.addEventListener('click', (event) => {
        const activeTabButton = event.currentTarget;

        tabButtons.forEach((inactiveTabButton) => {
            if (inactiveTabButton !== activeTabButton) {
                inactiveTabButton.classList.remove('active');
            }
        });

        activeTabButton.classList.add('active');

        tabPanels.forEach((panel) => {
            panel.classList.remove('active');
        });

        const targetPanelId = activeTabButton.id.replace('tab', 'tab-content');
        const targetPanel = document.getElementById(targetPanelId);

        if (targetPanel) {
            targetPanel.classList.add('active');
        }
    });
});

/* banners template. dont forget comma
{
    image: 'name',
    url: 'https://example.com',
    title: 'tooltip!'
}
*/

/* SQUARE BANNER ON SIDEBAR RIGHT */
const squareBannerItems = [
    {
        image: 'rm94',
        url: 'https://rm94.neocities.org',
        title: 'Visit Retromaster94!'
    },
    {
        image: 'aftv',
        url: 'https://www.youtube.com/watch?v=rw51ICGBEQw',
        title: 'scared & impaired. tonight at 8/7c'
    },
    {
        image: 'clubpenguin',
        url: 'https://cpjourney.net/',
        title: 'Waddle On!'
    },
    {
        image: 'poptropica',
        url: 'https://web.archive.org/web/20130517102622/http://www.poptropica.com/',
        title: 'I miss you Poptropica!'
    }
];

/* RECTANGLE BANNER (BOTTOM BANNER) */
const bottomBannerItems = [
    {
        image: 'roblox',
        url: 'https://web.archive.org/web/20100309080934/http://www.roblox.com/'
    },
    {
        image: 'goto',
        url: 'https://thehistoryoftheweb.com/goto-forgotten-search-engine/'
    },
    {
        image: 'N3O',
        url: 'http://n3onexus.neocities.org/'
    }
    // Add more banners here
];

//bro used the Fisher-Yates algorithm to shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Separate queues for each banner type
let squareBannerQueue = [];
let bottomBannerQueue = [];

function getBannerFromQueue(queue, bannerArray) {
    if (queue.length === 0) {
        queue = shuffleArray([...bannerArray]);
    }
    return queue.pop();
}

// SQUARE BANNER DISPLAY
function squareBannersDisplay() {
    const selectedBanner = getBannerFromQueue(squareBannerQueue, squareBannerItems);
    squareBannerQueue = squareBannerQueue.length === 0 ? shuffleArray([...squareBannerItems]) : squareBannerQueue;
    const selected = squareBannerQueue.pop();

    const bannerImage = document.getElementById('square-banner-image');
    if (bannerImage) {
        bannerImage.src = `banners_sqr/${selected.image}.gif`;
    }

    const bannerLink = document.getElementById('square-banner-link');
    if (bannerLink) {
        bannerLink.href = selected.url;
        bannerLink.target = '_blank';
    }

    setTimeout(squareBannersDisplay, 20000);
}

// BOTTOM BANNER DISPLAY
function bottomBannerDisplay() {
    const selectedBanner = getBannerFromQueue(bottomBannerQueue, bottomBannerItems);
    bottomBannerQueue = bottomBannerQueue.length === 0 ? shuffleArray([...bottomBannerItems]) : bottomBannerQueue;
    const selected = bottomBannerQueue.pop();

    const bottomBannerImage = document.getElementById('bottom-banner-image');
    if (bottomBannerImage) {
        bottomBannerImage.src = `banners_rec/${selected.image}.gif`;
    }

    const bottomBannerLink = document.getElementById('bottom-banner-link');
    if (bottomBannerLink) {
        bottomBannerLink.href = selected.url;
        bottomBannerLink.target = '_blank';
    }

    setTimeout(bottomBannerDisplay, 20000);
}

// Start both banner cycles
squareBannersDisplay();
bottomBannerDisplay();

