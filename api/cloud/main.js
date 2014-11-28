'use strict';

/* Modules */
var imageSets = require('cloud/imagesets.js').ImageSets;

/**
 * Responds with the next image set.
 * @param request.params.id The current image set id.
 */
Parse.Cloud.define('getNextImageSet', function(request, response) {
    var id = parseInt(request.params.id, 10);
    var nextId = (isNaN(id) || id < 0 || id >= imageSets.length) ? 0 : (id + 1) % imageSets.length;
    var imageSet = imageSets[nextId];
    response.success(imageSet);
});
