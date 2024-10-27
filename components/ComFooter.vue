<template>
  <footer class="footer">
    <div class="container-lg d-flex">
      <div class="footer-logo logo-com">
        <p>Una web de:</p>
        <com-logo />
      </div>

      <div class="footer-logo logo-dipval">
        <p>Amb la col·laboració de:</p>
        <div>
          <a href="https://dival.es" target="_blank" rel="noopener">
            <img
              src="~assets/images/logo-dipval.svg"
              alt="Diputació de València"
            />
          </a>
          <a
            href="https://www.caixapopular.es/"
            target="_blank"
            rel="noopener"
            class="ms-2"
          >
            <img
              src="~assets/images/logo-caixapopular.svg"
              alt="Caixa Popular"
            />
          </a>
        </div>
      </div>

      <div class="footer-links">
        <nuxt-link to="/politica-de-privadesa">
          Política de privadesa
        </nuxt-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
  background: $black;
  color: $white;
  padding: 2rem 0;
  font-size: 0.85rem;

  &-logo {
    margin-right: 4rem;

    img {
      height: 4rem;
      width: auto;
    }
  }

  &-links {
    margin-left: auto;
    align-self: flex-end;
    text-align: right;

    a {
      color: $white;
    }
  }
}

@include media-breakpoint-down(md) {
  .footer .container-lg {
    flex-direction: column;

    .footer-logo {
      margin-right: 0;
      margin-bottom: 2rem;
    }
  }
}
</style>
