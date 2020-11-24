import * as React from 'react'

import { LinkProps, Link } from '@reach/router'

export const ForwardRefLink = React.forwardRef<any, LinkProps<any>>(
    (properties, reference): JSX.Element => {
        const { children, ...rest } = properties

        return (
            <Link ref={reference as any} {...rest}>
                {children}
            </Link>
        )
    }
)
