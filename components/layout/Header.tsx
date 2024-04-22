'use client';
import Link from 'next/link';
// import {
//     AccountState,
//     setIsUserLoading,
//     setIsUserLoggedIn,
//     setUser,
// } from '@/store/UserStore';
// import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
// import { useSnapshot } from 'valtio';

const Header: React.FC = () => {
    // const router = useRouter();
    // const { isUserLoggedIn } = useSnapshot(AccountState);

    // const signOutClickHandler = useCallback(() => {
    //     setIsUserLoading(true);
    //     setUser({ email: '', id: '' });
    //     setIsUserLoggedIn(false);
    //     setIsUserLoading(false);
    //     router.replace('/');
    // }, []);

    return (
        <header className='bg-[#01778a] flex justify-between items-center px-8 py-3'>
            <div className='flex items-center'>
                <Link href='/'>
                    <h1 className='text-white text-3xl font-bold mr-16 cursor-pointer font-jura'>
                        Task Reminder
                    </h1>
                </Link>
                <div className='flex items-center gap-4'>
                    <Link className='relative' href='/'>
                        <span className='text-white text-lg relative cursor-pointer'>
                            Home
                        </span>

                        <span className='absolute left-0 bottom-0 h-0.5 w-full bg-white'></span>
                    </Link>

                </div>
            </div>

            <div className='flex'>
                <Link href='/login' legacyBehavior>
                    <a className='bg-black text-white text-lg px-4 py-2 rounded-lg mr-3'>
                        Sign In
                    </a>
                </Link>
                <Link href='/register' legacyBehavior>
                    <a className='bg-white text-blue-800 text-lg px-4 py-2 rounded-lg'>
                        Sign Up
                    </a>
                </Link>
            </div>

        </header>
    );
};

export default Header;
