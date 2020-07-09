export default function ({ redirect, $auth, store }) {
    if ($auth.user.member_id !== 6) {
        return redirect('/login')
    }
}
