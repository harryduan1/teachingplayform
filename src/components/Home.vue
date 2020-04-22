<template>
    <div>
        <div id="home">我真是太帅了！</div>
        <router-link to="/home/message">消息</router-link> |
        <router-link to="/home/news">新闻</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Home',
    // data() {
    //     return {
    //         path: '/home/message'
    //     }
    // },
    // created() {
    //     console.log('home created')
    // },
    // destroyed() {
    //     console.log('home destroyed')
    // },
    // //这两个函数只有组件被保持了状态使用了keep-alive时，才是有效的
    // activated() {
    //     this.$router.push(this.path)
    //     // console.log(this.$router)
    //     // console.log(this.$route)
    // },
    // deactivated() {

    // },
    // beforeRouteLeave(to,from,next) {
    //     this.path = this.$route.path
    //     next()
    // }
}
</script>

<style scoped>

</style>