<template>
    <div id="wpvapp-general-setting-tab" class="tab-container" v-if="formData.table">
        <h2>{{ formData.table.title }}</h2>
        <table id="cache_data_area" class="wp-list-table widefat fixed striped">
            <thead>
                <tr id="challenceContent">
                    <th v-for="(value, index) in formData.table.data.headers" :key="index">{{ value }}</th>
                </tr>
            </thead>

            <tbody id="rowsid">
                <tr v-for="(value, index) in formData.table.data.rows" :key="index">
                    <td>{{ value.id }}</td>
                    <td>{{ value.url }}</td>
                    <td>{{ value.title }}</td>
                    <td>{{ value.pageviews }}</td>
                    <td>
                        {{ new Date(value.date * 1000).toString().split(" ").slice(1, 4).join(" ") }}
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="clear"></div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'AnotherTab',

    data() {
        return {
            title: ''
        }
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

<style>

</style>