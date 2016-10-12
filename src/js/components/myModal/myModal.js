var template = require('./myModal.html');
module.exports = function (txt) {
    txt = txt || 'This Id is myModal !!';
    return {
        template: template,
        data: function () {
            return {
                txt: txt
            }
        },
        props: ['modalId'],
    }
}