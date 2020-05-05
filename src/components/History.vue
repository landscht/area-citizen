<template>
    <v-card flat height="1000">
        <v-card-text>{{this.ship.description}}</v-card-text>
    </v-card>
</template>

<script>
    export default {
        props : {
            ship : {}
        },
        name: "History"
    }
</script>

<style scoped>

</style>
