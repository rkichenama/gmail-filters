import Feed from '../../utils/entities/Feed';
const parser = new DOMParser();

export default {
  fromString (_, { xml }) {
    var doc = parser.parseFromString(xml as string, 'application/xml');
    return new Feed(doc);
  }
} as Record<string, (state: Feed, action: any) => Feed>;

