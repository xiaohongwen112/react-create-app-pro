import { get, post } from './index'
const GETALL = '/room/getAll'

export const getAll = () => { return get(GETALL) }