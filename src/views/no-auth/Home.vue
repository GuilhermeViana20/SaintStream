<template>
    <div class="background-image" v-for="(background, index) in backgrounds" :key="index">
        <div class="overlay">
            <img :src="background.image" :alt="background.alt">
        </div>
    </div>

    <div class="container-fluid">
        
        <div class="image-carousel">
            <div class="carousel-container">
                <div class="carousel-slide" v-for="(stream, index) in visibleImages" :key="index">
                    <img :src="stream.image" alt="Image" />
                </div>
            </div>
            <button @click="prevSlide">Anterior</button>
            <button @click="nextSlide">Próxima</button>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "HomeNoAuth",
    data() {
        return {
            backgrounds: [
                {
                    image: 'https://i.ibb.co/VDD6j0B/background1-min.jpg',
                    alt: 'background1'
                }
            ],
            streamings: [
                {
                    image: 'https://static-assets.bamgrid.com/product/disneyplus/images/logo.1a56f51c764022ee769c91d894d44326.svg',
                    alt: 'teste'
                },
                {
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png',
                    alt: 'teste'
                },
                {
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Amazon_Prime_Video_logo.svg/1280px-Amazon_Prime_Video_logo.svg.png',
                    alt: 'teste'
                },
                {
                    image: 'https://yt3.googleusercontent.com/75Jpzhs4vL6K36Rp6RZeafgLdYlL8pSjUya6cFU5vzpDyrpZuwux-9lSX6fwKCgMTrdkXhT6EQ=s900-c-k-c0x00ffffff-no-rj',
                    alt: 'teste'
                },
                {
                    image: 'https://news.xbox.com/pt-br/wp-content/uploads/sites/8/2021/06/1920x1080-MASHUP-WBG-IDI.jpg',
                    alt: 'teste'
                },
                {
                    image: 'data:image/jpeg;base64,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',
                    alt: 'teste'
                },
                {
                    image: 'https://static-assets.bamgrid.com/product/disneyplus/images/logo.1a56f51c764022ee769c91d894d44326.svg',
                    alt: 'teste'
                },
                {
                    image: 'https://static-assets.bamgrid.com/product/disneyplus/images/logo.1a56f51c764022ee769c91d894d44326.svg',
                    alt: 'teste'
                },
                {
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png',
                    alt: 'teste'
                },
                {
                    image: 'https://static-assets.bamgrid.com/product/disneyplus/images/logo.1a56f51c764022ee769c91d894d44326.svg',
                    alt: 'teste'
                },
                {
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png',
                    alt: 'teste'
                },
                {
                    image: 'https://static-assets.bamgrid.com/product/disneyplus/images/logo.1a56f51c764022ee769c91d894d44326.svg',
                    alt: 'teste'
                },
                {
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png',
                    alt: 'teste'
                },
                {
                    image: 'https://static-assets.bamgrid.com/product/disneyplus/images/logo.1a56f51c764022ee769c91d894d44326.svg',
                    alt: 'teste'
                },
            ],
            currentIndex: 0,
            itemsPerPage: 7,
        };
    },
    computed: {
        visibleImages() {
            const startIndex = this.currentIndex;
            const endIndex = startIndex + this.itemsPerPage;
            return this.streamings.slice(startIndex, endIndex);
        },
    },
    methods: {
        prevSlide() {
            if (this.currentIndex == 0) {
                this.currentIndex = (this.streamings.length - 1);
            } else if (this.currentIndex > 0) {
                this.currentIndex -= 1;
            }
            console.log(this.currentIndex)
        },
        nextSlide() {
            if (this.currentIndex == this.streamings.length) {
                this.currentIndex = (this.streamings.lenght + 1);
            } else if (this.currentIndex + this.itemsPerPage < this.streamings.length) {
                this.currentIndex += 1;
            }
        },
    },
};
</script>

<style scoped>
.overlay {
    background: linear-gradient(359deg, #0D0C0F 0.83%, rgba(13, 12, 15, 0.85) 28.55%, rgba(13, 12, 15, 0.00) 48.81%, rgba(13, 12, 15, 0.28) 70.66%, #0D0C0F 103.18%);
}


.image-carousel {
    text-align: center;
}

.carousel-container {
    display: flex;
    overflow: hidden;
    gap: 25px;
}

.carousel-slide {
    flex: 0 0 calc(100% / 7.5);
    transition: transform 0.3s ease-in-out;

    background-color: #08080A;
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 1rem 3rem;
    height: 8rem;
    border-radius: 16px;
}

img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}
</style>