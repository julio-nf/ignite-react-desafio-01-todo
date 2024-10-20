import { useState } from 'react';

import { EmptyTasks } from './EmptyTasks';
import { Task, TaskType } from './Task';
import { TodoForm } from './TodoForm';

import styles from './TaskBoard.module.css';

export function TaskBoard() {
    const [tasks, setTasks] = useState<TaskType[]>([
        {
            description: 'Terminar o app ToDo',
            isCompleted: true
        }
    ]);

    function addNewTask(taskDescription: string) {
        setTasks([...tasks, {
            description: taskDescription,
            isCompleted: false
        }]);
    }

    function toggleTask(task: TaskType) {
        setTasks(tasks.map(t => {
            if (t.description === task.description) {
                return {...t, isCompleted: !t.isCompleted };
            }
            
            return t;
        }));
    }

    function deleteTask(task: TaskType) {
        setTasks(tasks.filter(t => t.description !== task.description));
    }

    const totalTasks = tasks.length;
    const isTasksEmpty = totalTasks === 0;
    const noOfCompletedTasks = tasks.reduce((acc, cur) => {
        return cur.isCompleted ? acc + 1 : acc;
    }, 0);
    const uncompletedTasks = tasks.filter(task => task.isCompleted === false);
    const completedTasks = tasks.filter(task => task.isCompleted === true);

    return (
        <>
            <TodoForm onAddNewTodo={addNewTask} />
            <div className={styles.taskBoard}>
                <header>
                    <p className={styles.createdTasks}>
                        Tarefas criadas
                        <span className={styles.taskCounter}>
                            {tasks.length}
                        </span>
                    </p>
                    <p className={styles.finalizedTasks}>
                        Concluídas
                        <span className={styles.taskCounter}>
                            {
                                isTasksEmpty ?
                                    0 :
                                    `${noOfCompletedTasks} de ${tasks.length}`
                            }
                        </span>
                    </p>
                </header>

                <div className={styles.taskWrapper}>
                    {
                        isTasksEmpty ?
                            <EmptyTasks /> :
                            [...uncompletedTasks, ...completedTasks].map(task =>
                                <Task key={task.description}
                                      task={task}
                                      onToggleTask={toggleTask}
                                      onTaskDeleted={deleteTask}
                                />
                            )
                    }
                </div>
            </div>
        </>
    );
}
