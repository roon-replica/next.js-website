// import { Inter } from "next/font/google";
// import React from "react";
// import Link from "next/link";
// import { ClipboardListIcon, ClockIcon } from "@heroicons/react/outline";
// import StopWatch from "@/components/stopwatch/StopWatch";
//
// const inter = Inter({ subsets: ["latin"] });
//
// export default function Home() {
//     return (
//         // <StopWatch />
//
//         <main
//             className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
//             data-theme="cozy"
//         >
//             <h1 className="text-4xl font-bold mb-8">Welcome, Thanks for visit</h1>
//             <div className="mb-8 text-center">
//                 {/*<p className="text-lg">Manage your tasks efficiently with our Todo List</p>*/}
//                 <p className="text-lg">Keep track of time with our StopWatch</p>
//             </div>
//             <nav className="flex space-x-8">
//                 <Link href="/todo-list/main" className="text-4xl bg-primary p-4 rounded-lg flex items-center space-x-2">
//                     <ClipboardListIcon className="w-8 h-8"/>
//                     <div>Todo List</div>
//                 </Link>
//                 <Link href="/timer/main" className="text-4xl bg-primary p-4 rounded-lg flex items-center space-x-2">
//                     <ClockIcon className="w-8 h-8"/>
//                     <div>StopWatch</div>
//                 </Link>
//             </nav>
//         </main>
//     );
// }

import React from "react";
import Link from "next/link";
import { ClipboardListIcon, ClockIcon } from "@heroicons/react/outline";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24" data-theme="cozy">
            <h1 className="text-4xl font-bold mb-8">Welcome, Thanks for visit</h1>
            <nav className="flex space-x-8">
                <Link href="/stopwatch/main" className="text-4xl bg-primary p-4 rounded-lg flex items-center space-x-2 hover:bg-primary-focus transition duration-300">
                    <ClockIcon className="w-8 h-8"/>
                    <div>StopWatch</div>
                </Link>
                <Link href="/timer/main" className="text-4xl bg-primary p-4 rounded-lg flex items-center space-x-2 hover:bg-primary-focus transition duration-300">
                    <ClockIcon className="w-8 h-8"/>
                    <div>Timer</div>
                </Link>
            </nav>
        </main>
    );
}