<!--suppress HtmlUnknownTag, XmlUnboundNsPrefix -->
<template>
  <Page>
    <ActionBar :title="title">
      <!--
            Use the NavigationButton as a side-drawer button in Android
            because ActionItems are shown on the right side of the ActionBar
            -->
      <NavigationButton ios:visibility="collapsed" icon="res://menu" @tap="onDrawerButtonTap" />
      <!--
            Use the ActionItem for IOS with position set to left. Using the
            NavigationButton as a side-drawer button in iOS is not possible,
            because its function is to always navigate back in the application.
            -->
      <ActionItem
        icon="res://menu"
        android:visibility="collapsed"
        ios.position="left"
        @tap="onDrawerButtonTap"
      />
      <Label class="action-bar-title" text="Browse" />
    </ActionBar>
    <StackLayout ios:background-color="#CDCECE" padding="5">
      <Label text="Select country" />
      <RadAutoCompleteTextView
        ref="autocomplete"
        :completion-mode="completionMode"
        :suggest-mode="suggestMode"
        :display-mode="displayMode"
        :items="dataItems"
      />
      <Label text="SUGGEST MODES" margin-top="5" />
      <StackLayout orientation="horizontal">
        <Button margin="5" text="Suggest" @tap="onSuggestSelected()" />
        <Button margin="5" text="Append" @tap="onAppendSelected()" />
        <Button margin="5" text="Suggest-Append" @tap="onSuggestAppendSelected()" />
      </StackLayout>
      <Label text="COMPLETION MODES" />
      <StackLayout orientation="horizontal">
        <Button margin="5" text="StartsWith" @tap="onStartsWithSelected()" />
        <Button margin="5" text="Contains" @tap="onContainsSelected()" />
      </StackLayout>
      <Label text="DISPLAY MODES" />
      <StackLayout orientation="horizontal">
        <Button margin="5" text="Plain" @tap="onPlainSelected()" />
        <Button margin="5" text="Tokens" @tap="onTokensSelected()" />
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script>
import { AutoCompleteCompletionMode, AutoCompleteDisplayMode, AutoCompleteSuggestMode } from 'nativescript-ui-autocomplete'
import { ObservableArray } from 'tns-core-modules/data/observable-array'
import { getCountry, getCountriesCount } from '../data/countries'
import * as utils from '~/shared/utils'

const description = 'Exemple autocomplete'

export default {
  name: 'AutocompleteEx',
  description,
  data () {
    const dataItems = new ObservableArray()

    for (let i = 0; i < getCountriesCount(); i++) {
      dataItems.push(getCountry(i))
    }
    return {
      title: description,
      dataItems,
      displayMode: AutoCompleteDisplayMode.Tokens,
      suggestMode: AutoCompleteSuggestMode.Suggest,
      completionMode: AutoCompleteCompletionMode.StartsWith
    }
  },
  methods: {
    onDrawerButtonTap () {
      utils.showDrawer()
    },
    onNavigationButtonTap () {
      Frame.topmost().goBack()
    },
    onSuggestSelected (args) {
      this.suggestMode = AutoCompleteSuggestMode.Suggest
      this.$refs.autocomplete.resetAutoComplete()
    },
    onAppendSelected (args) {
      this.suggestMode = AutoCompleteSuggestMode.Append
      this.completionMode = AutoCompleteCompletionMode.StartsWith
      this.$refs.autocomplete.resetAutoComplete()
    },
    onSuggestAppendSelected (args) {
      this.suggestMode = AutoCompleteSuggestMode.SuggestAppend
      this.completionMode = AutoCompleteCompletionMode.StartsWith
      this.$refs.autocomplete.resetAutoComplete()
    },
    onStartsWithSelected (args) {
      this.completionMode = AutoCompleteCompletionMode.StartsWith
      this.$refs.autocomplete.resetAutoComplete()
    },
    onContainsSelected (args) {
      this.completionMode = AutoCompleteCompletionMode.Contains
      this.suggestMode = AutoCompleteSuggestMode.Suggest
      this.$refs.autocomplete.resetAutoComplete()
    },
    onPlainSelected (args) {
      this.displayMode = AutoCompleteDisplayMode.Plain
      this.$refs.autocomplete.resetAutoComplete()
    },
    onTokensSelected (args) {
      this.displayMode = AutoCompleteDisplayMode.Tokens
      this.$refs.autocomplete.resetAutoComplete()
    }
  }
}
</script>
