<template>
    <div data-component="message" class="message-container row">
        <div v-if="messageType === MessageType.Other" class="arrow-left"></div>
        <div class="alert alert-info col-md-8">
            <div class="user text-muted small">({{hour}}:{{minute}}) {{userName}} says:</div>
            <div class="message content">{{message}}</div>
        </div>
        <div v-if="messageType === MessageType.Own" class="arrow-right"></div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { MessageType } from '@/models/message-type';

@Component
export default class Message extends Vue {
    @Prop({default: MessageType.Own}) public messageType!: MessageType;
    @Prop({default: 'N/A'}) public userName!: string;
    @Prop({default: () => new Date()}) public timeStamp!: Date;
    @Prop({default: 'Message could not be loaded...'}) public message!: string;

    private get hour(): string {
        const hour = this.timeStamp.getHours();
        if (hour < 10) {
            return '0' + hour;
        }
        return '' + hour;
    }
    private get minute(): string {
        const minute = this.timeStamp.getMinutes();
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