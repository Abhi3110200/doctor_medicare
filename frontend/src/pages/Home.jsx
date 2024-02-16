import heroImg1 from '../assets/images/hero-img01.png'
import heroImg2 from '../assets/images/hero-img02.png';
import heroImg3 from '../assets/images/hero-img03.png';
import icon1 from '../assets/images/icon01.png'
import { Link } from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs';
import icon2 from '../assets/images/icon02.png';
import icon3 from '../assets/images/icon03.png'
import About from '../components/About/About';
import DoctorList from '../components/Doctors/DoctorList';

const Home = () => {
  return (
    <>
        <section className='hero__section pt-[60px] 2xl:h-[800px]'>
            <div className='container'>
                <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>

                    <div className=''>
                        <div className='lg:w-[570px]'>
                            <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>We help patients live a healthy, longer life.</h1>
                            <p className='text__para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eius quis nisi, modi similique perspiciatis sed hic in architecto rerum, unde ipsa labore eveniet iste alias ullam! Libero, iusto repudiandae!</p>
                            
                            <button className='btn'>Request an Appointment</button>
                        </div>


                        <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                            <div>
                                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>10+</h2>
                                <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                                <p className='text__para'>Years of Experiences</p>
                            </div>
                            <div>
                                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>5+</h2>
                                <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                                <p className='text__para'>Clinic Location</p>
                            </div>
                            <div>
                                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>100%</h2>
                                <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                                <p className='text__para'>Patient Satisfaction</p>
                            </div>

                        </div>
                    </div>

                    <div className='flex gap-[30px] justify-end'>
                        <div>
                            <img src={heroImg1} alt='' className='w-full'/>
                        </div>
                        <div className='mt-[30px]'>
                            <img src={heroImg2} alt='' className='w-full mb-[30px]'/>
                            <img src={heroImg3} alt='' className='w-full mb-[30px]'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className='container'>
                <div className='lg:w-[470px] mx-auto'>
                    <h2 className='heading text-center'>
                        Providing the best medical services
                    </h2>
                    <p className='text__para text-center'>
                        World-class care for everyone. Our health System offers unmatched, expert health care.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>

                    <div className='py-[30px] px-5'>
                        <div className='flex items-center justify-center'>
                            <img src={icon1} alt=''/>
                        </div>

                        <div className=' mt-[30px]'>
                            <h2 className='text-[26px] laeding-9 text-headingColor font-[700] text-center'>Find a Doctor</h2>

                            <p className='text-center leading-7 text-textColor font-[400] mt-4'>World-class care for everyone. Our health System offers unmatched, expert health care.</p>

                            <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181a1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                                <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                            </Link>
                        </div>
                    </div>
                    <div className='py-[30px] px-5'>
                        <div className='flex items-center justify-center'>
                            <img src={icon2} alt=''/>
                        </div>

                        <div className=' mt-[30px]'>
                            <h2 className='text-[26px] laeding-9 text-headingColor font-[700] text-center'>Find a Location</h2>

                            <p className='text-center leading-7 text-textColor font-[400] mt-4'>World-class care for everyone. Our health System offers unmatched, expert health care.</p>

                            <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181a1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                                <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                            </Link>
                        </div>
                    </div>
                    <div className='py-[30px] px-5'>
                        <div className='flex items-center justify-center'>
                            <img src={icon3} alt=''/>
                        </div>

                        <div className=' mt-[30px]'>
                            <h2 className='text-[26px] laeding-9 text-headingColor font-[700] text-center'>Book Appointment</h2>

                            <p className='text-center leading-7 text-textColor font-[400] mt-4'>World-class care for everyone. Our health System offers unmatched, expert health care.</p>

                            <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181a1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                                <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <About/>

        <section>
            <div className='container'>
                <div className='xl:w-[470px] mx-auto'>
                    <h2 className='heading text-center'>Our Great Doctors</h2>
                    <p className='text__para text-center'>
                        World-class care for everyone. Our health System offers unmatched, expert health care.
                    </p>
                </div>

                <DoctorList/>
            </div>
        </section>
    </>
  )
}

export default Home