<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div @click="$router.push('/')" class="d-flex align-center">
        <v-btn text>
          <span class="mr-2">Driving Data Warehouse</span>
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-btn @click="$router.push('/about')" target="_blank" text>
        <span class="mr-2">Collection List</span>
        <!-- <v-icon>mdi-open-in-new</v-icon> -->
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
