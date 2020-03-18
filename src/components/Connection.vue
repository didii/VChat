<template>
    <div data-component="connectionstate" :class="`badge badge-${badgeClass}`">
        {{text}}
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { ConnectionState } from '@/topics'

@Component
export default class Connection extends Vue {
    @Prop({default: ConnectionState.Closed}) connectionState!: ConnectionState;

    private get badgeClass(): string {
        switch (this.connectionState) {
            case ConnectionState.Closed:
                return 'danger';
            case ConnectionState.Open:
                return 'success';
        }
        return 'secondary';
    }

    private get text(): string {
        switch (this.connectionState) {
            case ConnectionState.Closed:
                return 'Disconnected';
            case ConnectionState.Open:
                return 'Connected';
        }
        return 'Invalid'
    }
}
</script>