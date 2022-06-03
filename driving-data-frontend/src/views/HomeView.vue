<template>
  <div>
    <!-- <v-layout align-center> -->
      <v-data-table :headers="headers" :items="collections" :items-per-page="5" class="elevation-1"></v-data-table>
    <!-- </v-layout> -->
  </div>
</template>

<script>
import { ApiService } from "../apis/ApiService";
const apiService = new ApiService();

export default {
  name: 'Home',
  data: () => ({
    collectionLists: [],
    headers: ["Rows", "Collection Name"]
  }),
  async created() {
    const request = await apiService.getCollection();
    this.collectionLists = request.data;
  },
}
</script>
