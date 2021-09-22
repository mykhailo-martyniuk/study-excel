export class Emitter {
  constructor() {
    this.listeners = {};
  }

  // notify listeners if any
  // table.emit('table:select', {a: 1})
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false;
    }
    this.listeners[event].forEach(((listener) => {
      listener(...args);
    }));
    return true;
  }

  // add new subscriber
  // formula.subscribe('table:select', () => {})
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push(fn);
    return () => {
      this.listeners[event] =
        this.listeners[event].filter((listener) => listener !== fn);
    };
  }
}
