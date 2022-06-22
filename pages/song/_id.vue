<template>
  <v-container>
    <v-row>
      <h1>{{ song.song }}</h1>
    </v-row>
    <v-row>
      <h3>published in {{ song.year }} on {{ song.album }}</h3>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SongDetails',
  async asyncData ({ params, $axios }) {
    const resp = await $axios.$get('/db-api/song/' + params.id)
    const song = resp.data
    return { song }
  }
}
</script>
