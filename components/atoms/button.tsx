import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { ButtonProps } from 'types/button-type'
import { cn } from 'utils/cn'

/**
 *
 * @returns: En knap-komponent med brugerdefineret styling
 * @example:
 * <Button variant="primary">Knap</Button>
 * <Button variant="primary"><Link>Knap</Link></Button>
 * <Button variant="primary"><Icon /><Link>Knap</Link></Button>
 * @alias: Button
 * @summary: Denne komponent bruges til at oprette en ny knap med brugerdefinerede stilarter.
 * @version: 1.0.0
 * @property: [variant, asChild]
 * @author: Kasper Buchholtz
 *
 **/


type ExtendedButtonProps = VariantProps<typeof Button_Variants> &
    ButtonProps

const Button_Variants = cva(
    'inline-flex items-center gap-4 justify-center rounded-lg cursor-pointer ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50', // whitespace-nowrap
    {
        variants: {
            variant: {
                white: 'px-6 py-3 border bg-white text-dark border-white hover:bg-white/75 active:bg-white/90',
                dark: 'px-6 py-3 border bg-dark text-white border-dark hover:bg-dark/75 active:bg-dark/90',
                yellow: 'px-6 py-3 border bg-yellow text-dark border-yellow hover:bg-yellow/75 active:bg-yellow/90',
                beige: 'px-6 py-3 border bg-beige text-dark border-beige hover:bg-beige/75 active:bg-beige/90',
                none: '',
            },
        },
        defaultVariants: {
            variant: 'dark',
        },
    },
)

const Button = ({
    className,
    variant,
    asChild = false,
    ref,
    ...props
}: ExtendedButtonProps) => {
    const Comp = (asChild ? Slot : 'button') as React.ElementType
    return (
        <Comp
            className={`text-base ${cn(Button_Variants({ variant, className }))}`}
            ref={ref}
            {...props}
        />
    )
}

Button.displayName = 'Button'

export { Button, Button_Variants }

