<template>
  <nav
    :class="[
      'nav',
      {
        scrolled: scrolled || notFrontPage,
        unscrolled: !scrolled && notFrontPage,
        expanded,
      },
    ]"
  >
    <div class="container-lg d-flex align-items-stretch">
      <div class="nav-logo">
        <nuxt-link to="/">
          <com-logo />
        </nuxt-link>
      </div>
      <div class="nav-burger d-xl-none">
        <button
          :class="[
            'hamburger',
            'hamburger--elastic',
            { 'is-active': expanded },
          ]"
          @click="toggleExpanded"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
          <span class="visually-hidden">Menu</span>
        </button>
      </div>
      <div class="nav-menu">
        <ul class="nav-menu-items">
          <li
            v-for="item in menu.items"
            :key="item.id"
            @click.capture="closeNav"
          >
            <nuxt-link :to="`/${item.object_slug}`">{{ item.title }}</nuxt-link>
          </li>
        </ul>
        <ul class="nav-menu-social">
          <li>
            <a
              href="https://www.facebook.com/collectiu.montllor/"
              title="Facebook"
              target="_blank"
              rel="noopener"
              ><fa :icon="['fab', 'facebook']"
            /></a>
          </li>
          <li>
            <a
              href="https://twitter.com/premisovidi"
              title="Twitter"
              target="_blank"
              rel="noopener"
              ><fa :icon="['fab', 'twitter']"
            /></a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/user/elCanaldelCOM"
              title="Youtube"
              target="_blank"
              rel="noopener"
              ><fa :icon="['fab', 'youtube']"
            /></a>
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

    notFrontPage() {
      return this.$route.name !== 'index'
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

    closeNav() {
      this.expanded = false
      document.body.classList.remove('nav-expanded')
    },

    toggleExpanded(state) {
      this.expanded = !this.expanded

      if (this.expanded) {
        document.body.classList.add('nav-expanded')
      } else {
        document.body.classList.remove('nav-expanded')
      }
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

    svg {
      display: block;
      transition: 0.25s ease;
      height: 5.5rem;
      margin: 1rem 0;

      &::v-deep .long-name {
        transition: 0.25s ease;
      }
    }
  }

  &-menu {
    display: flex;
    align-items: center;

    &-items,
    &-social {
      display: flex;
      list-style: none;
      padding: 0;
      transition: 0.25s ease;

      a {
        display: flex;
        align-items: center;
        color: $white;
        text-decoration: none;
        font-size: 1.25rem;
        padding: 1.12rem 1rem;
        line-height: 1;
        border-radius: 0.5rem 0.5rem 0.5rem 0;
        transition: border-radius 0.25s ease;

        &:hover {
          background: $white;
          color: $primary;
        }
      }
    }

    &-items a {
      padding: 0.94rem 1rem 1.3rem 1rem;
    }

    li {
      display: flex;
      align-items: stretch;
    }
  }

  &.expanded {
    height: 100vh;
  }

  &.scrolled {
    background: $primary;

    .nav {
      &-logo {
        svg {
          height: 2.5rem;
          margin: 0.5rem 0;
          transform: translateY(0.25rem);

          &::v-deep .long-name {
            opacity: 0;
          }
        }
      }

      &-menu-items,
      &-menu-social {
        margin: 0;

        a {
          border-radius: 0;
        }
      }
    }
  }

  &.unscrolled {
    background: transparent;
  }
}

@include media-breakpoint-down(xl) {
  .nav {
    height: 3.5rem;

    &-logo {
      svg {
        height: 2.5rem;
        margin: 0.5rem 0;
        transform: translateY(0.25rem);

        &::v-deep .long-name {
          opacity: 0;
        }
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
          font-weight: bold;
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
