<template>
    <div class="profile_header">
        <h1>Amira Deuraseh</h1>
        <h2>Creative <span id="dev">Developer</span> based in Malaysia</h2>
        <h4>Designer & Developer</h4>
        <p>motion animation, ui/ux</p>
        <p>available for hire</p>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
div {
    display: grid;
    justify-items: center;
    text-align: center;
}

img {
    border-radius:50%;
    height: 100px;
    width: 100px;
}

h1, h2, h4 {
    text-transform: uppercase;

    // #dev {
    //     -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
    //     -webkit-text-stroke-width: 1px;
    //     -webkit-text-stroke-color: black;
    // }
}
</style>