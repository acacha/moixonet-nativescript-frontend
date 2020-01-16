<template>
  <app-user-channels :channels="channels" @leave="leave" @selected="selected" />
</template>

<script>
import publishedChannelsData from '../data/publishedChannels.json'
import AppUserChannels from './AppUserChannels'

export default {
  name: 'PublishedChannels',
  components: {
    'app-user-channels': AppUserChannels
  },
  data () {
    return {
      channels: publishedChannelsData
    }
  }
  // TODO
  // OMPLIR CANALS FENT PETICIÓ A LA API QUE MOSTRA TOTS ELS CANALS PUBLICATS
  // NO ES POT UTILITZAR CREATED NI MOUNTED CAL UTILITZAR LOADED o CARREGAR QUAN ELS USUARIS NAVEGING A AQUESTA PÀGINA
}
</script>
