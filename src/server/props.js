import { expBackoff } from './utils';

export function getPropertyStore() {
  if (!this.store) {
    this.store = expBackoff(() => PropertiesService.getUserProperties());
  }
  return this.store;
}

export function getProperty(propertyName) {
  return getPropertyStore().getProperty(propertyName) || '';
}

export function setProperty(name, value) {
  getPropertyStore().setProperty(name, value);
}

export function deleteProperty(propertyName) {
  getPropertyStore().deleteProperty(propertyName);
}
