import React, {useCallback, useEffect, useState} from 'react';
import {ApiPage} from '../../types';
import axiosApi from '../../axiosApi';
import {useParams} from 'react-router-dom';
import Page from '../../components/Page/Page';
import Spinner from '../../components/Spinner/Spinner';

const Pages = () => {
  const {pageName} =useParams();
  const [page, setPage] = useState<ApiPage | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchPage = useCallback(async () => {
    try {
      setLoading(true);
      const pagesResponse = await axiosApi.get<ApiPage>( '/pages/' + pageName + '.json');
      const page = pagesResponse.data;

      if (!page) {
        setPage({
          title: '',
          content: '',
        });
        return;
      }

      setPage(page);
    } finally {
      setLoading(false);
    }
  }, [pageName]);

  console.log(page);

  useEffect(() => {
    void fetchPage();
  }, [fetchPage]);


  return page && (
    <div>
      {loading ? <Spinner/> : <Page pageContent={page}/>}
    </div>
  );
};

export default Pages;