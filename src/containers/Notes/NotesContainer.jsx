import Notes from '../../components/Notes/Notes';
import { useSelector } from '../../store/hook/useSelector';
import { selectNotesIds } from '../../store/modules/notes/selectors';

const NotesContainer = () => {
    console.log("The Notes container was rendered");
    const noteIds = useSelector(selectNotesIds);

    return (
        <Notes noteIds={noteIds}/>
        
    )
}


export default NotesContainer;