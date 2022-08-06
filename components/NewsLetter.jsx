import React, { useState } from 'react'
import {Model} from './index'
import {motion} from 'framer-motion'
import {submitEmail} from '../services'


const NewsLetter = ({setProgress}) => {
    const [showModel, setShowModel] = useState(false)
    const [email,setEmail] = useState('')
    const [error, setError] = useState(false)
    const [successMessage,setShowSuccessMessage] = useState(false)


      const handleSubmit = (e)=>{
        e.preventDefault()
        
        if(email.length===0){
          setError(prev=>!prev)
          return
        }

        const emailObj = {email}

        submitEmail(emailObj).then((res)=>{
          setShowSuccessMessage(true);
          setTimeout(()=>{
            setShowSuccessMessage(false);
          },3000);
        })


      }

  return (
    <div>
     <div className="bg-white shadow-lg rounded-lg p-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        Sign-up for NewsLetter
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 mb-4 ">
         <input type="email" 
        className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
        placeholder="Email"
        name="email"
        onChange={(e)=>setEmail(e.target.value)}
         />
         <motion.button 
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.9 }}
         className="mt-4 px-3 rounded-full transaction duration-500 py-3 text-slate-800 bg-pink-500 hover:text-pink-600 hover:bg-black"
         onClick={handleSubmit}
         >
            Submit
         </motion.button>
         {successMessage && (
          <p className="text-xl text-green-400 mt-3 text-center p-5">You will be notified on new every new post</p>
         )}
         {error && (
          <p className="text-xl text-red-400 mt-3 text-center p-5">Please Enter Your Email</p>
         )}
      </div>
    </div>
    
    </div>
  )
}

export default NewsLetter