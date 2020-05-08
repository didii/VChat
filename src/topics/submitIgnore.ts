export function useSubmitIgnore() {
    return {
        onSubmit(event: Event) {
            event.preventDefault();
            return false;
        }
    };
}