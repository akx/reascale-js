module.exports = function (reascaleData) {
    var currentGroupName = null;
    var groups = {};

    reascaleData.split("\n").filter(function (line) {
        return !/^#/.test(line);
    }).forEach(function (line) {
        var m;
        if (/^2/.test(line)) { // start-of-group
            m = /^2\s+\"(.+?)\"/.exec(line);
            if (m) {
                currentGroupName = m[1];
            }
            return;
        }
        if (/^-2/.test(line)) { // end-of-group
            currentGroupName = null;
            return;
        }
        if (/^0/.test(line)) { // scale
            m = /^0\s+\"(.+?)\"\s+([0-9]+)/.exec(line);
            if (m) {
                var semis = m[2].split("").map(function (c, index) {
                    return c !== "0" ? index : null;
                }).filter(function (c) {
                    return c !== null;
                });
                var groupName = (currentGroupName || "Ungrouped");
                if(groups[groupName] === undefined) groups[groupName] = [];
                groups[groupName].push({name: m[1], semis: semis});
            }
            return;
        }
    });
    return groups;
};
