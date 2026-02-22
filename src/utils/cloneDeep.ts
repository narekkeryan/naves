import { ReferenceType } from '../types';
import { isPrimitive } from './isPrimitive';

/**
 * Creates Deep Clone Of Entity
 * @param {*} entity: Entity To Clone
 * @param {*} cache: Cache To Save Clone Details
 * @returns {*}: Deep Clone
 */
export function cloneDeep(entity: unknown, cache = new WeakMap()): unknown {
  // const referenceTypes = ['Array', 'Object', 'Map', 'Set', 'WeakMap', 'WeakSet'];
  // const entityType = Object.prototype.toString.call(entity);
  if (isPrimitive(entity)) return entity;

  const entityObject = entity as ReferenceType;

  if (cache.has(entityObject)) {
    return cache.get(entityObject);
  }

  const c = new entityObject.constructor;

  if (entity instanceof Map || entity instanceof WeakMap) {
    entity.forEach((value, key) => c.set(cloneDeep(key), cloneDeep(value)));
  }
  if (entity instanceof Set || entity instanceof WeakSet) {
    entity.forEach((value) => c.add(cloneDeep(value)));
  }
  cache.set(entity, c);
  return Object.assign(c, ...Object.keys(entity).map((prop) => ({ [prop]: cloneDeep(entity[prop], cache) })));
}
