import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
    this.unsubscribers = [];

    this.prepare();
  }

  // configure the component before 'init'
  prepare() {

  }

  // return template of component
  toHTML() {
    return '';
  }

  // Notifying listeners about an event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }

  // Subscribe on event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn);
    this.unsubscribers.push(unsub);
  }

  // component initialization
  // add DOM listeners
  init() {
    this.initDOMListeners();
  }

  // delete the component
  // clear listeners
  destroy() {
    console.log(`destroy ${this.name} Component`);
    this.removeDOMListeners();
    this.unsubscribers.forEach((unsub) => unsub());
  }
}
