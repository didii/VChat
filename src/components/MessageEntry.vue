<template>
    <div data-component="messageentry" class="messageentry">
        <form class="input-group">
            <input type="text" class="form-control" placeholder="Your message..." />
            <div class="input-group-append">
                <button class="btn btn-primary">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MessageEntry extends Vue {

}
</script>
