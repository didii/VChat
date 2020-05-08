<template>
    <div data-component="message" class="message-container row">
        <div v-if="message.type === MessageType.Other" class="arrow-left"></div>
        <div class="alert alert-info col-md-8">
            <div class="user text-muted small">({{hour}}:{{minute}}) {{message.userName}} says:</div>
            <div class="message content">{{message}}</div>
        </div>
        <div v-if="message.type === MessageType.Own" class="arrow-right"></div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { MessageType } from '@/models/message-type';
import { IMessage } from '../topics';

@Component
export default class Message extends Vue {
    @Prop() public message!: IMessage;

    private get hour(): string {
        const hour = this.message.timeStamp.getHours();
        if (hour < 10) {
            return '0' + hour;
        }
        return '' + hour;
    }
    private get minute(): string {
        const minute = this.message.timeStamp.getMinutes();
        if (minute < 10) {
            return '0' + minute;
        }
        return '' + minute;
    }

    private MessageType = MessageType;
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