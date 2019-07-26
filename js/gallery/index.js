/*
 * Andela,Google,Udacity ,
 * Made with love
 * Author:Nehemie Zikama
 */

let styleContent = `
 .layer {
     position: fixed;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     background: rgba(0, 0, 0, .85);
     display: none;
     z-index: 7777;
 }
 
 #image_modal.art_g-main {
     position: fixed;
     bottom: .9pc;
     left: .4cm;
     right: .4cm;
     overflow-wrap: break-word;
     max-width: 80%;
     max-height: 98px;
     width: auto;
     height: auto;
     padding: 25px;
     margin-left: auto;
     margin-right: auto;
     border-radius: 10px;
     background-color: rgba(55, 5, 44c, .9);
     display: none;
     z-index: 9999;
 }
 
 .main_left__menu, 
 .main_left__closer {
    position: absolute;
    top: 2px;
    right: .3cm;
    margin-left: auto;
    margin-right: auto;
    border-radius: 3px;
    padding: 3px;
    width: 60%;
    text-align: right;
    color: aliceblue;
}
 
 .main_left__closer {
     top: -684px;
 }
 
 .close {
     background: transparent;
     border: 0;
     font-size: 21pt;
     color: #c3c3c3;
     cursor: pointer;
 }
 .modal-content {
    max-width: 70%;
    max-height: 500px;
    min-width: auto;
    min-height: auto;
}

[data-toggle="img"]{
    cursor: pointer;
    -webkit-transition: .5s cubic-bezier(0, -0.55, 0.56, 1.17);
    -moz-transition: .5s cubic-bezier(0, -0.55, 0.56, 1.17);
    -ms-transition: .5s cubic-bezier(0, -0.55, 0.56, 1.17);
    -o-transition: .5s cubic-bezier(0, -0.55, 0.56, 1.17);
    transition: .5s cubic-bezier(0, -0.55, 0.56, 1.17);
}
p#caption>a.link {
    margin-right: 224px;
}

.box_togo {
    top: 5.8pc;
    left: 5px;
    right: 5px;
    max-width: 100%;
    max-height: 680px;
    min-height: 125px;
    width: auto;
    height: auto;
    padding: 10px;
    margin-left: 8px;
    margin-right: 28px;
    text-align: center;
    font-weight: bolder;
    overflow-y: auto;
    position: fixed;
    font-size: 15pt;
    z-index: 8888;
    -webkit-transition: .05s cubic-bezier(0, -0.55, 0.56, 1.17);
    -moz-transition: .05s cubic-bezier(0, -0.55, 0.56, 1.17);
    -ms-transition: .05s cubic-bezier(0, -0.55, 0.56, 1.17);
    -o-transition: .05s cubic-bezier(0, -0.55, 0.56, 1.17);
    transition: .05s cubic-bezier(0, -0.55, 0.56, 1.17);
}
 `;
let content = `
 <!--___________________________ DEPENDENT LAYER _____________________________-->
 <span class="layer"></span>
 <!--___________________________ MODAL _____________________________-->
 <div id="image_modal" class="art_g-main">
     <!--___________________________ IMG CONTAINER _____________________________-->
     <div id='media-player'>
         <img id="img01" class="modal-content">
         <div class="main_left__closer">
             <button class="close">&times;</button>
         </div>

         <div class="main_left__menu">
             <p id="art_g-details">
                 <p id="art_g-caption"></p>
             </p>
         </div>
         <!-- __________   THIS IS NOT AVAILABLE (ADITION PICRUERS IN MODAL MODE) ____________ -->
     </div>
 </div>`;
init();

function init() {
    if (!document.querySelector("html head style")) {
        let Bodystyle = document.createElement("style");
        let Bodyhead = document.querySelector("head");
        Bodystyle.innerHTML += styleContent;
        if (Bodyhead) {
            Bodyhead.appendChild(Bodystyle)
        } else {
            document.appendChild(Bodystyle)
        };
    } else {
        document.querySelector("html head style").innerHTML += styleContent;
    }

    if (!document.querySelector("html body")) {
        let Bodystyle = document.createElement("body");
        Bodystyle.innerHTML += content;
        let Bodyhead = document.querySelector("body");
        if (Bodyhead) {
            Bodyhead.appendChild(Bodystyle)
        } else {
            document.appendChild(Bodystyle)
        };
    } else {
        let Bodyhead = document.querySelector("body");
        Bodyhead.lastElementChild.insertAdjacentHTML("AfterEnd", content)
            // console.log(Bodyhead.lastElementChild.previousElementSibling);
    }
}

function n$(event) {
    return document.querySelector(event);
};

function n$A(event) {
    return document.querySelectorAll(event);
};

let img_modal = n$("#image_modal"),
    body = n$("body"),
    click = "click",
    close = n$('.close'),
    closer = n$('.layer'),
    caption = n$("#art_g-caption");


///////////////_____ add class img-togo to our custom atrribute ___ and open a layer for it ________
let data_toggle_img = n$A('[data-toggle="img"]');
for (let i = 0; i < data_toggle_img.length; i++) {
    const element = data_toggle_img[i];
    data_toggle_img[i].addEventListener("click", function() {
        data_toggle_img[i].classList.add("img-togo");
        img_modal.style.display = "block";
        body.style.overflow = "hidden";
        closer.style.display = "block";
        caption.innerText = data_toggle_img[i].alt;
    });

}
//////////////  For Boxes ///////////////////////////
let data_toggle_box = n$A('[data-toggle="box"]');

for (let i = 0; i < data_toggle_box.length; i++) {

    data_toggle_box[i].addEventListener("click", function() {
        data_toggle_box[i].classList.add("box_togo");
        data_toggle_box[i].classList.remove("flex");
        img_modal.style.display = "block";
        closer.style.display = "block";
        body.style.overflow = "hidden";
    });
}
//////___ close layer and add class img-nomo to our custom atrribute ___ to return in normal mode ________
closer.addEventListener('click', () => {
    n$(".close").click();
});
////////////////////// Close for all modals /////////////////////
close.addEventListener('click', () => {
    let togos = n$A('[data-toggle="img"]');
    for (let i = 0; i < togos.length; i++) {
        const togo = togos[i];
        togo.classList.remove("img-togo");
        togo.classList.add("img-nomo");
    }
    /////////////////for box///////////////
    let togoBoxes = n$A('[data-toggle="box"]');
    for (let i = 0; i < togoBoxes.length; i++) {
        const togoBox = togoBoxes[i];
        togoBox.classList.remove("box_togo");
        togoBox.classList.add("flex");

    }
    ///////////////Close Layers//////////////////////////// 
    img_modal.style.display = "none";
    closer.style.display = "none";
    body.style.overflowY = "auto";

});