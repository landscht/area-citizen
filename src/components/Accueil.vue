<template>
    <div>
        <span class="display-3 font-weight-thin">Bienvenue sur Area Citizen</span>
        <div class="ma-5">
            <v-hover
                    v-slot:default="{ hover }"
                    :open-delay="openDelay"
                    :close-delay="closeDelay"
                    :disabled="disabled"
                    :value="value"
            >
                <router-link to="/ships" class="page-link">
                    <v-card
                            :elevation="hover ? 12 : 2"
                            class="mx-auto"
                            max-width="1000"
                    >
                        <v-img
                                class="align-center"
                                src="../resources/images/button_ships.jpg"
                        >
                            <template v-slot:placeholder>
                                <v-row
                                        class="fill-height ma-0"
                                        align="center"
                                        justify="center"
                                >
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-row>
                            </template>
                            <v-card-title class="justify-center display-2 font-weight-thin">Voir les vaisseaux</v-card-title>
                        </v-img>
                    </v-card>
                </router-link>
            </v-hover>
        </div>
        <div class="ma-5">
            <v-hover
                    v-slot:default="{ hover }"
                    :open-delay="openDelay"
                    :close-delay="closeDelay"
                    :disabled="disabled"
                    :value="value"
            >
                <router-link to="/comparator" class="page-link">
                    <v-card
                            :elevation="hover ? 12 : 2"
                            class="mx-auto"
                            max-width="1000"
                    >
                        <v-img
                                class="align-center"
                                src="../resources/images/button_comparator.jpg"
                        >
                            <template v-slot:placeholder>
                                <v-row
                                        class="fill-height ma-0"
                                        align="center"
                                        justify="center"
                                >
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-row>
                            </template>
                            <v-card-title class="justify-center display-2 font-weight-thin">Comparer des vaisseaux</v-card-title>
                        </v-img>
                    </v-card>
                </router-link>
            </v-hover>
        </div>
        <div class="ma-5">
            <v-hover
                    v-slot:default="{ hover }"
                    :open-delay="openDelay"
                    :close-delay="closeDelay"
                    :disabled="disabled"
                    :value="value"
            >
                <router-link to="/verse" class="page-link">
                    <v-card
                            :elevation="hover ? 12 : 2"
                            class="mx-auto"
                            max-width="1000"
                    >
                        <v-img
                                class="align-center"
                                src="../resources/images/button_planet.jpg"
                        >
                            <template v-slot:placeholder>
                                <v-row
                                        class="fill-height ma-0"
                                        align="center"
                                        justify="center"
                                >
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-row>
                            </template>
                            <v-card-title class="justify-center display-2 font-weight-thin">Découvrir le verse</v-card-title>
                        </v-img>
                    </v-card>
                </router-link>
            </v-hover>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Accueil",
        data : () => ({
            disabled: false,
            openDelay: '0',
            closeDelay: '0',
            value: false,
        })
    }
</script>

<style scoped>
    .page-link
    {
        text-decoration: none !important;
    }
</style>
