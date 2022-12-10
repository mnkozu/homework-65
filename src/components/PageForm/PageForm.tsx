import React, {useCallback, useEffect, useState} from 'react';
import axiosApi from '../../axiosApi';
import {ApiPage} from '../../types';
import Spinner from '../Spinner/Spinner';

interface Props {
  onSubmit: (page: ApiPage, id:string) => void,
  loading: boolean,
}

const PageForm: React.FC<Props> = ({onSubmit, loading}) => {
  const [page, setPage] = useState({
    title: '',
    content: '',
  });
  const [select, setSelect] = useState({selectedPage: ''});

  const fetchOnePage = useCallback(async (selectedPage: string) => {
    const pageResponse = await axiosApi.get('/pages/' + selectedPage + '.json');
    const pageData = pageResponse.data;

    if (!pageData) {
      setPage({
        title: '',
        content: '',
      });
      return;
    }

    setPage(pageData);
  }, []);

  useEffect(() => {
    if (select.selectedPage) {
      void fetchOnePage(select.selectedPage);
    }
  }, [fetchOnePage, select.selectedPage]);

  const onSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {name, value} = event.target;
    setSelect(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    setPage(prev => ({
      ...prev,
    [name]: value,
    }));
  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(page, select.selectedPage);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4 className="my-2">Edit the page</h4>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <select
          className="form-select mb-3"
          name="selectedPage"
          value={select.selectedPage}
          onChange={onSelect}
          required
        >
          <option disabled value="">Select!</option>
          <option value="about">About</option>
          <option value="contacts">Contacts</option>
          <option value="kdrama">Kdrama</option>
          <option value="netflix">Netflix</option>
          <option value="favouriteDishes">Favourite dishes</option>
        </select>
      </div>
      {loading ? <Spinner/> : (
        <>
          <div className="form-group mb-3">
            <label htmlFor="title">Title</label>
            <input
              id="title" name="title"
              className="form-control"
              value={page.title}
              onChange={onChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="image">Content</label>
            <textarea
              id="content" name="content"
              className="form-control"
              value={page.content}
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </>
      )}
    </form>
  );
};

export default PageForm;