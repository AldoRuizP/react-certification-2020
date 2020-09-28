function decodeHTMLEntities(src) {
  const element = document.createElement('div');
  const entity = /&(?:#x[a-f0-9]+|#[0-9]+|[a-z0-9]+);?/gi;
  let str = src;
  str = str.replace(entity, (m) => {
    element.innerHTML = m;
    return element.textContent;
  });
  element.textContent = '';
  return str;
}

export default decodeHTMLEntities;
