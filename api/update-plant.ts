import { NextApiHandler } from 'next';
import { xata } from '../common/utils/xata';

const handler: NextApiHandler = async (req, res) => {
  const { id, next_water } = req.body;

  await xata.db.plants.create({
    next_water,
  });

  await xata.db.plants.update(id, {
    next_water: next_water,
  });

  res.end();
};

export default handler;
