/*
//   Thanks for choosing this program
//   Athor: Nehemie Zikama
//   Uganda for Life
 */
let cachesNM="nemie_m-v3",
    contentsURL=[
	              "./",
	              "./manifest.json",
	              "./index.html",
				  "./css/main.css",
				  "./js/main.js", 		   		  
				  "./js/idb.js", 		   		  
				  "./js/IndexController.js", 		   		  
				  "./js/alljquery-3.js", 		   		  
				  "./pages/index.html", 		   		  
				  "./img/1.png",		  
				  "./img/2.png",		  
				  "./img/3.png",		  
				  "./img/4.jpg",
				  "./img/5.jpg",		  
				  "./img/6.png",
				  "./img/7.png",
				  "./img/demo.png",
				  "./img/loading.gif",		  
				  "./img/logo.png",
				  "./img/menu.png"
	];

self.addEventListener("install",(event)=>{
	event.waitUntil(
	  caches.open(cachesNM).then((cache)=>{
		  cache.addAll(contentsURL);
	  console.log(`[sw is caching]`,cache);
	  }
	).catch(err=>{
		console.log(`ERROR:`,err);
	})
	);
	console.log("servise Worker Intalled");
});
self.addEventListener('activate',event=>{
	event.waitUntil(
	 caches.keys().then(namesChs=>{
		 return Promise.all(
		 namesChs.filter((cacheN)=>{
			 return cacheN.startsWith('nemie_m-') && !cachesNM.includes(cacheN);
		 }).map(cacheN=>{
			 return caches.delete(cacheN);
		 }));
	 })
	);
	console.log("servise Worker Activated");
});

self.addEventListener('fetch', (event) =>{
    const requestURL = new URL(event.request.url);

    if(requestURL.origin === location.origin){
        if(requestURL.pathname === '/'){
            event.respondWith(caches.match('/'));
            return;
        }
    }


    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('message', (event) => {
    if (event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});
