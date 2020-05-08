<template>
    <div data-component="messages" class="messages">
        <message v-for="msg in messages" :key="msg.timeStamp" :message="msg" />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Message } from '@/components';
import { IMessage } from '../topics';

@Component({
    components: {
        Message,
    },
})
export default class Messages extends Vue {
    @Prop() messages!: IMessage[];
}
</script>
