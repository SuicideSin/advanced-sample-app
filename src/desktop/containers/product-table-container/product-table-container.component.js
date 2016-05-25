module.exports = ngModule => {
  require('./product-table-container.component.css');

  ngModule.component('productTableContainer', {
    template: require('./product-table-container.component.html'),
    controller: productTableContainerCtrl,
    bindings: {
      // Inputs should use < and @ bindings.
      // Outputs should use & bindings.
    }
  });

  function productTableContainerCtrl() {
    const ctrl = this;

    ctrl.$onInit = $onInit;

    function $onInit() {
      // Called on each controller after all the controllers have been constructed and had their bindings initialized
      // Use this for initialization code.
    }
  }

  // inject dependencies here
  productTableContainerCtrl.$inject = [];

  if (ON_TEST) {
    require('./product-table-container.component.spec.js')(ngModule);
  }
};