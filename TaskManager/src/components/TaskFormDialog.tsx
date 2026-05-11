import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, MenuItem, Stack } from "@mui/material";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import type { TaskItem } from "../types/Task";

interface TaskFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: TaskItem) => void;
  taskToEdit?: TaskItem;
}

function TaskFormDialog({ open, onClose, onSave, taskToEdit }: TaskFormDialogProps) {
  const { control, handleSubmit, reset } = useForm<TaskItem>({
    defaultValues: {
      title: "",
      description: "",
      status: "pending",
      dueDate: "",
      priority: "medium",
    },
  });

  useEffect(() => {
    if (taskToEdit) {
      // If editing, populate the form with existing data
      const formattedDate = taskToEdit.dueDate instanceof Date 
        ? taskToEdit.dueDate.toISOString().split("T")[0] 
        : new Date(taskToEdit.dueDate).toISOString().split("T")[0];
        
      reset({ ...taskToEdit, dueDate: formattedDate as any });
    } else {
      reset({ title: "", description: "", status: "pending", dueDate: "", priority: "medium" });
    }
  }, [taskToEdit, reset, open]);

  const onSubmit = (data: TaskItem) => {
    onSave(data);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{taskToEdit ? "Edit Task" : "Add New Task"}</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent dividers>
          <Stack spacing={3}>
            {/* כותרת המשימה */}
            <Controller
              name="title"
              control={control}
              rules={{ required: "This field is required" }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Title"
                  fullWidth
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />

            {/* תיאור המשימה */}
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Description"
                  fullWidth
                  multiline
                  rows={3}
                />
              )}
            />

            <Stack direction="row" spacing={2}>
              {/* סטטוס */}

              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <TextField {...field} select label="Status" fullWidth>
                    <MenuItem value="pending">Pending</MenuItem>

                    <MenuItem value="in-progress">In Progress</MenuItem>

                    <MenuItem value="completed">Completed</MenuItem>
                  </TextField>
                )}
              />

              {/* עדיפות */}

              <Controller
                name="priority"
                control={control}
                render={({ field }) => (
                  <TextField {...field} select label="Priority" fullWidth>
                    <MenuItem value="low">Low</MenuItem>

                    <MenuItem value="medium">Medium</MenuItem>

                    <MenuItem value="high">High</MenuItem>
                  </TextField>
                )}
              />
            </Stack>

            {/* תאריך יעד - שימוש ב-Native HTML Date input לצורך הפשטות */}
            <Controller
              name="dueDate"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Due Date"
                  type="date"
                  fullWidth
                  onChange={(e) => field.onChange(new Date(e.target.value))}
                  value={
                    field.value instanceof Date
                      ? field.value.toISOString().split("T")[0]
                      : field.value
                  }
                />
              )}
            />
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose} color="inherit">
            Cancel
          </Button>

          <Button type="submit" variant="contained" color="primary">
            { taskToEdit ? "Update Task" : "Create Task" }
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default TaskFormDialog;
