


function ProductCard({image , title , price , count , rating ,description}){

    return(
    <>
           <div className="w-28 h-[200px] drop-shadow-mds flex justify-center items-center"><img  src={image} alt="productimage"  /></div>
    
    <div className="flex-col flex p-2">
      <p>{title.slice(0,50)}</p>
      <p>${price}</p>
      <p>{count} left</p>
      <p className='flex'>{rating} Star</p>
      <p>{description.slice(0,150)}....</p>
    </div>
    </>
    )
}

export default ProductCard;
