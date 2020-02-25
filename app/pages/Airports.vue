<!--suppress ES6ModulesDependencies, SpellCheckingInspection, HtmlUnknownAttribute -->
<template>
  <PageLayout title="Nou Canal" name="NewChannel">
    <StackLayout padding="5">
        <Label text="Select airport"></Label>
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
  name: 'Airports',
  data () {
    return {
      title: 'Aeroports',
      dataItems: new ObservableArray()
    }
  },
  methods: {
    onNavigationButtonTap() {
      Frame.topmost().goBack()
    }
  },
  mounted () {
    const jsonUrl = 'https://raw.githubusercontent.com/NativeScript/nativescript-ui-samples/master/examples-data/airports.json'
    this.$refs.autocomplete.setLoadSuggestionsAsync((text) => {
      const promise = new Promise((resolve, reject) => {
        http.getJSON(jsonUrl).then((r) => {
          const airportsCollection = r.airports
          const items = new Array()
          for (let i = 0; i < airportsCollection.length; i++) {
            items.push(new TokenModel(airportsCollection[i].FIELD2, null))
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
