type Props = {
image:any;
heading:string
text:string;
}

const Card = ({image, heading, text}:Props)=>{
    return(
        <section className="relative lg:w-6/12 w-full flex justify-start flex-col items-center text-center">
          <figure className="w-full">
          <img src={image} alt="fruit" className="lg:h-full md:h-full sm:h-96 w-full"/>
        </figure>
        <figcaption className="absolute top-40 md:top-96 lg:top-80 z-50 flex lg:text-center flex-col lg:w-9/12 md:w-6/12 sm:w-12/12 px-8">
          <h1 className="text-Heading lg:text-4xl text-2xl font-bold lg:pb-6 pb-2 pt-2">{heading}</h1>
          <p className="text-Heading leading-6 lg:leading-8 lg:text-lg text-base pb-2">{text}</p>
        </figcaption>
        </section>
    )
}

export default Card