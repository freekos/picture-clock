import pictureData from "./pictureData.js";

const picture = document.querySelector(".picture");

window.addEventListener("load", () => {
    let img = document.createElement("img");
    let index = Math.floor(Math.random() * pictureData.length);
    img.src = pictureData[index];
    img.className = "picture_img";
    picture.append(img);

    let i = index;

    setInterval(() => {
        if(i > pictureData.length - 1) {
            i=0;
        }
        img.src = pictureData[i];
        i++;
    }, 2500)
});