import styles from './EmptyTasks.module.css';
import { ClipboardText } from 'phosphor-react';

export function EmptyTasks() {
    return (
        <div className={styles.emptyTasks}>
            <ClipboardText size={56} />
            <p>
                <strong>
                    Você ainda não tem tarefas cadastradas<br/>
                </strong>

                Crie tarefas e organize seus itens a fazer
            </p>
        </div>
    );
}
