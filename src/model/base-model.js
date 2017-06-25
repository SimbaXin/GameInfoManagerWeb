class BasaeModel {
  constructor(instance) {
    super(instance);
    
    if (!this.constructor._dbProxy) throw 'Please call initiale';

    if (!this.constructor._name) throw 'Please set table name';

    if (!this.constructor._schema) throw 'There is no schema';

    if (!this.constructor._model) {
      this.constructor._model = _dbProxy.define (this.constructor._name, this.constructor._schema);
    }

    let obj = this.constructor._model.build(instance);
    console.log(obj);
  }

  static initiale(dbProxy) {
    this._dbProxy = dbProxy;
  }

  // static 
}
