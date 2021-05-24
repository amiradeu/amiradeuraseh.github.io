<template>
    <div class="content">        
        <nav aria-label="main_nav" class="main_nav socmed">
            <div class="cloud_container">
                <a href="https://amiradeuraseh.gumroad.com/">
                    <gumroad_icon class="brand_icons"/>
                </a>
                <gumroad class="socials" />
            </div>
            <div class="cloud_container">
                <a href="https://www.instagram.com/amiradeuraseh/">
                    <fa :icon="['fab', 'instagram']" class="brand_icons"/>
                </a>
                <instagram class="socials" />
            </div>
            <div class="cloud_container">
                <a href="https://www.youtube.com/c/AmiraDeuraseh">
                    <fa :icon="['fab', 'youtube']" class="brand_icons"/>
                </a>
                <youtube class="socials" />
            </div>
            <div class="cloud_container">
                <a href="https://twitter.com/amiradeuraseh">
                    <fa :icon="['fab', 'twitter']" class="brand_icons"/>
                </a>
                <twitter class="socials" />
            </div>
        </nav>
        <nav aria-label="main_nav" class="main_nav">
            <div class="cloud_container">
                <a href="https://github.com/amiradeu">
                    <fa :icon="['fab', 'github']" class="brand_icons"/>
                </a>
                <github class="socials" />
            </div>
            <div class="cloud_container">
                <a href="https://codepen.io/amiradeuraseh">
                    <fa :icon="['fab', 'codepen']" class="brand_icons"/>
                </a>
                <codepen class="socials" />
            </div>
            <div class="cloud_container">
                <a href="https://semenyih.universitytutor.com/tutors/1175952">
                    <fa :icon="['fas', 'code']" class="brand_icons"/>
                </a>
                <tutor class="socials" />
            </div>
        </nav>
    </div>
</template>

<script>
    import cloud from "~/assets/circle_cloud.svg?inline"
    import gumroad from "~/assets/gumroad.svg?inline"
    import gumroad_icon from "~/assets/gumroad_icon.svg?inline"
    import instagram from "~/assets/instagram.svg?inline"
    import youtube from "~/assets/youtube.svg?inline"
    import twitter from "~/assets/twitter.svg?inline"
    import github from "~/assets/github.svg?inline"
    import codepen from "~/assets/codepen.svg?inline"
    import tutor from "~/assets/programmingtutor.svg?inline"

    export default {
        components: { 
            cloud,
            instagram,
            youtube,
            twitter,
            gumroad,
            github,
            codepen,
            gumroad_icon,
            tutor
        }
    }
</script>

<style lang="scss" scoped>
.content {
    display: flex;
    justify-content: center;
    padding: 48px 24px;
    margin: 0 24px;
    background-color: var(--ivory);
    border: 2px solid var(--grey);
    border-radius: 32px;
}

.main_nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;

    &.socmed {
        padding-bottom: 16px;
    }

    .cloud_container {
        position: relative;
        height: 8rem;

        .brand_icons {
            height: 32px;
            font-size: 32px;
            color: var(--grey);

            .outline {
                fill: var(--grey);
            }
        }

        .clouds {
            -webkit-animation:spin 32s linear infinite;
            -moz-animation:spin 32s linear infinite;
            animation:spin 32s linear infinite;
            height: 8rem;
            width: auto;
            z-index: -9000;
        }

        .socials {
            height: 100%;
            width: auto;
            z-index: -9000;

            .text {
                fill: var(--grey);
            }
        }

        a {
            z-index: 1000;
            text-decoration: none;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0%;
            left: 0%;
            padding: 10%;

            font-size: .8rem;
            font-weight: bold;

            display: flex;
            align-items: center;
            justify-content: center;

            &:hover, &:active {
                color: var(--green);
            }

            &:hover+.socials {
                -webkit-animation:spin 32s linear infinite;
                -moz-animation:spin 32s linear infinite;
                animation:spin 32s linear infinite;

                .text {
                    fill: var(--green);
                }
            }

            &:active+.socials {
                -webkit-animation:spin 32s linear infinite;
                -moz-animation:spin 32s linear infinite;
                animation:spin 32s linear infinite;

                .text {
                    fill: var(--green);
                }
            }

            &:hover, &:active {
                .brand_icons {
                    color: var(--green);
                
                .outline {
                        fill: var(--green);
                    }
                }
            }
        }
    }
}

@keyframes spin {
    100% {
        -webkit-transform: rotate(360deg);
        transform:rotate(360deg);
    }
}

.content {
    text-align: center;
    gap: 16px;
}

.profile_header {
    margin-bottom: 24px;
}

// tablet
@media screen and (max-width:1025px)  {
    .content {
        display: block;
    }

    .cloud_container {
        height: 6rem !important;

        .brand_icons {
            height: 28px !important;
            font-size: 28px !important;
        }
    }
}

// mobile
@media screen and (max-width: 481px){
    .content {
        display: grid;
        padding: 24px 12px;

        .main_nav.socmed {
            padding-bottom: 0px;
        }
    }

    .cloud_container {
        height: 4rem !important;

        .brand_icons {
            height: 24px !important;
            font-size: 24px !important;
        }
    }
}
</style>