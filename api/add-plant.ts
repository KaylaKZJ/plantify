import { NextApiHandler } from 'next';
import { xata } from '../common/utils/xata';

const handler: NextApiHandler = async (req, res) => {
  const { type, name, indoor, last_watered, next_water, water_schedule } =
    req.body;

  await xata.db.plants.create({
    type,
    name,
    indoor,
    last_watered,
    next_water,
    water_schedule,
  });
  res.end();
};

export default handler;
