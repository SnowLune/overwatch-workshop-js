"use strict";
new rule({
    comment: "",
    name: "",
    event: {
        eventType: player,
        event: playerReceivedHealing,
        team: all,
        player: all
    },
    conditions: [
        isGameInProgress,
        allHeroes
    ],
    actions: function () {
        global.es = 3;
    }
});
