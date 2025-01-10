import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useAuth from '../../../hooks/useAuth';

const UserHome = () => {
    const { user } = useAuth()

    return (
        <div>
            <SectionTitle subTitle={"Hi,"} title={`welcome ${user?.displayName ? user?.displayName : "back"}`}></SectionTitle>
        </div>
    );
};

export default UserHome;