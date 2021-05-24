<template>
    <nav
        class="nav__topbar"
        aria-label="nav-horizontal"
        :class="{ open: selected === true}" >
        <div class="b-container" :class="{ open: selected === true}">
            <NuxtLink to="/" class="home"><logo class="brand_logo" /></NuxtLink>
            <div class="cloud_container">
                <div class="b-menu" @click="toggleNav">
                    <div class="b-bun b-bun--top"></div>
                    <div class="b-bun b-bun--mid"></div>
                    <div class="b-bun b-bun--bottom"></div>
                </div>
                <cloud class="clouds" />
            </div>
        </div>
        <div
            class="b-links" 
            :class="{ open: selected === true}"
            @click="toggleNav" >
            <div class="box-links"><NuxtLink to="/">about</NuxtLink></div>
            <div class="box-links"><NuxtLink to="/work">work</NuxtLink></div>
            <div class="box-links"><NuxtLink to="/tutor">tutor</NuxtLink></div>
            <div class="box-links"><NuxtLink to="/writing">writing</NuxtLink></div>
            <div class="box-links"><NuxtLink to="/contact">contact</NuxtLink></div>
        </div>
    </nav>
</template>

<script>
import cloud from "~/assets/circle_cloud.svg?inline"
import logo from "~/assets/brand_logo.svg?inline"

export default {
    components: { cloud, logo },
    data() {
        return {
            selected : false
        }
    },
    methods: {
        toggleNav() {
            this.selected = !this.selected;
            this.$emit("navOpen", this.selected);
        }
    }
}
</script>
<style lang="scss" scoped>
$b-height: 60px; //Height (and width) of the burger menu
$b-margin-top: 30px; //Burger menu margin (distance from top)
$b-margin-left: 30px; //Burger menu margin (distance from left)
$b-border-width: 2px; //Width of the borders and 'buns'
$b-bun-width: 25px; //Width of the 'buns'
$b-bun-height: $b-border-width; //Height of the 'buns'
$b-border-radius: 50%; //Change the border radius of the menu

$b-trans-speed: .4s; //Transition speed settings
$b-transition: all $b-trans-speed ease; //Transitions

$b-font-size: 24px; //Font size of brand and links
$b-font-family: Helvetica-Neue, Helvetica, Arial, sans-serif; //Font family of the brand and links
$b-font-weight: 300; //Font weight of brand and links
$b-txt-pad: 30px; //Left padding on both brand and links

$b-line-height: ($b-height / 2 - ($b-font-size / 2.8)); //Vertically centers brand to menu
$b-txt-pad-top: ($b-margin-top + $b-height + $b-txt-pad); //Top margin for first link element
$b-bun-width-half: ($b-bun-width / 2); //Half bun width used for calculation
$b-pad-left: ($b-height / 2 - $b-bun-width-half - 2); //Horizontally centers bun in menu
$b-pad-top: ($b-height / 2 - $b-bun-width-half); //Vertically centers bun in menu

.nav__topbar {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 12vh auto;
    align-items: center;
    justify-items: center;
    color: var(--white);
    background-image: linear-gradient(
            to bottom, 
            var(--grey), var(--grey) 50%, 
            transparent 50%,
            transparent);
    background-position: 0% 100%;
    background-size: 100% 200%;
    transition: all 1.5s cubic-bezier(.42,0,0,.67);

    &.open {
        height: 100vh;
        z-index: 9000;
        background-position: 0 0;   
    }
}

.b-container {
    width: 100%;
    height: 100%;
    padding: 0 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;

    .brand_logo {
        height: 100px;
        width: fit-content;
        max-width: 100px;
    }

    &.open {
        .brand_logo {
            .shapes {
                stroke: var(--ivory);
            }
        }

        background-color: transparent;

        .horizontal_links {
            display: none;
        }

        .b-bun--top {
            background: var(--candy);
            top: 5px;
            transform: rotate(30deg);
        }

        .b-bun--mid {
            opacity: 0;
        }

        .b-bun--bottom {
            background: var(--candy);
            top: -6px;
            transform: rotate(-30deg);
        }

        .cloud_container{
            .clouds {
                .outline {
                    fill: var(--black);
                    stroke: var(--green);
                }                
            }
        }

        .cloud_container:hover{
            .clouds {
                .outline {
                    fill: var(--ivory);
                }                
            }
        }
    }
}

.cloud_container {
    position: relative;    

    .clouds {
        -webkit-animation:spin 32s linear infinite;
        -moz-animation:spin 32s linear infinite;
        animation:spin 32s linear infinite;
        height: 100px;;
        width: auto;
        z-index: -9000;

        .outline {
            stroke: var(--grey);
            stroke-width: 4;
        }
    }

    // burger menu
    .b-menu {
        cursor: pointer;
        z-index: 1000;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0%;
        left: 0%;
        padding: 10%;

        display: grid;
        flex-wrap: wrap;
        grid-template-rows: repeat(3, 6px);
        align-content: center;
        align-items: center;
        justify-content: center;

        transition: all .4s ease;
        user-select: none;

        &:hover .b-bun {
            background: var(--candy);
        }

        &:hover+.clouds {
            .outline {
                stroke: var(--green);
            }
        }
    }
}

// burger lines
.b-bun {
    background: var(--grey);
    position: relative;
    transition: all .4s ease;

    &--top {
        height: 2px;
        width: 25px;
    }

    &--mid {
        height: 2px;
        width: 25px;
    }

    &--bottom {
        height: 2px;
        width: 25px;
    }
}

// nav links
.b-links {
    display: none;

    &.open {
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 1vh;
        padding-left: 12vw;
    }

    .box-links {
        position: relative;
        width: 100%;
        height: 12vh;
        overflow: hidden;
    }

    a {
        position: absolute;
        color: var(--white);
        text-decoration: none;
        text-transform: uppercase;
        font-size: 11vh;
        font-weight: bold;
        animation-delay: 2s;
        animation: textslide 1.5s ease;

        &:hover, &:active {
            color: var(--green);
        }
    }
}

@keyframes fadein {
    0% {
        opacity: 0%;
    }
    75% {
        opacity: 100%;
    }
}

@keyframes textslide {
    0% {
        bottom: 100%;
    }
    100% {
        bottom: -10%;
    }
}

@keyframes spin {
    100% {
        -webkit-transform: rotate(360deg);
        transform:rotate(360deg);
    }
}

// mobile
@media screen and (max-width: 728px){
    .b-bun {
        &--top {
            height: 1px;
            width: 20px;
        }

        &--mid {
            height: 1px;
            width: 20px;
        }

        &--bottom {
            height: 1px;
            width: 20px;
        }
    }

    .b-links {
        .box-links {
            height: 8.7vh;
        }

        a {
            font-size: 8vh;
        }
    }
    
    .b-container {
        .brand_logo,
        .clouds {
            height: 50px;
        }     
    }
}
</style>