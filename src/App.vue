<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>|
            <router-link to="/about">About</router-link>|
            <router-link to="/chat">Chat</router-link>
        </div>
        <div class="container">
            <router-view />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {

}
</script>