import { get } from 'axios'


export const getPost = () => {
  return get('/api/posts')
}