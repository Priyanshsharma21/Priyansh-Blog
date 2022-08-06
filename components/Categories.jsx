import React, { useEffect, useState } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getCategories,getFeaturedPost } from '../services';
import {motion} from 'framer-motion'

const Categories = ({setProgress}) => {
  const [categories, setCategories] = useState([])

  useEffect(()=>{
    getCategories().then((categories)=>setCategories(categories))
  },[])





  return (
    <div>
     <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
       Categories
      </h3>
      {categories.map((cato,i)=>(
        <Link key={i} href={`/category/${cato.slug}`}>
          <motion.div
           whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.9 }}
          >
          <span className="cursor-pointer block mt-3">
              {cato.name}
          </span> 
          </motion.div>
        </Link>
      ))}
    </div>
    
    </div>
  )
}

export default Categories