import styled from 'styled-components';
import SecondaryButton from '../../../../../Components/SecondaryButton';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';
import IconOnlyButton from '../../../../../Components/IconOnlyButton.js';


function ListElement(props) {
    return (
        <div className="d-flex flex-row justify-content-between">
            <div className='text-rg flex-grow-2  me-5'>{props.children}</div>
            <IconOnlyButton icon={<EditIcon />} />
            <IconOnlyButton icon={<RemoveIcon />} />
        </div>
    );
}

export default ListElement;