<template>
  <section :class="['posts', `posts-${layout}`]">
    <ul class="posts-list">
      <li v-for="post in posts" :key="post.id">
        <nuxt-link :to="`/noticies/${post.slug}`" class="post">
          <img
            v-if="image(post)"
            :src="image(post)"
            :alt="altText(post)"
            class="post-thumbnail"
          />
          <div v-else class="post-thumbnail placeholder"></div>
          <div class="post-details">
            <time class="post-date">{{ post.date | formatDate }}</time>
            <h3 class="post-title" v-html="post.title.rendered" />
          </div>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import dayjs from 'dayjs'
import 'dayjs/locale/ca'
import UtilsMixin from '@/mixins/utils-mixin'

export default {
  filters: {
    formatDate(value) {
      return dayjs(value).locale('ca').format('D MMMM YYYY')
    },
  },

  mixins: [UtilsMixin],

  props: {
    posts: {
      type: Array,
      required: true,
    },

    layout: {
      type: String,
      default: 'horizontal',
    },
  },
}
</script>

<style lang="scss" scoped>
.posts {
  .post {
    display: block;
    text-decoration: none;
    color: $black;

    &:hover {
      text-decoration: none;
      color: $primary;
    }

    &-thumbnail {
      aspect-ratio: 1 / 1;
      width: 100%;
      object-fit: cover;
      border-radius: 2rem 2rem 2rem 0;

      &.placeholder {
        background: #ccc;
      }
    }

    &-title {
      font-family: $font-family-headings-wide;
      font-weight: bold;
    }

    &-date {
      opacity: 0.5;
      font-size: 0.85rem;
    }
  }

  &-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
    gap: 2rem;
  }

  &-horizontal {
    .post {
      &-details {
        margin-top: 0.5rem;
      }
    }
  }

  &-vertical {
    transform: translateY(-4rem);

    .posts-list {
      grid-template-columns: 1fr;
    }

    .post {
      display: grid;
      grid-template-columns: 18.5rem 1fr;
      align-items: end;
      gap: 2rem;

      &-title {
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      @include media-breakpoint-down(md) {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
    }
  }
}
</style>
