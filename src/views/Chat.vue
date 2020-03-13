<template>
    <div data-component="chat" class="chat">
        <h1>VChat</h1>
        <div class="content">
            <name />
            <div class="chat-main row">
                <div class="card w-100">
                    <div class="card-body">
                        <messages />
                    </div>
                    <div class="card-footer">
                        <message-entry />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ChatWindow, MessageEntry, Messages, Name } from '@/components';
import { useStore, useMessages } from '@/topics';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
    components: {
        ChatWindow,
        MessageEntry,
        Messages,
        Name,
    },
})
</script>
