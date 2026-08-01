export const ButtonComponent = {
    root: {
        fontSize: '0.875rem',
        paddingX: '0.625rem',
        paddingY: '0.375rem',
        borderRadius: '{border.radius.md}',
        label: {
            fontWeight: '500'
        },
        sm: {
            fontSize: '0.75rem',
            paddingX: '0.75rem',
            paddingY: '0.5rem'
        },
        lg: {
            fontSize: '1rem',
            paddingX: '1.25rem',
            paddingY: '0.75rem'
        },
        primary: {
            background: '{primary.500}',
            hoverBackground: '{primary.600}',
            activeBackground: '{primary.950}',
            borderColor: '{primary.500}',
            hoverBorderColor: '{primary.600}',
            activeBorderColor: '{primary.700}',
            color: '#ffffff',
            hoverColor: '#ffffff',
            activeColor: '#ffffff',
            focusRing: {
                color: '{primary.500}',
            }
        }
    }
}