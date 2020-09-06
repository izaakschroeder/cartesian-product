declare function product<T>(elements: T[][]): T[][];
declare function product<T>(elements: {
  [name: string]: T[];
}): { [name: string]: T }[];
declare function product<T>(
  elements: T[][] | { [name: string]: T[] }
): T[][] | Array<{ [name: string]: T }>;

export = product;
