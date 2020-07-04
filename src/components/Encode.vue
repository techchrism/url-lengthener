<template>
    <v-card>
        <v-card-text>
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
    import {aaaEncode} from '../aaaEncoding';
    import TextShare from './TextShare';

    export default {
        name: 'Encode',
        components: {TextShare},
        data: () => ({
            url: 'https://example.com'
        }),
        computed: {
            encoded()
            {
                return aaaEncode(this.url);
            },
            redirectUrl()
            {
                let url = new URL(window.location);
                url.hash = this.encoded;
                return url.toString();
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
