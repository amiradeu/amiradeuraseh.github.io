<template>
    <ul>
        <li class="_dev">NuxtJs</li>
        <li class="_dev">Vue</li>
        <li class="_dev">React</li>
        <li class="_dev">Javascript</li>
        <li class="_dev">HTML5</li>
        <li class="_dev">CSS3 & SCSS</li>
        <li class="_design">Figma</li>
        <li class="_design">Illustrator</li>
        <li class="_dev">Kotlin</li>
        <li class="_dev">Android Development</li>
        <li class="_dev">C++</li>
        <li class="_dev">Java</li>
        <li class="_dev">Python</li>
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
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
}

li {
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
</style>