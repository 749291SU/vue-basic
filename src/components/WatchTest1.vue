<template>
    <div id='app'>
        <h2>name: {{ person.name }}</h2>
        <h2>age: {{ person.age }}</h2>
        <h2>brand: {{ person.car.brand }}</h2>
        <h2>price: {{ person.car.price }}</h2>
        <button @click="changeName">changeName</button>
        <button @click="changeBrand">changeBrand</button>
        <button @click="changeCar">changeCar</button>
    </div>
</template>

<script lang='ts' setup>
    import { reactive, watch, ref } from 'vue';

    let person = reactive({
        name: 'suxiaowen',
        age: 18,
        car: {
            brand: 'BMW',
            price: 1000000,
        }
    })

    function changeName() {
        person.name = 'suxiaowen1'
    }

    function changeBrand() {
        person.car.brand = 'Benz'
    }

    function changeCar() {
        person.car = {
            brand: 'Audi',
            price: 2000000
        }
    }

    console.log(person)
    console.log(person.car)

    watch(() => person.name, (newVal, oldVal) => {
        console.log('name:', newVal, oldVal)
    })

    watch(()=>person.car, (newVal, oldVal) => {
        console.log('car:', newVal, oldVal)
    })

    watch([() => person.name, person.car], (newVal, oldVal) => {
        console.log('name or brand changed', newVal, oldVal)
    })

</script>
<style scoped>
</style>