gallows = [];
gallows[0] = ' \n     _______\n     |/        |\n     |      \n     |      \n     |       \n     |      \n     |\n________\n\n';
gallows[1] = ' \n     _______\n     |/        |\n     |        (_)\n     |      \n     |       \n     |      \n     |\n________\n\n';
gallows[2] = ' \n     _______\n     |/        |\n     |        (_)\n     |         |\n     |       \n     |      \n     |\n________\n\n';
gallows[3] = ' \n     _______\n     |/        |\n     |        (_)\n     |         |\n     |         |\n     |      \n     |\n________\n\n';
gallows[4] = ' \n     _______\n     |/        |\n     |        (_)\n     |        \\|\n     |         |\n     |      \n     |\n________\n\n';
gallows[5] = ' \n     _______\n     |/        |\n     |        (_)\n     |        \\|/\n     |         |\n     |      \n     |\n________\n\n'; 
gallows[6] = ' \n     _______\n     |/        |\n     |        (_)\n     |        \\|/\n     |         |\n     |        /\n     |\n________\n\n';               
gallows[7] = ' \n     _______\n     |/        |\n     |        (_)\n     |        \\|/\n     |         |\n     |         /\\\n     |\n________\n\n';


/*****************************************************************************/
/* Gallows: Event Handlers and Helpers */
/*****************************************************************************/
Template.Gallows.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Gallows.helpers({
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
   gallows: function () {
    /*
      Meteor.call('currentPuzzle', function(err, result) {
        if(err){
          console.log(err);
        }else{
          Session.set('pzl', result);
        }
      });
     console.log(Session.get('pzl').puzzle.wrong)
      //return gallows[Session.get('pzl').puzzle.wrong];
    
      return gallows[Session.get('pzl').puzzle.wrong];
    */
    return Puzzle.find();
   }
});

/*****************************************************************************/
/* Gallows: Lifecycle Hooks */
/*****************************************************************************/
Template.Gallows.created = function () {
};

Template.Gallows.rendered = function () {
};

Template.Gallows.destroyed = function () {
};
