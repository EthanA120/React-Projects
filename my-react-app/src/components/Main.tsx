import TaskItem from "./TaskItem";

function Main() {
  const tasks = [
    {
      id: crypto.randomUUID(),
      title: "לעשות שיעורי בית",
      description: "פרויקט גמר",
      status: "בוצע",
      dueDate: new Date().toString(),
    },
    {
      id: crypto.randomUUID(),
      title: "לעשות קניות",
      description: "לחם וחלב",
      status: "בתהליך",
      dueDate: new Date().toString(),
    },
    {
      id: crypto.randomUUID(),
      title: "ללכת לחדר כושר",
      description: "תוכנית אימון",
      status: "בוצע",
      dueDate: new Date().toString(),
    },
    {
      id: crypto.randomUUID(),
      title: "ללכת לחדר כושר",
      description: "תוכנית אימון",
      status: "בוצע",
      dueDate: new Date().toString(),
    },
  ];
  return (
    <>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          title={task.title}
          description={task.description}
          status={task.status}
          dueDate={task.dueDate}
        />
      ))}
    </>
  );
}
export default Main;
