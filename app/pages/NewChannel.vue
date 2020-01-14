<!--suppress ES6ModulesDependencies, SpellCheckingInspection -->
<template
  xmlns:android="http://schemas.android.com/apk/res/android"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://schemas.android.com/apk/res/android "
>
  <Page class="page">
    <ActionBar class="action-bar">
      <NavigationButton text="Go Back" android-system-icon="ic_menu_back" @tap="$navigateBack" />
      <ActionItem
        icon="res://menu"
        text="hamburguer_icon"
        android:visibility="collapsed"
        ios.position="left"
        @tap="$navigateBack"
      />
      <TextField
        v-model="channel"
        hint="Canal..."
        @textChange="onTextChange"
        @focus="onFocus"
        @blur="onBlur"
        @returnPress="onReturnPress"
      />
    </ActionBar>

    <GridLayout class="page__content">
      {{ channels.length }}
      <Label v-if="channels.length === 0" class="page__content-placeholder" :text="message" />
      <RadListView
        v-else
        ref="listView"
        :pull-to-refresh="true"
        for="channel in channels"
        @itemTap="onItemTap"
        @pullToRefreshInitiated="onPullToRefreshInitiated"
      >
        <v-template>
          <StackLayout class="item" orientation="vertical">
            <Label :text="channel.name" class="nameLabel" />
          </StackLayout>
        </v-template>
      </RadListView>
      <!--            TODO PUBLISHED CHANNELS LIST AND FILTERED-->
    </GridLayout>
  </Page>
</template>

<script>

export default {
  name: 'NewChannel',
  data () {
    return {
      channel: '',
      channels: [
        {
          id: 1,
          name: 'Canal 1'
        },
        {
          id: 2,
          name: 'Canal 2'
        },
        {
          id: 3,
          name: 'Canal 3'
        },
        {
          id: 4,
          name: 'Canal 4'
        }
      ]
    }
  },
  computed: {
    channelsCount () {
      return this.channels.length
    },
    message () {
      return "No s'ha trobat cap canal!"
    }
  },
  methods: {
    onPullToRefreshInitiated ({ object }) {
      console.log('REFRESHING!!!!!!!!...')
      // in order to avoid race conditions (only on iOS),
      // in which the UI may not be completely updated here
      // we use this.$nextTick call
      setTimeout(function () {
        this.$nextTick(() => {
          this.channels.push({
            id: 99,
            name: 'Berry'
          })
          object.notifyPullToRefreshFinished()
        })
      }, 2000)
    },
    onItemTap ({ item }) {
      console.log('onItemTap')
      console.log(item)
      console.log(`Tapped on ${item.name}`)
    },
    onFocus () {
      console.log('FOCUS!')
    },
    onBlur () {
      console.log('BLUR!')
    },
    onTextChange () {
      console.log('TEXT CHANGED!')
    },
    onReturnPress () {
      console.log('RETURN PRESSED!')
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
