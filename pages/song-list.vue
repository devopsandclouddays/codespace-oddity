<template>
  <v-row>
    <v-col class="text-center">
      <v-data-table
        :headers="headers"
        :items="songs"
        class="elevation-1"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData ({ params, $axios }) {
    const resp = await $axios.$get('/db-api/allSongs')
    const songs = resp.data
    return { songs }
  },
  data () {
    return {
      headers: [
        { text: 'Title', value: 'song' },
        { text: 'Album', value: 'album' },
        { text: 'Year', value: 'year' }
      ]
    }
  }
}
</script>
