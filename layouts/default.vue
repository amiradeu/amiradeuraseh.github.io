<template>
    <div
        class="default_grid_layout"
        :class="{ navOpen: state === true}" >
        <HorizontalNavigation
            class="navigation__horizontal"
            @navOpen="updateNavState" />
        <Nuxt class="nuxt"/>
        <VerticalNavigation class="navigation__vertical" />
        <Footer class="footer" />
    </div>
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
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
}

a {
    color: var(--grey);
}

ul {
    list-style: none;
}

.navOpen {
    .nuxt, .footer {
        display: none;
    }
}

.default_grid_layout {
    display: grid;
    min-height: 100vh;
    grid-template-columns: minmax(0, 1fr) min-content;    
    grid-template-rows: min-content auto min-content;
    grid-template-areas:
    "nav_horizontal nav_vertical" 
    "nuxt nav_vertical"
    "footer nav_vertical";

    .navigation__horizontal {
        grid-area: nav_horizontal;
    }

    .nuxt {
        grid-area: nuxt;
        padding: 24px 0;
    }

    .navigation__vertical {
        grid-area: nav_vertical;
    }

    .footer {
        grid-area: footer;
    }
}

/* // ============================================== // */
/* // ============ MOBILE & TABLET view ============ // */
/* // ============================================== // */
@media screen and (max-width: 768px){
    .default_grid_layout {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100vh;

        .navigation__vertical {
            display: none !important;
        }
    }
}
</style>
