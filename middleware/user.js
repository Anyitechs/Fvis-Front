export default function ({ redirect, $auth, store }) {
    if (!$auth.hasScope('user')) {
        return redirect('/login')
    }
}
