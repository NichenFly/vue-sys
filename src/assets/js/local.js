const storage = localStorage
export default {
  getItem: (key) => JSON.parse(storage.getItem(key)),

  setItem: (key, val) => storage.setItem(key, JSON.stringify(val)),

  removeItem: (key) => storage.removeItem(key),

  clear: () => storage.clear(),

  keys: () => storage.keys()
}
