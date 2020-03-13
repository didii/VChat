<template>
    <div data-component="messages" class="messages">
        <message />
        <message />
        <message />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Message } from '@/components';

@Component({
    components: {
        Message,
    },
})
export default class Messages extends Vue {

}
</script>
