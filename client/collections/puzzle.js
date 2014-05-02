// Add query methods like this:
Puzzle.findCurrent = function () {
	return Puzzle.find({is_current: true});
}

