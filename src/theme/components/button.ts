export const ButtonComponent = {
    root: {
        fontSize: '1rem',
        paddingX: '0.625rem',
        paddingY: '0.375rem',
        fontWeight: '500',
        borderRadius: '{border.radius.md}',
       
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
            hoverBackground: '{primary.400}',
            activeBackground: '{primary.400}',
            borderColor: '{primary.500}',
            hoverBorderColor: '{primary.400}',
            activeBorderColor: '{primary.400}',
            color: '#ffffff',
            hoverColor: '#ffffff',
            activeColor: '#ffffff',
            focusRing: {
                color: '{primary.500}',
            }
        }
    }
}