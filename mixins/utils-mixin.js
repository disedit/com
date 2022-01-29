export default {
  methods: {
    image(post) {
      if (post.acf && post.acf.photo) {
        return post.acf.photo
      }

      if (post._embedded) {
        return post._embedded['wp:featuredmedia'][0].source_url
      }

      return null
    },

    altText(post) {
      if (!post._embedded) {
        return ''
      }

      return post._embedded['wp:featuredmedia'].alt_text
    },
  },
}
