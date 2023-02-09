type Props = {
image:any;
heading:string
text:string;
}

const Card = ({image, heading, text}:Props)=>{
    return(
        <section className="relative lg:w-6/12 w-12/12 flex justify-start flex-col items-center text-center">
          <figure>
          <img src={image} alt="fruit" className="h-full"/>
        </figure>
        <figcaption className="absolute top-48 lg:top-80 z-50 flex lg:text-center flex-col lg:w-9/12 w-12/12 px-8">
          <h1 className="text-Heading lg:text-4xl text-2xl font-bold lg:pb-6 pb-2 pt-2">{heading}</h1>
          <p className="text-Heading leading-6 lg:leading-8 lg:text-lg text-base pb-2">{text}</p>
        </figcaption>
        </section>
    )
}

export default Card