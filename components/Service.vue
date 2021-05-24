<template>
    <section class="section__service">
        <div class="service_title">
            <Title :title="'service'" />
        </div>
        <Services class="service_list"/>
    </section>
</template>

<style lang="scss" scoped>
.section__service {
    width: 100%;
    position: relative;
}

.service_title {
    position: absolute;
    top: -5vw;
    left: 5vw;
    // width: 100%;
    // height: 100%;
    // background-color: var(--charcoal);
    // -webkit-mask-image:  url('~assets/circle_cloud.svg');
    // mask-image:  url('~assets/circle_cloud.svg');
}

.service_list {
    position: absolute;
    height: 100%;
    width: 100%;
}
</style>