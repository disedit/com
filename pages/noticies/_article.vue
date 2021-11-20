<template>
  <div>
    {{ article }}
  </div>
</template>

<script>
export default {
  async asyncData({ $api, params }) {
    const { data: article } = await $api.post(params.article)
    return { article }
  },
}
</script>
