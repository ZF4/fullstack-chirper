import {Query} from './index';

const getChirps = async () => Query(`
  SELECT
    chirps.*,
    users.name
  FROM chirps
  JOIN users ON users.id = chirps.userid
`);

const getChirp = async (id: number) => Query(`
  SELECT 
    chirps.*,
    users.name
  FROM chirps
  JOIN users ON users.id = chirps.userid
  WHERE chirps.id = ?

`,[id]);

const editChirp = async (chirp: string, id:number) => Query(`

  UPDATE chirps
  SET content = ?
  WHERE id =?
`,[chirp,id]);




export default {
    getChirps,
    getChirp,
    editChirp
}