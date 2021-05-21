<template>
    <nav class="nav__sidebar" aria-label="nav-vertical">
        <NuxtLink to="/">about</NuxtLink>
        <NuxtLink to="/work">work</NuxtLink>
        <NuxtLink to="/tutor">tutor</NuxtLink>
        <NuxtLink to="/writing">writing</NuxtLink>
        <NuxtLink to="/contact">contact</NuxtLink>
    </nav>
</template>

<style lang="scss" scoped>
.nav__sidebar {
    writing-mode: vertical-rl;
    border-left: 2px solid var(--grey);

    width: fit-content;
    display:flex;
    align-items:center;
    justify-content: center;

    a {
        text-decoration: none;
        padding: 16px;
        position: relative;
        font-weight: bold;

        &:hover, &:active {
            color: var(--green);
        }

        &.nuxt-link-exact-active {
            color: var(--green);

            // ellipse
            &::after {
                position: absolute;
                width: 50%;
                height: 100%;
                top: 0%;
                left: 22%;
                content: "";
                border: 1px solid var(--green);
                border-radius: 100% ;
            }
        }
    }
}

@keyframes yscroll {
    from { transform: translateY(0%);}
    to { transform: translateY(-100%);}
}
</style>