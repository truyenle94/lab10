<!--to display total states visited-->
<template>
    <div class="summary">
        <h3>You have visited {{ total }} {{ statesPlural }}</h3>
        <p id="visited-all" v-if="visitedAll">
            You have visited all 50 states and the District of Columbia!
        </p>
    </div>
</template>

<script>
    export default {
        name: 'Summary',
        props: {
            total: Number,
            visitedAll: Boolean
        },
        computed: {
            /*return the states or state*/
            statesPlural() {
                return this.total === 1? 'state' : 'states'
            }
        }
    }
</script>

<style scoped>
    #visited-all {
        color: #be8234;
        font-weight: 600;

    }
</style>