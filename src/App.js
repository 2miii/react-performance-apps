import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import A from './components/A';
import B from './components/B';

function App() {
  const [value, setValue] = useState("");
  const [posts, setPosts] = useState([]);

  //데이터 가져오기,요청하기
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())//response 이름은 자유, json() 통으로 데이터가 올 때
      .then(posts => setPosts(posts))//가져온 데이터를 여기에 넣음
  }, [])
    
  return (
    <div style={{padding: '1rem' }}>
      <input
        value={value}//입력 값
        onChange={e => setValue(e.target.value)} //e발생시 setValue를 이용하여 동작을 보이게 해줌
      />

      <div style={{display: 'flex'}}>
        <A message={value} posts={posts}/>
        <B />
      </div>
      
    </div>
  );
}

export default App;
