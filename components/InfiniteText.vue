<template>
    <div class="horizontal" :class="{ reverse : rev === true }">
        <h1>{{ text }}</h1>
        <h1>{{ text }}</h1>
        <h1>{{ text }}</h1>
        <h1>{{ text }}</h1>
        <h1>{{ text }}</h1>
        <h1>{{ text }}</h1>
    </div>
</template>

<script>
    export default {
        props: ['rev', 'text']
    }
</script>

<style lang="scss" scoped>
.horizontal {
    max-width: 100%;
    display: flex;
    white-space: nowrap;
    overflow: hidden;
    cursor: default;

    h1 {
        text-transform: uppercase;
        font-size: 64px;
        animation: 24s infinite linear xscroll;
        -webkit-animation: 24s infinite linear xscroll;
        -webkit-backface-visibility: hidden;
        -webkit-transform-style: preserve-3d;
        padding-right: 12px;
        line-height: .8em;
    }
}

.reverse h1 {
    animation: 24s infinite linear xscroll;
    -webkit-animation: 24s infinite linear xscroll;
    animation-direction: reverse;
}

@keyframes xscroll {
    from { transform: translateX(0%);}
    to { transform: translateX(-100%);}
}

@-webkit-keyframes xscroll {
    from { -webkit-transform: translateX(0%);}
    to { -webkit-transform: translateX(-100%);}
}
</style>