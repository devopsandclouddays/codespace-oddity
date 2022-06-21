<template>
  <v-row>
    <v-col class="text-center">
      ${{ post.data }}
    </v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData ({ params, $axios }) {
    const post = await $axios.$get('/db-api/testDocument')
    return { post }
  }
}
</script>
