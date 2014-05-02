/*
 * Add query methods like this:
 *  Puzzle.findPublic = function () {
 *    return Hangman.find({is_public: true});
 *  }
 */

Puzzle.allow({
  insert: function (userId, doc) {
    return true;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return true;
  },

  remove: function (userId, doc) {
    return true;
  }
});
/*
Puzzle.deny({
  insert: function (userId, doc) {
    return false;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return false;
  },

  remove: function (userId, doc) {
    return false;
  }
  
});
*/