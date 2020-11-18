
window.addEventListener("DOMContentLoaded",getData);

const link = "http://nirajan.dk/WPCMS/wp-json/wp/v2/description/?_embed";

function getData() {
    const urlParams = new URLSearchParams(window.location.search);
    console.log("URLSearchParams " + window.location);
    const the_pension_id = urlParams.get("description_id");
    console.log(the_pension_id);
    if(the_pension_id) {
        fetch("http://nirajan.dk/WPCMS/wp-json/wp/v2/description/" + the_pension_id + "?_embed")
        .then(initial => initial.json())
.then(showPension)
    }
     else{
         fetch(link)
.then(initial => initial.json())
.then(callBack)
     }


}

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
     const divPensionDesc = copy.querySelector("#pension-description");
    if(divPensionDesc) {
        divPensionDesc.innerHTML = singlePension.content.rendered;
    }

    const a = copy.querySelector(".pbut");
    if(a){
         a.href += singlePension.id;
    }


    copy.querySelector(".pimage").src = img_url;
    mainEl.appendChild(copy);
}

