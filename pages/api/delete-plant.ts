import { NextApiHandler } from 'next';
import { xata } from '../../common/utils/xata';

const handler: NextApiHandler = async (req, res) => {
  const { id } = req.body;

  const result = await xata.db.plants.delete(id);

  res.status(200).send({ result });
  res.end();
};

export default handler;
