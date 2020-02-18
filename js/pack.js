(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
typeof define === 'function' && define.amd ? define(factory) :
(global.potpack = factory());
}(this, (function () { 'use strict';

function potpack(boxes, fabric_width) {

    // calculate total box area and maximum box width
    var area = 0;

    for (var i$1 = 0, list = boxes; i$1 < list.length; i$1 += 1) {
        var box = list[i$1];
        area += box.a;
    }

    // sort boxes in decreasing area and width
    boxes.sort(function (x, y) { return y.a - x.a; });
    boxes.sort(function (x, y) { return y.w - x.w; });

    // start with a single empty space, unbounded at the bottom
    var spaces = [{x: 0, y: 0, w: fabric_width, h: Infinity}];

    var width = fabric_width;
    var height = 0;

    for (var i$2 = 0, list$1 = boxes; i$2 < list$1.length; i$2 += 1) {
        
        var box$1 = list$1[i$2];

        // fuse vertically adjacent spaces like
        // |-------------------|
        // |     |             |
        // |     |   space #1  |
        // |     |_____________|
        // |     |             |
        // |     |   space #2  |
        // |_____|_____________|
        spaces.sort(function (a, b) { return a.x - b.x; });
        for (var i$3 = 0; i$3 < spaces.length - 1; i$3 += 1) {
            for (var i$4 = i$3 + 1; i$4 < spaces.length; i$4 += 1) {
                
                var space1 = spaces[i$3];
                var space2 = spaces[i$4];

                if (space1.x === space2.x) {
                    space2.y = Math.min(space1.y, space2.y);
                    space2.h = space2.y + space1.h + space2.h;
                    spaces.splice(i$3, 1);
                }
            }
        }


        // check for spaces nearer the cut edge first
        spaces.sort(function (a, b) { return a.y - b.y; });

        for (var i = 0; i < spaces.length; i += 1) {
        // // check smaller spaces first    
        // for (var i = spaces.length - 1; i >= 0; i--) {
            var space = spaces[i];

            // look for empty spaces that can accommodate the current box
            if (!(box$1.w <= space.w && box$1.h <= space.h)) { continue; }

            // found the space; add the box to its top-left corner
            // |-------|-------|
            // |  box  |       |
            // |_______|       |
            // |         space |
            // |_______________|
            box$1.x = space.x;
            box$1.y = space.y;

            height = Math.max(height, box$1.y + box$1.h);

            if (box$1.w === space.w && box$1.h === space.h) {
                // space matches the box exactly; remove it
                var last = spaces.pop();
                if (i < spaces.length) { spaces[i] = last; }

            } else if (box$1.h === space.h) {
                // space matches the box height; update it accordingly
                // |-------|---------------|
                // |  box  | updated space |
                // |_______|_______________|
                space.x += box$1.w;
                space.w -= box$1.w;

            } else if (box$1.w === space.w) {
                // space matches the box width; update it accordingly
                // |---------------|
                // |      box      |
                // |_______________|
                // | updated space |
                // |_______________|
                space.y += box$1.h;
                space.h -= box$1.h;

            } else {
                // otherwise the box splits the space into two spaces
                // |-------|-----------|
                // |  box  | new space |
                // |_______|___________|
                // | updated space     |
                // |___________________|
                spaces.push({
                    x: space.x + box$1.w,
                    y: space.y,
                    w: space.w - box$1.w,
                    h: box$1.h
                });
                space.y += box$1.h;
                space.h -= box$1.h;
            }
            break;
        }
    }

    return {
        w: width, // container width
        h: height, // container height
        fill: (area / (width * height)) || 0 // space utilization
    };
}

return potpack;

})));