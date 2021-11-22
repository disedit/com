<template>
  <div :class="['artists', { hovering }]">
    <div class="artists-background" :style="{ backgroundImage }" />
    <div class="container-lg">
      <h2 class="artists-title">Artistes</h2>
      <div
        v-for="artistList in artistsByLetter"
        :key="artistList.letter"
        class="artists-letter"
      >
        <h3>{{ artistList.letter }}</h3>
        <ul class="artists-list">
          <li
            v-for="artist in artistList.artists"
            :key="artist.id"
            :class="[
              'artists-list-item',
              { hovering: hovering && hovering.id === artist.id },
            ]"
            @mouseover="hovering = artist"
            @mouseleave="hovering = null"
          >
            <nuxt-link :to="`artistes/${artist.slug}`">
              <span v-html="artist.title.rendered" />
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
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

  data() {
    return {
      hovering: null,
    }
  },

  computed: {
    artistsByLetter() {
      const artists = this.artists.reduce((list, artist) => {
        const letter = artist.title.rendered.charAt(0).toUpperCase()
        list[letter] = [].concat(list[letter] || [], artist)
        return list
      }, {})

      return Object.entries(artists).map(([letter, artists]) => ({
        letter,
        artists,
      }))
    },

    backgroundImage() {
      return this.hovering ? `url(${this.image(this.hovering)})` : null
    },
  },
}
</script>

<style lang="scss" scoped>
.artists {
  position: relative;
  background: $primary;
  min-height: 100vh;
  padding: 4vh 0;
  color: $white;

  &-title {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    transition: 0.25s ease;
  }

  .container-lg {
    position: relative;
    z-index: 10;
  }

  &-letter {
    margin-bottom: 2rem;

    h3 {
      font-size: 1.25rem;
      transition: 0.25s ease;
    }
  }

  &-list {
    list-style: none;
    margin: 0;
    padding: 0;
    max-width: 900px;

    &-item {
      display: inline-block;
      font-size: 1.5rem;

      a {
        color: $white;
        font-family: $font-family-headings-wide;
        text-decoration: none;
        transition: 0.25s ease;
      }

      &:not(:last-child)::after {
        content: ' / ';
        opacity: 0.5;
        margin: 0 0.75rem;
      }
    }
  }

  &-background {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    transition: opacity 0.25s ease;
    opacity: 0;
    background-attachment: fixed;
    background-size: cover;
    filter: grayscale(1);
    mix-blend-mode: multiply;
  }

  &.hovering {
    .artists-list-item:not(.hovering) a,
    .artists-letter h3,
    .artists-title {
      opacity: 0.25;
    }

    .artists-background {
      opacity: 1;
    }
  }
}
</style>
