<template>
    <div class="tab-container">
        <h2>Settings</h2>
        <p>{{ message }}</p>
    </div>
</template>

<script>
export default {
    name: 'Settings',

    data() {
        return {
            message: 'This is settings tab'
        }    
    }
}
</script>
