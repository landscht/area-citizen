<template>
  <v-app>
    <v-navigation-drawer
      permanent
      app
      class="nav"
    >
      <v-list dense>
        <v-list-item to="/accueil">
          <v-list-item-action>
            <v-icon>dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Accueil</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/comparator">
          <v-list-item-action>
            <v-icon>show_chart</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Comparateur</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/ships">
          <v-list-item-action>
            <v-icon>flight_takeoff</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Les vaisseaux</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/verse">
          <v-list-item-action>
            <v-img height="30" width="20" src="./resources/logos/STARCITIZEN_WHITE.png"></v-img>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Le verse</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container
        fluid
      >
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

  import Api from './services/api-service'

export default {
  name: 'App',

  components: {

  },
  created() {
    Api.getShip();
  },
  data: () => ({
    drawer : true,
  }),
};
</script>

<style>
  .nav {
    background-image: url("resources/images/background_navigation_2.jpg");
    background-size: cover;
  }
</style>
