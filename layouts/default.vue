<template>
    <main
        class="main__layout"
        :class="{ navOpen: state === true}" >
        <HorizontalNavigation
            class="navigation__sticky"
            @navOpen="updateNavState" />
        <!-- <Background class="background" /> -->
        <Nuxt class="nuxt" />
        <Scroll class="scroll__indicator" />
    </main>
</template>

<script>
export default {
    data() {
        return {
            state: false
        }
    },
    methods: {
        updateNavState( navState ) {
            this.state = navState;
        }
    }
}
</script>

<style lang="scss">
:root {
    --grey: #383838;
    --white: #F3F5F5;
    --gold: #DCCAA9;
    --yellow: #FFD074;
    --pink: #F6D2DE;
    --red: #B05C52;
    --green: #7CAD7C;
    --charcoal: #373633;
    --ivory: #F2F0E7;
    --candy: #FF2121;
}

html {
    font-family:
        'Source Sans Pro',
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        Roboto,
        'Helvetica Neue',
        Arial,
        sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    background: var(--ivory);
    color: var(--charcoal);
    scroll-behavior: smooth;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
}

html::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

a {
    color: var(--grey);
}

ul {
    list-style: none;
}

.main__layout {
    min-height: 100vh;
}

.navigation__sticky {
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
}

.nuxt {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    padding-top: 12vh;
}

.background {
    max-width: 100vw;
    height: 100vh;
    // overflow: hidden;
    position: absolute;
    z-index: -1;
}

.scroll__indicator {
    position: fixed;
    z-index: 1;
    bottom: 0;
    right: 0;
}

.navOpen {
    .nuxt {
        display: none;
    }
}

// mobile
@media screen and (max-width: 728px){
    .nuxt {
        padding-top: 16vh;
    }
}
</style>
