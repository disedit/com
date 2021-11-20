<template>
  <div>
    Artista
    {{ artist }}
  </div>
</template>

<script>
export default {
  async asyncData({ $api, params }) {
    const { data: artist } = await $api.page(params.artist)
    return { artist }
  },
}
</script>
