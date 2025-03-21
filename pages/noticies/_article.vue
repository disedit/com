<template>
  <article class="article">
    <com-title class="article-title">
      <template #overtitle>
        <nuxt-link to="/noticies"
          >Notícies /
          <time class="article-date">{{
            article.date | formatDate
          }}</time></nuxt-link
        >
      </template>
      <span v-html="article.title.rendered" />
    </com-title>
    <div class="article-container container-lg">
      <div class="article-info">
        <div class="article-picture">
          <img :src="image(article)" alt="" />
        </div>
      </div>
      <div class="article-content">
        <div v-html="article.content.rendered" />
      </div>
    </div>
  </article>
</template>

<script>
import he from 'he'
import dayjs from 'dayjs'
import 'dayjs/locale/ca'
import UtilsMixin from '@/mixins/utils-mixin'

export default {
  filters: {
    formatDate(date) {
      return dayjs(date).locale('ca').format('D MMMM YYYY')
    },
  },
  mixins: [UtilsMixin],

  async asyncData({ $api, params }) {
    const { data: article } = await $api.post(params.article)
    return { article: article[0] }
  },

  head() {
    return {
      title: `${he.decode(
        this.article.title.rendered
      )} - Col·lectiu Ovidi Montllor`,
    }
  },
}
</script>

<style lang="scss" scoped>
.article {
  background: $white;

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
    top: 16rem;
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

  &-date {
    text-transform: lowercase;
  }
}

@include media-breakpoint-down(xl) {
  ::v-deep .com-title {
    padding-bottom: 10rem;
  }
  .article {
    &-container {
      grid-template-columns: 1fr;
    }

    &-content {
      grid-row: 2 / 2;
      grid-column: 1 / 1;
    }

    &-info {
      grid-row: 1 / 1;
      grid-column: 1 / 1;
      transform: translateY(0);
      margin-top: -9rem;
      margin-bottom: -3.5rem;
    }

    &-picture {
      margin: 0 -0.75rem;
    }
  }
}

::v-deep .com-title h1 {
  max-width: 700px;
}

::v-deep img {
  max-width: 100%;
  height: auto;
}
</style>

<style lang="scss">
.wp-block-image img {
  width: 100%;
}
</style>
