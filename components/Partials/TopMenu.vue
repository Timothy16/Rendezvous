<template>
    <div class="fixed-top">
        <nav id="navbar" class="navbar navbar-expand-lg navbar-bg-all nav-c-c" :class="{'nav-c-c' : checkUrl == '/'}">
            <div class="container-fluid">
                <NuxtLink class="navbar-brand" to="/" >
                    <NuxtImg  src="/images/svg/logo.svg" alt="" srcset="" />
                </NuxtLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="#" >
                              Discover
                            </NuxtLink>
                        </li>
                       
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="#" >About us</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="#" >
                              FAQs
                            </NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="#" >
                              Contact us
                            </NuxtLink>
                        </li>
                      
                    </ul>
                    <form class="d-flex" role="search">
                            <div class="btn btn-login">Log in</div>
                            <!-- <div class="btn-support btn">
                                Sign up
                            </div> -->
                            <Button>
                                Sign up
                            </Button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
    const route = useRoute()

    const checkUrl = computed(() =>{
        return route.fullPath
    })

    const handleScroll = () => {
        const navbar = document.getElementById('navbar')
        if (window.scrollY > 300) {
            navbar.classList.add('navbar-scrolled')
        } else {
            navbar.classList.remove('navbar-scrolled')
        }
    }

    onMounted(() => {
        window.addEventListener('scroll', handleScroll)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll)
    })
</script>

<style lang="scss" scoped>
.navbar-toggler{
    color: transparent !important;
    background-color: transparent !important;
    border: none !important;
}
.navbar-scrolled {
    background-color: #fff; 
    // transition: background-color 0.3s ease; 
    transition: background-color 0.5s  ease-in-out, box-shadow 0.5s  ease-in-out;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    margin: 0;
    border-radius: 0;
}
</style>