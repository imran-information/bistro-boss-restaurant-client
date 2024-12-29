import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ChefCard from '../../../components/ChefCard/ChefCard';

const ChefRecommends = () => {
    return (
        <section>
            <SectionTitle subTitle="Should Try" title="Recommends"></SectionTitle>

            <div className="my-10">
                <ChefCard></ChefCard>
            </div>
        </section>
    );
};

export default ChefRecommends;