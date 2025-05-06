// pages/ClaseEditable.jsx
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Box, Card, CardMedia, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function SortablePostura({ postura, id, onRemove }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    marginBottom: 8,
  };

  return (
    <Card
      ref={setNodeRef}
      {...attributes}
      // {...listeners}
      sx={{ display: "flex", alignItems: "center", p: 1 }}
      style={style}
    >
      <CardMedia
        component="img"
        image={postura.image}
        alt={postura.title}
        sx={{
          width: 60,
          height: 60,
          borderRadius: "50%",
          cursor: "grab",
          mr: 2,
        }}
        {...listeners}
      />

      <Typography sx={{ flexGrow: 1, cursor: "grab" }} {...listeners}>
        {postura.title}
      </Typography>
      <IconButton onClick={() => onRemove(id)}>
        <DeleteIcon />
      </IconButton>
    </Card>
  );
}

export default function ClaseEditable({ clase, setClase }) {
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    // alert("handleDragEnd");
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = clase.findIndex((p) => p.id === active.id);
      const newIndex = clase.findIndex((p) => p.id === over?.id);
      setClase(arrayMove(clase, oldIndex, newIndex));
    }
  };

  const handleRemove = (id) => {
    // alert("handleRemove");
    console.log("Eliminando postura con id:", id);
    setClase((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Tu clase
      </Typography>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={clase.map((p) => p.id)}
          strategy={verticalListSortingStrategy}
        >
          {clase.map((postura) => (
            <SortablePostura
              key={postura.id}
              id={postura.id}
              postura={postura}
              // onRemove={(id) => setClase(clase.filter((p) => p.id !== id))}
              onRemove={handleRemove}
            />
          ))}
        </SortableContext>
      </DndContext>
    </Box>
  );
}
