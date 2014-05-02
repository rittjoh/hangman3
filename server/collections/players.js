/*
 * Add query methods like this:
 *  Players.findPublic = function () {
 *    return Hangman.find({is_public: true});
 *  }
 */

Players.allow({
  insert: function () {
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
Players.deny({
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