const errorMiddleware= (err,req,res,next)=>{
    console.log('errorMiddleware activated!');
    const statusCode = err.statusCode ? err.statusCode:500;
    res.status(statusCode);
    res.json({message:err.message, stack: process.env.NODE_ENV === 'development'? err.stack : null});
}

export default errorMiddleware;