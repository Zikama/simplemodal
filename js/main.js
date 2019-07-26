let img = n$(".img"),
    // body = n$("body"),
    main = n$(".main"),
    title = n$("head>title"),
    // click = "click",
    next = n$('.Next'),
    prev = n$('.Prev'),
    add = n$('.add'),
    container = n$('.container'),
    clas = n$('.clas');

let data_to_grow = n$('[data-to="grow"]');
data_to_grow.addEventListener("focus", function() {
    if (window.innerWidth >= 100) {
        data_to_grow.style.minWidth = '50%';
        data_to_grow.classList.add("border");
        data_to_grow.setAttribute("placeholder", "Thanks for clicking!");
    }
});

data_to_grow.addEventListener("blur", function() {
    data_to_grow.setAttribute("placeholder", "Click me again!");
    if (window.innerWidth >= 100) {
        data_to_grow.classList.remove("border");
        data_to_grow.style.minWidth = '30%';
    }
});

//next
next.addEventListener(click, function() {
    n$.ajax({
        type: "GET",
        url: "./pages/index.html",
        beforeSend: () => { n$("#body-overlay").show(); },
        contentType: false,
        processData: false,
        success: (data) => {
            img.innerHTML = data;
            // not availabe ---> add.innerHTML = data;
            title.innerHTML = "HHH | kampala";
            setInterval(() => { n$("#body-overlay").hide(); }, 200);
        },
        error: (err) => {
            console.log(`Failed to load `, err);
        }
    });
});
//prev
prev.addEventListener(click, function() {
    n$.ajax({
        type: "GET",
        url: " ",
        beforeSend: () => { n$("#body-overlay").show(); },
        contentType: false,
        processData: false,
        success: (data) => {
            location.reload();
            setInterval(() => { n$("#body-overlay").hide(); }, 200);
        },
        error: (err) => {
            console.log(`Failed to load `, err);
        }
    });
});

//fullscreen button clicked
n$('.fullscreen').addEventListener('click', function() {
    if (typeof img.webkitEnterFullscreen == "function") {
        img.webkitEnterFullscreen();
    } else if (typeof img.mozRequestFullScreen == "function") {
        img.mozRequestFullScreen();
    } else {
        alert('Your browsers doesn\'t support fullscreen');
    }
}); //1e3