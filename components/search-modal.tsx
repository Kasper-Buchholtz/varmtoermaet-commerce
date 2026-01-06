'use client';

import { Transition, TransitionChild } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { Fragment, useState } from 'react';
import { Search } from './layout/navbar/search';

export function SearchModal() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const openSearch = () => setIsOpen(true);
    const closeSearch = () => setIsOpen(false);

    // This function handles search submission
    const handleSearchSubmit = (formData: FormData) => {
        const query = formData.get('q') as string;
        if (query) {
            // Navigate to /search?q=...
            router.push(`/search?q=${encodeURIComponent(query)}`);
        }
        closeSearch(); // Close the modal after search
    };

    return (
        <>
            <button
                aria-label="Open search"
                onClick={openSearch}
                className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors"
            >
                <MagnifyingGlassIcon className="h-5 w-5 text-black" />
            </button>

            <Transition show={isOpen} as={Fragment}>
                <div className="z-50">
                    <TransitionChild
                        as={Fragment}
                        enter="transition-all ease-in-out duration-300"
                        enterFrom="opacity-80"
                        enterTo="opacity-100"
                        leave="transition-all ease-in-out duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-80"
                    >
                        <div className="absolute top-0 w-full z-50 right-0 right-0 py-2 px-8 bg-white rounded-2xl h-full my-auto border-t border-neutral-200 ">
                            {/* Search Input */}
                            <Search onSubmit={handleSearchSubmit} />
                        </div>
                    </TransitionChild>
                </div>
            </Transition>
        </>
    );
}
