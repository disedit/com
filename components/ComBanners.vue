<template>
  <header class="banners">
    <client-only>
      <carousel :per-page="1" :pagination-enabled="false">
        <slide
          v-for="banner in banners"
          :key="banner.id"
          :class="['banner', `banner-${banner.acf.type}`]"
        >
          <a
            :href="banner.acf.link.url"
            :target="banner.acf.link.target"
            @click.prevent="handleBannerClick($event)"
          >
            <div class="banner-container container-lg">
              <div class="banner-text">
                <div class="container-lg">
                  <h3>{{ banner.acf.title }}</h3>
                  <p>
                    {{ banner.acf.text }}
                  </p>
                </div>
              </div>
              <div class="banner-image">
                <img :src="image(banner)" :alt="altText(banner)" width="100%" />
              </div>
            </div>
          </a>
        </slide>
      </carousel>
    </client-only>
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

  methods: {
    handleBannerClick(e) {
      console.log('click')
    },
  },
}
</script>

<style lang="scss" scoped>
.banners {
  background: $black;
  border-bottom: 4px $white solid;
}

.banner {
  display: flex;
  position: relative;
  min-height: 100vh;
  width: 100%;

  a {
    flex-grow: 1;

    &:hover {
      text-decoration: none;
    }
  }

  &-text {
    color: $white;

    h3 {
      font-family: $font-family-headings-wide;
      font-size: calc(1.5rem + 1.75vw);
      line-height: 1.1;
      margin-bottom: 1rem;
    }

    p {
      font-size: calc(0.85rem + 0.5vw);
    }
  }
}

.banner-full {
  .banner-text {
    position: absolute;
    bottom: 2rem;
    left: 0;
    right: 0;
    z-index: 10;
  }

  .banner-image {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.banner-square {
  background: $primary;

  .banner-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    align-items: end;
    height: 100%;
    padding-top: $navbar-safe-area;
    padding-bottom: 10vh;
  }

  .banner-text {
    h3,
    p {
      max-width: 40%;
    }

    .container-lg {
      padding: 0;
    }
  }

  .banner-image {
    img {
      border-radius: 4.5rem 4.5rem 4.5rem 0;
      aspect-ratio: 1 / 1;
      object-fit: cover;
    }
  }

  &:hover h3 {
    text-decoration: underline;
    text-decoration-color: rgba($white, 0.25);
  }
}

@include media-breakpoint-down(md) {
  .banner-square {
    .banner-container {
      grid-template-columns: 1fr;
    }

    .banner-text {
      grid-row: 2;
    }

    .banner-image {
      grid-row: 1;
    }
  }
}
</style>
