// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const dateCast = document.getElementById('date');
currentyear = new Date().getFullYear();
dateCast.innerHTML = currentyear;
// ********** close links ************
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
const btn = document.querySelector('.nav-toggle');

btn.addEventListener('click', () => {
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (linksContainerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});
// ********** fixed navbar ************
const navs = document.getElementById('nav');
const navsHeight = navs.getBoundingClientRect().height;
const topLink = document.querySelector('.top-link');
window.addEventListener('scroll', e => {
  const scrollPosition = window.pageYOffset;
  if (scrollPosition > navsHeight) {
    navs.classList.add('fixed-nav');
  } else {
    navs.classList.remove('fixed-nav');
  }
  if (scrollPosition > 500) {
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
    const selectItem = item.currentTarget.getAttribute('href').slice(1);
    const selectItemId = document.getElementById(selectItem);

    const navsHeight = navs.getBoundingClientRect().height;
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;

    let position = selectItemId.offsetTop - navsHeight;
    if (!navs.classList.contains('fixed-nav')) {
      position = position - navsHeight;
      console.log('work');
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
