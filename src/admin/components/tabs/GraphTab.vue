<template>
    <div id="wpvapp-general-setting-tab" class="tab-container">

        <div id="app">
            <PlanetChart />
        </div>

        <div class="clear"></div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import PlanetChart from '../PlanetChart.vue'

export default {
    name: 'GraphTab',

    components: {
        PlanetChart
    },

    mounted() {
        this.fetchSettings()
    },

    computed: {
        ...mapGetters([ 'GET_GENERAL_SETTINGS', 'GET_LOADING_TEXT' ]),

        formData: {
            get() {
                return this.GET_GENERAL_SETTINGS
            },
        },

        loadingText: {
            get() {
                return this.GET_LOADING_TEXT
            }
        }
    },

    methods: {
        ...mapActions([ 'FETCH_SETTINGS', 'SAVE_SETTINGS'  ]),

        saveSettings(e) {
            e.preventDefault();
            this.SAVE_SETTINGS( this.formData )
        },

        fetchSettings() {
            this.FETCH_SETTINGS()
        }
    }
}
</script>
