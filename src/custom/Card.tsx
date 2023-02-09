type Props = {
image:any;
heading:string
text:string;
}

const Card = ({image, heading, text}:Props)=>{
    return(
        <section className="relative lg:w-6/12 w-12/12 flex justify-start flex-col items-center text-center">
          <figure>
          <img src={image} alt="fruit"/>
        </figure>
        <figcaption className="absolute top-44 lg:top-96 z-50 flex lg:text-center flex-col lg:w-6/12 w-10/12">
          <h1 className="lg:text-3xl text-2xl font-bold lg:pb-6 pb-2">{heading}</h1>
          <p className="leading-6 lg:leading-8 lg:text-base text-sm pb-2">{text}</p>
        </figcaption>
        </section>
    )
}

export default Card