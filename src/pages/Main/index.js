import React from 'react';
import {View, Text, Button} from 'react-native';

import {Container, Header, Title, ButtonContainer, Buttons} from './styles'
export default function Main({navigation}) {


    return (
        <Container>
            <Header>
                <Title>Classes</Title>
            </Header>
            
            <Buttons>
            <ButtonContainer>
                    <Button
                        title='Ir para a classe Barbarian'
                        onPress={() => navigation.navigate('Detalhes: Classes', {id: 'barbarian'}) }
                            
                    />
                </ButtonContainer>
                
                <ButtonContainer>
                    <Button
                        title='Ir para a classe Bard'
                        onPress={() => navigation.navigate('Detalhes: Classes', {id: 'bard'}) }
                    />
                </ButtonContainer>
                <ButtonContainer>
                    <Button
                        title='Ir para a classe Cleric'
                        onPress={() => navigation.navigate('Detalhes: Classes', {id: 'cleric'}) }
                    />
                </ButtonContainer>
                <ButtonContainer>
                    <Button
                        title='Ir para a classe Druid'
                        onPress={() => navigation.navigate('Detalhes: Classes', {id: 'druid'}) }
                    />
                </ButtonContainer>
                <ButtonContainer>
                    <Button
                        title='Ir para a classe Fighter'
                        onPress={() => navigation.navigate('Detalhes: Classes', {id: 'fighter'}) }
                    />
                </ButtonContainer>
                <ButtonContainer>
                    <Button
                        title='Ir para a classe Monk'
                        onPress={() => navigation.navigate('Detalhes: Classes', {id: 'monk'}) }
                    />
                </ButtonContainer>
                <ButtonContainer>
                    <Button
                        title='Ir para a classe Paladin'
                        onPress={() => navigation.navigate('Detalhes: Classes', {id: 'paladin'}) }
                    />
                </ButtonContainer>    
                <ButtonContainer>
                    <Button
                        title='Ir para a classe Ranger'
                        onPress={() => navigation.navigate('Detalhes: Classes', {id: 'ranger'}) }
                    />
                </ButtonContainer>
                <ButtonContainer>
                    <Button
                        title='Ir para a classe Rogue'
                        onPress={() => navigation.navigate('Detalhes: Classes', {id: 'rogue'}) }
                        
                    />
                </ButtonContainer>
                <ButtonContainer>
                    <Button
                        title='Ir para a classe Sorcerer'
                        onPress={() => navigation.navigate('Detalhes: Classes', {id: 'sorcerer'}) }
                        
                    />
                </ButtonContainer>
                <ButtonContainer>
                    <Button
                        title='Ir para a classe Warlock'
                        onPress={() => navigation.navigate('Detalhes: Classes', {id: 'warlock'}) }
                        
                    />
                </ButtonContainer>
                <ButtonContainer>
                    <Button
                        title='Ir para a classe Wizard'
                        onPress={() => navigation.navigate('Detalhes: Classes', {id: 'wizard'}) }
                        
                    />
                </ButtonContainer>
            </Buttons>
            
        </Container>
        
    )
}