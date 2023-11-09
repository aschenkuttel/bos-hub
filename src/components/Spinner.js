import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Spinner() {
    return <FontAwesomeIcon icon={faSpinner} className="text-3xl animate-spin" />
}
