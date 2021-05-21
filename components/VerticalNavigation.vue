<template>
    <!-- <div><h1>testing</h1></div> -->
    <nav class="vertical" aria-label="nav-vertical">
        <div class="scroll" v-for="item in 5" :key="item.id">
            <ul class="text">
                <NuxtLink to="/">about</NuxtLink>
                <NuxtLink to="/work">work</NuxtLink>
                <NuxtLink to="/tutor">tutor</NuxtLink>
                <NuxtLink to="/writing">writing</NuxtLink>
                <NuxtLink to="/contact">contact</NuxtLink>
            </ul>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.vertical {
    height: 100vh;
    width: 64px;
    writing-mode: vertical-rl;
    
    background-color: var(--grey);
    color: var(--white);
    white-space: nowrap;
    overflow: hidden;
    
    display:flex;
    align-items:center;
    
    ul {
        padding: 0px;
    }

    .scroll  {
        a {
            text-decoration: none;
            color: var(--white);
            display: inline-block;
            padding-bottom: 24px;
            margin-bottom: 8px;
            position: relative;
            
            &.nuxt-link-exact-active {
                color: var(--green);

                // ellipse
                &::after {
                    position: absolute;
                    width: 120%;
                    height: 120%;
                    bottom: 0%;
                    content: "";
                    border: 1px solid var(--green);
                    border-radius: 100% ;
                }
            }

            &:hover {
                color: var(--green);
            }
        }
    
        .text {
            animation: 9s infinite linear yscroll;
            display: inline-block;
        }
    }
}

@keyframes yscroll {
    from { transform: translateY(0%);}
    to { transform: translateY(-100%);}
}
</style>