<template>
  <main :class="['artist', { scrolled }]">
    <com-title class="artist-title">
      <template #overtitle
        ><nuxt-link to="/artistes" class="artist-section"
          >Artistes</nuxt-link
        ></template
      >
      <div class="artist-name" v-html="artist.title.rendered" />
    </com-title>
    <com-title class="artist-mock" aria-hidden="true">
      <template #overtitle
        ><nuxt-link to="/artistes" class="artist-section"
          >Artistes /</nuxt-link
        ></template
      >
      <div class="artist-name" v-html="artist.title.rendered" />
    </com-title>
    <div class="artist-container container-lg">
      <div class="artist-info">
        <div class="artist-picture">
          <img :src="image(artist)" alt="" />
          <ul class="artist-social">
            <li v-if="artist.acf.website">
              <a
                :href="artist.acf.website"
                title="Pàgina web"
                target="_blank"
                rel="noopener"
              >
                <fa :icon="['far', 'globe']" />
              </a>
            </li>
            <li v-if="artist.acf.spotify">
              <a
                :href="artist.acf.spotify"
                title="Spotify"
                target="_blank"
                rel="noopener"
              >
                <fa :icon="['fab', 'spotify']" />
              </a>
            </li>
            <li v-if="artist.acf.instagram">
              <a
                :href="artist.acf.instagram"
                title="Instagram"
                target="_blank"
                rel="noopener"
              >
                <fa :icon="['fab', 'instagram']" />
              </a>
            </li>
            <li v-if="artist.acf.twitter">
              <a
                :href="artist.acf.twitter"
                title="Twitter"
                target="_blank"
                rel="noopener"
              >
                <fa :icon="['fab', 'twitter']" />
              </a>
            </li>
            <li v-if="artist.acf.facebook">
              <a
                :href="artist.acf.facebook"
                title="Facebook"
                target="_blank"
                rel="noopener"
              >
                <fa :icon="['fab', 'facebook']" />
              </a>
            </li>
            <li v-if="artist.acf.youtube">
              <a
                :href="artist.acf.youtube"
                title="YouTube"
                target="_blank"
                rel="noopener"
              >
                <fa :icon="['fab', 'youtube']" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="artist-content">
        <div v-html="artist.content.rendered" />
        <div class="artist-video embed-responsive embed-responsive-16by9">
          <iframe
            class="embed-responsive-item"
            width="560"
            height="315"
            :src="`https://www.youtube.com/embed/${youtubeVideoId}`"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import he from 'he'
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

  head() {
    return {
      title: `${he.decode(
        this.artist.title.rendered
      )} - Col·lectiu Ovidi Montllor`,
    }
  },

  computed: {
    youtubeVideoId() {
      return this.getYoutubeVideoId(this.artist.acf.yt_video)
    },
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      this.scrolled = scrollTop > 125
    },

    getYoutubeVideoId(url) {
      let videoId = ''
      url = url
        .replace(/(>|<)/gi, '')
        .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/)

      if (url[2] !== undefined) {
        videoId = url[2].split(/[^0-9a-z_-]/i)
        videoId = videoId[0]
      } else {
        videoId = url
      }

      return videoId
    },
  },
}
</script>

<style lang="scss" scoped>
.artist {
  position: relative;
  background: $white;

  &-section {
    position: relative;
    overflow: hidden;
    max-height: 1.5rem;
    transition: 0.25s ease;
  }

  &-title {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    z-index: 10;

    .artist-section {
      z-index: 20;
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

  &-video iframe {
    border-radius: 1rem;
  }

  &.scrolled {
    .artist {
      &-title {
        position: fixed;
        top: 3.5rem;
        background: $primary;
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
    font-size: 1.15rem;
    line-height: 1.75;

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

@include media-breakpoint-down(xl) {
  .artist {
    &-container {
      grid-template-columns: 1fr;
      gap: 0;
    }

    &-content {
      grid-row: 2 / 2;
      grid-column: 1 / 1;
      padding: 0;
    }

    &-info {
      grid-row: 1 / 1;
      grid-column: 1 / 1;
      transform: translateY(0);
      margin-top: 0;
      z-index: 1;

      &::before {
        content: '';
        display: block;
        background: $primary;
        position: absolute;
        top: 0;
        left: -0.75rem;
        right: -0.75rem;
        height: 3rem;
      }
    }

    &-picture {
      margin: 0 -0.75rem;
    }
  }
}

.embed-responsive {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
  margin-top: 2rem;

  iframe {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  &::before {
    display: block;
    content: '';
    padding-top: 56.25%;
  }
}
</style>
