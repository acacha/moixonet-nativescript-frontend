<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <!--
            Use the NavigationButton as a side-drawer button in Android
            because ActionItems are shown on the right side of the ActionBar

            automationText not working: https://github.com/NativeScript/NativeScript/issues/3746
            -->
            <NavigationButton
                    text="hamburguer_icon"
                    ios:visibility="collapsed"
                    icon="res://menu"
                    @tap="onDrawerButtonTap"></NavigationButton>
            <!--
            Use the ActionItem for IOS with position set to left. Using the
            NavigationButton as a side-drawer button in iOS is not possible,
            because its function is to always navigate back in the application.
            -->
            <ActionItem icon="res://menu"
                        text="hamburguer_icon"
                android:visibility="collapsed"
                @tap="onDrawerButtonTap"
                ios.position="left">
            </ActionItem>
            <Label class="action-bar-title" automationText="action_bar_label" text="Els meus canals"></Label>
        </ActionBar>

        <GridLayout class="page__content">
            <Label class="page__content-icon fas" text.decode="&#xf015;"></Label>
            <Label class="page__content-placeholder" :text="message"></Label>
          <Button automationText="new_channel_button" text="Nou canal" @tap="newChannel"></Button>
        </GridLayout>

    </Page>
</template>

<script>
import * as utils from '~/shared/utils'
import SelectedPageService from '../shared/selected-page-service'
import NewChannel from './NewChannel'

export default {
  mounted () {
    SelectedPageService.getInstance().updateSelectedPage('Home')
  },
  computed: {
    message () {
      return 'Encara no us heu subscrit a cap canal!'
    }
  },
  methods: {
    onDrawerButtonTap () {
      utils.showDrawer()
    },
    newChannel () {
      console.log('LOG!!!!!!!!!1')
      this.$navigateTo(NewChannel)
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
