<template>
    <section class="container-all-n">
        <div class="all-event-section">
            <div class="row"></div>
            <div class="event-g">
                <div class="header-event mb-4">Discover a World of Events Tailored Just for You.</div>
                <NuxtLink to="/events">
                    <Button>View all events</Button>
                </NuxtLink>
               
            </div>
            <div class="event-gg">
                <div class="event-card-category">
                    <div class="event-card">
                        <NuxtImg src="/images/event1.png" format="webp" alt="Online Events" class="event-card-image" />
                        <div class="event-card-overlay">
                        <h3 class="event-card-title">Online Events</h3>
                        </div>
                    </div>

                    <div class="event-card">
                        <NuxtImg src="/images/event2.png" format="webp" alt="Physical Events" class="event-card-image" />
                        <div class="event-card-overlay">
                        <h3 class="event-card-title">Physical Events</h3>
                        </div>
                    </div>

                    <div class="event-card">
                        <NuxtImg src="/images/event3.png" format="webp" alt="Hybrid Events" class="event-card-image" />
                        <div class="event-card-overlay">
                        <h3 class="event-card-title">Hybrid Events</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>


</style>