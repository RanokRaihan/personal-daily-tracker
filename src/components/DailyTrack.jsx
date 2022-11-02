import React from "react";

const dailyTrack = () => {
  return (
    <div className='space-y-4'>
      <div className='track-input-group'>
        <p>Fastfood</p>
        <div className='flex gap-2'>
          <div className='flex gap-1'>
            <input type='radio' value='yes' name='fastfood' id='fastfoodYes' />
            <label className='cursor-pointer' htmlFor='fastfoodYes'>
              Yes
            </label>
          </div>
          <div className='flex gap-1'>
            <input type='radio' value='no' name='fastfood' id='fastfoodNo' />
            <label className='cursor-pointer' htmlFor='fastfoodNo'>
              No
            </label>
          </div>
        </div>
      </div>

      <div className='track-input-group'>
        <p>Cold Drinks</p>
        <div className='flex gap-2'>
          <div className='flex gap-1'>
            <input type='radio' value='yes' name='coldDrinks' id='coldDrinksYes' />
            <label className='cursor-pointer' htmlFor='coldDrinksYes'>
              Yes
            </label>
          </div>
          <div className='flex gap-1'>
            <input type='radio' value='no' name='coldDrinks' id='coldDrinksNo' />
            <label className='cursor-pointer' htmlFor='coldDrinksNo'>
              No
            </label>
          </div>
        </div>
      </div>

      <div className='track-input-group'>
        <p>Cigarette</p>
        <div className='flex gap-2'>
          <div className='flex gap-1'>
            <input type='radio' value='yes' name='cigarette' id='cigaretteYes' />
            <label className='cursor-pointer' htmlFor='cigaretteYes'>
              Yes
            </label>
          </div>
          <div className='flex gap-1'>
            <input type='radio' value='no' name='cigarette' id='cigaretteNo' />
            <label className='cursor-pointer' htmlFor='cigaretteNo'>
              No
            </label>
          </div>
        </div>
      </div>

      <div className='track-input-group'>
        <p>Study</p>
        <div className='flex gap-2'>
          <div className='flex gap-1'>
            <input type='radio' value='yes' name='study' id='studyYes' />
            <label className='cursor-pointer' htmlFor='studyYes'>
              Yes
            </label>
          </div>
          <div className='flex gap-1'>
            <input type='radio' value='no' name='study' id='studyNo' />
            <label className='cursor-pointer' htmlFor='studyNo'>
              No
            </label>
          </div>
        </div>
      </div>

      <div className='track-input-group'>
        <p>Coding</p>
        <div className='flex gap-2'>
          <div className='flex gap-1'>
            <input type='radio' value='yes' name='coding' id='codingYes' />
            <label className='cursor-pointer' htmlFor='codingYes'>
              Yes
            </label>
          </div>
          <div className='flex gap-1'>
            <input type='radio' value='no' name='coding' id='codingNo' />
            <label className='cursor-pointer' htmlFor='codingNo'>
              No
            </label>
          </div>
        </div>
      </div>
      <div className='track-input-group'>
        <p>Learned something new?</p>
        <div className='flex gap-2'>
          <div className='flex gap-1'>
            <input type='radio' value='yes' name='learning' id='learningYes' />
            <label className='cursor-pointer' htmlFor='learningYes'>
              Yes
            </label>
          </div>
          <div className='flex gap-1'>
            <input type='radio' value='no' name='learning' id='learningNo' />
            <label className='cursor-pointer' htmlFor='learningNo'>
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dailyTrack;
