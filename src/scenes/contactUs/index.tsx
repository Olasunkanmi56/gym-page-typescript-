import {useForm} from 'react-hook-form'
import { SelectedPage } from '@/shared/types'
import { motion} from "framer-motion"
import ContactImage from "@/assets/ContactUsPageGraphic.png"
import HText from '@/shared/HText'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({setSelectedPage}: Props) => {
    const { register, trigger, formState: {errors}} = useForm()
    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if(!isValid) {
            e.preventDefault();
        }
    }
  return <section id='contactus' 
   className='mx-auto w-5/6 pt-24 pb-10'>
      <motion.div
       onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
       <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.5 }}
         transition={{ duration: 0.5 }}
         variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
         }}
       >
            <HText>
               <span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE
            </HText>
            <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis exercitationem ab vero cum, qui maxime recusandae, consequuntur quae accusamus corporis quod quisquam nam incidunt sapiente suscipit enim error doloribus iure eos architecto quas itaque provident dignissimos! Architecto earum inventore repudiandae.</p>
            <div className="mt-10 justify-between gap-8 md:flex">
                <motion.div
                 className='mt-10 basis-3/5 md:mt-0'
                 initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
                >
                    <form
                     target='_blank'
                     onSubmit={onSubmit}
                     method='POST'
                     action="https://formsubmit.co/876c94609902727b2dcb979e42ecbe3e"
                     className='w-full rounded-md bg'
                    >
                        <input 
                        className='mb-4 w-full rounded-md border  bg-primary-300 px-6 py-4 placeholder-[#556987] text-white outline-none'
                        type="email" 
                        placeholder='Email Address'
                        {...register('email', {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                        })}
                        />
                        {errors.email && (
                            <p className='mt-1 text-xs text-primary-500'>
                            {errors.email.type === 'required' && "Please provide a valid email address"}
                            {errors.email.type === 'pattern' && "Please provide a valid email address"}
                            </p>
                        )}
                        <input 
                        className='mb-4 w-full rounded-md bg-primary-300 px-6 py-4 placeholder-[#556987] text-white outline-none'
                        type="text" 
                        placeholder='Full Name'
                        {...register('name', {
                            required: true,
                            maxLength: 100
                        })}
                        />
                        {errors.name && (
                            <p className='mt-1 text-xs text-primary-500'>
                            {errors.name.type === 'required' && "Please enter your full name"}
                            {errors.name.type === 'maxLength' && "Please enter your full name less than 100 characters"}
                            </p>
                        )}
                        <textarea
                         className='mb-4 w-full rounded-md border  bg-primary-300 px-6 py-4 placeholder-[#556987] text-white outline-none'
                         placeholder='Message'
                         rows={4}
                         cols={50}
                         {...register("message", {
                            required: true,
                            maxLength: 1000
                         })}
                         />
                          {errors.message && (
                            <p className='mt-1 text-xs text-primary-500'>
                             {errors.message.type === 'required' && "Please enter a message"}
                             {errors.message.type === 'maxLength' && "Please enter a message less than 1000 characters"}
                             </p>
                         )}
                         <button type='submit' className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'>
                            Submit
                         </button>
                    </form>
                </motion.div>
                <motion.div
                  className='relative mt-16 basis-2/5 md:mt-0'
                  initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
                >
                <div className="md:before:content-evolvetext w-full before:-right-10 before:absolute before:bottom-2 before:z-[-1]">
                    <img src={ContactImage} className='w-full' alt="ContactImage" />
                </div>
                </motion.div>
            </div>
       </motion.div>
      </motion.div>
  </section>
}

export default ContactUs