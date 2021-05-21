<template>
    <div class="content">
        <div class="profile_header">
            <img src="~/assets/amiradeuraseh.JPG" alt="amiradeuraseh profile photo">
            <h1>Amira Deuraseh</h1>
            <ul>
                <li>🌷 𝕮𝖗𝖊𝖆𝖙𝖎𝖓𝖌 𝕯𝖎𝖌𝖎𝖙𝖆𝖑 𝕮𝖔𝖓𝖙𝖊𝖓𝖙</li>
                <li>ᵈᵉˢⁱᵍⁿ ᵃⁿᵈ ᵃʳᵗ</li>
                
            </ul>
        </div>
        
        <nav aria-label="main_nav" class="main_nav">
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

.main_nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;


    .cloud_container {
        position: relative;    

        .brand_icons {
            height: 25px;
            font-size: 25px;
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
            height: 8rem;
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

            &:hover+.clouds {
                .outline {
                    fill: var(--grey);
                }
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

            &:hover+.brand_icons {
                color: pink;
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
}

.profile_header {
    margin-bottom: 24px;
}
</style>