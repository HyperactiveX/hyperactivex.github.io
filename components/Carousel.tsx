import { Fragment, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from "../styles/components/carousel/carousel.module.css";
import CarouselCard from './CarouselCard';
import projects from '../data/projectsData';

const Carousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, startIndex: 2, skipSnaps: true})
    
    // const scrollPrev = useCallback(() => {
    //     if (emblaApi) emblaApi.scrollPrev()
    //   }, [emblaApi])
    
    //   const scrollNext = useCallback(() => {
    //     if (emblaApi) emblaApi.scrollNext()
    //   }, [emblaApi])

    useEffect(() => {
    if (emblaApi) {
        // Embla API is ready
    }
    }, [emblaApi])

    
      
    return (<Fragment>
        <div className={styles.embla}>
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {projects.map((element, key) => {
                        return (<div className={styles.embla__slide} key={key}>
                            <CarouselCard 
                                image={element.image} 
                                projectName={element.projectName}
                                description={element.description}/>
                        </div>)
                    })}
                </div>
            </div>
            {/* <img className={styles.embla__prev}  
                    src='/images/carousel/chevron-left.svg'
                    onClick={scrollPrev}/>
            <img className={styles.embla__next} 
                    src='/images/carousel/chevron-right.svg'
                    onClick={scrollNext}/> */}
      </div>
    </Fragment>
      
    )
    
}

export default Carousel;