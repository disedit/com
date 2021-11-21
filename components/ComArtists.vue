<template>
  <div class="artists">
    <ul>
      <li v-for="artist in artists" :key="artist.id">
        <nuxt-link :to="`artistes/${artist.slug}`">
          <span v-html="artist.title.rendered" />
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import UtilsMixin from '@/mixins/utils-mixin'

export default {
  mixins: [UtilsMixin],
  props: {
    artists: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.artists {
  background: $primary;
}
</style>
