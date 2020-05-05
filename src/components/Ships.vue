<template>
    <div>
        <span class="display-3 font-weight-thin">Vaisseaux</span>
        <v-container fluid>
            <v-row dense>
                <v-col
                        v-for="(card,i) in this.ships"
                        :key="i"
                        :cols="6"
                >
                    <v-hover
                            v-slot:default="{ hover }"
                            :open-delay="openDelay"
                            :close-delay="closeDelay"
                            :disabled="disabled"
                            :value="value"
                            v-if="card != null"
                    >
                        <router-link :to="'/ship/' + card.name" class="page-link">
                            <v-card
                                    :elevation="hover ? 12 : 2"
                            >
                                <v-img
                                        :src="card.media[0].images.banner"
                                        class="white--text align-end"
                                        height="200px"
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
                                    <v-card-title v-text="card.name"></v-card-title>
                                </v-img>
                            </v-card>
                        </router-link>
                    </v-hover>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>

    import Api from '../services/api-service';

    export default {
        name: "Ships",
        data: () => ({
            ships: Api.data.ships,
            disabled: false,
            openDelay: '0',
            closeDelay: '0',
            value: false,
        }),
    }
</script>

<style scoped>
    .page-link
    {
        text-decoration: none !important;
    }
</style>
