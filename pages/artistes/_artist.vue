<template>
  <main :class="['artist', { scrolled }]">
    <com-title class="artist-title">
      <nuxt-link to="/artistes" class="artist-section">Artistes /</nuxt-link>
      <div class="artist-name" v-html="artist.title.rendered" />
    </com-title>
    <com-title class="artist-mock" aria-hidden="true">
      <nuxt-link to="/artistes" class="artist-section">Artistes /</nuxt-link>
      <div class="artist-name" v-html="artist.title.rendered" />
    </com-title>
    <div class="artist-container container-lg">
      <div class="artist-info">
        <div class="artist-picture">
          <img :src="image(artist)" alt="" />
          <ul class="artist-social">
            <li>
              <a :href="artist.acf.website" title="Pàgina web">
                <fa :icon="['far', 'globe']" />
              </a>
            </li>
            <li>
              <a :href="artist.acf.spotify" title="Spotify">
                <fa :icon="['fab', 'spotify']" />
              </a>
            </li>
            <li>
              <a :href="artist.acf.instagram" title="Instagram">
                <fa :icon="['fab', 'instagram']" />
              </a>
            </li>
            <li>
              <a :href="artist.acf.facebook" title="Twitter">
                <fa :icon="['fab', 'twitter']" />
              </a>
            </li>
            <li>
              <a :href="artist.acf.facebook" title="Facebook">
                <fa :icon="['fab', 'facebook']" />
              </a>
            </li>
            <li>
              <a :href="artist.acf.youtube" title="YouTube">
                <fa :icon="['fab', 'youtube']" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="artist-content">
        <div v-html="artist.content.rendered" />
        <div v-html="artist.content.rendered" />
        <div v-html="artist.content.rendered" />
        <div v-html="artist.content.rendered" />
        <div v-html="artist.content.rendered" />
        <div v-html="artist.content.rendered" />
        <div v-html="artist.content.rendered" />
      </div>
    </div>
  </main>
</template>

<script>
import UtilsMixin from '@/mixins/utils-mixin'

export default {
  mixins: [UtilsMixin],

  async asyncData({ $api, params }) {
    const { data: artist } = await $api.page(params.artist)
    return { artist: artist[0] }
  },

  data() {
    return {
      scrolled: false,
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      this.scrolled = scrollTop > 125
    },
  },
}
</script>

<style lang="scss" scoped>
.artist {
  position: relative;

  &-section {
    color: $black;
    font-size: 1rem;
    display: block;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    max-height: 1.5rem;
    transition: 0.25s ease;

    &:hover {
      opacity: 0.5;
    }
  }

  &-title {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    z-index: 10;

    .artist-section {
      z-index: 10;
    }
  }

  &-name {
    max-width: 600px;
    transition: 0.25s ease;
  }

  &-mock {
    .artist-name,
    .artist-section {
      visibility: hidden;
    }
  }

  &.scrolled {
    .artist {
      &-title {
        position: fixed;
        top: 3.5rem;
        background: rgba($primary, 0.9);
        backdrop-filter: blur(10px);
        padding: 0.5rem 0;

        .artist-name {
          font-size: 1.5rem;
        }

        .artist-section {
          max-height: 0;
        }
      }
    }
  }

  &-container {
    display: grid;
    grid-template-columns: 1fr 450px;
    gap: 3rem;
  }

  &-info {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    transform: translateY(-10rem);
    position: relative;
    z-index: 10;
  }

  &-picture {
    position: sticky;
    top: 14rem;
    z-index: 10000;

    img {
      width: 100%;
      aspect-ratio: 1 / 1;
      border-radius: 10% 10% 10% 0;
      object-fit: cover;
      object-position: center;
    }
  }

  &-content {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    padding: 2rem 0;

    &::v-deep p {
      max-width: 60ch;
    }
  }

  &-social {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    margin-top: 1rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      background: $primary;
      color: $white;
      border-radius: 10rem;
      height: 2em;
      width: 2em;
      font-size: 1.5rem;
      margin-right: 0.5rem;
      transition: 0.25s ease;

      &:hover {
        background: $black;
      }
    }
  }
}
</style>
