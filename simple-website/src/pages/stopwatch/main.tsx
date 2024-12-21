import React from 'react';
import Link from 'next/link';
import StopWatch from "@/components/stopwatch/StopWatch";
import {ClockIcon, HomeIcon} from "@heroicons/react/outline";
import {PencilIcon} from "@heroicons/react/solid";

const Main: React.FC = () => {
    return (
        <div className="min-h-screen p-6" data-theme="cozy">
            <div className="flex justify-between items-center mb-7">
                <nav className="flex space-x-1">
                    <Link href="/"
                          className="text-2xl bg-base-100 p-2 rounded-lg flex items-center space-x-2 hover:bg-primary-focus transition duration-300">
                        <HomeIcon className="w-8 h-8"/>
                        <div>Home</div>
                    </Link>
                    <Link href="/stopwatch/main"
                          className="text-2xl bg-base-100 p-2 rounded-lg flex items-center space-x-2 hover:bg-primary-focus transition duration-300">
                        <ClockIcon className="w-8 h-8"/>
                        <div>StopWatch</div>
                    </Link>
                    {/*<p className="text-2xl font-bold mb-8 mt-5">AND</p>*/}
                    <Link href="/timer/main"
                          className="text-2xl bg-base-100 p-2 rounded-lg flex items-center space-x-2 hover:bg-primary-focus transition duration-300">
                        <ClockIcon className="w-8 h-8"/>
                        <div>Timer</div>
                    </Link>
                    <Link href="/drawing/main"
                          className="text-2xl bg-base-100 p-2 rounded-lg flex items-center space-x-2 hover:bg-primary-focus transition duration-300">
                        <PencilIcon className="w-8 h-8"/>
                        <div>Drawing</div>
                    </Link>
                </nav>
            </div>
            <StopWatch/>
        </div>
    );
};

export default Main;