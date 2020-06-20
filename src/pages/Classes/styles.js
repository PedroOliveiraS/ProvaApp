import styled from 'styled-components'

export const Container = styled.View`
    flex: 1;
    background-color: #EEF0EE;
    justify-content: space-between;
    padding-top: 10px;
`;

export const Header = styled.View`
    flex: 1;
    text-align: right;
    margin-left: 30px;
    margin-right: 30px;
    background-color: #236975;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    border: 2px solid;
    flex-direction: column;
    margin-bottom: 5px;
`;

export const Name = styled.Text`
    color: #000;
    font-size: 35px;
    font-weight: bold;
    margin-top: 15px;
    text-align: center;
`;

export const BaseText = styled.Text`
    color: #000;
    font-size: 16px;
    margin-left: 5px;

`;

export const BaseView = styled.View`
    margin-top: 15px;
    
`

export const SecondText = styled.Text`
    color: #000;
    font-size: 12px;
    margin-left: 5px;
    font-weight: bold;
    margin-bottom: 5px;
    margin-top: 1px;
`;

export const SecondView = styled.View`
    margin-top: 15px;
    margin-bottom: 15px;  
`;

export const ThirdText = styled.Text`
    color: #000;
    font-size: 16px;
    margin-left: 5px;

`;

export const ThirdView = styled.View`
    margin-top: 15px;
    
`;

export const ResumeText = styled.Text`
    color: white;
    font-size: 15px;
    font-weight: bold;
    margin-left: 15px;
    margin-right: 15px;
    text-align: center;
`;

export const ImageContainer = styled.View`
    height: 150px;
    width: 130px;
    alignSelf: center;
    
`;

export const Content = styled.View`
    background-color: #CFFDCC;
    height: 50%;
    flex: 1;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    padding: 20px;
    padding-top: 0px;
    margin-top: -1px;
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 5px;
`;