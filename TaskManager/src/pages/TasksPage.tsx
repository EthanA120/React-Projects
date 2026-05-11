import { Typography, Container, Stack, Card, CardContent, Button, Box, Fab, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MOCK_TASKS } from "../data/TaskItem";
import { type TaskItem } from "../types/Task";
import TaskFormDialog from "../components/TaskFormDialog";


function TasksPage() {
	const [tasks, setTasks] = useState<TaskItem[]>(() => {
		const savedTasks = localStorage.getItem("task_manager_tasks");
		return savedTasks ? JSON.parse(savedTasks) : MOCK_TASKS;
	});
	const [isOpen, setIsOpen] = useState(false);
	const [editingTask, setEditingTask] = useState<TaskItem | undefined>(undefined);

	useEffect(() => {
		localStorage.setItem("task_manager_tasks", JSON.stringify(tasks));
	}, [tasks]);

	function handleToggle() {
		setEditingTask(undefined);
		setIsOpen((prev) => !prev);
	};

	const handleEdit = (task: TaskItem) => {
		setEditingTask(task);
		setIsOpen(true);
	};

	const handleSaveTask = (taskData: TaskItem) => {
		if (editingTask) {
			// Update existing task
			setTasks(prev => prev.map(t => t.id === editingTask.id ? { ...taskData, id: t.id } : t));
		} else {
			// Add new task
			const newTask = {
				...taskData,
				id: crypto.randomUUID(),
			};
			setTasks(prev => [...prev, newTask]);
		}
		setIsOpen(false);
	};

	return (
		<Container maxWidth="sm" sx={{ py: 4 }}>
			<Typography variant="h4" align="center" gutterBottom>
				My Task List
			</Typography>
			<Stack spacing={1}>
				{tasks.map((task) => (
					<Card key={task.id} variant="outlined">
						<CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
							<Box>
								<Typography variant="h6">{task.title}</Typography>
							</Box>
							<Stack direction="row" spacing={1}>
								<IconButton color="primary" onClick={() => handleEdit(task)}>
									<EditIcon />
								</IconButton>
								<Button variant="outlined" component={Link} to={`/tasks/${task.id}`}>
									Details
								</Button>
							</Stack>
						</CardContent>
					</Card>
				))}
			</Stack>
			<Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
				<Fab
					color={isOpen ? "secondary" : "primary"}
					aria-label="add"
					onClick={handleToggle}
					sx={{
						position: "fixed",
						bottom: "70px",
					}}>
					{isOpen ? <CloseIcon /> : <AddIcon />}
				</Fab>

				{isOpen && ( 
					<TaskFormDialog 
						open={isOpen} 
						onClose={() => setIsOpen(false)} 
						onSave={handleSaveTask}
						taskToEdit={editingTask}
					/> 
				)}
			</Box>
		</Container>
	);
}

export default TasksPage;