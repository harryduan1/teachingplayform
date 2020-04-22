<template>
    <div>
        <h1>我是用户</h1>
        <h1>{{userId}}</h1>
    </div>
</template>

<script>
export default {
    name: 'User',
    data() {
        return {
            userId: this.$route.params.userId
        }
    },
    // computed: {
    //     userId() {
    //         return this.$route.params.userId
    //     }
    // }
}
</script>