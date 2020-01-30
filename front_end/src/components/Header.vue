<template>
    <header>
        <h1 class="title"><font-awesome-icon icon="utensils" /> メシタビ<span class="desc">~メシからタビを創るwebサイト~</span></h1>
        <div class="modify-date">最新更新日:2020/1/1</div>
    </header>
</template>

<script>

export default {

}
</script>

<style scoped>
header {
    background-color: var(--main-bg-color);
    color: var(--main-color);
    border-radius: 0 0 0.3rem 0.3rem;
    padding: 0.4rem;
}

.title {
    font-size: 2rem;
    display: inline-block;
    margin: 0.6rem;
}

.desc {
    margin: 0 0 0 1rem;
    font-size: 1.3rem;
}

.modify-date {
    margin: 0 0 0 0.6rem;
    font-size: 1rem;
}
</style>