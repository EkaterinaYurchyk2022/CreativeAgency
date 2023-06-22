import React from 'react';
import {Title} from "@/components/common/Title";
import {showcase} from "@/assets/data/dummydata";
import {Card} from "@/components/common/Card";
import Link from "next/link";
import {HiOutlineArrowRight} from "react-icons/hi";

const ShowCase = () => {
    return (
        <>
            <section className='showcase'>
                <div className='container'>
                    <div className='heading-title'>
                        <Title title='Selected cases'/>
                    </div>
                    <div className='hero-content grid-3'>
                        {showcase.map((item) => (
                            <Card data={item} key={item.id}/>
                        ))}
                    </div>
                    <div className='card links'>
                        <Link href='/#'>
                            VIEW CASE <HiOutlineArrowRight className='link-icon'/>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ShowCase;
