
/*Meteor.publish("usersOn", function () {
    return users.find( {"services.resume.loginTokens.0": {$exists: true}}, {});
});*/

Meteor.publish("Players", function () {
    return Players.find();
});


