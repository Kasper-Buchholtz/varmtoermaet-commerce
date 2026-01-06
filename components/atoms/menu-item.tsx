"use client";

import MegaMenu from "components/mega-menu";
import { Menu } from "lib/shopify/types";
import Link from "next/link";
import { useState } from "react";

export default function MenuItem({ item }: { item: Menu }) {
    const [showMegaMenu, setShowMegaMenu] = useState(false);
    const [activeItem, setActiveItem] = useState<Menu | null>(null);

    const handleButtonClick = (item: Menu) => {
        if (activeItem === item) {
            setShowMegaMenu(!showMegaMenu);
        } else {
            setActiveItem(item);
            setShowMegaMenu(true);
        }
    };

    return (
        <li>
            {item.items && item.items.length > 0 ? (
                <button
                    onClick={() => handleButtonClick(item)}
                    className="py-3 px-6 hover:bg-beige rounded-2xl text-nowrap"
                    data-active={activeItem === item}

                >
                    {item.title}
                </button>
            ) : (
                <Link
                    href={item.path}
                    className="py-3 px-6 block hover:bg-beige rounded-2xl text-nowrap"
                    data-active={activeItem === item}
                >
                    {item.title}
                </Link>
            )}

            {/* Render the MegaMenu at the top level */}
            {activeItem === item && (
                <MegaMenu
                    item={item}
                    isOpen={showMegaMenu}
                    onClose={() => setShowMegaMenu(false)}
                />
            )}
        </li>
    );
}
