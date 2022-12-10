import React, {useState} from 'react';
import PageForm from '../../components/PageForm/PageForm';
import axiosApi from '../../axiosApi';
import {ApiPage} from '../../types';
import {useNavigate} from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const editPage = async (page: ApiPage, id: string) => {
    try {
      setLoading(true);
      await axiosApi.put('/pages/' + id + '.json', page);
      navigate('/pages/' + id)
    } finally {
      setLoading(false);
    }
  };


  return (
    <div>
      <PageForm onSubmit={editPage} loading={loading}/>
    </div>
  );
};

export default Admin;