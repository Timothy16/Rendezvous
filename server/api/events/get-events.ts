const config = useRuntimeConfig()
export default defineEventHandler(async (event) => {

    
    if (event.method === 'GET') {
        
        const queryParams = getQuery(event)
        const newRequest = await $fetch(`${config.API_BASE}/events`, 
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
                statusCode: error.status,
            });
        })
        return newRequest
    }
   
    throw createError({
        message: "Invalid Url",
        // status: 404,
        statusCode: 404,
        stack: undefined,
        data: null,

    });
})
