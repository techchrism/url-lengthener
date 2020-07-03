<template>
    <v-switch color="accent" v-model="$vuetify.theme.dark" :append-icon="icon" hide-details label="Dark Mode"/>
</template>

<script>
    import localforage from 'localforage';

    export default {
        name: 'DarkSwitch',
        computed: {
            icon()
            {
                return 'mdi-' + (this.$vuetify.theme.dark ? 'weather-night' : 'white-balance-sunny');
            }
        },
        watch: {
            '$vuetify.theme.dark': function(dark)
            {
                localforage.setItem('theme', dark ? 'dark' : 'light');
            }
        },
        mounted()
        {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e =>
            {
                this.$vuetify.theme.dark = e.matches;
            });
        }
    };
</script>

<style scoped>

</style>
