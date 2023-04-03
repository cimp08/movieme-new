/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Loader from '../components/shared/Loader';
import QuestionMark from '../components/shared/QuestionMark';
import { peopleHelper } from '../utils/Network';
import PeopleHero from '../components/people/PeopleHero';
import PeopleInfo from '../components/people/PeopleInfo';
import PeopleKnownFor from '../components/people/PeopleKnownFor';

const PersonPage = () => {
  const [person, setPerson] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();
 

  const getPerson = async () => {
    setIsLoading(true);
    try {
      await axios
        .get(peopleHelper.peopleUrl(id))
        .then((res) => setPerson(res.data));
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getPerson();
  }, [id]);


  return (
    <>
      {isLoading && (
        <div className='h-[60vh] flex justify-center items-center'>
          <Loader />{' '}
        </div>
      )}
      {error && (
        <div className='h-[60vh] flex justify-center items-center'>
          <QuestionMark />
        </div>
      )}
      {!isLoading && person.id && (
        <>
          <PeopleHero person={person} />
          <div className='max-w-6xl mx-auto flex flex-col lg:flex-row gap-10'>
            <div className='w-full lg:w-[230px]'>
              <div className='mx-4'>
                <PeopleInfo person={person} />
              </div>
            </div>
            <div className='flex-grow mx-4'>
              <PeopleKnownFor />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PersonPage;
