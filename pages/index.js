import React from 'react';
import styled from 'styled-components'
import MediaCard from '../src/components/MediaCard';

const Title = styled.h1`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
      <>
        <div align="center">
          <MediaCard />
        </div>
      </>
  )
}
