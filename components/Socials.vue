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
                <a href="https://amiradeuraseh.gumroad.com/">Gumroad Shop</a>
                <cloud class="clouds" />
            </div>
            <div class="cloud_container">
                <a href="https://www.instagram.com/amiradeuraseh/">Instagram</a>
                <cloud class="clouds" />
            </div>
            <div class="cloud_container">
                <a href="https://www.youtube.com/c/AmiraDeuraseh">Youtube</a>
                <cloud class="clouds" />
            </div>
            <div class="cloud_container">
                <a href="https://twitter.com/amiradeuraseh">Twitter</a>
                <cloud class="clouds" />
            </div>
            <div class="cloud_container">
                <a href="https://github.com/amiradeu">Github</a>
                <cloud class="clouds" />
            </div>
            <div class="cloud_container">
                <a href="https://codepen.io/amiradeuraseh">Codepen</a>
                <cloud class="clouds" />
            </div>
            <div class="cloud_container">
                <a href="https://semenyih.universitytutor.com/tutors/1175952">Programming Tutor</a>
                <cloud class="clouds" />
            </div>
        </nav>
    </div>
</template>

<script>
    import cloud from "~/assets/circle_cloud.svg?inline"
    export default {
        components: { cloud }
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

        .clouds {
            -webkit-animation:spin 32s linear infinite;
            -moz-animation:spin 32s linear infinite;
            animation:spin 32s linear infinite;
            height: 8rem;
            width: auto;
            z-index: -9000;
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

            &:hover {
                color: var(--green);
            }

            &:hover+.clouds {
                .outline {
                    fill: var(--grey);
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
}

.profile_header {
    margin-bottom: 24px;
}
</style>