<template>
    <nav
        class="nav__topbar"
        aria-label="nav-horizontal">
        <div class="b-container">
            <NuxtLink to="/" class="home"><logo class="brand_logo" /></NuxtLink>
        </div>
    </nav>
</template>

<script>
import logo from "~/assets/brand_logo.svg?inline"
    export default {
        components: { logo }
    }
</script>

<style lang="scss" scoped>
.nav__topbar {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 12vh auto;
    align-items: center;
    justify-items: center;
    color: var(--white);
}

.b-container {
    width: 100%;
    height: 100%;
    padding: 0 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;

    .brand_logo {
        height: 100px;
        width: fit-content;
        max-width: 100px;
    }
}

// mobile
@media screen and (max-width: 728px){
    .b-container {
        .brand_logo {
            height: 50px;
        }     
    }
}
</style>