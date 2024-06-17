<template>
    <div id='app'>
        Xing: <input type="text" v-model="firstName">
        Ming: <input type="text" v-model="secondName">
        Quan: <span>{{ fullName }}</span>
    </div>
</template>

<script lang='ts' setup>
    import { computed, ref, toRef, toRefs } from "vue";

    let firstName = ref('zhang')
    let secondName = ref('san')

    let fullName = computed(() => {
        console.log(1)
        return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + "-" + secondName.value
    })


    console.log(fullName)



</script>
<style scoped></style>