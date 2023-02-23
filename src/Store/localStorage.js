/* //import { setOrder } from '../services/functions';

let localStorageMock = (function() {
  let store = {};

  return {
    getItem: function(key) {
      return store[key] || null;
    },
    setItem: function(key, value) {
      store[key] = value.toString();
    },
    removeItem: function(key) {
      delete store[key];
    },
    clear: function() {
      store = {};
    }
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

describe('setOrder', () => {
  beforeEach(() => {
    localStorage.clear(); // Reset localStorage before each test
  });

  it('should store the order in localStorage', () => {
    const order = { id: 1, name: 'book', price: 10 };
    setOrder(order);
    expect(localStorage.getItem('order')).toBe(JSON.stringify(order));
  });
});
 */