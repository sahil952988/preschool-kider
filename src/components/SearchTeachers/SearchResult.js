
import { useState } from "react";
import "../../style/SearchResult.css"
import { useGetClassesQuery } from "../../Features/ClassApi";


export const SearchResult = ({ result }) => {

  const { data: classData } = useGetClassesQuery();
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {

    setIsShown(current => !current);


  };

  return (
    <>
      <div className="text-[30px]" onClick={handleClick}>{result}</div>


      {isShown && (
        <div>
          <h2>Your Selected Teacher</h2>
          {classData && classData.map(detail => (
            <p>{detail.age}</p>
          ))}
        </div>
      )}

    </>
  );
};

