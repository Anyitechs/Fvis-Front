export default function ({ redirect, $auth, store }) {
    if ($auth.user.member_id !== 3) {
        return redirect('/login')
    }
}
