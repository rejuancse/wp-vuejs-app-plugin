<template>
    <div id="vue-backend-app">
        <h1>WP VueJS App</h1>
        <router-view name="tab"></router-view>
        <router-view></router-view>
    </div>
</template>

<script>
import TabNavigation from './components/tabs/Navigation.vue'
import axios from 'axios';

export default {
    name: 'App',
    components: {
        'tab-navigation': TabNavigation
    },
    async created() {
        const { data } = await axios.get("https://miusage.com/v1/challenge/2/static/");
        console.log('Data', data);
    }
}
</script>

<style>

</style>