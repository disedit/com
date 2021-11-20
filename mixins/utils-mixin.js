export default {
  methods: {
    image(post) {
      if (!post._embedded) {
        return false
      }

      return post._embedded['wp:featuredmedia'][0].source_url
    },
    altText(post) {
      if (!post._embedded) {
        return false
      }

      return post._embedded['wp:featuredmedia'].alt_text
    },
  },
}
