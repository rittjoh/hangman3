Players = Meteor.subscribe('Players');



/*****************************************************************************/
/* Players: Event Handlers and Helpers */
/*****************************************************************************/
Template.Players.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Players.helpers({
  Players: function () {
    return Players.find();
  }
});

/*****************************************************************************/
/* Players: Lifecycle Hooks */
/*****************************************************************************/
Template.Players.created = function () {
};

Template.Players.rendered = function () {
};

Template.Players.destroyed = function () {
};
