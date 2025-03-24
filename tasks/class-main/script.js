const works = {
    "task1": { "title": "Project 1", "url": "works/task1/index.html" },
    "task2": { "title": "Project 2", "url": "works/task2/index.html" },
    "task3": { "title": "Project 3", "url": "works/task3/index.html" },
};

function createNavigation() {
    const navDiv = document.getElementById("nav_div");

    Object.keys(works).forEach(key => {
        const link = document.createElement("a");
        link.href = "#";
        link.textContent = works[key].title;
        link.onclick = () => updateIframe(works[key].url);

        navDiv.appendChild(link);
        navDiv.appendChild(document.createTextNode(" | ")); 
    });
}


function updateIframe(url) {
    document.getElementById("content_frame").src = url;
}

window.onload = () => {
    createNavigation();
    updateIframe("works/landing.html");
};
