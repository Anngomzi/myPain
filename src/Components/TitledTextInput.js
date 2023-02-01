import styled from "styled-components";

const Input = styled.input`
    outline: none;
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    border-radius: 24px;
    color: #94A3B8;
    &:hover {
        background-color: #F8FAFC;
        color: #94A3B8;
    }
`;

function TitledTextInput({title, def}) {
    const Title =
    title === undefined ? (
      <div></div>
    ) : (
      <div className="caption-rg color-steel-gray--400"> {title} </div>
    );
    return (
        <div className='caption-rg d-flex flex-column gap-1'>
            {Title}
            <Input className='px-3 py-2' defaultValue={def} ></Input>
        </div>
    );
}

export default TitledTextInput;