"use client"
import { Card, CardBody, Image, CardFooter } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useDispatch } from "react-redux"
import { setSelectedCard } from '@/lib/features/selectedCardSlice';
export default function SearchResultCard({ singleResult, index }) {
  const router = useRouter();
  const dispatch = useDispatch();
  function handlePress() {
    dispatch(setSelectedCard(singleResult))
    router.push(`/search/results/car`)
  }
  return (
    <>
      <Card shadow="sm" isPressable onPress={handlePress}>
        <CardBody className='flex justify-center items-center mt-4'>
            <Image
            className="h-[250px] rounded-xl" 
            src="../car-img.jpg"
            alt="Generic Image of a Car"
            ></Image>
        </CardBody>
        <CardBody>
          <h4 className="">Manufacturer:</h4>
          {singleResult['manufacturer'].toUpperCase()}
        </CardBody>
        <CardBody>{'Car Model: ' + singleResult['model'].toUpperCase()}</CardBody>
        <CardBody>{'Mileage: ' + singleResult['odometer']}</CardBody>
        <CardBody>{'Price: $' + singleResult['price']}</CardBody>
      </Card>
    </>
  );
}
