<template>
  <v-row>
    <h1>{{ song.song }}</h1>
  </v-row>
</template>

<script>
export default {
  name: 'SongDetails',
  async asyncData ({ params, $axios, $route }) {
    const resp = await $axios.$get('/db-api/songById/' + $route.params.id)
    const song = resp.data
    return { song }
  }
}
</script>
