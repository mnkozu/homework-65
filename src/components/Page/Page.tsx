import React from 'react';
import {ApiPage} from '../../types';

interface Props {
  pageContent: ApiPage;
}

const Page: React.FC<Props> = ({pageContent}) => {
  return (
    <div>
      <h2>{pageContent.title}</h2>
      <p>{pageContent.content}</p>
    </div>
  );
};

export default Page;