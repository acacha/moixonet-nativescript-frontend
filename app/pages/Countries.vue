<!--suppress ES6ModulesDependencies, SpellCheckingInspection, HtmlUnknownAttribute -->
<template>
  <PageLayout title="Nou Canal" name="NewChannel">
    <StackLayout padding="5">
      <Label text="Escolliu un canal"></Label>
      <RadAutoCompleteTextView
        ref="autocomplete"
        :completionMode="completionMode"
        :suggestMode="suggestMode"
        :displayMode="displayMode"
        :items="dataItems">
      </RadAutoCompleteTextView>
      <Label text="SUGGEST MODES" marginTop="5"></Label>
      <StackLayout orientation="horizontal">
        <Button margin="5" text="Suggest" @tap="onSuggestSelected()"></Button>
        <Button margin="5" text="Append" @tap="onAppendSelected()"></Button>
        <Button margin="5" text="Suggest-Append" @tap="onSuggestAppendSelected()"></Button>
      </StackLayout>
      <Label text="COMPLETION MODES"></Label>
      <StackLayout orientation="horizontal">
        <Button margin="5" text="StartsWith" @tap="onStartsWithSelected()"></Button>
        <Button margin="5" text="Contains" @tap="onContainsSelected()"></Button>
      </StackLayout>
      <Label text="DISPLAY MODES"></Label>
      <StackLayout orientation="horizontal">
        <Button margin="5" text="Plain" @tap="onPlainSelected()"></Button>
        <Button margin="5" text="Tokens" @tap="onTokensSelected()"></Button>
      </StackLayout>
    </StackLayout>
  </PageLayout>
</template>

<script>
import { AutoCompleteCompletionMode, AutoCompleteDisplayMode, AutoCompleteSuggestMode } from 'nativescript-ui-autocomplete';
import { getCountry, getCountriesCount, getCountryWithImage } from './countries';
import { ObservableArray } from 'tns-core-modules'

export default {
  name: 'NewChannel',
  data () {
    let dataItems = new ObservableArray();

    for (let i = 0; i < getCountriesCount(); i++) {
      dataItems.push(getCountry(i));
    }
    return {
      title: 'Païssos',
      dataItems: dataItems,
      displayMode: AutoCompleteDisplayMode.Tokens,
      suggestMode: AutoCompleteSuggestMode.Suggest,
      completionMode: AutoCompleteCompletionMode.StartsWith,
    }
  },
  methods: {
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    },
    onSuggestSelected(args) {
      this.suggestMode = AutoCompleteSuggestMode.Suggest;
      this.$refs.autocomplete.resetAutoComplete();
    },
    onAppendSelected(args) {
      this.suggestMode = AutoCompleteSuggestMode.Append;
      this.completionMode = AutoCompleteCompletionMode.StartsWith;
      this.$refs.autocomplete.resetAutoComplete();
    },
    onSuggestAppendSelected(args) {
      this.suggestMode = AutoCompleteSuggestMode.SuggestAppend;
      this.completionMode = AutoCompleteCompletionMode.StartsWith;
      this.$refs.autocomplete.resetAutoComplete();
    },
    onStartsWithSelected(args) {
      this.completionMode = AutoCompleteCompletionMode.StartsWith;
      this.$refs.autocomplete.resetAutoComplete();
    },
    onContainsSelected(args) {
      this.completionMode = AutoCompleteCompletionMode.Contains;
      this.suggestMode = AutoCompleteSuggestMode.Suggest;
      this.$refs.autocomplete.resetAutoComplete();
    },
    onPlainSelected(args) {
      this.displayMode = AutoCompleteDisplayMode.Plain;
      this.$refs.autocomplete.resetAutoComplete();
    },
    onTokensSelected(args) {
      this.displayMode = AutoCompleteDisplayMode.Tokens;
      this.$refs.autocomplete.resetAutoComplete();
    },
  }
}
</script>
