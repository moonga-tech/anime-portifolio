import Image from "next/dist/client/image";

const imgs = ["1","2","3","4"].map((i) => {
  return (
      <div>
          <Image src={`/images/${i}.jpg`} alt="" srcset="" width={290} height={250}/>
      </div>
  )
})

export const ninjas = [
  {
    id: 1,
    name: 'Jiraya',
    justu: 'Rasengan',
    rank: 'Lengendary Sanin',
    description: 'Trained with Toads, he uses Sage Mode',
    img: '/images/1.jpg', 
  },
  {
    id: 2,
    name: 'Tsunade',
    justu: '1000 healing technique',
    rank: 'Lengendary Sanin',
    description: 'She can live more than a hundred years'
  },
  {
    id: 3,
    name: 'Orachimaru',
    justu: 'Regeneration',
    rank: 'Lengendary Sanin',
    description: 'His has na immortal body'
  },
  {
    id: 4,
    name: 'Naruto Uzumaki',
    justu: 'Rasenshuriken + Sage Mode',
    rank: 'Jonin',
    description: 'Sage Mode + Sage of the six paths powers'
  }
  
]; 
console.log(ninjas.img)