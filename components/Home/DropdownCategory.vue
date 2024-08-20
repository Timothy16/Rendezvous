<template>
    <div class="custom-select">
        <div class="selected-option"  @click="toggleDropdown">
            <!-- <img :src="selectedOption.image" alt="Selected Option"> -->
            <span class="form-placeholder" v-if="selectedOption">{{ selectedOption ? selectedOption.label : ""}}</span>
            <span class="form-placeholder" v-else>Categories</span>
            <img src="/images/svg/angle-d.svg" alt="" srcset="">
        </div>
        <div class="dropdown" v-show="isDropdownOpen">
            <div
                v-for="option in gender"
                :key="option.value"
                class="dropdown-option"
                @click="selectOption(option)"
            >
                <span>{{ option.label }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>

    const isDropdownOpen = ref(false);
    const selectedOption = ref(null);

    const gender = ref([
        { value: 'all', label: 'All'},
        { value: 'comedy', label: 'Comedy'},
        { value: 'religious', label: 'Religious'},
        { value: 'tech', label: 'Tech'},
        { value: 'health', label: 'Health'},
        { value: 'fitness', label: 'Fitness'},
        { value: 'sports', label: 'Sports'},
        { value: 'education', label: 'Education'},
        
    ]);
    
    const emit = defineEmits(['select']);
 
    const toggleDropdown = () => {
        isDropdownOpen.value = !isDropdownOpen.value;
    };
    
    const selectOption = (option) => {
        selectedOption.value = option;
        isDropdownOpen.value = false;
        emit('select', option.value);
    };

    const isSelectedOptionSelected = computed(() => {
        return !!selectedOption.value;
    });

    onMounted(() => {
        // Add event listener for clicks outside the dropdown
        document.addEventListener('click', handleClickOutside);
    });

    onUnmounted(() => {
        // Remove event listener when component is unmounted
        document.removeEventListener('click', handleClickOutside);
    });

    const handleClickOutside = (event) => {
        // Check if the click occurred outside the dropdown
        if (!event.target.closest('.custom-select')) {
            isDropdownOpen.value = false;
        }
    };
  </script>
  
<style scoped lang="scss">
 

  </style>
  