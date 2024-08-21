const config = useRuntimeConfig()
export default defineEventHandler(async (event) => {

    const queryParams = getQuery(event)
    const parameter = event.context?.params?.id
    
    const newRequest = await $fetch(`${config.API_BASE}/events/${parameter}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": "en-US",
            },
            query: queryParams
        }).catch((error) => {
            throw createError({
                message: error.data.message,
                data: null,
            });
        })
    return newRequest
})
