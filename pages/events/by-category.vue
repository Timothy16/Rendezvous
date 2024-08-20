<template>
    <div class="">
        <Head>
            <Title>Events &mdash; Discover the Hottest Events Here – Your Calendar's New Best Friend!</Title>
            <Meta name="description"  content="Discover the Hottest Events Here – Your Calendar's New Best Friend!" />
        </Head>
        <div>
            <div class="container-all-n">
               
                <div class="header-event" style="text-transform: capitalize;">Event Category : {{  categoryName}} </div>
                <div class="events-card" v-if="getEvents.length > 0">
                    <EventsAll v-for="event in getEvents" :key="event.id" :event="event"/>
                </div>
                <div class="text-center" v-else>
                  <NoRecord />
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>

    const route = useRoute()

    const getEvents = ref([])

    const categoryName = computed(() => {
        return route.query.category
    })


    const {status, data: data, refresh} = await useFetch(`/api/events/category?category=${route.query.category}`)

    getEvents.value = data.value?.data?.event

    definePageMeta({
        layout: "others",
    });
    useSeoMeta({
        title: "rendezvous - Discover the Hottest Events Here – Your Calendar's New Best Friend!",
        ogTitle: "rendezvous - Discover the Hottest Events Here – Your Calendar's New Best Friend!",
        description: "Discover the Hottest Events Here – Your Calendar's New Best Friend!",
        ogDescription: "Discover the Hottest Events Here – Your Calendar's New Best Friend!",
        ogImage: '',
        twitterCard: 'summary_large_image',
    })
</script>

<style lang="scss" scoped>

</style>