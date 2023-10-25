const asyncHandler = controller => async (request, response, next) => {
    try {
        await controller(request, response)
    } catch (error) {
        return next(error)
    }
}

export default asyncHandler