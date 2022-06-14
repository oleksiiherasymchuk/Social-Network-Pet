import React, { useState, useReducer, useEffect } from 'react';
import s from './Post.module.css';
import userPhoto from "../../../../assets/images/user.png"
import profileReducer, { incrementLike, initialState } from '../../../../redux/profile-reducer';

// 6.0.1 version of react-redux was previous
const Post = ({likesCount, message}) => {

  const [like, setLike] = useState(likesCount)
  const [isClicked, setIsClicked] = useState(false)

  const [state, dispatch] = useReducer(profileReducer, initialState);

  useEffect(() => {
    
  }, [likesCount])
  

  return (
    <div>
      <div className={s.postList}>
      <span className={s.item}><img src={userPhoto} /></span>
       <span className={s.itemMessage}>{message}</span>
    </div>
    <div className={s.itemLike}>
    {/* <i 
    onClick={() => { console.log(likesCount + 1)
                      dispatch(incrementLike(likesCount + 1))
                      dispatch({type: 'increment'})
                    }} 
                     class='bx bx-like'></i> */}
    {/* {likesCount} */}
    <i class='bx bxs-like' 
    onClick={() => {
      if(like === likesCount){
         setLike(like + 1)
      } else {
         setLike(like - 1)
      }
    }}
    ></i> {like}
    </div>
    </div>
  )
}


export default Post;

// const initialState = {count: 0};

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return {count: state.count + 1};
//     case 'decrement':
//       return {count: state.count - 1};
//     default:
//       throw new Error();
//   }
// }

// function Counter() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <>
//       Count: {state.count}
//       <button onClick={() => dispatch({type: 'decrement'})}>-</button>
//       <button onClick={() => dispatch({type: 'increment'})}>+</button>
//     </>
//   );
// }