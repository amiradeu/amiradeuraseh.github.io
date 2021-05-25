<template>
  <div>
        <Profile class="main_section"/>
        <!-- <Service /> -->
        <Socials />
        <Skill />
        <Email />
        <Footer />
  </div>
</template>
<script>

export default {
}
</script>
<style lang="scss" scoped>
div > *:not(footer) {
    margin: 0 0 24px 0;
}

.main_section {
    padding-top: 12vh;
}
</style>