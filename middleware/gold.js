export default function({ redirect, $auth, store }) {
  if ($auth.user.member_id !== 4) {
    return redirect('/login')
  }
}
