<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <v-toolbar-title class="headline">
                <span class="font-weight-light">Url Lengthener</span>
                <v-btn icon
                       href="https://github.com/TheTechdoodle/url-lengthener"
                >
                    <v-icon>mdi-github</v-icon>
                </v-btn>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <dark-switch/>
        </v-app-bar>

        <v-main>
            <v-container>
                <v-row class="text-center">
                    <v-col cols="12">
                        <encode/>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    import DarkSwitch from './components/DarkSwitch';
    import Encode from './components/Encode';

    export default {
        name: 'App',
        components: {Encode, DarkSwitch}
    };
</script>
