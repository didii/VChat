<template>
    <div data-component="messageentry" class="messageentry">
        <form class="input-group" @submit="onSubmit">
            <input type="text" class="form-control" placeholder="Your message..." v-model="input" />
            <div class="input-group-append">
                <button @click="submit" class="btn btn-primary">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import { useSubmitIgnore } from '@/topics';

@Component({
    setup() {
        return { ...useSubmitIgnore() };
    }
})
export default class MessageEntry extends Vue {
    @Prop() public input!: string;

    @Emit()
    public submit(): string {
        return this.input;
    }
}
</script>
