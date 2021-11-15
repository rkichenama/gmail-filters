import Feed from '../../utils/entities/Feed';
const parser = new DOMParser();

export default {
  fromString (_: Feed, { xml }: { xml: string }) {
    var doc = parser.parseFromString(xml, 'application/xml');
    return new Feed(doc);
  }
};

