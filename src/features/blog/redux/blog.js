import { createSlice } from 'redux-starter-kit'

export const blog = createSlice({
  slice: 'blog',
  initialState: {
    paginationOffset: 0,
  },
  reducers: {
    setPaginationOffset: (state, { payload }) => {
      state.paginationOffset = payload.offset
    },
  },
})

export default blog
