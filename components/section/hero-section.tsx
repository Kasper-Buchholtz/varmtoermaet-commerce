
/**
 * @returns: En sektion.
 * @example: <HeroSection />
 * @alias: HeroSection
 * @summary: Denne komponent bruges til at oprette en ny sektion.
 * @version: 1.1.0
 * @property: [children, variant, columns, gap, px, pt, pb, className, tag, ...props, data]
 * @todo: bedre navngivning af props
 * @author: Kasper Buchholtz
 **/

import { Section } from "./section";


function HeroSection({ title, description, ...props }: any) {
    return (
        <Section px='none' pb='small' className='relative min-h-screen isolate' theme='light' {...props}>
            <div className='px-4 xs:px-6 sm:px-12 relative z-10 col-span-full mt-auto'>
                <div className='space-y-12'>
                    <div className="max-w-5xl">
                        <h1 dangerouslySetInnerHTML={{ __html: title }} />
                    </div>
                    <div className="w-full h-px bg-white" />
                    <div className="flex justify-between items-center flex-wrap relative z-10 gap-12">
                        <p>

                            {description}
                        </p>

                        <div>
                            <ul>
                                <li className="inline mr-4 mt-3">
                                    knap
                                </li>
                                <li className="inline mr-4 mt-3">
                                    knap
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div className='absolute inset-0 size-full z-0'>
                <div className="bg-red-500 size-full absolute inset-0"></div>
            </div>
        </Section>

    )
}

export default HeroSection