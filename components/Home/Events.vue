<template>
    <section class="container-all-n">
        <div class="event-section">
            <div class="d-flex justify-content-between">
                <div class="header-event-r">Trending events</div>
                <div class="event-text-all">
                    <NuxtLink to="/events">
                        View all trending events <img src="/images/svg/arrow-right.svg" alt="">
                    </NuxtLink>
                </div>
            </div>
            <div class="events-card">
                <EventsAll v-for="event in events.slice(0,3)" :key="event.id" :event="event"/>
            </div>
        </div>
    </section>
</template>

<script setup>
   defineProps({
        events: {
            type: Array,
        }
    });
</script>

<style lang="scss" scoped>


</style>