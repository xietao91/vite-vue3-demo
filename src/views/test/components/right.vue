<script setup>
import {person} from '../data'
const _person =  reactive(person)
</script>

<template>
    <a-input type="text" v-model="_person.name" placeholder="姓名11111"></a-input>
    <a-input type="text" v-model="_person.age" placeholder="年龄"></a-input>
</template>