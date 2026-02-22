import { isNull } from './isNull';

/**
 * Checks If Entity Is Primitive
 * @param {*} entity: Entity To Check
 * @returns {boolean}: Is Primitive Or No
 */
export function isPrimitive(entity: unknown): boolean {
  const primitiveTypes = ['number', 'bigint', 'string', 'boolean', 'null', 'undefined', 'symbol'];

  return primitiveTypes.includes(typeof entity) || isNull(entity);
}
