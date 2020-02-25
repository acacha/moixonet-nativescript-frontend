<!--suppress ES6ModulesDependencies, SpellCheckingInspection, HtmlUnknownAttribute -->
<template>
  <PageLayout title="Nou Canal" name="NewChannel">
    <StackLayout padding="5">
        <Label text="Select channel"></Label>
        <RadAutoCompleteTextView ref="autocomplete"
                                 displayMode="plain"
                                 suggestMode="Suggest"
                                 :items="dataItems">
          <SuggestionView ~suggestionView suggestionViewHeight="300">
            <StackLayout v-suggestionItemTemplate orientation="vertical" padding="10">
              <v-template>
                <Label :text="item.text"></Label>
              </v-template>
            </StackLayout>
          </SuggestionView>
        </RadAutoCompleteTextView>
    </StackLayout>
  </PageLayout>
</template>

<script>
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { TokenModel } from 'nativescript-ui-autocomplete';
import * as http from 'tns-core-modules/http';

export default {
  name: 'ChannelsSearch',
  data () {
    return {
      title: 'Canals Search',
      dataItems: new ObservableArray()
    }
  },
  methods: {
    onNavigationButtonTap() {
      Frame.topmost().goBack()
    }
  },
  mounted () {
    // const jsonUrl = 'https://raw.githubusercontent.com/NativeScript/nativescript-ui-samples/master/examples-data/airports.json'
    const jsonUrl = 'https://moixonet.acacha.scool.cat/api/v1/published_channels'
    this.$refs.autocomplete.setLoadSuggestionsAsync((text) => {
      const promise = new Promise((resolve, reject) => {
        http.getJSON(jsonUrl).then((r) => {
          const channelsCollection = r
          const items = new Array()
          for (let i = 0; i < channelsCollection.length; i++) {
            items.push(new TokenModel(channelsCollection[i].name, null))
          }
          resolve(items);
        }).catch((err) => {
          const message = `Error fetching remote data from ${jsonUrl}: ${err.message}`
          console.log(message)
          alert(message)
          reject()
        });
      });

      return promise;
    });
  },
}
</script>
