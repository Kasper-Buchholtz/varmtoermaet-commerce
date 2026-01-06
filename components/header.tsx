import { Logo } from "./atoms/Logo";
import { CartModal } from "./cart/modal";
import { Menu } from "./menu";
import { SearchModal } from "./search-modal";
import { Section } from "./section/section";

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


async function Header() {

    return (
        <Section pb='small' pt="none" className='fixed pt-3 w-full isolate top-0 right-0 z-1000' theme='none' tag='header'>
            <div className="bg-white rounded-2xl col-span-full relative py-2 px-8 flex justify-between items-center">
                <Logo />
                <Menu />
                <div className="flex gap-3 w-1/4 justify-end">
                    <div>
                        <SearchModal />
                    </div>
                    <div>
                        <CartModal />
                    </div>
                </div>
            </div>
        </Section>

    )
}

export default Header