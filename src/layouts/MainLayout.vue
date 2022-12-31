<template>

  <q-layout view="hHh lpR fFf">

<q-header dir="rtl"  elevated class="bg-dark text-white" height-hint="98">

  <q-toolbar >
<div  class="d-flex">
<q-btn dense flat round icon="menu" @click="toggleRightDrawer" />

<span >وبلاگ</span>
</div>

</q-toolbar>




</q-header>

<q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
<q-scroll-area class="fit">
  <div dir="rtl">
    <q-list>

<template v-for="(menuItem, index) in menuList" :key="index">
<q-item :to="menuItem.to" clickable :active="menuItem.label === 'Outbox'" v-ripple>
  <q-item-section avatar>
    <q-icon :name="menuItem.icon" />
  </q-item-section>
  <q-item-section>
    {{ menuItem.label }}
  </q-item-section>
</q-item>
<q-separator :key="'sep' + index"  v-if="menuItem.separator" />
</template>

</q-list>
  </div>
  
  </q-scroll-area>
  
</q-drawer>

<q-page-container>
<router-view />
</q-page-container>

</q-layout>


</template>

<script>
import { ref } from 'vue'
export default {
setup () {
  const menuList = [
  {
  icon: 'settings',
  label: ' درباره من',
  separator: false,
  to:'/about'
},
  {
  icon: 'people',
  label: 'برنامه نویسی',
  separator: false,
  to:'/'
},
{
  icon: 'people',
  label: 'مهارت ها',
  separator: false,
  to:'/skills'
},
{
  icon:'',
  label:"تحصیلات",
  separator: false,
  to:'/education'
},
{
  icon:'',
  label:'سابقه کار',
  separator:false,
  to:'/experience'
},
{
  icon:'',
  label:'نمونه کار',
  separator:false,
  to:'/portfolio'
},
{
  icon: 'accessibility',
  label: 'رزومه',
  separator: false,
  to:'/resume'
},
{
  icon: 'people',
  label: 'آموزش برنامه نویسی',
  separator: false,
  to:'/video'
},
{
  icon: 'transcribe',
  label: 'شبکه های اجتماعی',
  separator: false,
  to:'/network'
},
{
  icon: 'work_history',
  label: 'فروشگاهی',
  separator: true,
  to:'/store'
},
{
  icon: 'accessibility',
  to:'biography',
  label: 'بیوگرافی',
  separator: false
},
]
  const rightDrawerOpen = ref(false)
  return {
    menuList,
    rightDrawerOpen,
    toggleRightDrawer () {
      rightDrawerOpen.value = !rightDrawerOpen.value
    }
  }
}
}
</script>