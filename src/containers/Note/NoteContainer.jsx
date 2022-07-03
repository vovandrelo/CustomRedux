import Note from "../../components/Note/Note";
import { selectNoteById } from "../../store/modules/notes/selectors";
import { useSelector } from '../../store/hook/useSelector';
import { useDispatch } from "../../store/hook/useDispatch";
import { deleteNote } from "../../store/modules/notes/actions";


const NoteContainer = ({noteId}) => {
    console.log("The Note container was rendered");
    const {id, title, content} = useSelector(state => selectNoteById(state, noteId))
    const dispatch = useDispatch();
    const delNote = id => dispatch(deleteNote(id))

    return (
        <Note delNote={delNote} id={id} title={title} content={content}/>
    )
}

export default NoteContainer;