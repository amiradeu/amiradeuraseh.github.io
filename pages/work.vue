<template>
  <div>
        <ul>
            <li>Vue</li>
            <li>Android Kotlin</li>
            <li>Android Development</li>
            <li>React</li>
            <li>Javascript</li>
            <li>HTML,CSS, SCSS</li>
            <li>C++</li>
            <li>Java</li>
            <li>Python</li>
        </ul>
  </div>
</template>

<style lang="scss" scoped>
ul {
    display: flex;
    flex-wrap: wrap;
}

li {
    border: 2px solid var(--grey);
    color: var(--grey);
    padding: 12px 24px;
    border-radius: 24px;
    margin: 4px 4px 0 0;
    text-transform: uppercase;
    font-weight: 500;

    &:hover {
        background: var(--grey);
        color: var(--white);
        cursor: pointer;
    }
}
</style>