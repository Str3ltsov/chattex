const ErrorHandler = (error, request, response, next) => {
    const statusCode = response.statusCode === 200 ? 500 : response.statusCode

    response.status(statusCode).json({
        'message': error.message,
        'stack': process.env.NODE_ENV === production ? null : error.stack
    })
}

export default ErrorHandler