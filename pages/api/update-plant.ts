import { NextApiHandler } from 'next';
import { xata } from '../../common/utils/xata';

const handler: NextApiHandler = async (req, res) => {
  const { id, next_water } = req.body;

  const result = await xata.db.plants.update(id, {
    next_water: next_water,
  });

  res.status(200).send({ result });
  res.end();
};

export default handler;
