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
                <EventsAll v-for="event in randomEvents" :key="event.id" :event="event"/>
            </div>
        </div>
    </section>
</template>

<script setup>
   const props = defineProps({
        events: {
            type: Array,
            required: true
        }
    });

    // Shuffle the array and get the first 3 random events
    const shuffleArray = (array) => {
        return array
            .map((item) => ({ item, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ item }) => item);
    };

    // Select random three events from the shuffled array
    const randomEvents = shuffleArray(props.events).slice(0, 3);
</script>

<style lang="scss" scoped>


</style>