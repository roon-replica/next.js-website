import React from 'react';
import Link from 'next/link';
import StopWatch from "@/components/stopwatch/StopWatch";
import { ArrowLeftIcon } from "@heroicons/react/outline";

const Main: React.FC = () => {
    return (
        <div className="min-h-screen p-6" data-theme="cozy">
            <div className="flex justify-between items-center mb-7">
                <Link href="/" className="text-xl p-2 rounded-lg">
                    <ArrowLeftIcon className="w-6 h-6" />
                </Link>
            </div>
            <StopWatch />
        </div>
    );
};

export default Main;