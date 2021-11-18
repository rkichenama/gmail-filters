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

const randomID = () => `GMF_${
  Math.floor(Math.random() * Date.now()).toString(36)
}`

export default class MailFilter {
  title: string = 'Mail Filter';
  id: string;
  shouldArchive: boolean;
  shouldMarkAsRead: boolean;
  shouldTrash: boolean;
  shouldNeverSpam: boolean;
  shouldAlwaysMarkAsImportant: boolean;
  shouldNeverMarkAsImportant: boolean;
  shouldStar: boolean;
  label: string;
  smartLabelToApply: string;
  from: string;
  to: string;
  forwardTo: string;
  subject: string;
  doesNotHaveTheWord: string;
  hasTheWord: string;

  constructor (node?: Element) {
    this.id = randomID();
    if (node) {
      this.parse(node);
    }
  }

  get updated () { return asDateString(); }

  parse (node: Element) {
    this.id = node.querySelector('id').textContent;
    const properties = Array.from(node.children)
      .filter(({ tagName }) => /^apps:property/i.test(tagName));
    properties.forEach(({ attributes }) => {
      const key = attributes.item(0).value;
      const value = attributes.item(1).value;
      this[key] = /^should/.test(key)
        ? /true/.test(value)
        : value;
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
    return `<entry>
    <category term='filter'></category>
    <title>${this.title}</title>
    <id>${this.id}</id>
    <updated></updated>
    <content></content>${Object.entries(this)
      .reduce((t, [ key, value ]) => {
      return `${t}${ value !== undefined ? (`
    <apps:property name='${key}' value='${value}' />`) : ''}`
      }, '')}
  </entry>`;
  }
};
