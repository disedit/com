<template>
  <footer class="footer">
    <div class="container-lg d-flex">
      <div class="footer-logo logo-com">
        <p>Una web de:</p>
        <img
          src="~assets/images/logo-com.svg"
          alt="Col·lectiu Ovidi Montllor"
        />
      </div>

      <div class="footer-logo logo-dipval">
        <p>Amb la col·laboració de:</p>
        <a href="https://dival.es" target="_blank" rel="noopener">
          <img
            src="~assets/images/logo-dipval.svg"
            alt="Diputació de València"
          />
        </a>
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
}

@include media-breakpoint-down(sm) {
  .footer .container-lg {
    flex-direction: column;

    .footer-logo {
      margin-right: 0;
      margin-bottom: 2rem;
    }
  }
}
</style>
