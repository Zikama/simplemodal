   let data         =   document.querySelector("[data-toggle='img']"),
       img_modal    =   document.querySelector("#image_modal"),
       img    =     document.querySelector(".img"),
       body         =   document.querySelector("body"),
       click        =   "click",
       closer       =   document.querySelector('.layer'),
       next         =    document.querySelector('.Next'),
       prev         =    document.querySelector('.Prev');



 /* data.addEventListener("click",function(){     
       data.classList.add("img-togo");
       closer.style.display = "block";
     });**/
function showImage(elements) {     
     document.getElementById("img01").src = elements.src;
     img_modal.style.display = "block";
     closer.style.display='block';
	   body.style.overflow="hidden";
  const captionText = document.getElementById("caption");
  captionText.innerHTML = elements.alt;
}
  closer.addEventListener(click,function(){
     img_modal.style.display='none';
       closer.style.display="none";
       body.style.overflowY="scroll";
  });
