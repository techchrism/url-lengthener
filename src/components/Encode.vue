<template>
    <v-card>
        <v-card-text>
            <v-select :items="encodingTypes"
                      item-text="name"
                      v-model="selectedType"
                      return-object
                      label="Encoding Type"
            />
            <v-text-field outlined
                          label="Input URL"
                          v-model="url"
                          :rules="[checkURL]"
                          autofocus
                          type="url"
                          spellcheck="false"
            />
            <text-share label="Encoded" :value="redirectUrl"/>
        </v-card-text>
    </v-card>
</template>

<script>
    import {encodingTypes} from '@/encoding/EncodingLibrary';
    import TextShare from './TextShare';

    export default {
        name: 'Encode',
        components: {TextShare},
        data: () => ({
            url: 'https://example.com',
            encodingTypes,
            selectedType: encodingTypes[0]
        }),
        computed: {
            encoded()
            {
                return this.selectedType.encode(this.url);
            },
            redirectUrl()
            {
                let url = new URL(window.location);
                url.hash = '';
                return url.toString() + '#' + this.encoded;
            }
        },
        methods: {
            checkURL(url)
            {
                return (url.startsWith('http://') || url.startsWith('https://')) ? true : 'URL must start with "http://" or "https://"';
            }
        }
    };
</script>

<style scoped>

</style>
