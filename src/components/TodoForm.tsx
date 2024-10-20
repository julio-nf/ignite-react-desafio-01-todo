import { ChangeEvent, FormEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';

import styles from './TodoForm.module.css';

interface TodoFormProps {
    onAddNewTodo: (todoDescription: string) => void;
}

export function TodoForm({ onAddNewTodo }: TodoFormProps) {
    const [newTaskText, setNewTaskText] = useState('');

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();

        onAddNewTodo(newTaskText);
        setNewTaskText('');
    }

    function handleNewTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTaskText(event.target.value)
    }

    return (
        <form onSubmit={handleCreateNewTask} className={styles.todoForm}>
            <input type="text"
                    placeholder="Adicione uma nova tarefa"
                    value={newTaskText}
                    onChange={handleNewTaskTextChange}
            />
            <button>
                Criar
                <PlusCircle size={16} color="#f2f2f2" weight="bold" />
            </button>
        </form>
    )
}
