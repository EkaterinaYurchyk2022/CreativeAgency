import {Title} from "@/components/common/Title";
import {expertise} from "@/assets/data/dummydata";
import {Card} from "@/components/common/Card";

const Expertise = () => {
    return (
        <>
            <section className='expertise'>
                <div className='container'>
                    <div className='heading-title'>
                        <Title title='Our expertise'/>
                        <p>Vivamus a ligula ut velit placerat egestas at id leo. Nulla ac volutpat nunc. Suspendisse ut magna portittor, sollicitudin ligula at, molestie dolor.
                        </p>
                    </div>
                    <div className='hero-content grid-4'>
                        {expertise.map((item, i) => (
                            <div className='box'>
                                <Card data={item} key={item.i} caption='learn more'/>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Expertise;
