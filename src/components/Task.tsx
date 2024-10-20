import { Check, Trash } from 'phosphor-react';
import styles from './Task.module.css';

export interface TaskType {
    description: string;
    isCompleted: boolean;
}

interface TaskProps {
    task: TaskType;
    onToggleTask: (task: TaskType) => void;
    onTaskDeleted: (task: TaskType) => void;
}

export function Task({ task, onToggleTask, onTaskDeleted }: TaskProps) {
    function handleToggleTask() {
        onToggleTask(task);
    }

    function handleDeleteTask() {
        onTaskDeleted(task);
    }

    return (
        <article className={styles.task}>
            <button className={
                        task.isCompleted ?
                            styles.checkedButton :
                            styles.uncheckedButton
                    }
                    onClick={handleToggleTask}
            >
                { task.isCompleted && <Check size={12} /> }
            </button>

            <p className={
                    task.isCompleted ?
                        `${styles.taskDescription} ${styles.completedTask}` :
                        styles.taskDescription
                }
            >
                { task.description }
            </p>

            <button title='Deletar task'
                    className={styles.deleteButton}
                    onClick={handleDeleteTask}
            >
                <Trash size={16} />
            </button>
        </article>
    );
}
