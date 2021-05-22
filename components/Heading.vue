<template>
    <h1>{{ title }}</h1>
</template>

<script>
    export default {
        props: ['title']
    }
</script>

<style lang="scss" scoped>
h1 {
    border: 1px solid var(--charcoal);
    padding: 12px;
    background-color: var(--ivory);
    color: var(--green);
    text-transform: uppercase;
    cursor: default;
}
</style>