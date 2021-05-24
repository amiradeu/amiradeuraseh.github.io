<template>
    <div class="vert__zigzag">
        <div class="sidebyside">
            <div class="_vertset" v-for="col in title.length" :key="col.id">
                <p v-for="char in 100" :key="char.id">
                    {{ title.charAt(col-1) }}
                </p>
            </div>
        </div>
        <div class="shape"></div>
    </div>
</template>

<script>
    export default {
        props: ['title']
    }
</script>

<style lang="scss" scoped>
.vert__zigzag {
    position: relative;
}

.shape {
    position: absolute;
    height: 12vw;
    width: 12vw;
    border-radius: 50%;
    top: 2vw;
    left: 3vw;
    
    background-color: var(--candy);
    opacity: .8;
    z-index: -1;

    animation: bottomtop 1.5s ease-out;
}

.sidebyside {
    display: grid;
    grid-template-columns: repeat(50, 1fr);
    justify-items: center;
    overflow: hidden;
    height: 12vw;
}

p {
    font-weight: bold;
    font-size: 5vw;
    line-height: .8;
}

._vertset {
    animation: textslide 1.5s ease-in-out;

    &:nth-child(2n) {
        animation: slide 1.5s ease-in-out;
        transform: translateY(-208px);
    }

    &:nth-child(3n) {
        animation: textslide_neg 1.5s ease-in-out;
        transform: translateY(8px);
    }

}

@keyframes textslide {
    0% {
        transform: translateY(-100px);
    }
    100% {
        transform: translateY(0px);
    }
}

@keyframes slide {
    0% {
        transform: translateY(-100px);
    }
    100% {
        transform: translateY(-208px);
    }
}

@keyframes textslide_neg {
    0% {
        transform: translateY(-100px);
    }
    100% {
        transform: translateY(8px);
    }
}

@keyframes bottomtop {
    0% {
        top: 14vw;
        opacity: 0;
    }
    100% {
        top: 2vw;
        opacity: .8;
    }
}
</style>