import React from 'react'
import App from './App.css';
import {
   ButtonBack, ButtonFirst, ButtonLast, ButtonNext,
   CarouselProvider, DotGroup, ImageWithZoom, Slide, Slider
} from 'pure-react-carousel';
import s from 'pure-react-carousel/dist/react-carousel.es.css';


export default function Hobbies(props) {
   return (
      <div className='page'>
         <h1>
            Hobbies
         </h1>



         <CarouselProvider
            visibleSlides={3}
            totalSlides={6}
            step={3}
            naturalSlideWidth={400}
            naturalSlideHeight={500}
            hasMasterSpinner
         >
            <h2 className={s.headline}>Carousel (With Master Loading Spinner)</h2>
            <p>
               This spinner will go away after all the images have loaded. You might want to use
               Chrome dev tools to throttle the network connection so you can see the spinner.
    </p>
            <Slider className={s.slider}>
               <Slide index={0}>
                  <ImageWithZoom src="/static/media/Summer2019.0a140bb8.jpg" />
               </Slide>
               <Slide index={1}>
                  <ImageWithZoom src="/static/media/Summer2019.0a140bb8.jpg" />
               </Slide>
               <Slide index={2}>
                  <ImageWithZoom src="/static/media/Summer2019.0a140bb8.jpg" />
               </Slide>
               <Slide index={3}>
                  <ImageWithZoom src="/static/media/Summer2019.0a140bb8.jpg" />
               </Slide>
               <Slide index={4}>
                  <ImageWithZoom src="/static/media/Summer2019.0a140bb8.jpg" />
               </Slide>
               <Slide index={5}>
                  <ImageWithZoom src="/static/media/Summer2019.0a140bb8.jpggit status
                  " />
               </Slide>
            </Slider>
            <ButtonFirst>First</ButtonFirst>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
            <ButtonLast>Last</ButtonLast>
            <DotGroup />
         </CarouselProvider>

      </div>
   )
}
