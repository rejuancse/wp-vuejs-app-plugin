<template>
    <div class="tab-container">
        <div class="wrap">
        <h1 class="wp-heading-inline">Forced Cache Clear</h1>
        <p>{{ message }}</p>

        <button type="submit" class="page-title-action">Force Cache Clear</button>

        </div>
    </div>
</template>

<script>
export default {
    name: 'Settings',

    data() {
        return {
            message: 'Data cache in one hour, delete your Graph and table cache'
        }    
    }
}
</script>
