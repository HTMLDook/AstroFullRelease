var nav = document.querySelector('nav');
var navPosition = nav.getBoundingClientRect().top + window.scrollY;

function stickyNav() {
	if (window.scrollY > navPosition) {
		nav.classList.add('sticky');
		document.body.style.paddingTop = nav.offsetHeight + 'px';
	} else {
		nav.classList.remove('sticky');
		document.body.style.paddingTop = 0;
	}
}

window.addEventListener('scroll', function() {
	requestAnimationFrame(stickyNav);
});

const icons = document.querySelectorAll('.icon');

icons.forEach(icon => {
	icon.addEventListener('click', () => {
		const url = icon.getAttribute('href');
		window.open(url, '_blank');
	});
});

function toggleDropdown(id) {
	var dropdown = document.getElementById(id + "-dropdown");
	dropdown.classList.toggle("show");
}

function filterDropdown(id) {
	var input, filter, ul, li, a, i;
	input = document.getElementById(id + "-input");
	filter = input.value.toUpperCase();
	div = document.getElementById(id + "-dropdown");
	a = div.getElementsByTagName("a");
	for (i = 0; i < a.length; i++) {
		txtValue = a[i].textContent || a[i].innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			a[i].style.display = "";
		} else {
			a[i].style.display = "none";
		}
	}
}

window.onclick = function(event) {
	var dropdowns = document.getElementsByClassName("dropdown-content");
	for (var i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		if (openDropdown.classList.contains('show')) {
			if (event.target.matches('.dropbtn')) {
				return;
			}
			if (event.target.matches('[id^="myInput"]')) {
				return;
			}
			if (openDropdown.contains(event.target)) {
				return;
			}
			openDropdown.classList.remove('show');
		}
	}
}
