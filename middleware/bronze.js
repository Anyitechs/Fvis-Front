export default function ({ redirect, $auth, store }) {
    if ($auth.user.member_id !== 2) {
        return redirect('/login')
    }
}
