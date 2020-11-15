fetch("http://nirajan.dk/WPCMS/wp-json/wp/v2/description/?_embed")
.then(initial => initial.json())
.then(callBack)

function callBack(data) {
    console.log(data)
    data.forEach(showPension);
}
function showPension(singlePension){
    console.log(singlePension)

    const img_url = singlePension._embedded["wp:featuredmedia"][0].source_url;

    const template = document.querySelector("template").content;
    const clone = template.cloneNode(true);
    const mainEl = document.querySelector(".m2");
    clone.querySelector(".pension h3").textContent = singlePension.title.rendered;

    clone.querySelector(".pimage").src = img_url;
    mainEl.appendChild(clone);
}

