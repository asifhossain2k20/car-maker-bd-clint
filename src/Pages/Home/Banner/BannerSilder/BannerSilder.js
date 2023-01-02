import React from 'react';

const BannerSilder = ({slider}) => {
    const {img,id,prev,next}=slider;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
                <div className='img-carousel'>
                <img src={img} alt='' className="w-full rounded-xl" />
                </div>

                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 right-5 top-1/4">
                    <h1 className='text-white font-bold text-6xl'>Affordable <br />
                    Car<br/>
                    For Serviceing <br />
                    </h1>
                </div>

                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 right-5 top-1/2 w-2/5">
                    <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur illo commodi culpa repudiandae, voluptas nihil quod laborum temporibus tenetur quos nisi? Unde deleniti nostrum eos quasi numquam, veritatis rem aperiam.</p>
                </div>


                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 right-5 top-2/3 w-2/5">
                    <button className="btn btn-warning mr-5">Warning</button>
                    <button className="btn btn-outline btn-warning">Warning</button>
                </div>


                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a> 
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
            </div> 
    );
};

export default BannerSilder;