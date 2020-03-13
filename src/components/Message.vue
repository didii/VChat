<template>
    <div data-component="message" class="message-container row">
        <div class="arrow-left"></div>
        <div class="alert alert-info col-md-8">
            <div class="user text-muted small">(20:12) Didii says:</div>
            <div class="message content">This is my message!</div>
        </div>
        <div class="arrow-right"></div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { MessageType } from '@/models/message-type';

@Component
export default class Message extends Vue {

}
</script>

<style lang="scss" scoped>
.message-container {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    .alert {
        padding: 0.25rem 0.75rem;
    }
}
</style>