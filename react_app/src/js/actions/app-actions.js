/** @jsx React.DOM */
var AppConstants = require('../constants/app-constants.js');
var AppDispatcher = require('../dispatchers/app-dispatcher.js');

var AppActions = {

  addItem:function(){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ADD_ITEM
    })
  }
};

console.log('startujemy',window);


window.addItemTest = function () {
    console.log('actionsAddItem');
    AppActions.addItem();
};

module.exports = AppActions;