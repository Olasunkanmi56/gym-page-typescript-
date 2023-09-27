import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {motion} from "framer-motion"

const childVariant = {
    hidden: { opacity: 0, scale: 0.9},
    visible: {opacity: 1, scale: 1}
}

type Props = {
    icon:JSX.Element;
    title: string,
    description: string
    setSelectedPage: (value: SelectedPage) => void
}

const Benefit = ({ icon, title, description, setSelectedPage}: Props) => {
    
  return (
    <motion.div
    variants={childVariant}
    className="px-5 py-16  border-gray-100 border-2 border-gray-500 rounded-md mt-5 text-center">
        <div className="mb-4 flex justify-center">
            <div className="rounded-full border-2 border-gray-200 bg-primary p-4">
                 {icon}
            </div>
        </div>
        <h4 className="font-bold">{title}</h4>
        <p className="my-3">{description}</p>
        <AnchorLink className="text-sm font-bold underline hover:text-secondary-400"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
        >
            <p>Learn more</p>
        </AnchorLink>
    </motion.div>
  )
}

export default Benefit