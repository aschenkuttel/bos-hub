import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Rating({ value }) {
    const ratingRep = (value / 10).toPrecision(2)

    return (
        <div className='flex items-center gap-1'>
            <p className='font-medium text-gray-600'>
                {ratingRep}
            </p>

            <FontAwesomeIcon icon={faStar} className='text-teal-700 text-xs' />
        </div>
    )
}