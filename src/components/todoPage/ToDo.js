import React, { useState } from 'react';
import { MdSpeakerNotes } from "react-icons/md";
import Table from 'react-bootstrap/Table';
import { useQuery } from 'react-query';
import Button from 'react-bootstrap/Button'
import AddTask from './AddTask';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

const ToDo = () => {


    const { data: tasks, isLoading, refetch, error } = useQuery('tasks', () => fetch('https://agile-savannah-03150.herokuapp.com/tasks').then(res => res.json()));

    if (isLoading) {
        return <div>Loading...</div>
    }

    const handleDelete = (_id) => {
        // console.log(_id);
        fetch(`https://agile-savannah-03150.herokuapp.com/tasks/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch();
            })
    }

    // text-decoration-line-through;
    const handleComplete = (task) => {
        toast.success(`${task.taskName} is completed`)
        const updateInfo = {
            complete: true,
            completeClass: 'text-decoration-line-through',
        }
        console.log(updateInfo);

        fetch(`https://agile-savannah-03150.herokuapp.com/tasks/${task._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch();
            })


    }


    return (
        <div>
            <h1 className="text-warning p-5">Simple Todo App <span className='text-danger'> <MdSpeakerNotes /></span></h1>
            <p className="text-start"><small>total task :{tasks?.length}</small></p>

            <p className="text-end">
                <Button
                    onClick={() => signOut(auth)}
                >Logout</Button></p>
            <Table hover striped bordered responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <td>Task Name</td>
                        <td>Task Description</td>
                        <td colSpan="2">Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks?.map((task, index) => <tr key={task._id}>
                            <td>{index + 1}</td>
                            <td className={task?.completeClass}>{task.taskName}</td>
                            <td className={task?.completeClass}>{task.taskDescription}</td>
                            <td>
                                <Button
                                    disabled={task?.complete}
                                    onClick={() => handleComplete(task)}
                                    variant="success" size="sm">
                                    Completed
                                </Button>
                            </td>
                            <td>
                                <Button
                                    onClick={() => handleDelete(task._id)}
                                    variant="danger" size="sm">
                                    Delete
                                </Button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </Table>

            <AddTask
                refetch={refetch}
            />
        </div>
    );
};

export default ToDo;