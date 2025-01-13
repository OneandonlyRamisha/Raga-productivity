export default function ProjectHeader({ onClickHandle }) {
  return (
    <div className="project-header-container">
      <input
        className="project-tracker-search"
        type="text"
        placeholder="Search Project Name....."
      />

      <select name="" className="project-tracker-dropdown">
        <option value="" disabled hidden>
          Filter Projects
        </option>
        <option value="notStarted">Not Started</option>
        <option value="inProgress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <button onClick={onClickHandle} className="button-project-add">
        New Project
      </button>
    </div>
  );
}
