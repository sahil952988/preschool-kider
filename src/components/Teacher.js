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
        <div>
          <img src={`${baseUrl}${data.photo}`} alt="" className='h-[45px] w-[45px] rounded-[50%]' />
          <p>{data.fullname}</p>
          <h1>{data.profession}</h1>
        </div>
      }
    </div>
  )
}

export default Teacher