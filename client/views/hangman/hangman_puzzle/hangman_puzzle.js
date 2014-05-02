Puzzle = Meteor.subscribe('Puzzle');


/*****************************************************************************/
/* HangmanPuzzle: Event Handlers and Helpers */
/*****************************************************************************/
Template.Puzzle.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Puzzle.helpers({
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
   puzzle: function () {
      return Puzzle.find();
   }
});

/*****************************************************************************/
/* HangmanPuzzle: Lifecycle Hooks */
/*****************************************************************************/
Template.Puzzle.created = function () {
};

Template.Puzzle.rendered = function () {
};

Template.Puzzle.destroyed = function () {
};

//Puzzle.insert({userId: 1,phrase: "My first hangman puzzle",desc: "games", letters:[{alpha: A, active: false},{alpha: A, active: false},{alpha: B, active: false},{alpha: C, active: false},{alpha: D, active: false},{alpha: E, active: false},{alpha: F, active: false},{alpha: G, active: false}{alpha: H, active: false},{alpha: I, active: false},{alpha: J, active: false},{alpha: K, active: false},{alpha: L, active: false},{alpha: M, active: false},{alpha: N, active: false},{alpha: O, active: false},{alpha: P, active: false},{alpha: Q, active: false},{alpha: R, active: false},{alpha: S, active: false}{alpha: T, active: false},{alpha: U, active: false},{alpha: V, active: false},{alpha: W, active: false},{alpha: X, active: false},{alpha: Y, active: false},{alpha: Z, active: false}], pzlphrase: "_ _   _ _ _ _ _   _ _ _ _ _ _   _ _ _ _ _ _" , wrong: 0, total:0});
//Puzzle.insert({userId: 1,phrase: "My first hangman puzzle",desc: "games", letters:[{alpha: 'A', status: ''},{alpha: 'B', status: 'disabled'},{alpha: 'C', status: ''},{alpha: 'D', status: ''},{alpha: 'E', status: ''},{alpha: 'F', status: ''},{alpha: 'G', status: ''},{alpha: 'H', status: ''},{alpha: 'I', status: ''},{alpha: 'J', status: ''},{alpha: 'K', status: ''},{alpha: 'L', status: ''},{alpha: 'M', status: ''},{alpha: 'N', status: ''},{alpha: 'O', status: ''},{alpha: 'P', status: ''},{alpha: 'Q', status: ''},{alpha: 'R', status: ''},{alpha: 'S', status: ''},{alpha: 'T', status: ''},{alpha: 'U', status: ''},{alpha: 'V', status: ''},{alpha: 'W', status: ''},{alpha: 'X', status: ''},{alpha: 'Y', status: ''},{alpha: 'Z', status: ''}], pzlphrase: "_ _   _ _ _ _ _   _ _ _ _ _ _   _ _ _ _ _ _" , wrong: 0, total:0});