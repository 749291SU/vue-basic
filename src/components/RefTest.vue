<template>
    <div id='app'>
        <h2 ref="title">Hello</h2>
        <button @click="printTitle">printTitle</button>
    </div>
</template>

<script lang='ts' setup>
    import { ref } from 'vue'
    let title = ref()

    let a = ref()
    let b = ref()
    let c = ref()

    function printTitle() {
        console.log(title.value)
    }

    defineExpose({a, b, c})

</script>
<style scoped>
</style>