/*****************************************************************************/
/* Hangman Methods */
/*****************************************************************************/

Meteor.methods({
 /*
  * Example:
  *  '/app/hangman/update/email': function (email) {
  *    Users.update({_id: this.userId}, {$set: {'profile.email': email}});
  *  }
  *
  */
  	GuessLetter: function (alpha) {
  	
      var tmp = Puzzle.findOne({iscurrent: 1});

      //set temp array for change to be updated back into mongo
      var letters = tmp.letters;
      //convert alpha character to number in alphabet to be 
      //referenced as index in array
      var arrIndex = alpha.charCodeAt() - 65;
      //placeholder for new pzlPhrase
      var newPzlPhrase = '';
      //add to score
      var points = 0;

      //

      //set status to disabled
      tmp.letters[arrIndex].status = "disabled";

      //loop through phrase to find letter guess
      for(var i =0; i<tmp.phrase.length;i++){
        if(tmp.phrase.charAt(i) == alpha){
          newPzlPhrase = newPzlPhrase + tmp.phrase.charAt(i);
        } else {
          newPzlPhrase = newPzlPhrase + tmp.pzlphrase.charAt(i);
        }
      }

      //increase if wrong guess
      if(newPzlPhrase == tmp.pzlphrase){
        tmp.wrong = tmp.wrong + 1;
        points = -5;
      } else {
        points = 5
      }

      //increase total
      tmp.total = tmp.total + 1;     

      console.log(newPzlPhrase);

      //update letters into mongo
      Puzzle.update({
          _id: tmp._id
        },{
          $set: {
            letters: tmp.letters,
            pzlphrase: newPzlPhrase,
            wrong: tmp.wrong,
            total: tmp.total
          }
        }, function( err, result ){
          if( err ) {
            console.log(err);
          } else {
            console.log('puzzle updated');
          }

      });

      if(Players.find({userId: Meteor.userId()}).count() > 0){
        console.log("found player");
        Players.update({
          userId: Meteor.userId(),
        },{$inc: {
            score: points
        }},{$push: {
        	letters: alpha
        }}, function(err) {
          if(err){
            console.log(err);
          }
          else{
            console.log('player updated');
          }
        });
      } else {
        console.log("new player");
        Players.insert({userId: Meteor.userId(),username: Meteor.user().username, letters: [alpha], score: points});
      }       

      return true;
   },

   currentPuzzle: function () {
      var result = {};
      result.puzzle = Puzzle.findOne({iscurrent: 1});
      return result;
   }

});

