<template>
    <div id='app'>
        <h2>a: {{ a }}</h2>
        <h2>b: {{ b }}</h2>
        <h2>c: {{ c }}</h2>
        <button @click="changeA">changeA</button>
        <button @click="changeB">changeB</button>
        <button @click="changeC">changeC</button>
    </div>
</template>

<script lang='ts' setup>
    import { ref, watchEffect } from 'vue'
    let a = ref(0)
    let b = ref(0)
    let c = ref(0)

    function changeA() {
        a.value += 1
    }
    function changeB() {
        b.value += 1
    }
    function changeC() {
        c.value += 1
    }

    watchEffect(() => {
        console.log('a: ', a.value, 'b: ', b.value, 'c: ', c.value)
    })

</script>
<style scoped>
</style>