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
        
        <nav>
            <ul class="social__links">
                <li><a href="https://amiradeuraseh.gumroad.com/">Gumroad Shop</a></li>
                <li><a href="https://www.youtube.com/c/AmiraDeuraseh">Youtube</a></li>
                <li><a href="https://twitter.com/amiradeuraseh">Twitter</a></li>
                <li><a href="https://vt.tiktok.com/ZSJADcEWv/">Tiktok</a></li>
                <li><a href="https://www.instagram.com/amira.deuraseh/">Instagram</a></li>
                <li><a href="https://semenyih.universitytutor.com/tutors/1175952">Programming Tutor</a></li>
            </ul>
        </nav>
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.content {
    text-align: center;
}

.profile_header {
    margin-bottom: 24px;
}

.social__links {
    display: grid;
    row-gap: 16px;
    justify-items: center;

    a {
        display:inline-block;
        width:100%;
        height:100%;
        padding: 16px;
        border-radius: 8px;
    }

    li {
        border: 1px solid var(--grey);
        border-radius: 8px;
        width: 200px;
    
        &:hover {
            cursor: pointer;
            background-color: #3e3e3e;
    
            a {
                color: var(--white);
            }
        }
    }
}

footer {
    margin-top: 12px;
    font-size: .7rem;

    a {
        display: inline;
    }
}
</style>