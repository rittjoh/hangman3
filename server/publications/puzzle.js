
/*Meteor.publish("usersOn", function () {
    return users.find( {"services.resume.loginTokens.0": {$exists: true}}, {});
});*/

Meteor.publish("Puzzle", function () {
    return Puzzle.find();
});


