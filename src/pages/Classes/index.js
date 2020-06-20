import React, {useState, useEffect} from 'react';
import {useRoute, useFocusEffect} from '@react-navigation/native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';


import {View, Text, Image, Dimensions, FlatList} from 'react-native';
import { Container, Content, Header, Name, ImageContainer, ResumeText, BaseText,
BaseView, SecondText, SecondView, ThirdText, ThirdView} from './styles'

import API from '../../services/api'
import ClassesImage from '../../services/classesimage'
import Resume from '../../services/resume'




const Details = () => {

    const route = useRoute();
    const classe = route.params.id;
    const [name, setName] = useState('');
    const [die, setDie] = useState('');
    const [urll, setUrll] = useState('');
    const [profMap, setProfMap] = useState('')
    const [salvaguarda, setSalvaguarda] = useState('')
    //const [choose, setChoose] = useState('')
    //const [profSkills, setProfSkills] = useState('')

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'mainInfo', title: 'Informações Base' },
        { key: 'secInfo', title: 'Proficiências Base' },
        { key: 'thirdInfo', title: 'Salvaguardas' },
    ]);
    
    function capitalizeFirstLetter(text){
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
    async function loadClassDetails() {
        const url = `classes/${classe}`;
        //console.log(url)
        const response =  await API.get(url);
        //console.log(response.data.proficiency_choices.from)
        setName(capitalizeFirstLetter(response.data.name))
        setDie(response.data.hit_die)
        setUrll(response.data.url)
        setProfMap(response.data.proficiencies)
        setSalvaguarda(response.data.saving_throws)
        //setChoose(response.data.proficiency_choices[0].choose)
        //setProfSkills(response.data.proficiency_choices.from)
    }


    useFocusEffect(
        React.useCallback(() => {
            loadClassDetails();
        }, [classe])
    )
    const Tab01 = () => (
       <BaseView>
           <BaseText>Nome da classe: {name}</BaseText>
           <BaseText>Dado de vida: {die}</BaseText>
           <BaseText>Fonte: {urll}</BaseText>
       
       </BaseView>
    );
    
    function DisplayProf({title}){
        return(
            <SecondText>- {title}</SecondText>
        );
    }

    const Tab02 = () => (
        <SecondView>
            <ThirdText>Como um {name}, o seu personagem possui proficiência com os seguintes itens:</ThirdText>
        <FlatList
            data={profMap}
            renderItem={({ item }) => <DisplayProf title={item.name} />}
            keyExtractor={item => item.id}
        />
        </SecondView>
       
    );

    const Tab03 = () => (
        <ThirdView>
            <ThirdText>Como um {name}, o seu personagem possui proficiência em salvaguardas com os seguintes atributos:</ThirdText>
        <FlatList
            data={salvaguarda}
            renderItem={({ item }) => <DisplayProf title={item.name} />}
            keyExtractor={item => item.id}
        />
        </ThirdView>
    )
    const renderScene = SceneMap({
        mainInfo: Tab01,
        secInfo: Tab02,
        thirdInfo: Tab03,
      });

    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle = {{backgroundColor: '#4b4b57', height: 3, fontSize: 5}}
            activeColor='#000'
            inactiveColor='#7b7b7b'
            style={{backgroundColor: 'transparent', marginTop: 10, shadowOpacity: 0, elevation: 0}}
        
        />
    )

    return (
        <Container>
            <Header>
                <Name> {name} </Name>
                <ImageContainer>
                    <Image source={ClassesImage[classe]}/>
                </ImageContainer>
                    <ResumeText>{Resume[classe]}</ResumeText>
            </Header>

            <Content>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                renderTabBar={renderTabBar}
                onIndexChange={setIndex}
                initialLayout={ {width: Dimensions.get('window').width}}
            />
            </Content>
        </Container>
    )
}

export default Details;