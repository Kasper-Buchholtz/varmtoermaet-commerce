"use client";

import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { Menu } from "lib/shopify/types";
import Link from "next/link";
import { Fragment } from "react";

type MegaMenuProps = {
    item: Menu;
    isOpen: boolean;
    onClose: () => void;
};

export default function MegaMenu({ item, isOpen, onClose }: MegaMenuProps) {
    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog onClose={onClose} className="relative z-40">
                {/* Backdrop */}
                <TransitionChild
                    as={Fragment}
                    enter="transition-all ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-all ease-in duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div
                        className="fixed inset-0 bg-black/20"
                        aria-hidden="true"
                    />
                </TransitionChild>

                {/* Mega menu panel */}
                <TransitionChild
                    as={Fragment}
                    enter="transition-all ease-out duration-200"
                    enterFrom="opacity-0 -translate-y-2"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition-all ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-2"
                >
                    <DialogPanel className="fixed left-0 right-0 top-[80px] px-4 xs:px-6 sm:px-12">
                        <div className="mx-auto w-full rounded-2xl bg-white px-8 py-6 shadow-xl dark:bg-black">
                            {item.items && item.items.length > 0 && (
                                <ul className="flex w-full flex-wrap gap-x-6 gap-y-4 h-112 flex-col">
                                    {item.items.map((subitem: Menu) => (
                                        <li key={subitem.title} className="w-1/4 inline h-fit">
                                            <Link
                                                href={subitem.path}
                                                className="block text-xl font-medium hover:opacity-80"
                                                onClick={onClose}
                                            >
                                                {subitem.title}
                                            </Link>

                                            {subitem.items && (
                                                <ul className="mt-2 space-y-1">
                                                    {subitem.items.map((child: Menu) => (
                                                        <li key={child.title}>
                                                            <Link
                                                                href={child.path}
                                                                className="text-lg hover:opacity-80"
                                                                onClick={onClose}
                                                            >
                                                                {child.title}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </DialogPanel >
                </TransitionChild>
            </Dialog>
        </Transition>
    );
}
