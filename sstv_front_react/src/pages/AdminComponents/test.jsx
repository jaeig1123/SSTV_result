import styled from "styled-components";

export const StyledDiv = styled.div`
  /* 페이지 전체 스타일링 */
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  padding: 20px;

  /* 중앙 정렬 */
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  /* 내용 컨테이너 스타일링 */
  background-color: white;
  width: 100%;
  max-width: 1200px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const Title = styled.h4`
  /* 제목 스타일링 */
  font-size: 20px;
  color: #333;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  /* 이미지 스타일링 */
  max-width: 100%;
`;

export const Table = styled.table`
  /* 테이블 스타일링 */
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 10px;
    border: 1px solid #ccc;
    text-align: center;
  }

  th {
    background-color: #f5f5f5;
    font-weight: bold;
  }
`;

export const Button = styled.button`
  /* 버튼 스타일링 */
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;
`;