import { get } from 'axios'


export const getPost = () => {
  return get('/episituation-service/posts')
}