<template>
  <div>
        <a href="mailto:hello@amiradeuraseh.com">
            <span class="contact_image"></span>
        </a>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
    text-transform: uppercase;

    &:hover,
    &:focus {
        .contact_image {
            background: url('~assets/contact_green.svg') no-repeat center center;
        }
    }
}

.contact_image {
    background: url('~assets/contact_black.svg') no-repeat center center;
    display: block;
    height: 50vh;
    width: 100%;
    z-index: -1000;
}

</style>