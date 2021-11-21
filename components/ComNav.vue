<template>
  <nav :class="['nav', { scrolled, expanded }]">
    <div class="container-lg d-flex align-items-stretch">
      <div class="nav-logo">
        <nuxt-link to="/">
          <img
            src="https://via.placeholder.com/200x100"
            alt="Col·lectiu Ovidi Montllor"
          />
        </nuxt-link>
      </div>
      <div class="nav-burger d-lg-none">
        <button
          :class="[
            'hamburger',
            'hamburger--elastic',
            { 'is-active': expanded },
          ]"
          @click="expanded = !expanded"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
          <span class="visually-hidden">Menu</span>
        </button>
      </div>
      <div class="nav-menu">
        <ul class="nav-menu-items">
          <li v-for="item in menu.items" :key="item.id">
            <nuxt-link :to="`/${item.object_slug}`">{{ item.title }}</nuxt-link>
          </li>
        </ul>
        <ul class="nav-menu-social">
          <li>
            <a href="" title="Facebook"><fa :icon="['fab', 'facebook']" /></a>
          </li>
          <li>
            <a href="" title="Twitter"><fa :icon="['fab', 'twitter']" /></a>
          </li>
          <li>
            <a href="" title="Instagram"><fa :icon="['fab', 'instagram']" /></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      expanded: false,
      scrolled: false,
    }
  },

  computed: {
    menu() {
      return this.$store.state.menu
    },
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      this.scrolled = scrollTop > 0
    },
  },
}
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: 0.25s ease;

  &-logo {
    margin-right: auto;

    img {
      display: block;
      transition: 0.25s ease;
      height: 4.5rem;
      margin: 0.75rem 0;
    }
  }

  &-menu {
    display: flex;
    align-items: stretch;

    &-items,
    &-social {
      display: flex;
      list-style: none;
      margin: 0.75rem 0;
      padding: 0;
      transition: 0.25s ease;

      a {
        display: flex;
        align-items: center;
        color: $white;
        text-decoration: none;
        font-size: 1.25rem;
        padding: 0.25rem 1rem;
        line-height: 1;
        transition: 0.25s ease;

        &:hover {
          background: rgba($black, 0.25);
        }
      }
    }

    li {
      display: flex;
      align-items: stretch;
    }
  }

  &.scrolled {
    background: $primary;

    .nav {
      &-logo {
        img {
          height: 2.5rem;
          margin: 0.5rem 0;
        }
      }

      &-menu-items,
      &-menu-social {
        margin: 0;
      }
    }
  }
}

@include media-breakpoint-down(lg) {
  .nav {
    &-logo {
      img {
        height: 2.5rem;
        margin: 0.5rem 0;
      }
    }

    &-burger {
      display: flex;
      align-items: stretch;
      transform: translateY(2px);
    }

    &-menu {
      display: block;
      position: fixed;
      top: 3rem;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 1rem;
      background: rgba($primary, 0.75);
      z-index: 900;
      transition: 0.2s ease;

      &-items {
        display: flex;
        justify-content: center;
        flex-direction: column;
        flex-grow: 1;
        background: $white;
        aspect-ratio: 1 / 1;
        max-height: calc(100vh - 8rem);
        border-radius: $brand-radius;
        transition: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        transform: scale(1);
        padding: 1rem;
        margin: 0;

        a {
          color: $black;
          font-family: $font-family-headings-wide;
          font-size: 1.5rem;
          padding: 0.75rem 1rem;
          flex-grow: 1;

          &:hover {
            background: transparent;
            color: $primary;
          }
        }
      }

      &-social {
        transition: 0.5s ease;
        margin: 0;

        a {
          padding: 1rem 1.5rem 0 0;
          font-size: 2rem;

          &:hover {
            background: transparent;
            color: $white;
          }
        }
      }
    }
    &:not(.expanded) &-menu {
      visibility: hidden;
      opacity: 0;

      .nav-menu-items {
        opacity: 0;
        transform: scale(0);
        transform-origin: top right;
      }

      .nav-menu-social {
        opacity: 0;
      }
    }

    &.expanded {
      background: $primary;
    }

    .container {
      position: relative;
      z-index: 1000;
    }
  }
}
</style>
