<template>
    <div id="app">
        <h1>Hello</h1>
        <!-- <Person /> -->
         <Car />
    </div>
</template>

<script lang="ts">
    import Person from './components/Person.vue'
    import Car from './components/Car.vue'

    export default {
        name: 'App',
        components: { Person, Car }
    }
</script >

<style>

</style>