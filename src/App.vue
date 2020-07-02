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
            Hello
        </v-main>
    </v-app>
</template>

<script>
    import DarkSwitch from './components/DarkSwitch';

    export default {
        name: 'App',
        components: {DarkSwitch}
    };
</script>
