<template lang="html">
  <GridLayout rows="auto, *" class="nt-drawer__content">
    <StackLayout v-if="loggedIn && user !==null" row="0" class="nt-drawer__header">
      <Image class="nt-drawer__header-image fas t-36" src.decode="font://&#xf2bd;" />
      <Label automation-text="username_label" class="nt-drawer__header-brand" :text="user.name" />
      <Label automation-text="useremail_label" class="nt-drawer__header-footnote" :text="user.email" />
    </StackLayout>
    <StackLayout v-else row="0" class="nt-drawer__header">
      <Button text="Login" @tap="login" />
      <Button text="Register" @tap="register" />
    </StackLayout>
    <ScrollView row="1" class="nt-drawer__body">
      <StackLayout>
        <GridLayout automation-text="nav_link_home" columns="auto, *" :class="'nt-drawer__list-item' + (selectedPage === 'Home' ? ' -selected': '')" @tap="onNavigationItemTap(Home)">
          <Label col="0" text.decode="&#xf015;" class="nt-icon fas" />
          <Label col="1" text="Home" class="p-r-10" />
        </GridLayout>

        <GridLayout automation-text="nav_link_browse" columns="auto, *" :class="'nt-drawer__list-item' + (selectedPage === 'Browse' ? ' -selected': '')" @tap="onNavigationItemTap(Browse)">
          <Label col="0" text.decode="&#xf1ea;" class="nt-icon far" />
          <Label col="1" text="Browse" class="p-r-10" />
        </GridLayout>

        <GridLayout automation-text="nav_link_search" columns="auto, *" :class="'nt-drawer__list-item' + (selectedPage === 'Search' ? ' -selected': '')" @tap="onNavigationItemTap(Search)">
          <Label col="0" text.decode="&#xf002;" class="nt-icon fas" />
          <Label col="1" text="Search" class="p-r-10" />
        </GridLayout>

        <GridLayout automation-text="nav_link_featured" columns="auto, *" :class="'nt-drawer__list-item' + (selectedPage === 'Featured' ? ' -selected': '')" @tap="onNavigationItemTap(Featured)">
          <Label col="0" text.decode="&#xf005;" class="nt-icon fas" />
          <Label col="1" text="Featured" class="p-r-10" />
        </GridLayout>

        <GridLayout automation-text="nav_link_featured" columns="auto, *" :class="'nt-drawer__list-item' + (selectedPage === 'Featured' ? ' -selected': '')" @tap="onNavigationItemTap(ChannelsList)">
          <Label col="0" text.decode="&#xf005;" class="nt-icon fas" />
          <Label col="1" text="Channels" class="p-r-10" />
        </GridLayout>

        <GridLayout automation-text="nav_link_featured" columns="auto, *" :class="'nt-drawer__list-item' + (selectedPage === 'Featured' ? ' -selected': '')" @tap="onNavigationItemTap(Channel)">
          <Label col="0" text.decode="&#xf005;" class="nt-icon fas" />
          <Label col="1" text="Channel" class="p-r-10" />
        </GridLayout>

        <StackLayout class="hr" />

        <GridLayout automation-text="nav_link_settings" columns="auto, *" :class="'nt-drawer__list-item' + (selectedPage === 'Settings' ? ' -selected': '')" @tap="onNavigationItemTap(Settings)">
          <Label col="0" text.decode="&#xf013;" class="nt-icon fas" />
          <Label col="1" text="Settings" class="p-r-10" />
        </GridLayout>
      </StackLayout>
    </ScrollView>
  </GridLayout>
</template>

<script>
/* eslint-disable vue/no-unused-components */

import { mapGetters } from 'vuex'
import Home from './Home'
import Browse from './Browse'
import Featured from './Featured'
import Search from './Search'
import Settings from './Settings'
import ChannelsList from './ChannelsList'
import Channel from './Channel'
import * as utils from '~/shared/utils'
import SelectedPageService from '~/shared/selected-page-service'
import url from '@/utils/url'

export default {
  components: {
    Home,
    Browse,
    Featured,
    Search,
    Settings
  },
  data () {
    return {
      Home,
      Browse,
      Featured,
      Search,
      Settings,
      ChannelsList,
      Channel,
      selectedPage: ''
    }
  },
  mounted () {
    console.log('MOUNTED!!!!!!!!!!!!!!')
    // console.log(this)
    // console.log(this.$store)
    console.log(this.$store.state.auth.loggedIn)
    console.log('LoggedIn:')
    console.log(this.$store.getters.loggedIn)
    SelectedPageService.getInstance().selectedPage$
      .subscribe((selectedPage) => { this.selectedPage = selectedPage })
  },
  methods: {
    onNavigationItemTap (component) {
      this.$navigateTo(component, {
        clearHistory: true
      })
      utils.closeDrawer()
    },
    login () {
      console.log('TODO LOGIN')
    },
    register () {
      // alert('HEY QUE PAIXA!!!')
      url.open('https://www.google.com')
      // utils.openUrl('http://moixonet-backend.test/register')
      // function pageLoaded (args) {
      //   const page = args.object
      //   page.bindingContext = { }
      // }
      //
      // exports.pageLoaded = pageLoaded
      //
      // exports.launch = function (url) {
      //   utils.openUrl(url)
      // }
    }
  },
  computed: {
    ...mapGetters([
      'loggedIn',
      'user'
    ])
  }
}
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '~@nativescript/theme/scss/variables/blue';
    // End custom common variables

    // Custom styles
</style>
