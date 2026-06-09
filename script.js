document.addEventListener('DOMContentLoaded', function(){
	// Reveal on scroll using IntersectionObserver
	const revealObserver = new IntersectionObserver((entries, obs) => {
		entries.forEach(entry => {
			if(entry.isIntersecting){
				entry.target.classList.add('active');
				obs.unobserve(entry.target);
			}
		});
	}, {threshold: 0.12});

	document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

	// Smooth scroll for internal links
	document.querySelectorAll('a[href^="#"]').forEach(a => {
		a.addEventListener('click', (e) => {
			const href = a.getAttribute('href');
			if(href && href.length > 1){
				const target = document.querySelector(href);
				if(target){
					e.preventDefault();
					target.scrollIntoView({behavior:'smooth', block:'start'});
				}
			}
		});
	});

	// Simple typing effect for an element with id "hero-typing"
	const typeEl = document.getElementById('hero-typing');
	if(typeEl){
		const text = typeEl.dataset.text || typeEl.textContent.trim();
		typeEl.textContent = '';
		let i = 0;
		const speed = parseInt(typeEl.dataset.speed || '45', 10);
		function type(){
			if(i < text.length){
				typeEl.textContent += text.charAt(i++);
				setTimeout(type, speed);
			}
		}
		setTimeout(type, 450);
	}
});

