<template>
    <section>
    <TheSideBar/>
    <section class="main_content dashboard_part large_header_bg">
        <TheHeader/>
        <transition name="fade" mode="out-in">
            <router-view :key="$route.path"></router-view>
        </transition> 
        
    </section>
    </section>
    
</template>

<script>
import TheHeader from "./TheHeader";
import TheSideBar from "./TheSideBar";
export default {
    name: 'TheContainer',
    components: {TheSideBar, TheHeader}
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>