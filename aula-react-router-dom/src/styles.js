import styled from 'styled-components';

export const HeaderComponent = styled.header`
    text-align: center;
    text-transform: uppercase;
    height: 7rem;
    background-color: #1a1f1e;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const UnsortedList = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    font-size: 1.5em;
`;

export const LinkItem = styled.li`
    text-decoration: none;

    &:hover {
        background-color: #e3dfba;
    }
`;

export const Content = styled.div`
    font-size: 2em;
    text-align: center;
    padding: 10px;
`;

export const FooterElement = styled.footer`
    bottom: 0;
    position: absolute;
    width: 100%;
    height: 7rem;
    background-color:  #1a1f1e;
`;
