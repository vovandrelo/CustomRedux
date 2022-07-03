import AdditionForm from "../../components/AdditionForm/AdditionForm";
import { useDispatch } from "../../store/hook/useDispatch";
import { addNote } from "../../store/modules/notes/actions";

const AdditionFormContainer = () => {
    console.log("The AdditionForm container was rendered");
    const dispatch = useDispatch();
    const addItem = newNote => dispatch(addNote(newNote));

    return (
        <AdditionForm addItem={addItem}/>
    )
}

export default AdditionFormContainer;