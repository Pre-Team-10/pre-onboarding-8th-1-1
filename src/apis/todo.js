/* eslint-disable consistent-return */
import { axiosInstance, getAccessToken, showErrorToast } from '../utils';

const accessToken = getAccessToken();

export const getTodos = async () => {
  try {
    const { data } = await axiosInstance.get('/todos', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data;
  } catch (error) {
    showErrorToast('할 일을 불러오지 못했습니다.');
  }
};

export const removeTodo = async (id) => {
  try {
    await axiosInstance.delete(`todos/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (error) {
    showErrorToast('할 일을 삭제하지 못했습니다.');
  }
};

export const addTodo = async (newTodo) => {
  const body = { todo: newTodo };
  try {
    await axiosInstance.post('/todos', body, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (error) {
    showErrorToast('할 일을 추가하지 못했습니다.');
  }
};

export const updateTodo = async ({ id, value, isChecked }) => {
  const body = { todo: value, isCompleted: isChecked };
  try {
    await axiosInstance.put(`/todos/${id}`, body, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    showErrorToast('할 일을 수정하지 못했습니다.');
  }
};
