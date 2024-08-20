<template>
    <div class="search-box">
        <div class="row">
            <div class="col-sm-12 col-lg-5 col-md-5">
                <div class="d-flex n-box">
                    <img src="/images/svg/search.svg" alt="" srcset="">
                    <input type="text" placeholder="Search for an event" class="w-100" name="" id="">
                </div>
            </div>
            <div class="col-sm-12 col-lg-4 col-md-4">
                <HomeDropdownCategory @select="handleSelect"/>
            </div>
            <div class="col-sm-12 col-lg-3 col-md-2">
                <NuxtLink :to="`/events/by-category?category=${selectedValue}`">
                     <Button> Search </Button>
                </NuxtLink>
               
            </div>
        </div>
    </div>
</template>

<script setup>
   defineProps({
        events: {
            type: Array,
        }
    });

    const selectedValue = ref("")

    const handleSelect = async (value) => {
        selectedValue.value = value
    };
</script>

<style lang="scss" scoped>


</style>