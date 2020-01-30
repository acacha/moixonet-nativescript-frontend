<!--suppress ES6ModulesDependencies, SpellCheckingInspection, HtmlUnknownAttribute -->
<template>
  <PageLayout title="Nou Canal" name="Home">
    <GridLayout class="page__content">
      <SearchBar hint="Search hint" :text="channel" @textChange="onTextChanged" @returnPress="onReturnPress" @submit="onSubmit" />
      <published-channels />
    </GridLayout>
  </PageLayout>
</template>

<script>
import PublishedChannels from '../components/PublishedChannels'
export default {
  name: 'NewChannel',
  components: {
    'published-channels': PublishedChannels
  },
  data () {
    return {
      channel: ''
    }
  },
  computed: {
    message () {
      return "No s'ha trobat cap canal!"
    }
  },
  methods: {
    // onPullToRefreshInitiated ({ object }) {
    //   console.log('REFRESHING!!!!!!!!...')
    //   // in order to avoid race conditions (only on iOS),
    //   // in which the UI may not be completely updated here
    //   // we use this.$nextTick call
    //   setTimeout(function () {
    //     this.$nextTick(() => {
    //       this.channels.push({
    //         id: 99,
    //         name: 'Berry'
    //       })
    //       object.notifyPullToRefreshFinished()
    //     })
    //   }, 2000)
    // },
    // onItemTap ({ item }) {
    //   console.log('onItemTap')
    //   console.log(item)
    //   console.log(`Tapped on ${item.name}`)
    // },
    // onFocus () {
    //   console.log('FOCUS!')
    // },
    // onBlur () {
    //   console.log('BLUR!')
    // },
    onSubmit () {
      console.log('ON SUBMIT!')
    },
    onTextChanged () {
      console.log('TEXT CHANGED!')
    },
    onReturnPress () {
      console.log('RETURN PRESSED!')
    }
  }
}
</script>
