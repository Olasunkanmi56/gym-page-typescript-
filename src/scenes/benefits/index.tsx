import HText from "@/shared/HText"
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/20/solid"
import {motion} from "framer-motion"
import Benefit from "./Benefit"
import ActionButton from "@/shared/ActionButton"
import HomePageGraphic from "@/assets/BenefitsPageGraphic.png"


const container = {
  hidden: {},
  visible: {
      transition: { staggerChildren: 0.2 }
  }
}


const benefits: Array<BenefitType > = [
  {
     id: 1,
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Loremndndnsdhdhdhdhdbg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nam!"
  },
  {
    id: 2,
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Loremndndnsdhdhdhdhdbg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nam!"
  },
  {
    id: 3,
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Loremndndnsdhdhdhdhdbg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nam!"
  },
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({setSelectedPage}: Props) => {
  
  return <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        // className="mx-auto w-5/6 flex flex-col gap-10
      >
      <motion.div
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true, amount: 0.5 }}
       transition={{duration: 0.5 }}
       variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
       }}
      className="md:my-5 md:w-3/5">
         <HText>MORE THAN JUST A GYM.</HText>
         <p className="text-sm my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil magnam in voluptas? Nobis rerum placeat quidem ducimus quae autem laborum, dicta magnam ullam accusamus facilis!</p>
      </motion.div>
      </motion.div>
      <motion.div 
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true, amount: 0.5 }}
       transition={{ duration: 0.5 }}
       variants={container}
             className="md:flex items-center justify-between gap-8 mt-5">
      {benefits.map((benefit: BenefitType) => (
         <Benefit 
         key={benefit.id}
         icon={benefit.icon}
         title={benefit.title}
         description={benefit.description}
         setSelectedPage={setSelectedPage}
         />
        ))}
      </motion.div>
      <div className=" mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
        <img className="mx-auto" src={HomePageGraphic} alt="" />
        <div className="">
          <div className="relative">
              <div className="before:absolute before:top-20 before:-left-20 before:z-[1] before:content-abstractwaves ">
                  <HText>HILLION OF HAPPY MEMBERS GETTING{" "}
                   <span className="text-primary-500">FIT</span>
                  </HText>
              </div>
          </div>
          <p className="my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates quod quaerat nisi atque aspernatur maxime repellendus asperiores ipsum sit cupiditate aliquam eum itaque excepturi officia harum mollitia, possimus optio cumque.</p>
        <p className="mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates quod quaerat nisi atque aspernatur maxime repellendus asperiores ipsum sit cupiditate aliquam eum itaque excepturi officia harum mollitia, possimus optio cumque.</p>
        </div>
      </div>
      <div className="relative mt-16">
         <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
            <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
         </div>
      </div>
  </section>
}

export default Benefits