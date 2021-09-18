// ==UserScript==
// @name         Cookie Clicker Helper
// @namespace    http://tampermonkey.net/
// @version      1.9_02
// @description  free cookies
// @author       petar105
// @match        https://orteil.dashnet.org/cookieclicker/
// @icon         https://www.google.com/s2/favicons?domain=dashnet.org
// @grant        none
// ==/UserScript==

// If editing the script, ignore any "Game is not defined" warnings
(function() {
    'use strict';

    setInterval(function() { Game.ClickCookie(); }, 1);

setInterval(function() {
    Game.shimmers.forEach(function(shimmer)
    {
        if(shimmer.type == "golden" && shimmer.wrath == 0)
        {
            shimmer.pop()
        }
    })
}, 500);

var autoReindeer = setInterval(function() { for (var h in Game.shimmers){if(Game.shimmers[h].type=="reindeer"){Game.shimmers[h].pop();}} }, 100);

})();

var autoPopTwelveth = setInterval(function() {
    var wrinkCount = 0,
        wrinkEaten = 0,
        wrinkIndex = 10; // value for 10 shinies test

    for (var i in Game.wrinklers) {
        // count number of eating wrinks
        if (Game.wrinklers[i].sucked > 0) {
            wrinkCount += 1;
        }
        // find top wrink index, ignoring shiny wrinklers
        if (Game.wrinklers[i].sucked > wrinkEaten && Game.wrinklers[i].type == 0) {
            wrinkEaten = Game.wrinklers[i].sucked;
            wrinkIndex = i;
        }
    }
    // pop top wrinkler if 10 eating, unless all 12 are shiny
    if (wrinkCount == 10 && wrinkIndex != 10) {
        Game.wrinklers[wrinkIndex].hp = 0;
    }
}, 60000);
