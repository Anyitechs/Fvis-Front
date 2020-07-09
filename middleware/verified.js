export default function ({ store, redirect, $auth }) {
    if (store.state.auth.loggedIn) {
        if ($auth.user.email_verified_at == null) {
            return redirect('/resend_email')
        }
    }
}
