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

  static basedOn (obj) {
    const filter = new this();
    Object.entries(obj)
      .forEach(([ key, value ]) => {
        filter[key] = value;
      });
    return filter;
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