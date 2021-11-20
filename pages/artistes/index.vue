<template>
  <div>
    <com-artists :artists="artists" />
  </div>
</template>

<script>
export default {
  async asyncData({ $api }) {
    const { data: artists } = await $api.artists()
    return { artists }
  },
}
</script>
