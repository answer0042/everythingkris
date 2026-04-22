let tabs = document.querySelectorAll('li.tab');
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




