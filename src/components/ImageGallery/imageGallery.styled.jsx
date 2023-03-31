import styled from '@emotion/styled';

const Gallery = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
`;

const GalleryItems = styled.li`
  scale: 1;
  transition: transform 300ms;
  cursor: pointer;
  img {
    border-radius: 5px;
  }
  &:hover {
    transform: scale(1.05);
  }
`;

export { Gallery, GalleryItems };
