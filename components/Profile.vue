<template>
    <div>
        <section class="section__profile">
            <div class="full_name">
                <h1 class="first_name">Amira<radiant class="radiant" /></h1>
                <h1 class="last_name">Deuraseh</h1>
            </div>
            <p class="job_title"><em>Creative</em> Developer</p>
            <p class="location">Based in Malaysia</p>
            <div class="job_status"><span>available for hire</span></div>
            <liner class="line" />
        </section>
    </div>
</template>

<script>
import radiant from "~/assets/radiant_circle.svg?inline"
import liner from "~/assets/line.svg?inline"

    export default {
        components: {
            radiant,
            liner
        }
    }
</script>

<style lang="scss" scoped>
.section__profile {
    width: 100%;
    height: 100%;
}

h1 {
    font-family: 'Butler';
    font-size: 16vw;
    font-weight: 200;
    font-style: normal;
    text-transform: uppercase;
}

.full_name {
    display: flex;
    flex-direction: column;
    padding: 0 4vw;

    h1:last-child {
        align-self: flex-end;
    }
}

.first_name {
    position: relative;

    .radiant {
        position: absolute;
        content: "";
        top: 25%;
        left: 22%;
        height: 16vw;
        width: 16vw;
        z-index: -1;
    }
}

.job_title {
    font-family: 'Fanwood Text';
    font-size: 8vw;
    text-align: center;
}

.location {
    font-size: 2vw;
    text-align: center;
}

.job_status {
    font-size: 2vw;
    font-family: 'Butler';
    text-transform: uppercase;
    transform: translateX(70vw);

    span {
        position: relative;

        &:after {
            position: absolute;
            top: -70%;
            left: 0%;
            height: 220%;
            width: 100%;
            content: "";
            border: 1px solid var(--candy);
            border-radius: 50%;
            transform: rotate3d(1, 1, -1, 15deg);
            z-index: -1;
        }
    }
}

.line {
    width: 70%;
    height: 4vh;
}

// tablet, desktop
@media screen and (min-width: 1280px){
    .line {
        position: absolute;
        bottom: 5vh;
        left: 0;
        width: 70%;
        height: 10vh;
    }

    h1 {
        font-size: 12vw;
    }

    .first_name .radiant {
        top: 24%;
        left: 16%;
    }
    
    .job_title {
        font-size: 6vw;
    }
}
</style>