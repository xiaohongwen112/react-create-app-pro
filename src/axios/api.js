import { get, post } from './index'
const GETALL = '/room/getAll'

const SAVEDATA = '/room/addData'

export const getAll = () => { return get(GETALL) }


export const saveData = (param) => { return post(SAVEDATA, param) }