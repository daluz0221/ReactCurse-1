import React, { useMemo } from 'react'
import { GetHeroByPublisher } from '../../helpers/GetHeroByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ( {publisher} ) => {

   
    const heroes = useMemo( () => GetHeroByPublisher(publisher), [publisher]);

   
    return (
        <div className='row row-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn'>
            

                {
                    heroes.map(hero => (

                      <HeroCard 
                        key={hero.id}
                        {...hero}
                      >
                         
                      </HeroCard>
                    ))
                }
          

        </div>
    )
}
