module.exports = ngModule => {
  require('./product-table.component.css');

  ngModule.component('productTable', {
    template: require('./product-table.component.html'),
    controller: productTableCtrl,
    bindings: {
      // Inputs should use < and @ bindings.
      // Outputs should use & bindings.
    }
  });

  function productTableCtrl() {
    const ctrl = this;

    ctrl.$onInit = $onInit;

    function $onInit() {
      // Called on each controller after all the controllers have been constructed and had their bindings initialized
      // Use this for initialization code.
    }
  }

  // inject dependencies here
  productTableCtrl.$inject = [];

  if (ON_TEST) {
    require('./product-table.component.spec.js')(ngModule);
  }
};