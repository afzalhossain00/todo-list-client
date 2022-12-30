import React from 'react';

const TaskDetails = ({ task, refetch }) => {
    const { _id, title, image, description, postDate } = task;

    return (
        <div>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-48 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
                        <p className="dark:text-gray-100">{description.slice(0, 35)}</p>
                        {/* <p className="dark:text-gray-100">{postDate}</p> */}
                    </div>
                    <div className='flex justify-between mt-2'>
                        <p>Date: {postDate.slice(0, 10)}</p>
                        <p>Time: {postDate.slice(11)}</p>
                    </div>

                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</button>
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Complete</button>
                </div>
            </div>
        </div>
    );
};

export default TaskDetails;