{/* Conserva los colores de la app */}
export const COLORS = {
    background: '#201713',
    surface: '#F2E4D0',
    surfaceAlt: '#634638',
    primary: '#C58B59',
    primaryDark: '#8C5E3C',
    textPrimary: '#201713',
    textSecondary: '#634638',
    textOnDark: '#F2E4D0',
    border: '#D8C1A5',
    placeholder: '#A8907B',
    success: '#628568',
    error: '#B85C50',
} as const;


{/*Unidades de tipografía*/}
export const TYPOGRAPHY = {
    fontSizeXS: 11,
    fontSizeSM: 13,
    fontSizeMD: 15,
    fontSizeLG: 17,
    fontSizeXL: 20,
    fontSizeXXL: 24,
    fontWeightRegular: '400' as const,
    fontWeightMedium: '500' as const,
    fontWeightSemiBold: '600' as const,
    fontWeightBold: '700' as const,
} as const;


{/*Unidades de espaciado*/}
export const SPACING = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
} as const;


{/* el "as const" es para que TypeScript conserve los valores como constantes*/}