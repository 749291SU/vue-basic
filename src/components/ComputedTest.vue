<template>
    <div id='app'>
        Xing: <input type="text" v-model="firstName">
        Ming: <input type="text" v-model="secondName">
        Quan: <span>{{ fullName }}</span>

        <button @click="changeFullName">changeFullName</button>
    </div>
</template>

<script lang='ts' setup>
    import { computed, ref, toRefs } from "vue";

    let firstName = ref('zhang')
    let secondName = ref('san')

    let fullName = computed({
        get() {
            console.log("get fullName")
            return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + "-" + secondName.value
        },
        set(val) {
            // split
            console.log("set fullName to " + val)
            const [_firstName, _secondName] = val.split('-')
            firstName.value = _firstName
            secondName.value = _secondName
        }
    })


    console.log(fullName)

    function changeFullName() {
        // firstName.value = 'li'
        // secondName.value = 'si'
        // console.log(fullName)
        fullName.value=  "li-si"
        // console.log(fullName.value)
    }



</script>
<style scoped></style>