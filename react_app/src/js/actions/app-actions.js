/** @jsx React.DOM */
var AppConstants = require('../constants/app-constants.js');
var AppDispatcher = require('../dispatchers/app-dispatcher.js');

var AppActions = {

  addItem:function(PosObj){
    AppDispatcher.handleViewAction({
      'actionType': AppConstants.ADD_ITEM,
      'PosObj': PosObj
    })
  }
};

console.log('startujemy',window);


window.addItemTest = function (PosObj) {
    console.log('actionsAddItem');
    //alert(JSON.stringify(PosObj));
    AppActions.addItem(PosObj);
};

module.exports = AppActions;