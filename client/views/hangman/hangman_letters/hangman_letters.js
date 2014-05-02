

/*****************************************************************************/
/* Letters: Event Handlers and Helpers */
/*****************************************************************************/
Template.Letters.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */

   'click button' : function() {
      //character of letter button clicked
      var btn = '#' + this.alpha;
      var points = 0;

      Meteor.call('GuessLetter', this.alpha, function (err, result) {
        if(err){
          console.log(err);
        }else{
          console.log('scored: ' + result);
        }
      });
/*
      if(Players.find({userId: Meteor.userId()}).count() > 0){
        console.log("found player");
        Players.update({
          userId: Meteor.userId(),
        },{$inc: {
            score: 
          }
        }, function(err) {
          if(err){
            console.log(err);
          }
          else{
            console.log('player updated');
          }
        });
      } else {
        console.log("new player");
        Players.insert({userId: Meteor.userId(),username: Meteor.user().username, score: points});
      }     
*/
/*

Players.update({
          userId: Meteor.userId()
        },{
          $push: {
            letters: "A"
        }
      }, function( err, result ){
          if( err ) {
            //action on error
            console.log('Bad Mongo');
          } else {
            console.log('Good Mongo');
          }

      });
*/

    
   }
});

Template.Letters.helpers({

  firstAlpha: function () {
    return Puzzle.find();
  }

});

/*****************************************************************************/
/* Letters: Lifecycle Hooks */
/*****************************************************************************/
Template.Letters.created = function () {
  
};

Template.Letters.rendered = function () {
};

Template.Letters.destroyed = function () {
};
