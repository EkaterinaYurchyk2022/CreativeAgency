import React from 'react';
import {Title, TitleLogo} from "@/components/common/Title";

const Banner = () => {
    return (
        <>
            <section className='banner'>
                <div className='container'>
                    <div>
                        <Title title=''/>
                        <TitleLogo title=''/>
                    </div>
                    <div>
                        <button className='button-primary'>Request a callback</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;
