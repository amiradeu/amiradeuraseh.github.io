<template>
    <div class="horizontal">
        <h1>Amira Deuraseh</h1>
        <h1>Amira Deuraseh</h1>
        <h1>Amira Deuraseh</h1>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.horizontal{
    max-width: 100%;
    display: flex;
    white-space: nowrap;
    overflow: hidden;
    cursor: default;
}

h1 {
    text-transform: uppercase;
    font-size: 24vh;
    animation: 24s infinite linear xscroll;
    padding-right: 40px;
    line-height: .9;
}

@keyframes xscroll {
    from { transform: translateX(0%);}
    to { transform: translateX(-100%);}
}
</style>