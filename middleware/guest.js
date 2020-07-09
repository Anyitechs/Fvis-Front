export default function ({ store, redirect, $auth }) {
    if (store.state.auth.loggedIn) {
        if($auth.hasScope('admin')) {
            return redirect('/admin')
        } else if($auth.hasScope('user')) {
            return redirect('/user/dashboard')
        }
    }
  }
