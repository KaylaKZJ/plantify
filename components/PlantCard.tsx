import next from 'next';
import Image from 'next/image';
import React from 'react';
import { TPlantCard } from '../common/types/plantCard';
import { formatDateForUser, waterToday } from '../common/utils/dates';
import plantImage from '../public/plant.jpg';
import WaterPlantButton from './Buttons/WaterPlantButton';
const PlantCard = ({ name, type, lastWatered, nextWater, id }: TPlantCard) => {
  return (
    <div className='border-solid border-2 border-sky-700 rounded-md p-8 pt-4 bg-white'>
      <div className='w-full h-[300px] relative'>
        <Image src={plantImage} alt='me' layout='fill' objectFit='contain' />
      </div>
      <h2 className='capitalize'>{name}</h2>
      <p>
        <b>Type</b>: <br /> {type}
      </p>
      <p>
        <b>Last Watered</b>:
        <br /> {formatDateForUser(lastWatered)}
      </p>
      <p>
        <b>Next Water</b>:
        <br />
        {waterToday(nextWater) ? 'Today' : formatDateForUser(nextWater)}
      </p>
      {waterToday(nextWater) && <WaterPlantButton id={id} type={type} />}
    </div>
  );
};

export default PlantCard;
