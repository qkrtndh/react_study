import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
const StyledItemBoxDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 10px;
  height: 100px;
  margin: 20px;
  align-items: center;
`;

const ListPage = () => {
  const [no, setNo] = useState(6);
  const [posts, setPosts] = useState([
    { id: 1, title: '제목1', content: '내용1' },
    { id: 2, title: '제목2', content: '내용2' },
    { id: 3, title: '제목3', content: '내용3' },
    { id: 4, title: '제목4', content: '내용4' },
    { id: 5, title: '제목5', content: '내용5' },
  ]);

  const [post, setPost] = useState({
    id: no,
    title: '',
    content: '',
  });

  const handleWrite = (e) => {
    e.preventDefault();
    setNo(no + 1);

    const a = { id: no };

    setPost({ ...post, ...a });
    setPosts([...posts, post]);
  };

  const handleForm = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>리스트페이지</h1>
      <form onSubmit={handleWrite}>
        <input
          type="text"
          placeholder="제목"
          value={post.title}
          onChange={handleForm}
          name="title"
        />
        <input
          type="text"
          placeholder="내용"
          value={post.content}
          onChange={handleForm}
          name="content"
        />
        <button type="submit">글쓰기</button>
      </form>
      <hr />
      {posts.map((post) => (
        <StyledItemBoxDiv>
          <div>
            번호: {post.id} 제목: {post.title} <br />
            내용: {post.content}
          </div>

          <button>삭제</button>
        </StyledItemBoxDiv>
      ))}
    </div>
  );
};

export default ListPage;
