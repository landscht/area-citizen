<template>
    <div>
        <p class="display-3 font-weight-thin">{{id}}</p>
        <div>
            <v-row align="center" justify="center" class="ma-5">
                <v-img max-width="1000" max-height="1000" :src="this.ship.media[0].images.banner"></v-img>
            </v-row>
        </div>
        <v-card class="font-weight-thin">
            <v-tabs
                    v-model="tab"
                    dark
            >
                <v-tabs-slider></v-tabs-slider>
                <v-tab href="#tab-1">
                    histoire
                </v-tab>

                <v-tab href="#tab-2">
                    equipements
                </v-tab>

                <v-tab href="#tab-3">
                    Détails
                </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
                <v-tab-item
                        value='tab-1'
                >
                    <v-card flat>
                        <v-card-title>Description</v-card-title>
                        <v-card-text>{{this.ship.description}}</v-card-text>
                        <v-card-title>Caractéristiques</v-card-title>
                        <v-card max-width="400" class="mx-auto">
                            <v-card-text>
                                <v-list dense>
                                    <v-list-item>
                                        <v-list-item-content>Status de production:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{this.ship.production_status}}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Type:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{ this.ship.type }}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Spécialitée:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{ this.ship.focus }}</v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-card-text>
                        </v-card>
                        <v-card-title>Fabriquant</v-card-title>
                        <v-card
                                class="mx-auto"
                                max-width="400"
                        >
                            <v-img
                                    class="white--text align-end"
                                    height="250"
                                    :src="this.ship.manufacturer.media[0].images.cover"
                            >
                                <v-divider></v-divider>
                            </v-img>
                            <v-card-title>{{this.ship.manufacturer.name}}</v-card-title>
                            <v-card-subtitle>{{this.ship.manufacturer.code}}</v-card-subtitle>
                            <v-card-text class="text--primary">
                                <div>Known for {{this.ship.manufacturer.known_for}}</div>
                            </v-card-text>
                        </v-card>
                    </v-card>
                </v-tab-item>
                <v-tab-item
                        value='tab-2'
                >
                    <v-card flat>
                        <v-card-text>
                            Avionic <v-divider></v-divider>
                            <v-expansion-panels
                                    popout
                                    multiple
                                    focusable
                                    hover
                                    tile
                            >
                                <ExpansionPanel icon="computer" name="Ordinateur de bord" :composants="this.ship.compiled.RSIAvionic.computers"></ExpansionPanel>
                                <ExpansionPanel name="Radar" :composants="this.ship.compiled.RSIAvionic.radar"></ExpansionPanel>
                            </v-expansion-panels>
                            Modules <v-divider></v-divider>
                            <v-expansion-panels
                                    popout
                                    multiple
                                    focusable
                                    hover
                                    tile
                            >
                                <ExpansionPanel name="Refroidisseur" :composants="this.ship.compiled.RSIModular.coolers"></ExpansionPanel>
                                <ExpansionPanel name="Batterie electrique" :composants="this.ship.compiled.RSIModular.power_plants"></ExpansionPanel>
                                <ExpansionPanel name="Générateur de bouclier" :composants="this.ship.compiled.RSIModular.shield_generators"></ExpansionPanel>
                            </v-expansion-panels>
                            Propulsion <v-divider></v-divider>
                            <v-expansion-panels
                                    popout
                                    multiple
                                    focusable
                                    hover
                                    tile
                            >
                                <ExpansionPanel name="Prises carburant" :composants="this.ship.compiled.RSIPropulsion.fuel_intakes"></ExpansionPanel>
                                <ExpansionPanel name="Réservoir de carburant" :composants="this.ship.compiled.RSIPropulsion.fuel_tanks"></ExpansionPanel>
                                <ExpansionPanel name="Module de saut" :composants="this.ship.compiled.RSIPropulsion.jump_modules"></ExpansionPanel>
                                <ExpansionPanel name="Lecteur quantique" :composants="this.ship.compiled.RSIPropulsion.quantum_drives"></ExpansionPanel>
                                <ExpansionPanel name="Réservoir quantique" :composants="this.ship.compiled.RSIPropulsion.quantum_fuel_tanks"></ExpansionPanel>
                            </v-expansion-panels>
                            Propulseur <v-divider></v-divider>
                            <v-expansion-panels
                                    popout
                                    multiple
                                    focusable
                                    hover
                                    tile
                            >
                                <ExpansionPanel name="Propulseur principal" :composants="this.ship.compiled.RSIThruster.main_thrusters"></ExpansionPanel>
                                <ExpansionPanel name="Propulseur de manoeuvre" :composants="this.ship.compiled.RSIThruster.maneuvering_thrusters"></ExpansionPanel>
                            </v-expansion-panels>
                            Armes <v-divider></v-divider>
                            <v-expansion-panels
                                    popout
                                    multiple
                                    focusable
                                    hover
                                    tile
                            >
                                <ExpansionPanel name="Missiles" :composants="this.ship.compiled.RSIWeapon.missiles"></ExpansionPanel>
                                <ExpansionPanel name="Tourelles" :composants="this.ship.compiled.RSIWeapon.turrets"></ExpansionPanel>
                                <ExpansionPanel name="Mitrailleuses" :composants="this.ship.compiled.RSIWeapon.weapons"></ExpansionPanel>
                                <ExpansionPanel name="Items" :composants="this.ship.compiled.RSIWeapon.utility_items"></ExpansionPanel>
                            </v-expansion-panels>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
               <v-tab-item
                        value='tab-3'
                >
                    <v-card flat>
                        <v-card-title>Dimensions</v-card-title>
                        <v-card max-width="400" class="mx-auto">
                            <v-card-text>
                                <v-list dense>
                                    <v-list-item>
                                        <v-list-item-content>Taille:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{ this.ship.size }}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Capacité cargo:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{ this.ship.cargocapacity }}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Hauteur:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{this.ship.height}}m</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Longueur:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{ this.ship.length }}m</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Largeur:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{ this.ship.beam }}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Masse:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{ this.ship.mass }}kg</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Min crew:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{ this.ship.min_crew }}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Max crew:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{ this.ship.max_crew }}</v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-card-text>
                        </v-card>
                        <v-card-title>Vitesse</v-card-title>
                        <v-card max-width="400" class="mx-auto">
                            <v-card-text>
                                <v-list dense>
                                    <v-list-item>
                                        <v-list-item-content>Vitesse SCM:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{ this.ship.scm_speed }}m/s</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Vitesse post-combustion:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{this.ship.afterburner_speed}}m/s</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>xAxis acceleration:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{ this.ship.xaxis_acceleration }}m/s</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>yAxis acceleration:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{ this.ship.yaxis_acceleration }}m/s</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>zAxis acceleration:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{ this.ship.zaxis_acceleration }}m/s</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Min crew:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{ this.ship.min_crew }}</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>Max crew:</v-list-item-content>
                                        <v-list-item-content class="align-end">{{ this.ship.max_crew }}</v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-card-text>
                        </v-card>
                    </v-card>
            </v-tab-item>
            </v-tabs-items>
        </v-card>
    </div>
</template>

<script>

    import Api from '../services/api-service';
    import ExpansionPanel from "./ExpansionPanel";

    export default {
        name: "ShipInfo",
        components: {ExpansionPanel},
        created() {
          this.id = this.$route.params.name;
          Api.getShipById(this.id).then((data) => {
              // eslint-disable-next-line no-console
              console.log(data);
              if(data.data[0].media[0].images.banner.search('https') !== 0) {
                  data.data[0].media[0].images.banner = "https://robertsspaceindustries.com" + data.data[0].media[0].images.banner;
              }
              if(data.data[0].manufacturer.media[0].images.cover.search('https') !== 0) {
                  data.data[0].manufacturer.media[0].images.cover = "https://robertsspaceindustries.com" + data.data[0].manufacturer.media[0].images.cover;
              }
              this.ship = data.data[0];
          })
        },
        data : () => ({
            id : "",
            ship : {},
            tab: null,
        })
    }
</script>

<style scoped>

</style>
