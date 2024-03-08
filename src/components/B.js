import React, { useCallback } from 'react'
// B 여러 컴포넌트로 나눠넣음


const Message = React.memo(({ message }) => {
  return <p>{ message }</p>;
  
}) 


// React.memo ()사용 시 필요한 영역만 사용한다.
const ListItem = React.memo(({ post }) => {
  // 렌더링 체크하려면 이렇게 써도 되나 크롬 profiler 사용
 // console.log('ListItem Component is rendering') 
  return(
    <li key = {post.id}>
      <p>{post.title}</p>
    </li>
  )
})


const List = React.memo( ({ posts }) => {
  console.log('List Component is rendering') 
  return (
    <ul>
      {posts.map(post => (
        <ListItem key={post.id} post ={post}/>
      ))}
    </ul>
  )
})

export const B = ({ message, posts }) => {
  console.log('B Component is rendering');
  //use
  const testFunction = useCallback(() => {},[]);
  return (
    <div>
      <h1>B Component</h1>
      <Message message={message}/>
      <List posts={posts} testFunction={testFunction} />
    </div>
  )
}
//렌더링이 3번정도 되는것은 index.js 의 </React.StrictMode >떄문

export default B;