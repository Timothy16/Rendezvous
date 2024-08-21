<template>
    <div class="container-all-n" v-if="event">
        <div class="single-event-section" >
            <div class="image-container">
                 <NuxtImg format="webp" :src="event ? event.imageUrl : ''" alt="" class=" rounded" srcset="" />
            </div>
            <div class="row mt-4">
                <div class="col-lg-8 col-sm-12 col-md-8">
                    <div class="event-header">{{ event ? event.title : '' }}</div>
                    <div class="d-flex mt-3">
                        <div class="event-text"><NuxtImg  src="/images/svg/calendar.svg" alt=""  srcset="" /> {{ formatDate(event.date) }}</div>
                        <div class="event-text l-f"><NuxtImg  src="/images/svg/time.svg" alt="" srcset="" /> {{ formatTime(event.time) }} </div>
                    </div>
                    <div class="event-text mt-2"><NuxtImg  src="/images/svg/location.svg" alt="" srcset="" /> {{ event ? event.address : '' }}</div>
                    <div class="event-text organizer-name mt-2"><NuxtImg  src="/images/svg/user.svg" alt="" srcset="" /> {{ event ? event.organizer.name : '' }}</div>

                    <div class="event-header-r">Event description</div>
                    <p>
                        {{ event ? event.description  : ''}}
                    </p>

                    <div class="event-header-r" >Event category</div>
                    <p  class="p-category" style="text-transform:capitalize;">
                        {{ event ? event.category  : ''}}
                    </p>

                    <div class="event-header-r">Tickets Pricing</div>
                    <div class="d-flex mt-2 mb-5">
                        <div class="">
                            <div class="event-price-h mb-2">Single</div> 
                            <div class="event-price">{{formatPrice(event.price)}}</div>
                        </div>
                        <div class="l-ff">
                            <div class="event-price-h mb-2">Pair</div> 
                            <div class="event-price">{{formatPrice(event.price)}}</div>
                        </div>
                    </div>
                    <Button>&nbsp; Buy now &nbsp;</Button>

                </div>
                <div class="col-lg-4 col-sm-12 col-md-4">
                    <div class="socials" v-if="event.organizer">
                        <div class="event-header-r mb-3">Contact Organizers</div>
                        <a :href="`mailto:${event.organizer.email}`" v-if="event.organizer.email">
                            <NuxtImg  src="/images/svg/mail.svg" alt="" class="img-fluid " srcset="" /> &nbsp;
                        </a>
                        <a :href="`${event.organizer.twitterUrl}`" target="_blank" rel="noopener noreferrer" v-if="event.organizer.twitterUrl">
                            <NuxtImg  src="/images/svg/twitter.svg" alt="" class="img-fluid " srcset="" /> &nbsp;
                        </a>
                        <a :href="`${event.organizer.instagram}`" target="_blank" rel="noopener noreferrer" v-if="event.organizer.instagram">
                            <NuxtImg  src="/images/svg/instagram.svg" alt="" class="img-fluid " srcset="" />
                        </a>
                        
                    </div>
                    <div class="socials">
                        <div class="event-header-r mb-3">Directions</div>
                        <iframe
                            :src="generateIframeUrl(event.lat, event.long)"
                            width="100%"
                            height="452"
                            frameborder="0"
                            scrolling="no"
                            marginheight="0"
                            marginwidth="0"
                            >
                        </iframe>
                    </div>
                </div>
            </div>
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
        return $moment(date).format('dddd, MMMM Do, YYYY'); 
    };

    const formatTime = (time) => {
        return $moment(time, 'HH:mm').format('hA'); 
    };

    const formatPrice = (price) => {
        return price === 0 ? 'Free' : 'NGN ' + new Intl.NumberFormat('en-NG', { minimumFractionDigits: 0 }).format(price);
    };

    const generateIframeUrl = (lat, lng) => {
        const baseUrl = 'https://maps.google.com/maps?';
        const zoomLevel = 14;
        const query = `width=100%&height=600&hl=en&q=${lat},${lng}&z=${zoomLevel}&output=embed`;
        return baseUrl + query;
    };
</script>

<style lang="scss" scoped>
.image-container {
    width: 100%;
}

.image-container img {
  width: 100%;
  max-height: 480px;
  object-fit: cover;

}
</style>