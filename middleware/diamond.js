export default function ({ redirect, $auth, store }) {
    if ($auth.user.member_id !== 5) {
        return redirect('/login')
    }
}
