<template>
    <ul>
        <li><NuxtLink to="/">about</NuxtLink></li>
        <li><NuxtLink to="/work">work</NuxtLink></li>
        <li><NuxtLink to="/tutor">tutor</NuxtLink></li>
        <li><NuxtLink to="/writing">writing</NuxtLink></li>
        <li><NuxtLink to="/contact">contact</NuxtLink></li>
    </ul>
</template>

<style lang="scss" scoped>
ul {
    display: flex;
    background: var(--candy);

    li {
        a {
            text-decoration: none;
            font-weight: bold;
            padding: 16px;
            position: relative;

            &:hover,
            &:focus {
                color: var(--ivory);
            }

            &.nuxt-link-exact-active {
                color: var(--ivory);

                // ellipse
                &::after {
                    position: absolute;
                    width: 100%;
                    height: 50%;
                    top: 20%;
                    right: 0%;
                    content: "";
                    border: 2px solid var(--yellow);
                    border-radius: 100% ;
                    // transform: rotateZ(-15deg);
                    animation:spin 2s linear infinite;
                }
            }
        }
    }
}

@keyframes spin {
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@media screen and (max-width: 728px){
    li a {
        font-size: 12px;
    }
}
</style>