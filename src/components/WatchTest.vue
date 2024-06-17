<template>
    <div id='app'>
        <h1>name: {{ person.name }}</h1>
        <h1>age: {{ person.age }}</h1>
        <button @click="changeName">changeName</button>
        <button @click="changeAge">changeAge</button>
        <button @click="changePerson">changePerson</button>
    </div>
</template>

<script lang='ts' setup>
    import { reactive, ref, watch } from 'vue'

    let person = reactive({
        name: 'suxiaowen',
        age: 18
    })

    let person1 = ref({
        name: 'suxiaowen',
        age: 18
    })

    function changeName() {
        person1.value.name = 'suxiaowen1'
    }

    function changeAge() {
        person.age = 19
    }

    function changePerson() {
        // person = reactive({
        //     name: 'suxiaowen2',
        //     age: 20
        // })
        Object.assign(person, {
            name: 'suxiaowen2',
            age: 20
        })
    }

    console.log(person)

    watch(person, (newVal, oldVal) => {
        // console.log('name:', newVal.name, oldVal.name)
        // console.log('Age:', newVal, oldVal)
        console.log('person:', newVal, oldVal)
    })

</script>
<style scoped>
</style>