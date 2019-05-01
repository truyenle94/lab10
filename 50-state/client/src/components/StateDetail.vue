<template>
    <div class="state-detail p-2">
        <h2>The State of {{state.name}}</h2>

        <p v-if="state.visited">You have visited this state</p>
        <p v-else>You have not visited this state</p>

        <!--add I-map component, v-bind to vue data to set Leaflet properties-->
        <div id="map-container">
            <l-map
                ref="stateMap"
                style="height: 100%; width: 100%"
                v-bind:zoom="zoom"
                v-bind:center="center">
                <l-tile-layer :url="url"></l-tile-layer>
            </l-map>
        </div>

    </div>
</template>

<script>
    import {LTileLayer, LMap} from "vue2-leaflet";
    export default {
        name: 'StateDetail',
        components: {
            LTileLayer, LMap
        },
        data() {
            return {
                state: {
                    name: ''
                },
                /*set initial map data to center f the US*/
                url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
                zoom: 2,
                center: [44, -103], // center of  the US
                bounds: null
            }
        },
        mounted() {
            this.state.name = this.$route.params.state
            /*this will be whatever is after /detail/ in the rout's path*/
            this.$refs.stateMap.mapObject.dragging.disable()
            /*this will prevent user dragging map away from state*/
            this.fetchStateData()
        },

        /*this method to overwrite state object with data response from servr*/
        methods: {
            fetchStateData() {
                this.$stateService.getOne( this.state.name ).then( data => {
                    this.state = data
                    this.zoom = data.zoom
                    this.center = [data.lat, data.lon]
                    // fly to new center coordinates to center on state
                    this.$refs.stateMap.mapObject.flyTo(this.center, this.zoom)
                }).catch( err => console.error(err))
            }
        }
    }
</script>

<style scoped>
    #map-container {
        height: 30em

    }
</style>