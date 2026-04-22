/*For making tabs functional*/
let tabs = document.querySelectorAll('.tab');
let contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', e => {
        let activeTab = e.currentTarget;

        tabs.forEach (inactiveTab => {
            if (inactiveTab !== activeTab) {
                inactiveTab.classList.remove('active');
            }
        })
        activeTab.classList.add('active');

        contents.forEach(content => {
            content.classList.remove('active');
        });

        let targetID = activeTab.id.replace('tab', 'tab-content');

        let targetContent = document.getElementById(targetID);
        targetContent.classList.add('active');
    });
});







/* banners template. dont forget comma
{
    image: 'name',
    url: 'https://example.com',
    title: 'tooltip!'
}
*/

/* SQUARE BANNER ON ASIDE R */
const squareBanners = [
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

/* RECTANGLE BANNER (BOTTOM BANNER 1) */
const bottomBanner1 = [
    { 
        image: 'roblox',
        url: 'https://web.archive.org/web/20100309080934/http://www.roblox.com/',
    },
    { 
        image: 'goto',
        url: 'https://thehistoryoftheweb.com/goto-forgotten-search-engine/',
    },
    { 
        image: 'N3O',
        url: 'http://n3onexus.neocities.org/',
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
let bottomBanner1Queue = [];

function getBannerFromQueue(queue, bannerArray) {
    // when queue over reshuffle
    if (queue.length === 0) {
        queue = shuffleArray([...bannerArray]); //new shuffle
    }
    return queue.pop(); //next banner in queue
}

// SQUARE BANNER DISPLAY
function squareBannersDisplay() {
    const selected_banner = getBannerFromQueue(squareBannerQueue, squareBanners);
    squareBannerQueue = squareBannerQueue.length === 0 ? shuffleArray([...squareBanners]) : squareBannerQueue;
    const selected = squareBannerQueue.pop();
    
    // updates img
    const bannerImg = document.getElementById('square-banner-img');
    if (bannerImg) {
        bannerImg.src = `banners_sqr/${selected.image}.gif`;
    }

    // updates href link
    const bannerLink = document.getElementById('square-banner-link');
    if (bannerLink) {
        bannerLink.href = selected.url;
        bannerLink.target = '_blank';
    }
    
    setTimeout(squareBannersDisplay, 20000);
}

// BOTTOM BANNER 1 DISPLAY
function bottomBanner1Display() {
    const selected_banner = getBannerFromQueue(bottomBanner1Queue, bottomBanner1);
    bottomBanner1Queue = bottomBanner1Queue.length === 0 ? shuffleArray([...bottomBanner1]) : bottomBanner1Queue;
    const selected = bottomBanner1Queue.pop();
    
    // updates img
    const bottomBannerImg = document.getElementById('bottom-banner-1-img');
    if (bottomBannerImg) {
        bottomBannerImg.src = `banners_rec/${selected.image}.gif`;
    }

    // updates href link
    const bottomBannerLink = document.getElementById('bottom-banner-1-link');
    if (bottomBannerLink) {
        bottomBannerLink.href = selected.url;
        bottomBannerLink.target = '_blank';
    }
    
    setTimeout(bottomBanner1Display, 20000);
}

// Start both banner cycles
squareBannersDisplay();
bottomBanner1Display();

