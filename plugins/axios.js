export default function ({ $axios, $auth, app, redirect }) {
    $axios.onError(error => {
        // console.table(error.response.data)
        throw error.response
        // console.log(error)
        // redirect('/login')
        // if (error.response.data == 'Token has expired') {
        //     $auth.logout()
        // }
    })
}

// export default function({ app, $axios }) {
//     $axios.onError((error) => {
//       if (error.response && error.response.status === 401) {
//         app.$auth.reset();
//       }

//       return Promise.reject(error);
//     });
//   }

