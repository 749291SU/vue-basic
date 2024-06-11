<!--  -->
<template>
    <div>
        Brand: {{ car.brand }} <br>
        price: {{ car.price }} <br>
        <button @click="changePrice">changePrice</button>
        <button @click="changeCar">changeCar</button>

        <br>

        game list
        <ul>
            <li v-for="game in games" key="id">{{ game.name }}</li>
        </ul>

        <button @click="changeGameName">changeGameName</button>
    </div>
</template>

<script lang="ts" setup>
    import { reactive } from 'vue'
    import { ref } from 'vue'
    let car = ref({ brand: 'baoma', price: 1888 })

    let games = reactive([
        { id: '11', name: 'King'},
        { id: '11', name: 'YuanShen'},
        { id: '11', name: 'ShanguoZhi'},
    ])


    function changeGameName() {
        games[0].name = 'HHH'
    }

    console.log(car)
    function changePrice() {
        car.value.price += 100
    }
    function changeCar() {
        // car = reactive({ brand: 'aodi', price: 1889 })
        // Object.assign(car, { brand: 'aodi', price: 1889 })
        car.value = { brand: 'aodi', price: 1889 }
    }

</script>
<style scoped>
</style>