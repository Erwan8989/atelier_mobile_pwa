self.addEventListener('install', (e) => {
	const cacheName = "js13kPWA-v1";
	const appShellFiles = [
		'/atelier_mobile_pwa/index.html',
		'/atelier_mobile_pwa/index.js',
		'/atelier_mobile_pwa/style.css',
		'/atelier_mobile_pwa/images/sun.png',
		'/atelier_mobile_pwa/images/wind.png',
		'/atelier_mobile_pwa/images/cloudy-background.jpg',
		'/atelier_mobile_pwa/images/cloud.png',
		'/atelier_mobile_pwa/icon/sun_icon.png',
	];
});

self.addEventListener('fetch', (e) => {
	console.log(e.request.url);
	e.respondWith(
		caches.match(e.request).then((response) => response || fetch(e.request)),
	);
});