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
    const copy = template.cloneNode(true);

    const mainEl = document.querySelector(".m2");
    copy.querySelector(".pension h3").textContent = singlePension.title.rendered;

    const a = copy.querySelector(".pbut");
    a.href += description.id;

    copy.querySelector(".pimage").src = img_url;
    mainEl.appendChild(copy);
}

