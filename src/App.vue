<template>
    <div id="app">
        <AllTest :personLis="personLis"/>
    </div>
</template>

<script lang="ts" setup>
    import WatchEffectTest from './components/WatchEffectTest.vue';
    import RefTest from './components/RefTest.vue';
    import TypeTest from './components/TypeTest.vue';
    import AllTest from './components/AllTest.vue';

    import { type Persons } from '@/types';
    import { reactive } from 'vue';

    let personLis = reactive<Persons>([
        { id: 1, name: 'Alice', age: 20 },
        { id: 2, name: 'Bob', age: 21 },
        { id: 3, name: 'Charlie', age: 22 }
    ]);

    // console.log(personLis)

</script>
<style>

</style>