import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  private readonly localStore = localStorage;
  private memoryStore = {};
  private store;
  constructor() { }

  getSessionItem(key) {
    return sessionStorage.getItem(key);
  }

  setSessionItem(key, value): void {
    sessionStorage.setItem(key, value);
  }

  getItem(parentName, key, persist?) {
    this.setStorage(persist);
    return this.store[`${parentName}_${key}`];
  }
  getItemByKey(key, persist?) {
    this.setStorage(persist);
    return this.store[key];
  }

  setItem(parentName, key, value, persist?): void {
    this.setStorage(persist);
    this.store[`${parentName}_${key}`] = value;
  }
  setItemByKey(key, value, persist?): void {
    this.setStorage(persist);
    this.store[key] = value;
  }

  clearItems(persist?): void {
    if (persist) {
      this.localStore.clear();
    } else {
      this.memoryStore = {};
    }
  }

  clearAllItems(): void {
    this.localStore.clear();
    this.memoryStore = {};
  }

  clearItem(parentName, key, persist?): void {
    this.setStorage(persist);
    delete this.store[`${parentName}_${key}`];
  }
  clearItemByKey(key): void {
    this.localStore.removeItem(key);
    this.memoryStore = {};
    delete this.store[key];
  }

  private setStorage(persist) {
    if (persist) {
      this.store = this.localStore;
    } else {
      this.store = this.memoryStore;
    }
  }

}
