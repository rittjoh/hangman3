// Add query methods like this:
Players.findPlayers = function () {
  return Players.find({});
}

Players.createPlayer = function (userId,username,score) {
  Players.insert({userId: userId,username: username,score: score});
  return true;
}



