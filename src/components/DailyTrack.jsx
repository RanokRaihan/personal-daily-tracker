import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAddTrackMutation, useUpdateTrackMutation } from "../features/track/trackApi";
import monthYearGen from "../lib/monthYearGen";

const DailyTrack = ({ data }) => {
  // get the loggedin user data
  const { email, uid } = useSelector((state) => state?.auth?.user) || {};

  //for input states
  const [formData, setFormData] = useState(
    data?.data || {
      namaz: {
        status: null,
        quantity: 0,
      },
      fastfood: null,
      coldDrinks: null,
      cigarette: {
        status: null,
        quantity: 0,
      },
      study: {
        status: null,
        quantity: 0,
      },
      coding: {
        status: null,
        quantity: 0,
      },
      learning: {
        status: null,
        topic: "",
      },
    }
  );

  // redux api for update and add data to server
  const [updateTrack] = useUpdateTrackMutation();
  const [addTrack] = useAddTrackMutation();

  //add track data if does not exist alredy
  useEffect(() => {
    if (!data) {
      const dataToAdd = {
        user: email,
        userID: uid,
        date: new Date().getDate().toString(),
        monthYear: monthYearGen(),
        data: formData,
      };
      addTrack(dataToAdd);
    }
  }, [addTrack, data, email, formData, uid]);

  //sync updates to server
  useEffect(() => {
    if (formData && data?.id) {
      updateTrack({ id: data.id, data: formData });
    }
  }, [data.id, formData, updateTrack]);

  //handle update of tracks
  const handleChange = (e) => {
    console.log(e.target.name);
    switch (e.target.name) {
      case "namaz":
      case "cigarette":
      case "study":
      case "coding":
        setFormData((prev) => {
          return {
            ...prev,
            [e.target.name]: {
              status: Boolean(e.target.value === "yes"),
              quantity: e.target.value === "yes" ? 1 : 0,
            },
          };
        });
        break;
      case "learning":
        setFormData((prev) => {
          return {
            ...prev,
            [e.target.name]: {
              status: Boolean(e.target.value === "yes"),
              topic: "",
            },
          };
        });
        break;
      case "fastfood":
      case "coldDrinks":
        setFormData((prev) => {
          return {
            ...prev,
            [e.target.name]: Boolean(e.target.value === "yes"),
          };
        });
        break;
      default:
        break;
    }
  };
  return (
    <div className='space-y-4'>
      <div className='track-input-group'>
        <p>Namaz</p>
        <div className='flex gap-2'>
          <div className='flex items-center gap-1'>
            <input
              className='w-4 h-4'
              checked={formData?.namaz?.status === true}
              type='radio'
              value='yes'
              name='namaz'
              id='namazYes'
              onChange={handleChange}
            />
            <label className='cursor-pointer' htmlFor='namazYes'>
              Yes
            </label>
          </div>
          <div className='flex items-center gap-1'>
            <input
              className='w-4 h-4'
              checked={formData?.namaz?.status === false}
              type='radio'
              value='no'
              name='namaz'
              id='namazNo'
              onChange={handleChange}
            />
            <label className='cursor-pointer' htmlFor='namazNo'>
              No
            </label>
          </div>
        </div>
      </div>
      <div className='track-input-group'>
        <p>Fastfood</p>
        <div className='flex gap-2'>
          <div className='flex items-center gap-1'>
            <input
              className='w-4 h-4'
              checked={formData?.fastfood === true}
              type='radio'
              value='yes'
              name='fastfood'
              id='fastfoodYes'
              onChange={handleChange}
            />
            <label className='cursor-pointer' htmlFor='fastfoodYes'>
              Yes
            </label>
          </div>
          <div className='flex items-center gap-1'>
            <input
              className='w-4 h-4'
              checked={formData?.fastfood === false}
              type='radio'
              value='no'
              name='fastfood'
              id='fastfoodNo'
              onChange={handleChange}
            />
            <label className='cursor-pointer' htmlFor='fastfoodNo'>
              No
            </label>
          </div>
        </div>
      </div>

      <div className='track-input-group'>
        <p>Cold Drinks</p>
        <div className='flex gap-2'>
          <div className='flex items-center gap-1'>
            <input
              className='w-4 h-4'
              checked={formData?.coldDrinks === true}
              type='radio'
              value='yes'
              name='coldDrinks'
              id='coldDrinksYes'
              onChange={handleChange}
            />
            <label className='cursor-pointer' htmlFor='coldDrinksYes'>
              Yes
            </label>
          </div>
          <div className='flex items-center gap-1'>
            <input
              className='w-4 h-4'
              checked={formData?.coldDrinks === false}
              type='radio'
              value='no'
              name='coldDrinks'
              id='coldDrinksNo'
              onChange={handleChange}
            />
            <label className='cursor-pointer' htmlFor='coldDrinksNo'>
              No
            </label>
          </div>
        </div>
      </div>

      <div className='track-input-group'>
        <p>Cigarette</p>
        <div className='flex gap-2'>
          <div className='flex items-center gap-1'>
            <input
              className='w-4 h-4'
              checked={formData?.cigarette?.status === true}
              type='radio'
              value='yes'
              name='cigarette'
              id='cigaretteYes'
              onChange={handleChange}
            />
            <label className='cursor-pointer' htmlFor='cigaretteYes'>
              Yes
            </label>
          </div>
          <div className='flex items-center gap-1'>
            <input
              className='w-4 h-4'
              checked={formData?.cigarette?.status === false}
              type='radio'
              value='no'
              name='cigarette'
              id='cigaretteNo'
              onChange={handleChange}
            />
            <label className='cursor-pointer' htmlFor='cigaretteNo'>
              No
            </label>
          </div>
        </div>
      </div>

      <div className='track-input-group'>
        <p>Study</p>
        <div className='flex gap-2'>
          <div className='flex items-center gap-1'>
            <input
              className='w-4 h-4'
              checked={formData?.study?.status === true}
              type='radio'
              value='yes'
              name='study'
              id='studyYes'
              onChange={handleChange}
            />
            <label className='cursor-pointer' htmlFor='studyYes'>
              Yes
            </label>
          </div>
          <div className='flex items-center gap-1'>
            <input
              className='w-4 h-4'
              checked={formData?.study?.status === false}
              type='radio'
              value='no'
              name='study'
              id='studyNo'
              onChange={handleChange}
            />
            <label className='cursor-pointer' htmlFor='studyNo'>
              No
            </label>
          </div>
        </div>
      </div>

      <div className='track-input-group'>
        <p>Coding</p>
        <div className='flex gap-2'>
          <div className='flex items-center gap-1'>
            <input
              className='w-4 h-4'
              checked={formData?.coding?.status === true}
              type='radio'
              value='yes'
              name='coding'
              id='codingYes'
              onChange={handleChange}
            />
            <label className='cursor-pointer' htmlFor='codingYes'>
              Yes
            </label>
          </div>
          <div className='flex items-center gap-1'>
            <input
              className='w-4 h-4'
              checked={formData?.coding?.status === false}
              type='radio'
              value='no'
              name='coding'
              id='codingNo'
              onChange={handleChange}
            />
            <label className='cursor-pointer' htmlFor='codingNo'>
              No
            </label>
          </div>
        </div>
      </div>
      <div className='track-input-group'>
        <p>Learned something new?</p>
        <div className='flex gap-2'>
          <div className='flex items-center gap-1'>
            <input
              className='w-4 h-4'
              checked={formData?.learning?.status === true}
              type='radio'
              value='yes'
              name='learning'
              id='learningYes'
              onChange={handleChange}
            />
            <label className='cursor-pointer' htmlFor='learningYes'>
              Yes
            </label>
          </div>
          <div className='flex items-center gap-1'>
            <input
              className='w-4 h-4'
              checked={formData?.learning?.status === false}
              type='radio'
              value='no'
              name='learning'
              id='learningNo'
              onChange={handleChange}
            />
            <label className='cursor-pointer' htmlFor='learningNo'>
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyTrack;
