import React from 'react';
import {Title, TitleLogo} from "@/components/common/Title";

const Banner = () => {
    return (
        <>
            <section className='banner'>
                <div className='container'>
                    <div>
                        <Title title="We're looking forward to start a new project"/>
                        <TitleLogo title="Let's take your business to the next level!"/>
                    </div>
                    <div>
                        <button className='button-primary'>Request a call-back</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;
