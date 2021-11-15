export type Grouping<T extends any> = Map<any, T[]> | Map<any, Grouping<T>>;

type ValueFunc<T extends any> = (item: T, index?: number) => any;

const recurGroup = <T extends any>(collection: T[], by: (keyof T | ValueFunc<T>)[]) => {
  const group: Grouping<T> = new Map<any, T[]>();
  const method = by.shift();
  collection.forEach((item, idx) => {
    const value = typeof method === 'function'
      ? method(item, idx)
      : item[method];
    // allow that there may be multiple values
    const valList = new Set();
    const values = (Array.isArray(value)
      ? value
      : [ value ]);
    values.forEach(n => {
      valList.add(n);
    });
    valList.forEach(val => {
      let current = [] as T[];
      if (group.has(val)) {
        current = group.get(val);
      }
      current.push(item);
      group.set(val, current);
    });
  });

  if (!by.length) { return group; }

  const newGroup: Grouping<T> = new Map<any, Grouping<T>>();
  for (let [ key, value ] of group) {
    newGroup.set(key, recurGroup<T>(value, [ ...by ]));
  }

  return newGroup;
};

export default <T extends any>(collection: T[], values: (keyof T | ValueFunc<T>)[]) => {
  return recurGroup<T>(collection, values);
};

/* istanbul ignore next */
export function stringifyer(key, value) {
  if(value instanceof Map) {
    return {
      dataType: 'Map',
      value: Array.from(value.entries()),
    };
  } else if(value instanceof Set) {
    return {
      dataType: 'Set',
      value: Array.from(value),
    };
  } else {
    return value;
  }
}
/* istanbul ignore next */
export function parser(key, value) {
  if(typeof value === 'object' && value !== null) {
    if (value.dataType === 'Map') {
      return new Map(value.value);
    }
    if (value.dataType === 'Set') {
      return new Set(value.value);
    }
  }
  return value;
}
