function AddTaskPopUp({ onClose, onAddTask }) {
  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    onAddTask({
      id: Date.now(),
      title: formData.get('taskName'),
      details: formData.get('taskDescription'),
      deadline: formData.get('taskDeadline'),
      completed: false,
    })
  }

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="add-task-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-task-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <h2 id="add-task-title">Add a new task</h2>
          </div>
          <button type="button" className="modal-close" aria-label="Close add task window" onClick={onClose}>
            &times;
          </button>
        </div>

        <form className="add-task-form" onSubmit={handleSubmit}>
          <label className="task-field">
            <span>Name of task</span>
            <input type="text" name="taskName" placeholder="e.g. Finish project report" required autoFocus />
          </label>

          <label className="task-field">
            <span>Short description of task</span>
            <textarea name="taskDescription" placeholder="What needs to be done?" rows="3" required />
          </label>

          <label className="task-field">
            <span>Deadline of task</span>
            <input type="date" name="taskDeadline" required />
          </label>

          <div className="modal-actions">
            <button type="button" className="modal-cancel" onClick={onClose}>Cancel</button>
            <button type="submit" className="modal-submit">Add task</button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default AddTaskPopUp