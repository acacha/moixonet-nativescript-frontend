<!--suppress HtmlUnknownTag, XmlUnboundNsPrefix, HtmlUnknownAttribute -->
<template>
  <PageLayout title="Exemple autocomplete" name="AutocompleteEx">
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
        <Button margin="5" text="Suggest" @tap="onSuggestSelected" />
        <Button margin="5" text="Append" @tap="onAppendSelected" />
        <Button margin="5" text="Suggest-Append" @tap="onSuggestAppendSelected" />
      </StackLayout>
      <Label text="COMPLETION MODES" />
      <StackLayout orientation="horizontal">
        <Button margin="5" text="StartsWith" @tap="onStartsWithSelected" />
        <Button margin="5" text="Contains" @tap="onContainsSelected" />
      </StackLayout>
      <Label text="DISPLAY MODES" />
      <StackLayout orientation="horizontal">
        <Button margin="5" text="Plain" @tap="onPlainSelected" />
        <Button margin="5" text="Tokens" @tap="onTokensSelected" />
      </StackLayout>
    </StackLayout>
  </PageLayout>
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
      completionMode: AutoCompleteCompletionMode.Contains
    }
  },
  methods: {
    showDrawer () {
      utils.showDrawer()
    },
    // onNavigationButtonTap () {
    //   Frame.topmost().goBack()
    // },
    onSuggestSelected () {
      console.log('onSuggestSelected!')
      this.suggestMode = AutoCompleteSuggestMode.Suggest
      this.$refs.autocomplete.resetAutoComplete()
    },
    onAppendSelected () {
      console.log('onAppendSelected!')
      this.suggestMode = AutoCompleteSuggestMode.Append
      this.completionMode = AutoCompleteCompletionMode.StartsWith
      this.$refs.autocomplete.resetAutoComplete()
    },
    onSuggestAppendSelected () {
      console.log('onSuggestAppendSelected')
      this.suggestMode = AutoCompleteSuggestMode.SuggestAppend
      this.completionMode = AutoCompleteCompletionMode.StartsWith
      this.$refs.autocomplete.resetAutoComplete()
    },
    onStartsWithSelected () {
      console.log('onStartsWithSelected')
      this.completionMode = AutoCompleteCompletionMode.StartsWith
      this.$refs.autocomplete.resetAutoComplete()
    },
    onContainsSelected () {
      console.log('onContainsSelected')
      this.completionMode = AutoCompleteCompletionMode.Contains
      this.suggestMode = AutoCompleteSuggestMode.Suggest
      this.$refs.autocomplete.resetAutoComplete()
    },
    onPlainSelected () {
      console.log('onPlainSelected')
      this.displayMode = AutoCompleteDisplayMode.Plain
      this.$refs.autocomplete.resetAutoComplete()
    },
    onTokensSelected () {
      console.log('onTokensSelected')
      this.displayMode = AutoCompleteDisplayMode.Tokens
      this.$refs.autocomplete.resetAutoComplete()
    }
  }
}
</script>
