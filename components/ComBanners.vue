<template>
  <header class="banners">
    <ul>
      <li v-for="banner in banners" :key="banner.id">
        <a :href="banner.acf.link.url" :target="banner.acf.link.target">
          <img :src="image(banner)" :alt="altText(banner)" width="100%" />
          <h3>{{ banner.acf.title }}</h3>
          <p>
            {{ banner.acf.text }}
          </p>
        </a>
      </li>
    </ul>
  </header>
</template>

<script>
import UtilsMixin from '@/mixins/utils-mixin'

export default {
  mixins: [UtilsMixin],
  props: {
    banners: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.banners {
  background: $black;
  min-height: calc(100vh - 2rem);
}
</style>
