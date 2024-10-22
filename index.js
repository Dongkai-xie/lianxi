document.addEventListener('DOMContentLoaded', function () {
    // 显示更多研究方向
    const showMoreResearchBtn = document.getElementById('showMoreResearch');
    const extraResearch = document.getElementById('extraResearch');

    showMoreResearchBtn.addEventListener('click', function () {
        if (extraResearch.style.display === 'none') {
            extraResearch.style.display = 'block';
            showMoreResearchBtn.textContent = '隐藏额外研究方向';
        } else {
            extraResearch.style.display = 'none';
            showMoreResearchBtn.textContent = '显示更多研究方向';
        }
    });

    // 动态加载论文
    const publicationsList = document.getElementById('publicationsList');
    const loadPublicationsBtn = document.getElementById('loadPublications');
    
    const publications = [
        { title: "论文1", authors: "作者1, 作者2", journal: "发表期刊", date: "2023-01-15" },
        { title: "论文2", authors: "作者1, 作者3", journal: "发表期刊", date: "2023-03-20" },
        { title: "论文3", authors: "作者2, 作者4", journal: "发表期刊", date: "2024-06-11" },
        // 可以添加更多论文
    ];

    let loadedPublications = 0;
    const publicationsToShow = 2; // 每次加载2篇论文

    function loadMorePublications() {
        const remainingPublications = publications.length - loadedPublications;
        const countToLoad = Math.min(remainingPublications, publicationsToShow);
        
        for (let i = 0; i < countToLoad; i++) {
            const pub = publications[loadedPublications];
            const li = document.createElement('li');
            li.innerHTML = `<strong>${pub.title}</strong>: ${pub.authors}, <em>${pub.journal}</em>, ${pub.date}.`;
            publicationsList.appendChild(li);
            loadedPublications++;
        }

        // 如果所有论文都加载完，隐藏按钮
        if (loadedPublications >= publications.length) {
            loadPublicationsBtn.style.display = 'none';
        }
    }

    loadPublicationsBtn.addEventListener('click', loadMorePublications);

    // 默认加载一部分论文
    loadMorePublications();
});
