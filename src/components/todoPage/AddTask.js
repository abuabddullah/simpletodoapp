import React from 'react';
import { useForm } from "react-hook-form";


const AddTask = ({refetch}) => {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        const taskInfo = data;
        console.log(taskInfo);
        
        fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch();
                reset();
            })
    }

    return (

        <form className='d-grid w-75 mx-auto mt-5 gap-3 bg-warning p-3 rounded-3' onSubmit={handleSubmit(onSubmit)}>
            <input
            placeholder='Task Name'
            {...register("taskName", { required: true })} />
            {errors.taskName?.type === 'required' && "Task is required"}

            <textarea
            placeholder='Task Description'
            {...register("taskDescription", { required: true })} />
            {errors.taskDescription && "Task Description is required"}

            <input type="submit" />
        </form>
    );
};

export default AddTask;