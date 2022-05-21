export const state = () => ({
    currentUser: {username:"DefaultUser",isAuthor:false}
  })

export const mutations = {
    switch_user(state,user){
        state.currentUser.username = user.username;
        state.currentUser.isAuthor = user.isAuthor;
    }
}