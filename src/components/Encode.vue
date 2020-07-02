<template>
    <v-card>
        <v-card-text>
            <v-text-field outlined label="Input URL" v-model="url"/>
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
            url: ''
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
        }
    };
</script>

<style scoped>

</style>
