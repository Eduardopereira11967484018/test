/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from 'react';
import styles from './TaskList.module.scss';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Lavar as mãos', completed: false },
    { id: 2, title: 'Fazer um bolo', completed: false },
    { id: 3, title: 'Lavar a louça', completed: false },
  ]);

  const [taskToDelete, setTaskToDelete] = useState<number | null>(null);
  const [newTask, setNewTask] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const handleToggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: tasks.length + 1, title: newTask, completed: false }]);
      setNewTask('');
      setIsAdding(false);
    }
  };

  const handleCancelAddTask = () => {
    const confirmation = window.confirm("Tem certeza que deseja cancelar a adição desta tarefa?");
    if (confirmation) {
      setIsAdding(false);
      setNewTask('');
    }
  };

  const handleConfirmDelete = (id: number) => {
    setTaskToDelete(id);
  };

  const handleDeleteTask = () => {
    if (taskToDelete !== null) {
      setTasks(tasks.filter(task => task.id !== taskToDelete));
      setTaskToDelete(null);
    }
  };

  const handleCancelDelete = () => {
    setTaskToDelete(null);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Suas tarefas de hoje</h3>

      <ul className={styles.taskList}>
        {tasks.map(task => (
          <li key={task.id} className={styles.taskItem}>
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
            />
            <span className={styles.taskTitle}>{task.title}</span>
            <img
              src="/trash" 
              alt=""
              className={styles.deleteIcon}
              onClick={() => handleConfirmDelete(task.id)}
            />
          </li>
        ))}
      </ul>

      <h4 className={styles.completedHeader}>Tarefas Finalizadas</h4>
      <ul className={styles.completedList}>
        {tasks.filter(task => task.completed).map(task => (
          <li key={task.id} className={styles.completedItem}>
            {task.title}
          </li>
        ))}
      </ul>

      {isAdding ? (
        <div className={styles.addTaskContainer}>
          <input
            type="text"
            className={styles.taskInput}
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Digite a nova tarefa"
          />
          <div className={styles.buttonsContainer}>
            <button className={styles.addButton} onClick={handleAddTask}>
              Adicionar
            </button>
            <button className={styles.cancelButton} onClick={handleCancelAddTask}>
              Cancelar
            </button>
          </div>
        </div>
      ) : (
        <button className={styles.showAddTaskButton} onClick={() => setIsAdding(true)}>
          + Adicionar Nova Tarefa
        </button>
      )}

      {taskToDelete !== null && (
        <div className={styles.deleteModal}>
          <h2 className={styles.deleteModalHeader}>Deletar tarefa</h2>
          <p>Tem certeza que você deseja deletar essa tarefa?</p>
          <div className={styles.modalButtons}>
            <button className={styles.confirmDeleteButton} onClick={handleDeleteTask}>
              Deletar
            </button>
            <button className={styles.cancelDeleteButton} onClick={handleCancelDelete}>
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList;
