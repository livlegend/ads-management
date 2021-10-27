<template>
    <section class="main_content dashboard_part large_header_bg">
        <TheSideBar/>
        <TheHeader/>
        <div class="main_content_iner">
            <div class="container-fluid p-0">
                <h4>Content</h4>
                <router-view :key="$route.path"></router-view>
            </div>
        </div>
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
