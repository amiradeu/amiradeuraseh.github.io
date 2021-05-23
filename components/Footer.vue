<template>
    <footer>
        <span class="highlight">Design</span> and <span class="highlight">Code</span> with <span id="love">♥︎</span> by 
        <a href="https://github.com/amiradeu/amiradeuraseh.github.io">
            Amira Deuraseh
        </a>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    text-align: center;
    padding-bottom: 12px;
}

#love {
    color: var(--candy);
}

a {
    color: var(--green);
}

a:hover, a:active {
    color: var(--candy);
}

.highlight {
    text-transform: lowercase;
    font-style: italic;
}
</style>