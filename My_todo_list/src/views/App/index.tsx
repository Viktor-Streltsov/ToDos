import React from "react";
import { useToDoStore } from "../../data/stores/useToDoStore";
import { ImputPlus } from "../components/ImputPlus";
import { ImputTask } from "../components/InputTask";

import styles from './index.module.scss';

export const App: React.FC = () => {
    const [
        tasks,
        createTask,
        updateTask,
        removeTask
    ] = useToDoStore(state => [
        state.tasks,
        state.createTask,
        state.updateTask,
        state.removeTask,
    ]);


    return (
        <article className={styles.article}>
            <h1 className={styles.articleTitle}>To Do App</h1>
            <section className={styles.articleSection}>
                <ImputPlus 
                    onAdd={(title) => {
                        if (title) {
                            createTask(title)
                        }
                    }}
                />
            </section>
            <section className={styles.articleSection}>
                    {!tasks.length && (
                        <p className={styles.articleText}>There is no task</p>
                    )}
                    {tasks.map((task) => (
                        <ImputTask
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            onDone={removeTask}
                            onEdited={updateTask}
                            onRemoved={removeTask}
                        />
                    ))}
            </section>
        </article>
    )
}