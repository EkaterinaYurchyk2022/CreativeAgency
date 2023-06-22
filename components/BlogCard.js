import React from 'react';
import {blogdata, showcase} from "@/assets/data/dummydata";
import {Card} from "@/components/common/Card";

const BlogCard = () => {
    return (
        <div>
            <div className='container blog-card grid-2 py'>
                    {blogdata.map((item) => (
                        <Card data={item} key={item.id} path='blog'/>
                    ))}
            </div>
        </div>
    );
};

export default BlogCard;
