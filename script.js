const loginButton = document.querySelector('button[type="submit"]')
loginButton.addEventListener('click', () => {
	loginButton.textContent = 'Logging in...'
	setTimeout(() => {
		loginButton.textContent = 'Log in'
	}, 3000)
})

document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector('form')
	const h2 = document.querySelector('h2')
	const glassContainer = document.querySelector('.glass-container')
	glassContainer.style.opacity = 0
	glassContainer.style.transform = 'translateY(-200px)'
	h2.style.opacity = 0
	h2.style.transform = 'translateY(-200px)'
	form.style.opacity = 0
	form.style.transform = 'translateY(-200px)'
	setTimeout(() => {
		form.style.transition = 'opacity 4s ease, transform 2s ease'
		form.style.opacity = 1
		form.style.transform = 'translateY(0px)'
		h2.style.transition = 'opacity 4s ease, transform 2s ease'
		h2.style.opacity = 1
		h2.style.transform = 'translateY(0px)'
		glassContainer.style.transition = 'opacity 4s ease, transform 2s ease'
		glassContainer.style.opacity = 1
		glassContainer.style.transform = 'translateY(0px)'
	}, 600)
})
