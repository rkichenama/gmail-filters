import groupBy, { Grouping } from './group';

describe('groupBy', () => {
  class Person {
    name: string = '';
    age: number = 0;
    colors: string[] = [ 'blue' ];

    constructor (options: Partial<Person>) {
      Object.keys(options).forEach(k => {
        this[k] = options[k];
      })
    }
  }
  const data = [
    new Person({ name: 'Joe', age: 27 }),
    new Person({ name: 'Joey', age: 23, colors: [ 'blue', 'red' ] }),
    new Person({ name: 'Joesph', age: 27 }),
    new Person({ name: 'Joesiah', age: 23, colors: [ 'blue', 'red', 'indigo' ] }),
  ];

  it('returns a map', () => {
    expect(groupBy([], [])).toBeInstanceOf(Map);
  });

  it('groups on a single level', () => {
    const result = groupBy(data, [ 'name' ]);
    const names = Array.from(new Set(data.map(({ name }) => name)));
    expect(Array.from(result.keys())).toEqual(
      names
    );
    data.forEach(item => {
      expect(result.get(item.name)).toEqual([ item ]);
    });
  });

  it('groups on a single level by function', () => {
    const result = groupBy(data, [ ({ age }) => ([ 2, age % 10 ]) ]);
    const ages = Array.from(new Set(data.map(({ age }) => age % 10)));
    ages.unshift(2);
    expect(Array.from(result.keys())).toEqual(
      ages
    );
    expect(result.get(2)).toEqual(data);
    expect(result.get(3)).toEqual([ data[1], data[3] ]);
    expect(result.get(7)).toEqual([ data[0], data[2] ]);
  });

  it('groups on a multiple levels', () => {
    const result = groupBy(data, [ 'age', 'colors' ]);
    expect((result.get(27) as Grouping<Person>).get('blue')).toEqual([
      data[0], data[2]
    ]);
    expect((result.get(23) as Grouping<Person>).get('red')).toEqual([
      data[1], data[3]
    ]);
    expect((result.get(23) as Grouping<Person>).get('blue')).toEqual([
      data[1], data[3]
    ]);
    expect((result.get(23) as Grouping<Person>).get('indigo')).toEqual([
      data[3]
    ]);
  });
});