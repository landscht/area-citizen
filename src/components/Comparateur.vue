<template>
    <div>
        <p class="display-3 font-weight-thin">Comparateur</p>
        <v-container fluid>
            <v-dialog v-model="dialog" max-width="500">
                <template v-slot:activator="{ on }">
                    <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
                </template>
                <v-card>
                    <v-card-title class="headline">Choisissez un vaisseau à comparer</v-card-title>
                    <v-container fluid>
                        <v-row dense>
                            <v-col
                                    v-for="(card,i) in ships"
                                    :key="i"
                                    :cols="12"
                            >
                                <v-card
                                        v-if="card != null"
                                        @click="addShip(card)"
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
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-dialog>
            <v-data-iterator
                    :items="ships"
                    :sort-by="sortBy.toLowerCase()"
                    :sort-desc="sortDesc"
                    hide-default-footer
            >

                <template v-slot:default="props">
                    <v-row>
                        <v-col
                                v-for="(data, i) in items"
                                :key="i"
                                cols="12"
                                sm="6"
                                md="4"
                                lg="3"
                        >
                            <v-card>
                                <v-card-title class="subheading font-weight-bold">{{ data.name }}</v-card-title>

                                <v-divider></v-divider>
                                <v-card-subtitle>Dimensions<v-divider></v-divider></v-card-subtitle>
                                <v-list dense>
                                    <v-list-item>
                                        <v-list-item-content>Taille:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{ data.size }}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Capacité cargo:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{ data.cargocapacity }}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Hauteur:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{data.height}}m</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Longueur:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{ data.length }}m</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Largeur:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{ data.beam }}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Masse:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{ data.mass }}kg</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Min crew:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{ data.min_crew }}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Max crew:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{ data.max_crew }}</v-list-item-content>
                                    </v-list-item>
                                </v-list>
                                <v-card-subtitle>Vitesse<v-divider></v-divider></v-card-subtitle>
                                <v-list dense>
                                    <v-list-item>
                                        <v-list-item-content>Vitesse SCM:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{ data.scm_speed }}m/s</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Vitesse post-combustion:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{data.afterburner_speed}}m/s</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>xAxis acceleration:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{ data.xaxis_acceleration }}m/s</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>yAxis acceleration:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{ data.yaxis_acceleration }}m/s</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>zAxis acceleration:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{ data.zaxis_acceleration }}m/s</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Min crew:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{ data.min_crew }}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Max crew:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{ data.max_crew }}</v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-card>
                        </v-col>
                    </v-row>
                </template>
            </v-data-iterator>
        </v-container>
    </div>
</template>

<script>

    import Api from '../services/api-service';

    export default {
        name: "Comparateur",
        data : () => ({
            items : Api.data.ships_comparator,
            search: '',
            filter: {},
            sortDesc: false,
            sortBy: 'name',
            ships : Api.data.ships,
            dialog: false,
        }),
        methods : {
            addShip(ship) {
                // eslint-disable-next-line no-console
                console.log(ship)
                Api.data.ships_comparator.push(ship);
                this.dialog = false;
            }
        },
    }
</script>

<style scoped>
    .page-link
    {
        text-decoration: none !important;
    }
</style>
