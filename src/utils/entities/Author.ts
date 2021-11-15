export default class Author {
  name: string;
  email: string;

  constructor (node?: Element) {
    if (node) {
      this.parse(node);
    }
  }

  parse (node: Element) {
    const children = Array.from(node.children);
    children.forEach((child) => {
      this[child.tagName] = child.textContent;
    });
  }

  toString () {
    return `<author>${Object.entries(this)
  .reduce((t, [ key, value ]) => {
    return `${t}${ value !== undefined ? (`
    <${key}>${value}</${key}>`) : ''}`
  }, '')}
  </author>`;
  }
}