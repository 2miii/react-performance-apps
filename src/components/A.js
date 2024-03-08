import React from 'react'
// A 모든 요소를 하나의 컴포넌트에 넣음

export const A = ({message, posts}) => {
  return (
    <div>
          <h1>A Component</h1>
          <p>{message}</p>
          <ul>
               {posts.map(post => {
                    return(
                         // {}변하지 않는 값을 넣어주면 좋음 (데이터 받아오기)
                         <li key={post.id}> 
                              <p>{post.title}</p>
                         </li>
                    );
               })}
          </ul>
    </div>
  );
};

export default A;