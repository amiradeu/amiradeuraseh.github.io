<template>
    <a href="mailto:hello@amiradeuraseh.com">
        <contact class="contact_graphics" />
    </a>
</template>

<script>
    import contact from "~/assets/contact.svg?inline"

    export default {
        components: {
            contact
        }
    }
</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
    text-transform: uppercase;

    .contact_graphics {
        .text {
            fill: var(--green);
        }
    }

    &:hover,
    &:focus {
        .contact_graphics {
            .text {
                fill: var(--candy);
            }
        }
    }
}

.contact_graphics {
    width: 100%;
    transform: rotate3d(1, 1, -1, 45deg);

    // -webkit-transform: rotateX(21deg) rotateY(-19deg) rotateZ(70deg) skewX(-37deg) skewY(43deg);
    // -moz-transform: rotateX(21deg) rotateY(-19deg) rotateZ(70deg) skewX(-37deg) skewY(43deg);
    // -ms-transform: rotateX(21deg) rotateY(-19deg) rotateZ(70deg) skewX(-37deg) skewY(43deg);
    // -o-transform: rotateX(21deg) rotateY(-19deg) rotateZ(70deg) skewX(-37deg) skewY(43deg);
    // transform:  rotateX(21deg) rotateY(-19deg) rotateZ(70deg) skewX(-37deg) skewY(43deg);

    // transform: scale3d(1, 1, 1) rotateX(29deg) rotateY(-16deg) rotateZ(-216deg) translate3d(0px, 0px, 0px) skew(0deg, 0deg);
}

</style>