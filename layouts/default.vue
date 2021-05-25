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
    overflow: hidden;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1;
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
</style>
