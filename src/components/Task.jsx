import React from 'react';
import { formatDistanceToNow, differenceInDays } from 'date-fns';
import { tr } from 'date-fns/locale';

const Task = ({ taskObj, onComplete }) => {
  const daysLeft = differenceInDays(new Date(taskObj.deadline), new Date());
  const timeLeft = formatDistanceToNow(new Date(taskObj.deadline), {
    locale: tr,
    addSuffix: true,
  });

  return (
    <div className="p-6 bg-white rounded-md leading-normal mt-4 shadow-[0_4px_5px_0_rgb(0_0_0_/_10%)]">
      <h3 className="text-lg text-[#c8781a]">{taskObj.title}</h3>
      <div className="text-xs pt-1">
        son teslim:{' '}
        <span
          className={`py-1 px-2 rounded-sm inline-block ${
            daysLeft <= 3 ? 'bg-urgent' : 'bg-normal'
          }`}
        >
          {timeLeft}
        </span>
      </div>
      <p className="pt-2 pb-3 text-sm text-[#444]">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span
            className="inline-block py-1.5 px-3 text-sm border-solid border-2 border-[#ccc] mr-1 mb-1.5 rounded-[30px]"
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          onClick={() => onComplete(taskObj.id)}
          className="block py-2 px-3 ml-auto bg-[#fecc91] shadow-[0_4px_5px_0_rgb(0_0_0_/_5%)] rounded-sm border-0 cursor-pointer"
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;
