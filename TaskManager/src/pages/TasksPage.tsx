import { Typography, Container, Stack, Card, CardContent, Button, Box, Fab, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import useTasks from "../hooks/useTasks";

import TaskFormDialog from "../components/TaskFormDialog";


function TasksPage() {
	const { tasks, isOpen, setIsOpen, handleToggle, handleEdit, handleDeleteTask, handleSaveTask, editingTask  } = useTasks();

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
								<IconButton color="error" onClick={() => handleDeleteTask(task.id)}>
									<DeleteIcon />
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
						onDelete={handleDeleteTask}
						taskToEdit={editingTask}
					/> 
				)}
			</Box>
		</Container>
	);
}

export default TasksPage;