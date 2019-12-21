<template>
    <header>
        <h1><font-awesome-icon icon="utensils" /> メシタビ</h1>
    </header>
</template>

<script>

export default {
    created: function() {
        this.$store.dispatch('initialize')    
    },
}
</script>

<style scoped>
header {
    background-color: var(--main-bg-color);
    color: var(--main-color);
    border-radius: 0 0 0.3rem 0.3rem;
    padding: 0.4rem;
}

header h1 {
    font-size: 2rem;
    display: inline-block;
    margin: 0.6rem;
}
</style>