<template>
    <section class="section__intro">
        <span class="job_tags">
            <p>Developer</p>
            <p>&</p>
            <p>Designer</p>
        </span>
        <p class="brief_description">This is my first portfolio where I strive to show my personality and love in combining the world of arts, graphics and animation with web development. I am passionate in making neat interactive websites. I usually work with SMEs to help build a customised and brand empowering identity through web.</p>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.section__intro {
    display: flex;
    flex-direction: column;
}

.job_tags {
    position: relative;
    height: 20vw;
    width: 40vw;
    align-self: flex-end;
    p {
        position: absolute;
        top: 0;
        left: 0;
        text-transform: uppercase;
        font-size: 4vw;
        font-family: 'Butler';
        font-weight: normal;
        font-style: normal;

        &:nth-child(2) {
            font-size: 8vw;
            top: 2vw;
            left: 24vw;
        }

        &:last-child {
            top: 10vw;
            left: 18vw;
        }
    }
}

.brief_description {
    text-align: justify;
    width: 60vmin;
    line-height: 1rem;
    transform: translate(14vw, -12vw);
}
</style>