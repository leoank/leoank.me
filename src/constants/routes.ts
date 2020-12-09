/**
 * Domain Routes.
 *
 * Top level routes. Directly used by app component
 */
export const DOMAIN_ROUTES = {
    USER_FORM_ROUTE: {
        BASE: 'form/*',
        REDIRECT: 'form',
    },
}

/**
 * Routes related to form.
 * Login, Reset Password, Reset Password
 *
 * Generally the user routes before login.
 */
export const USER_FORM_ROUTES = {
    BASE: DOMAIN_ROUTES.USER_FORM_ROUTE.REDIRECT,
    LOGIN: 'login',
    FORGOT_PASSWORD: 'forgot-password',
    RESET_PASSWORD: 'reset-password',
}
