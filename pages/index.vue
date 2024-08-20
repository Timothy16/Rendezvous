<template>
    <div class="">
        <Head>
            <Title>rendezvous &mdash; Discover the Hottest Events Here – Your Calendar's New Best Friend!</Title>
            <Meta name="description"  content="Discover the Hottest Events Here – Your Calendar's New Best Friend!" />
        </Head>
        <div>
            <PartialsTopMenu class="hide-nav "/>
            <HomeHero />
            <HomeEvents :events="getEvents"/>
            <HomeEventCategory />
        </div>
    </div>
</template>

<script setup>

    const getEvents = ref([])

    const {status, data: data, refresh} = await useFetch(`/api/events/get-events`)

    getEvents.value = data.value?.data?.allEvents

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