/* eslint-disable @typescript-eslint/no-unused-vars */
// Task 02: Mini functional–utility library
// All helpers are declared but not implemented.

export function mapArray<T, R>(source: readonly T[], mapper: (item: T, index: number) => R): R[] {
  if (source === null || source === undefined) {
    throw new TypeError('source is null or underfined');
  }
  
  let copy: R[] = [];
  for (const [index, value] of source.entries()) {
    copy.push(mapper(value, index));
  }
  return copy;
}

export function filterArray<T>(source: readonly T[], predicate: (item: T, index: number) => boolean): T[] {
  if (source === null || source === undefined) {
    throw new TypeError('source is null or underfined');
  }
  
  let copy: T[] = [];
  for (const [index, value] of source.entries()) {
    if (predicate(value, index)) {
      copy.push(value);
    }
  }
  return copy;
}

export function reduceArray<T, R>(source: readonly T[], reducer: (acc: R, item: T, index: number) => R, initial: R): R {
  if (source === null || source === undefined) {
    throw new TypeError('source is null or underfined');
  }

  let result: R = initial;
  for (const [index, value] of source.entries()) {
    result = reducer(result, value, index);
  }
  return result;
}

export function partition<T>(source: readonly T[], predicate: (item: T) => boolean): [T[], T[]] {
  if (source === null || source === undefined) {
    throw new TypeError('source is null or underfined');
  }

  let one: T[] = [];
  let two: T[] = [];
  for (const item of source) {
    if (predicate(item)) {
      one.push(item);
    } else {
      two.push(item);
    }
  }
  return [one, two];
}

export function groupBy<T, K extends PropertyKey>(source: readonly T[], keySelector: (item: T) => K): Record<K, T[]> {
  if (source === null || source === undefined) {
    throw new TypeError('source is null or underfined');
  }

  let obj: Record<K, T[]> = {} as Record<K, T[]>;
  for (const item of source) {
    const key = keySelector(item);
    if (key in obj) {
      obj[key].push(item);
    } else {
      obj[key] = [item];
    }
  }
  return obj;
}
