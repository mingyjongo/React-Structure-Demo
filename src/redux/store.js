import { configureStore } from 'redux-starter-kit'

import blog from '../features/blog/redux/blog'

const store = configureStore({
  reducer: {
    blog: blog.reducer,
  },
})

export default store
