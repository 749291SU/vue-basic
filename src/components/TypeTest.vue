<template>
    <div id='app'>
        <h2>id: {{ person.id }}</h2>
        <h2>name: {{ person.name }}</h2>
        <h2>age: {{ person.age }}</h2>
    </div>
</template>

<script lang='ts' setup>
    import { type Person, type Persons } from '@/types/'

    let person:Person = {
        id: 1,
        name: 'Tom',
        age: 18,
    }

    let personList:Array<Person> = [
        {
            id: 1,
            name: 'Tom',
            age: 18,
        },
        {
            id: 2,
            name: 'Jerry',
            age: 20,
        },
    ]

</script>
<style scoped>
</style>