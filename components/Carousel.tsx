import { Fragment, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from "../styles/components/carousel/carousel.module.css";
import CarouselCard from './CarouselCard';

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

    const carouselInfo = [
        {
            image: "/images/carousel/Vootvid.png",
            projectName: "Hospital Queue (Prototype)",
            description: "This project is a part of CSC105 Web Development. We were asked to design the system that could solve the Covid-19 situation. Our group came up with the idea of hospital queue system which could distribute patients to other hospitals. So, hospitals would not be overcrowding.",
        },
        {
            image: "/images/carousel/NNPC.png",
            projectName: "Papaya Classifier Project",
            description: "The application is developed to show the result from the papaya classification model which is a part of CSC340 Artificial Intelligent.",
        },
        {
            image: "/images/carousel/KKPCargo.png",
            projectName: "KKP Cargo & Logistic",
            description: "KKP Cargo is a logistic company that transports goods from China to Thailand via cargo ship. The website lets customers keep track of their orders and the staff update the product status by scanning the barcode of the tracking number.",
        },
        {
            image: "/images/carousel/Eduroom.png",
            projectName: "Eduroom (Integrated I)",
            description: "Eduroom is a web application that allows users to buy course and practice coding challenges. I was responsible for the code grading function which allows users to submit code for review and receive the score.",
        },
        {
            image: "/images/carousel/DekCare.png",
            projectName: "DekCare (Integrated II)",
            description: "DekCare is a mobile application which allows parents to consult doctors online. This reduce the spread of Covid-19 as parents do not need to visit hospital directly.",
        },
        {
            image: "/images/carousel/MembyApplication.png",
            projectName: "Memby (Mobile Application)",
            description: "Memby is a membership system which keeps track of the customers data and the monthly sales. It also records the transactions for further analysis which is curcial for business decision-making.",
        },

    ]

    
      
    return (<Fragment>
        <div className={styles.embla}>
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {carouselInfo.map((element, key) => {
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