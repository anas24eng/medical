import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify);


export default new Vuetify({
    icons: {
      iconfont: 'md' || 'fa'
    },
    theme: {
    
        
      themes: {
        light: {
          backgrund: colors.grey.lighten2,
        },
        dark: {
            
          backgrund: colors.shades.white,
        }
      }
    }
  })