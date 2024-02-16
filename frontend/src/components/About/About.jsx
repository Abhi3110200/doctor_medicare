import aboutImg from '../../assets/images/about.png'
import aboutCard from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <section>
        <div className='container'>
            <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
                <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
                    <img src={aboutImg} alt=''/>
                    <div className=' absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[15%] lg:right-[15%]'>
                        <img src={aboutCard} alt=''/>
                    </div>
                </div>

                <div className='w-full lg:w-1/2 xl:w-[670px] lg:order-2 order-1'>
                    <h2 className='heading lg:mb-3 sm:mb-5'>
                        Proud to be one of the nations best.
                    </h2>
                    <p className='text_para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis officiis explicabo voluptatibus est veritatis modi obcaecati. Reiciendis minus doloribus laudantium! Asperiores praesentium laborum facilis, atque animi consequuntur culpa ipsum officiis.</p>
                    <p className='text__para mt-[30px]'>Our Best is something we strive fro each day, caring for our patients-not looking back at what we accomplished but towards what we can do tomorrow.</p>

                    <Link to='/'>
                        <button className='btn'>Learn More</button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About