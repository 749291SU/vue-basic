<template>
    <div id="app">
        <h1>Hello</h1>
        <!-- <Person /> -->
         <!-- <Car /> -->
        <ComputedTest />
    </div>
</template>

<script lang="ts">
    import Person from './components/Person.vue'
    import Car from './components/Car.vue'
    import ComputedTest from './components/ComputedTest.vue'

    export default {
        name: 'App',
        components: { Person, Car, ComputedTest }
    }
</script >

<style>

</style>