<template>
    <div class="main_grid">
        <MobileNavigation class="mobile_navigation" />
        <Nuxt class="nuxt" />
        <Navigation class="navigation" />
        <Footer class="footer" />
    </div>
</template>

<style>
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

.main_grid {
    height: 100vh;
    display: grid;
    grid-template-columns: auto 48px;
    grid-template-rows: auto 32px;
    grid-template-areas: 
    "nuxt navigation"
    "footer navigation";
}

.nuxt {
    grid-area: nuxt;
    padding: 24px 0;
    align-self: center;
    justify-self: center;
}

.navigation {
    grid-area: navigation;
}

.mobile_navigation {
    grid-area: mobile_nav;
    display: none;
}

/* .mobile_navigation > * {
    display: none !important;
} */

.footer {
    grid-area: footer;
}

/* // ============================================== // */
/* // ============ MOBILE & TABLET view ============ // */
/* // ============================================== // */
@media screen and (max-width: 768px){
    .mobile_navigation {
        display: block;
    }

    .main_grid {
        grid-template-columns: 1fr;
        grid-template-rows: 10vh auto 32px;
        grid-template-areas: 
        "mobile_nav"
        "nuxt"
        "footer";
        
    }

    .navigation {
        display: none !important;
    }
}
</style>
