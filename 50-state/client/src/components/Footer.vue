<template>
    <div class="footer">
        <div class="m-2">
            <span class="p-3">
                <router-link to="/">Home</router-link>
            </span>

            <span class="p-3">
                <router-link to="/about">About this site</router-link>
            </span>
        </div>

        <p class="text-right p-2">Header image by
            <a href="http://unsplash.com/photos/KpBXAOs80YI">@chrislawton via Unsplash</a>
            <br>
            <!--add attributionn for the map icon-->
            <a href="http://icons8.com/icon/43632/map">Map icon by Icons8</a>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style scoped>
    .credit {
        font-size: 0.1 em;
        font-style: italic;

    }
</style>