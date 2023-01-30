// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const ddate = document.getElementById('date');
ddate.innerHTML = new Date().getFullYear();
// ********** close links ************
const btn = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container ');
const links = document.querySelector('.links');
btn.addEventListener('click', () => {
  let linksContainerHeight = linksContainer.getBoundingClientRect().height;
  let linksHeight = links.getBoundingClientRect().height;
  if (linksContainerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = '0px';
  }
});
// ********** fixed navbar ************
const navs = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  const navsHeight = navs.getBoundingClientRect().height;

  if (currentScroll > navsHeight) {
    navs.classList.add('fixed-nav');
  } else {
    navs.classList.remove('fixed-nav');
  }
  if (currentScroll > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(e => {
  e.addEventListener('click', item => {
    item.preventDefault();
    const id = item.currentTarget.getAttribute('href').slice(1);
    const idHeight = document.getElementById(id);

    const navsHeight = navs.getBoundingClientRect().height;
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;

    const whether = navs.classList.contains('fixed-nav');

    let position = idHeight.offsetTop - navsHeight;
    if (!whether) {
      position = position - navsHeight;
    }
    if (navsHeight > 82) {
      position = position + linksContainerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});
