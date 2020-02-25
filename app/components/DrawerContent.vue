<!--suppress NpmUsedModulesInstalled -->
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
        <GridLayout
          automation-text="nav_link_home"
          columns="auto, *"
          :class="'nt-drawer__list-item' + (selectedPage === 'Home' ? ' -selected': '')"
          @tap="onNavigationItemTap(Home)"
        >
          <Label col="0" text.decode="&#xf015;" class="nt-icon fas" />
          <Label col="1" text="Canals" class="p-r-10" />
        </GridLayout>

        <GridLayout
          automation-text="nav_link_browse"
          columns="auto, *"
          :class="'nt-drawer__list-item' + (selectedPage === 'Browse' ? ' -selected': '')"
          @tap="onNavigationItemTap(Browse)"
        >
          <Label col="0" text.decode="&#xf1ea;" class="nt-icon far" />
          <Label col="1" text="Browse" class="p-r-10" />
        </GridLayout>

        <GridLayout
          automation-text="nav_link_search"
          columns="auto, *"
          :class="'nt-drawer__list-item' + (selectedPage === 'Search' ? ' -selected': '')"
          @tap="onNavigationItemTap(Search)"
        >
          <Label col="0" text.decode="&#xf002;" class="nt-icon fas" />
          <Label col="1" text="Search" class="p-r-10" />
        </GridLayout>

        <GridLayout
          automation-text="nav_link_channels"
          columns="auto, *"
          :class="'nt-drawer__list-item' + (selectedPage === 'ChannelsList' ? ' -selected': '')"
          @tap="onNavigationItemTap(ChannelsList)"
        >
          <Label col="0" text.decode="&#xf005;" class="nt-icon fas" />
          <Label col="1" text="Channels List" class="p-r-10" />
        </GridLayout>

        <GridLayout
          automation-text="nav_link_channel_details"
          columns="auto, *"
          :class="'nt-drawer__list-item' + (selectedPage === 'ChannelDetails' ? ' -selected': '')"
          @tap="onNavigationItemTap(ChannelDetails, { channel: { name: 'PROVA NOM CANAL DES DE MENU' } })"
        >
          <Label col="0" text.decode="&#xf005;" class="nt-icon fas" />
          <Label col="1" text="Channel DETAILS" class="p-r-10" />
        </GridLayout>

        <StackLayout class="hr" />

        <GridLayout
          automation-text="nav_link_autocomplete_ex"
          columns="auto, *"
          :class="'nt-drawer__list-item' + (selectedPage === 'AutocompleteEx' ? ' -selected': '')"
          @tap="onNavigationItemTap(AutocompleteEx)"
        >
          <Label col="0" text.decode="&#xf005;" class="nt-icon fas" />
          <Label col="1" text="AutocompleteEx" class="p-r-10" />
        </GridLayout>

        <GridLayout
          automation-text="nav_link_autocomplete_ex"
          columns="auto, *"
          :class="'nt-drawer__list-item' + (selectedPage === 'ChannelsSearch' ? ' -selected': '')"
          @tap="onNavigationItemTap(ChannelsSearch)"
        >
          <Label col="0" text.decode="&#xf005;" class="nt-icon fas" />
          <Label col="1" text="ChannelsSearch" class="p-r-10" />
        </GridLayout>

        <GridLayout
          automation-text="nav_link_autocomplete_ex"
          columns="auto, *"
          :class="'nt-drawer__list-item' + (selectedPage === 'Airports' ? ' -selected': '')"
          @tap="onNavigationItemTap(Airports)"
        >
          <Label col="0" text.decode="&#xf005;" class="nt-icon fas" />
          <Label col="1" text="Airports" class="p-r-10" />
        </GridLayout>

        <GridLayout
          automation-text="nav_link_autocomplete_ex"
          columns="auto, *"
          :class="'nt-drawer__list-item' + (selectedPage === 'Countries' ? ' -selected': '')"
          @tap="onNavigationItemTap(Countries)"
        >
          <Label col="0" text.decode="&#xf005;" class="nt-icon fas" />
          <Label col="1" text="Countries" class="p-r-10" />
        </GridLayout>

        <StackLayout class="hr" />

        <GridLayout
          automation-text="nav_link_settings"
          columns="auto, *"
          :class="'nt-drawer__list-item' + (selectedPage === 'Settings' ? ' -selected': '')"
          @tap="onNavigationItemTap(Settings)"
        >
          <Label col="0" text.decode="&#xf013;" class="nt-icon fas" />
          <Label col="1" text="Settings" class="p-r-10" />
        </GridLayout>
      </StackLayout>
    </ScrollView>
  </GridLayout>
</template>

<script>
/* eslint-disable vue/no-unused-components */

// import { mapGetters } from 'vuex'
import Home from '../pages/Home'
import Browse from '../pages/Browse'
import Search from '../pages/Search'
import Settings from '../pages/Settings'
import ChannelsList from '../pages/ChannelsList'
import ChannelDetails from '../pages/ChannelDetails'
import Airports from '../pages/Airports'
import ChannelsSearch from '../pages/ChannelsSearchExample'
import Countries from '../pages/Countries'
import AutocompleteEx from '../pages/AutocompleteEx'
import * as utils from '~/shared/utils'
import SelectedPageService from '~/shared/selected-page-service'
import url from '@/utils/url'

export default {
  name: 'DrawerContent',
  components: {
    Home,
    Browse,
    Search,
    Settings,
    ChannelDetails,
    Airports,
    Countries,
    ChannelsSearch
  },
  data () {
    return {
      Home,
      Browse,
      Search,
      Settings,
      ChannelsList,
      AutocompleteEx,
      ChannelDetails,
      Airports,
      Countries,
      ChannelDetails,
      ChannelsSearch,
      selectedPage: ''
    }
  },
  computed: {
    loggedIn () {
      return this.$store.getters['auth/loggedIn']
    },
    user () {
      return this.$store.getters['auth/user']
    }
  },
  mounted () {
    SelectedPageService.getInstance().selectedPage$
      .subscribe((selectedPage) => { this.selectedPage = selectedPage })
  },
  methods: {
    onNavigationItemTap (component, props) {
      this.$navigateTo(component, {
        clearHistory: true,
        props
      })
      utils.closeDrawer()
    },
    login () {
      console.log('TODO LOGIN')
    },
    register () {
      // alert('HEY QUE PAIXA!!!')
      url.open('https://moixonet.acacha.scool.cat/register')
      // url.open('http://www.google.com')
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
  }
}
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '~@nativescript/theme/scss/variables/blue';
    // End custom common variables

    // Custom styles
</style>
