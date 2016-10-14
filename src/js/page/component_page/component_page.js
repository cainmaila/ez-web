var template = require('./component_page.html');
module.exports = {
    template: template,
    data() {
        return {
            infoLine: false,
        }
    },
    methods: {
        swichInfoLine(f) {
            if (f === 2) {
                this.infoLine = !this.infoLine;
            } else if (f === 0) {
                this.infoLine = false;
            } else {
                this.infoLine = true;
            }

        }
    }
}