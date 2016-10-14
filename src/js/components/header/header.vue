 <template>
     <div class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">
                	<slot name="til">EZ Web App</slot>
                </a>
            </div>
            <ul class="nav navbar-nav">
                <li><router-link to="/comp"></span>組件範例</router-link></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li><router-link to="/comp"><span class="glyphicon glyphicon-user"></span>{{ $t("singup") }}</router-link></li>
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">{{ $t("language") }}
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                          <li><a href="#" @click.prevent="change('en')">English</a></li>
                          <li><a href="#" @click.prevent="change('zh-TW')">繁體中文</a></li>
                          <li><a href="#" @click.prevent="change('ja')">日文</a></li> 
                    </ul>
                </li>
            </ul>
        </div>
	</div>
 </template>

  <script>
  	var Vue = require('vue');
    module.exports = {
        data: function () {
            return {}
        },
        methods: {
          change(lang){
          	Vue.setLang(lang);
          },
        }
    }
 </script>