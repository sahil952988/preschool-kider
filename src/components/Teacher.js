import React from 'react'
import { useGetTeacherQuery } from '../Features/TeacherApi'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../Features/Constant';

const Teacher = ({ teacher }) => {

  const { id } = useParams();

  const { data, isLoading } = useGetTeacherQuery(teacher)

  console.log('teacherData:', data);
  return (
    <div>
      {data &&
        <div className='flex space-x-6'>
          <img src={`${baseUrl}${data.photo}`} alt="" className='h-[45px] w-[45px] rounded-[50%]' />
          <div className="detail">
            <p className='text-[18px]'>{data.fullname}</p>
            <h1 className='text-[#74787C] text-[13px]'>{data.profession}</h1>
          </div>
        </div>
      }
    </div>
  )
}

export default Teacher