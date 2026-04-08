import ComapnyImg from '../assets/images/project-images/www.asinfotechsolution.co.in_ (1).png'
import HealthImg from '../assets/images/project-images/parth-health-care.vercel.app_.png'
import ShopImg from '../assets/images/project-images/shopping-website-one-eosin.vercel.app_.png'


const projects = [
  {
    id: 1,
    title: "Official Company's Website",
    image: ComapnyImg,
    live: true,
    link: "https://www.asinfotechsolution.co.in/"
  },
  {
    id: 2,
    title: "Shopping Website",
    image: ShopImg,
    live: false,
    template: ShopImg
  },
  {
    id: 3,
    title: "Healthcare Website",
    image: HealthImg,
    live: true,
    link: "https://parth-health-care.vercel.app/"
  }
];

export default projects;