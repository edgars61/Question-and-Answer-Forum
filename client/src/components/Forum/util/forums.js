import axios from 'axios';

import { SERVER_URL } from '../../../constants';

// Mutation 
export const createForum = (req) => {
  return axios.post(`${SERVER_URL}/forums/create`, {
    forum: req.forum,
  }).then(res => {
    if (res.status !== 200) {
      return { isSuccess: false };
    }

    return { data: res.data, isSuccess: res.status === 200 };
  });
}

// Query
export const getAllForumsByTopic = (req) => {
  return axios.get(`${SERVER_URL}/forums/user/${req.forum.topic}`).then(res => {
    if (res.status !== 200) {
      return { isSuccess: false };
    }

    return { data: res.data, isSuccess: res.status === 200 };
  });
}
