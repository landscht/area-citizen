<template>
    <v-expansion-panel>
        <v-expansion-panel-header>{{this.name}}</v-expansion-panel-header>
        <v-expansion-panel-content>
            <v-list
                    dense
                    v-for="(item,i) in this.composants"
                    :key="i"
            >
                {{i+1}}<v-divider></v-divider>
                <v-list-item>
                    <v-list-item-content>Classe:</v-list-item-content>
                    <v-list-item-content class="align-end">{{item.component_class}}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>Taille:</v-list-item-content>
                    <v-list-item-content class="align-end">{{ item.size }}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>Fabricant:</v-list-item-content>
                    <v-list-item-content class="align-end">{{ item.manufacturer }}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>Quantité:</v-list-item-content>
                    <v-list-item-content class="align-end">{{ item.mounts }}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>Modèle:</v-list-item-content>
                    <v-list-item-content class="align-end">{{ item.name }}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>Détails:</v-list-item-content>
                    <v-list-item-content class="align-end">{{ item.details }}</v-list-item-content>
                </v-list-item>
            </v-list>
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
    export default {
        props : {
            composants: [],
            name : String,
            icon : String
        },
        name: "ExpansionPanel"
    }
</script>

<style scoped>

</style>
