<template>
    <div class="section__contact">
        <a href="mailto:hello@amiradeuraseh.com">
            <contact class="contact_graphics" />
        </a>
    </div>
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
.section__contact {
    display: grid;
    align-items: center;
    justify-content: center;
}

a {
    text-decoration: none;
    text-transform: uppercase;

    &:hover,
    &:focus {
        .contact_graphics {
            .text {
                fill: var(--green);
            }
        }
    }
}

.contact_graphics {
    width: 80vmin;
    height: fit-content;
    height: 40vmin;
    transform: rotate3d(1, 1, -1, 45deg);

    // -webkit-transform: rotateX(21deg) rotateY(-19deg) rotateZ(70deg) skewX(-37deg) skewY(43deg);
    // -moz-transform: rotateX(21deg) rotateY(-19deg) rotateZ(70deg) skewX(-37deg) skewY(43deg);
    // -ms-transform: rotateX(21deg) rotateY(-19deg) rotateZ(70deg) skewX(-37deg) skewY(43deg);
    // -o-transform: rotateX(21deg) rotateY(-19deg) rotateZ(70deg) skewX(-37deg) skewY(43deg);
    // transform:  rotateX(21deg) rotateY(-19deg) rotateZ(70deg) skewX(-37deg) skewY(43deg);

    // transform: scale3d(1, 1, 1) rotateX(29deg) rotateY(-16deg) rotateZ(-216deg) translate3d(0px, 0px, 0px) skew(0deg, 0deg);
    .text {
        fill: var(--charcoal);
    }
}

</style>