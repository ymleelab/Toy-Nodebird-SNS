import Head from 'next/head';

import AppLayout from "../components/AppLayout";
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const profile = () => {
    const followerList = [{ nickname:'ymlee' }, { nickname: 'test' }, { nickname: 'abc' }];
    const followingList = [{ nickname:'following' }, { nickname: 'test' }, { nickname: 'abc' }];
    return (
        <>
            <Head>
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={followingList} />
                <FollowList header="팔로워 목록" data={followerList} />
            </AppLayout>
        </>  
    );
};

export default profile;