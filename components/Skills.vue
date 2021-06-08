<template>
    <ul>
        <li class="_dev">Android Kotlin</li>
        <li class="_dev">Android Jetpack</li>
        <li class="_dev">NuxtJS</li>
        <li class="_dev">Vue</li>
        <li class="_dev">React</li>
        <li class="_dev">Javascript</li>
        <li class="_dev">NodeJS</li>
        <li class="_dev">HTML5</li>
        <li class="_dev">CSS3 & SCSS</li>
        <li class="_design">Figma</li>
        <li class="_design">Illustrator</li>        
        <li class="_dev secondary">Java</li>
        <li class="_dev secondary">Python</li>
        <li class="_dev secondary">C++</li>
        <li class="_dev secondary">C</li>
    </ul>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
ul {
    display: flex;
    height: 100%;
    width: 100%;
    padding: 4vw;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
}

li {
    // font-family: 'Butler';
    // font-weight: 900;
    background-color: var(--ivory);
    border: 2px solid var(--grey);
    color: var(--grey);
    padding: 12px 24px;
    border-radius: 24px;
    margin: 4px 4px 0 0;
    text-transform: uppercase;
    font-weight: 500;

    &._dev {
        border-color: var(--charcoal);
        color: var(--charcoal);

        &.secondary {
            border-color: grey;
            color: grey;

            &:hover {
                background: grey;
                color: var(--white);
            }
        }
    }

    &._design {
        border-color: var(--red);
        color: var(--red);

        &:hover {
            background: var(--red);
        }
    }

    &:hover {
        background: var(--grey);
        color: var(--white);
        cursor: pointer;
    }
}

@media screen and (max-width: 728px){
    li {
        padding: 6px 12px;
    }
}
</style>