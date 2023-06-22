import React from 'react';
import {Title} from "@/components/common/Title";
import {brand, showcase} from "@/assets/data/dummydata";
import {Card} from "@/components/common/Card";

const Brand = () => {
    return (
        <>
            <div className='brand'>
                <div className='container'>
                    <div className='heading-title'>
                        <Title title='WE ARE PROUD TO WORK WITH THESE COMPANIES'/>
                    </div>
                    <div className='brand-content grid-6 py'>
                        {brand.map((item) => (
                            <div className='images' key={item.id}>
                                <img src={item.cover} alt={item.cover} width='100%' height='100%'/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Brand;
