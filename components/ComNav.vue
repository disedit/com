<template>
  <nav>
    <nuxt-link to="/">COM</nuxt-link>
    <ul>
      <li v-for="item in menu.items" :key="item.id">
        <nuxt-link :to="`/${item.object_slug}`">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    menu() {
      return this.$store.state.menu
    },
  },
}
</script>
