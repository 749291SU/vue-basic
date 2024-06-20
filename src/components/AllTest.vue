<template>
    <div id='app'>
        <!-- <h2>a: {{ a }}</h2> -->
        <ul>
            <li v-for="person in personLis" :key="person.id">
                {{ person.name }}: {{ person.age }}
            </li>
        </ul>
    </div>
</template>

<script lang='ts' setup>

    import { defineProps, withDefaults } from 'vue'
    import { type Persons } from '@/types/'
    // let x = defineProps(['a', 'personLis'])

    let x = withDefaults(defineProps<{personLis?:Persons}>(), {
            personLis: () => [
                {id: 1, name: 'a', age: 1},
                {id: 2, name: 'b', age: 2},
                {id: 3, name: 'c', age: 3},
            ]})    

    // console.log(x)




</script>
<style scoped>
</style>