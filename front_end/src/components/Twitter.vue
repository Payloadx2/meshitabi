<template>
    <div>
        <timeline id="meshitabinet" class="timeline" sourceType="profile" :options="{ tweetLimit: '2'}"/>
        <a class="twitter-follow-button" href="https://twitter.com/meshitabinet">Follow @meshitabinet</a>
    </div>
</template>

<script>
import { Timeline } from 'vue-tweet-embed'
export default {
    components: {
        Timeline,
    }
}
</script>

<style scoped>
  .timeline {
    width: 34rem;
  }

  .twitter-follow-button {
    margin: 0 0 0 13rem;
  }
</style>