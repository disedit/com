<template>
  <section class="posts">
    <div class="container-lg">
      <h3>Notícies</h3>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <nuxt-link :to="`/noticies/${post.slug}`">
            <img v-if="image(post)" :src="image(post)" :alt="altText(post)" />
            <span>{{ post.date }}</span>
            <h3 v-html="post.title.rendered" />
            <p v-html="post.excerpt.rendered" />
          </nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import UtilsMixin from '@/mixins/utils-mixin'

export default {
  mixins: [UtilsMixin],

  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>
