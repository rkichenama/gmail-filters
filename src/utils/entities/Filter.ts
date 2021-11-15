//`YYYY-MM-DDTHH:mm:ssZ`
const asDateString = (d: Date = new Date()) => {
  const Y = d.getUTCFullYear();
  const M = (d.getUTCMonth() + 1).toString().padStart(2, '0');
  const D = d.getUTCDate().toString().padStart(2, '0');
  const h = d.getUTCHours().toString().padStart(2, '0');
  const m = d.getUTCMinutes().toString().padStart(2, '0');
  const s = d.getUTCSeconds().toString().padStart(2, '0');
  return `${Y}-${M}-${D}T${h}:${m}:${s}Z`
};

export default class MailFilter {
  #title: string = 'Mail Filter';
  #id: string;
  shouldArchive: boolean;
  shouldMarkAsRead: boolean;
  shouldTrash: boolean;
  shouldNeverSpam: boolean;
  shouldAlwaysMarkAsImportant: boolean;
  shouldNeverMarkAsImportant: boolean;
  label: string; //
  from: string;
  to: string;
  subject: string;
  doesNotHaveTheWord: string;
  hasTheWord: string;

  constructor (node?: Element) {
    if (node) {
      this.parse(node);
    }
  }

  get updated () { return asDateString(); }
  get id () { return this.#id; }

  parse (node: Element) {
    this.#id = node.querySelector('id').textContent;
    const properties = Array.from(node.children)
      .filter(({ tagName }) => /^apps:property/i.test(tagName));
    properties.forEach(({ attributes }) => {
      const key = attributes.item(0).value;
      const value = attributes.item(1).value;
      this[key] = value;
    });
  }

  toString () {
    return `<entry>
    <category term='filter'></category>
    <title>${this.#title}</title>
    <id>${this.#id}</id>
    <updated></updated>
    <content></content>${Object.entries(this)
      .reduce((t, [ key, value ]) => {
      return `${t}${ value !== undefined ? (`
    <apps:property name='${key}' value='${value}' />`) : ''}`
      }, '')}
  </entry>`;
  }
};
