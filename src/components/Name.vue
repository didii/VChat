<template>
    <div data-component="name" class="name form-group row">
        <label for="name" class="col-md-2 col-form-label">Name</label>
        <input id="name" type="text" class="form-control col-md-10" placeholder="Your name..." />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Name extends Vue {

}
</script>