import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import {RiLinkedinFill} from 'react-icons/ri'
import {AiOutlineInstagram} from 'react-icons/ai'

const socailLinks=[
    {
        path:'https://www.linkedin.com/',
        icon:<RiLinkedinFill className="group-hover:text-white w-4 h-5"/>
    },
    {
        path:'https://www.Instagram.com/',
        icon:<AiOutlineInstagram className="group-hover:text-white w-4 h-5"/>
    }
]

const quickLinks = [
    {
        path:'/home',
        display:'Home',
    },
    {
        path:'/',
        display:'About Us',
    },
    {
        path:'/services',
        display:'Services',
    },
    {
        path:'/',
        display:'Blog',
    },
]

const quickLinks2=[
    {
        path:'/find-a-doctor',
        display:'Find a Doctor',
    },
    {
        path:'/',
        display:'Request an Appointment',
    },
    {
        path:'/',
        display:'Find a Location',
    },
    {
        path:'/',
        display:'Get an Opinion',
    },
]
const quickLinks3=[
    {
        path:'/',
        display:'Donate',
    },
    {
        path:'/',
        display:'Contact Us',
    },
    
]
const Footer = () => {

    const year=new Date().getFullYear();
  return (
    <footer className="pb-16 pt-10">
        <div className="container">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-[20px] sm:grid-cols-2 grid-cols-1">
                <div>
                    <img src={logo} alt=""/>
                    <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">copyright {year} by Medicare all right reserved.</p>

                    <div className="flex items-center gap-3 mt-4">{socailLinks.map((link,index)=>(<Link to={link.path} key={index} className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                        {link.icon}
                    </Link>))}</div>
                </div>

                <div>
                    <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">I Want to:</h2>

                    <ul>
                        {quickLinks2.map((item,index)=>(
                            <li key={index} className="mb-4">
                                <Link to={item.path}>{item.display}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">Support</h2>

                    <ul>
                        {quickLinks3.map((item,index)=>(
                            <li key={index} className="mb-4">
                                <Link to={item.path}>{item.display}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">Quick Links</h2>

                    <ul>
                        {quickLinks.map((item,index)=>(
                            <li key={index} className="mb-4">
                                <Link to={item.path}>{item.display}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer