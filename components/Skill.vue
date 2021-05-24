<template>
    <section class="section__skill">
        <div class="skill_background">
            <div v-for="item in 3" :key="item.id">
                <InfiniteText :text="'software developer'" />
                <InfiniteText :text="'graphic design'" :rev="true" />
            </div>
        </div>
        <Skills class="skill_list" />
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.section__skill {
    position: relative;
    width: 100%;
    height: 320px;
    overflow: hidden;
}

.skill_background {
    position: absolute;
    height: 100%;
}

.skill_list {
    position: absolute;
}
</style>