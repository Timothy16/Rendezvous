<template>
    <!-- display events cards -->
    <div class="card animate__animated animate__fadeInUp animate__slow" v-if="event">
        <NuxtImg format="webp" :src="event ? event.imageUrl  : ''" alt="Card Image" class="card-image" />
        <div class="card-content">
            <h3 class="card-title">{{event ? event.title  : ''}}</h3>
            <p class="card-date">
              <span class="test-date">{{ formatDate(event.date) }} </span>  • <span class="test-time">{{ formatTime(event.time) }}</span> 
            </p>
             <!-- Reduce description to 300 characters -->
            <p class="card-description">
                {{ event && event.description.length > 300 ? event.description.substring(0, 300) + '...' : event.description }}
            </p>
            <NuxtLink :to="`/events/${event.id}`" class="card-link">View details <span><img src="/images/svg/arrow-right.svg" alt=""></span></NuxtLink>
        </div>
    </div>
</template>

<script setup>
    const { $moment } = useNuxtApp();

    defineProps({
        event: {
            type: Object,
        }
    });

    // Methods to format date and time
    const formatDate = (date) => {
        return $moment(date).format('ddd, MMM Do'); 
    };

    const formatTime = (time) => {
        return $moment(time, 'HH:mm').format('hA'); 
    };
</script>

<style lang="scss" scoped>


</style>