const menuButton = document.querySelector('.menu-toggle');
const siteNavigation = document.querySelector('#site-navigation');
const yearElement = document.querySelector('#current-year');

if (menuButton && siteNavigation) {
	menuButton.addEventListener('click', () => {
		const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
		menuButton.setAttribute('aria-expanded', String(!isExpanded));
		menuButton.setAttribute('aria-label', isExpanded ? 'Ouvrir le menu' : 'Fermer le menu');
		siteNavigation.classList.toggle('is-open', !isExpanded);
	});

	siteNavigation.querySelectorAll('a').forEach((link) => {
		link.addEventListener('click', () => {
			menuButton.setAttribute('aria-expanded', 'false');
			menuButton.setAttribute('aria-label', 'Ouvrir le menu');
			siteNavigation.classList.remove('is-open');
		});
	});
}

if (yearElement) {
	yearElement.textContent = new Date().getFullYear();
}

