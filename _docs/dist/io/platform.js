'use strict';

var _utils = require('../utils');

module.exports = (0, _utils.isBrowser)() ? require('./browser') : require('./node'); // Use require instead of import/export to dynamically export the right set
// of functions
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pby9wbGF0Zm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBOztBQUVBLE9BQU8sT0FBUCxHQUFpQiwwQkFBYyxRQUFRLFdBQVIsQ0FBZCxHQUFxQyxRQUFRLFFBQVIsQ0FBdEQsQyxDQUpBO0FBQ0EiLCJmaWxlIjoicGxhdGZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBVc2UgcmVxdWlyZSBpbnN0ZWFkIG9mIGltcG9ydC9leHBvcnQgdG8gZHluYW1pY2FsbHkgZXhwb3J0IHRoZSByaWdodCBzZXRcbi8vIG9mIGZ1bmN0aW9uc1xuaW1wb3J0IHtpc0Jyb3dzZXJ9IGZyb20gJy4uL3V0aWxzJztcblxubW9kdWxlLmV4cG9ydHMgPSBpc0Jyb3dzZXIoKSA/IHJlcXVpcmUoJy4vYnJvd3NlcicpIDogcmVxdWlyZSgnLi9ub2RlJyk7XG4iXX0=