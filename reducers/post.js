export const initialState = {
    mainPosts: [{
        id:1,
        User: {
            id: 1,
            nickname: 'ymleelab',
        },
        content: 'first post #hashtag',
        Images: [{
            src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
        }, {
            src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
        }, {
            src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
        }],
        Comments: [{
            User: {
                nickname: 'nero',
            },
            content: 'wow !',
        }, {
            User: {
                nickname: 'hero',
            },
            content: 'hi',
        }]
    }],
    imagePaths: [],
    postAdded: false,
}

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

const ADD_POST = 'ADD_POST';
export const addPost = (data) => ({
    type: ADD_POST_REQUEST,
    data,
});

const dummyPost = {
    id: 2,
    content: '더미데이터입니다.',
    User: {
      id: 1,
      nickname: '제로초',
    },
    Images: [],
    Comments: [],
  };

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST_REQUEST:

        case ADD_POST_SUCCESS:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postadded: true,
            };

        case ADD_POST_FAILURE:

        default:
            return state;
    }
};

export default reducer;