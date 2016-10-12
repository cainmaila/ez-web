 <template>
     <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" :data-target="'#'+target">
        {{bnTxt}}
    </button>
 </template>
 <script>
    var template = require('./myModalBn.html');
    module.exports = {
        template: template,
        data: function () {
            return {}
        },
        props: ['target', 'bnTxt'],
    }
 </script>