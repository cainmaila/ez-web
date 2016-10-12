var template = require('./myModalBn.html');
module.exports = {
    template: template,
    data: function () {
        return {}
    },
    props: ['target', 'bnTxt'],
}