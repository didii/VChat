<template>
    <div data-component="chat" class="chat">
        <h1>VChat</h1>
        <div class="content">
            <connection :connectionState="connectionState" />
            <name />
            <div class="chat-main row">
                <div class="card w-100">
                    <div class="card-body">
                        <messages :messages="state.messages" />
                    </div>
                    <div class="card-footer">
                        <message-entry :input="state.input" @submit="sendMessage" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ChatWindow, Connection, MessageEntry, Messages, Name } from '@/components';
import { useStore, useMessages } from '@/topics';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
    components: {
        Connection,
        MessageEntry,
        Messages,
        Name
    },
    setup() {
        const store = useStore();
        return {
            ...store,
            ...useMessages(function (message) {
                store.state.value.messages.push(message);
            }),
        };
    }
});
</script>
