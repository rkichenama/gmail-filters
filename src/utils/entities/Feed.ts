import Author from './Author';
import MailFilter from './Filter';

export default class Feed {
  title: string = 'Mail Filters';
  author: Author;
  filters: Record<string, MailFilter>;

  constructor (doc?: Document) {
    if (doc) {
      this.parse(doc);
    }
  }

  parse (doc: Document) {
    this.author = new Author(doc.querySelector('author'));
    const filters = Array.from(doc.querySelectorAll('entry'))
      .map(entry => new MailFilter(entry));
    this.filters = filters.reduce((t, filter) => ({
      ...t,
      [filter.id]: filter
    }), {} as Record<string, MailFilter>);
  }

  static basedOn (obj) {
    const feed = new this();
    Object.entries(obj)
      .forEach(([ key, value ]) => {
        if (/author/.test(key)) {
          feed.author = Author.basedOn(value);
        } else if (/filters/.test(key)) {
          feed.filters = Object.entries(value as Record<string, any[]>)
            .reduce((t, [ key, properties ]) => ({
              ...t,
              [key]: MailFilter.basedOn(properties)
            }), {} as Record<string, MailFilter>);
        } else {
          feed[key] = value;
        }
      });
    return feed;
  }

  toString () {
    return `<?xml version='1.0' encoding='UTF-8'?>
<feed xmlns='http://www.w3.org/2005/Atom' xmlns:apps='http://schemas.google.com/apps/2006'>
  <title>${this.title}</title>
  <id></id>
  <updated></updated>
  ${this.author.toString()}
  ${Object.values(this.filters).map(filter => filter.toString()).join(`
  `)}
</feed>`;
  }
}