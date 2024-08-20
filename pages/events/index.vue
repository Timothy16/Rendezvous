<template>
    <div class="">
        <Head>
            <Title>Events &mdash; Discover the Hottest Events Here – Your Calendar's New Best Friend!</Title>
            <Meta name="description"  content="Discover the Hottest Events Here – Your Calendar's New Best Friend!" />
        </Head>
        <div>
            <div class="container-all-n">
                <div class="header-event">Trending events</div>
                <div class="events-card">
                    <EventsAll v-for="event in getEvents" :key="event.id" :event="event"/>
                    <!-- {{ getEvents }} -->
                </div>

                <!-- <VueEternalLoading :load="load"></VueEternalLoading> -->
                <VueEternalLoading :load="load">
                    <template #loading>
                        <div class="my-loading">
                            <Loader />
                        </div>
                    </template>

                    <template #no-more>
                        <div class="my-no-more text-center">
                            No more events
                        </div>
                    </template>


                    <template #no-results>
                        <div class="my-no-results">
                            <NoRecord />
                        </div>
                    </template>
                </VueEternalLoading>
            </div>
        </div>
    </div>
</template>

<script setup>
    

    import { VueEternalLoading } from '@ts-pro/vue-eternal-loading';

    const URL = `/api/events/get-events`;

    const getEvents = ref([])
    let page = 1;
    

    async function loadUsers(page) {
        const res=  await fetch(`${URL}?page=${page}`);
        const res_1= await res.json();
        return res_1.data;
    }

    async function load({ loaded }) {
        const loadedUsers = await loadUsers(page);
        getEvents.value.push(...loadedUsers.allEvents);
        page += 1;
        loaded(loadedUsers.allEvents.length, loadedUsers.noOfPages);
    }

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