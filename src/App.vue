<template>
  <div id="app">
    <h1>我是App组件</h1>
    <router-link to="/home">首页</router-link> |
    <router-link :to="{path: '/hello',query: {name: '段',height: '180',age: '18'}}">hello</router-link> |
    <router-link :to="'/user/' + userId">用户</router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      userId: 'zhangsan'
    }
  }
}
</script>

<style>
</style>
