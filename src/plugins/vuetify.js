// Styles
import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import { aliases, fa } from 'vuetify/iconsets/fa'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  icons: {
      iconfont: 'fa' || 'md' || 'mdi',
      aliases,
      sets: {
        fa,
      },
  },
  theme: {
      themes: {
          dark: {
              background: '#111111'
          }
      }
  }
});
 
