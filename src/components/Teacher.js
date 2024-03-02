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
          <p>{data.fullname}</p>
          <h1>{data.designation}</h1>
          <img src={`${baseUrl}${data.photo}`} alt="" className='h-[50px] w-[50px]' />

        </div>
      }


    </div>
  )
}

export default Teacher