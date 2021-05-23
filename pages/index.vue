<template>
  <div>
        <Heading v-bind:title="'about'" />
        <Socials />
        <Heading v-bind:title="'work'" />
        <Skills />
        <Heading v-bind:title="'contact'" />
        <Email />
        <Footer />
  </div>
</template>
<style lang="scss" scoped>
div > * {
    margin: 24px 0;
}
</style>