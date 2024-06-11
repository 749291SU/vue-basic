<template>
    <div class="person">
        Name: {{ name }} <br>
        Age: {{ age }} <br>
        Tel： {{ tel }} <br>
        <button @click="changeName">changeName</button>
        <button @click="changeAge">changeAge</button>
        <button @click="showTel">showTel</button>
    </div>
</template>


<!-- <script lang="ts">
    export default {
        name: 'Person2',
    }
</script> -->

<script setup lang="ts">
    // reative
    import type { RefSymbol } from '@vue/reactivity';
import { ref } from 'vue'

    // 数据
    let name = ref('苏晓文')
    let age = ref(18)
    let tel = ref (15908666804)

    console.log(name)


    function changeName() {
        name.value = 'zhangsan'
    }
    function changeAge() {
        age.value += 1
    }
    function showTel() {
        alert(tel)
    }

</script>

<style scoped></style>