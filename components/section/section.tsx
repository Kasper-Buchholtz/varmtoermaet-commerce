import { cva, VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '../../utils/cn'

/**
 * @returns: En sektion.
 * @example: <Section />
 * @alias: Section
 * @summary: Denne komponent bruges til at oprette en ny sektion.
 * @version: 1.1.0
 * @property: [children, variant, columns, gap, px, pt, pb, className, tag, ...props, data]
 * @todo: bedre navngivning af props
 * @author: Kasper Buchholtz
 **/

export const Section_Variants = cva('grid group/theme', {
    variants: {
        theme: {
            light: 'bg-white text-dark',
            none: ''
        },
        columns: {
            default:
                'grid-cols-4 xs:grid-cols-4 sm:grid-cols-8 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-24 2xl:grid-cols-24',
            secondary: '',
        },
        gap: {
            default: 'gap-4 xs:gap-4 sm:gap-4 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-6',
            secondary: '',
        },
        px: {
            default: 'px-4 xs:px-6 sm:px-12',
            none: '',
            right: 'pr-4 xs:pr-6 sm:pr-12',
            left: 'pl-4 xs:pl-6 sm:pl-12',
        },
        pt: {
            default: 'pt-16 sm:pt-20 md:pt-24 lg:pt-32 xl:pt-40 2xl:pt-48',
            small: 'pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24 2xl:pt-32',
            none: '',
        },
        pb: {
            default: 'pb-16 sm:pb-20 md:pb-24 lg:pb-32 xl:pb-40 2xl:pb-48',
            small: 'pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-32',
            none: '',
        },
    },
    defaultVariants: {
        theme: 'light',
        columns: 'default',
        gap: 'default',
        px: 'default',
        pt: 'default',
        pb: 'default',
    },
})
export type ExtendedSectionProps = VariantProps<typeof Section_Variants> & {
    className?: string,
    children: React.ReactNode
}

export function Section({
    children,
    theme,
    columns,
    pb,
    pt,
    px,
    gap,
    className = '',
    tag,
    ...props
}: ExtendedSectionProps & { tag?: React.ElementType }) {
    const SectionComponent: React.ElementType = tag || 'div'
    return (
        <>
            <SectionComponent
                data-theme={theme || undefined}
                {...props}
                className={cn(
                    Section_Variants({
                        theme,
                        columns,
                        gap,
                        px,
                        pb,
                        pt,
                        className,
                    }),
                )}
            >
                {children}
            </SectionComponent>
        </>
    )
}
