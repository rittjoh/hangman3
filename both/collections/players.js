Players = new Meteor.Collection("Players");

Players.findPlayers = function () {
  return Players.find({});
}

Players.createPlayer = function (userId,username,score) {
  Players.insert({userId: userId},{username: username},{score: score});
  return true;
}

/*
 * Add query methods like this:
 *  Hangman.findPublic = function () {
 *    return Hangman.find({is_public: true});
 *  }
 */


