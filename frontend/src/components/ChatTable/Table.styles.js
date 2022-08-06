import styled from 'styled-components'

export const HtmlTable = styled.table`
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    width: 100%;

`

export const Thead = styled.thead`

`

export const Tr = styled.tr`
    background-color: var(--object-bg-color);
    color: var(--secendory-text-color);
    text-align: left;
    border-bottom: 1px solid #dddddd;
    cursor: pointer;
    &:hover{
        background-color: var(--secendory-hover-color);
    }

`

export const Th = styled.th`
    padding: 12px 15px;

`
export const Tbody = styled.tbody`

`

export const Td = styled.td`
    padding: 12px 15px;
`

export const Button = styled.button`
padding: 9px 7px;
    color: var(--primary-text-color);
    background: var(--primary-color);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin: 5px 5px;
`
