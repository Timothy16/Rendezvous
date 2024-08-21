<template>
    <div class="">
        <Head>
            <Title>{{event.title}} &mdash; {{event.description}}</Title>
            <Meta name="description"  :content="event.description" />
        </Head>
        <div>
            <EventsSingle :event="event"/>
        </div>
    </div>
</template>


<script setup>

    const event = ref('')
    const route = useRoute()
    const {status, data: data, refresh } = await useFetch(`/api/events/${route.params.id}`)

    event.value = data.value?.data?.event

    definePageMeta({
        layout: "others",
    });

    useSeoMeta({
        title: `${event.value.title}`,
        ogTitle: `${event.value.title}`,
        description: `${event.value.description}`,
        ogDescription:`${event.value.description}`,
        ogImage: `${event.value.imageUrl}`,
        twitterCard: 'summary_large_image',
    })

</script>

<style lang="scss" scoped>

</style>