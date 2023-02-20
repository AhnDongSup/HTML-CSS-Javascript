// do something!
export function StarRating($container) {
  const max = $container.dataset.maxRating;
  const element = document.createElement('div');
  element.classList.add('star-rating-container');
  for (let i = 0; i < max; i++) {
    const childElement = document.createElement('i');
    childElement.classList.add('bx', 'bxs-star');
    const attr = document.createAttribute('data-id');
    attr.value = i + 1;
    childElement.setAttributeNode(attr);
    element.appendChild(childElement);
  }
  $container.appendChild(element);
}
