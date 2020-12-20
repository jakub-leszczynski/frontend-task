import mapKeysDeep from 'map-keys-deep-lodash';
import camelCase from 'lodash/camelCase';
import snakeCase from 'lodash/snakeCase';

export const keysSnakeToCamelCase = (obj: object): object => (
  mapKeysDeep(obj, (value: string, key: string) => camelCase(key))
);

export const keysCamelToSnakeCase = (obj: object): object => (
  mapKeysDeep(obj, (value: string, key: string) => snakeCase(key))
);
