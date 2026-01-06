import { getMenu } from "lib/shopify";
import { Menu as MenuType } from "lib/shopify/types";
import MenuItem from "./atoms/menu-item";

/**
 * @returns: En sektion.
 * @example: <Header />
 * @alias: Header
 * @summary: Denne komponent bruges til at oprette en ny sektion.
 * @version: 1.1.0
 * @property: [children, variant, columns, gap, px, pt, pb, className, tag, ...props, data]
 * @todo: bedre navngivning af props
 * @author: Kasper Buchholtz
 **/

export async function Menu() {
    const menu = await getMenu('main-menu');

    if (!menu.length) {
        return null
    }



    return (
        <nav className="w-1/2">
            {menu.length ? (
                <ul className="flex justify-center my-auto text-dark">
                    {menu.map((item: MenuType) => (
                        <MenuItem item={item} key={item.title} />
                    ))}
                </ul>
            ) : null}
        </nav>
    );
}
