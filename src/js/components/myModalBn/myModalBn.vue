 <template>
     <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" :data-target="'#'+target">
        {{bnTxt}}
    </button>
 </template>
 <script>
    module.exports = {
        data: function () {
            return {}
        },
        props: ['target', 'bnTxt'],
    }
 </script>