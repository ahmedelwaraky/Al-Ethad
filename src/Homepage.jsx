import React from 'react'
import Header from './Header.jsx'
import TopNav from './nav.jsx'
import Numbers from './Numbers.jsx'
import Services from './Services.jsx'
import NewChampions from './NewChampions.jsx'
import SliderChamp from './SliderChamp.jsx'
import News from './News.jsx'
import SliderNews from './SliderNews.jsx'
import Footer from './Footer/Footer.jsx'
import Events from './Events/Events.jsx'
import Main from './Main/Main.jsx'
import MainNew from './MainNew/MainNew.jsx'
import Menu from './Menu/Menu.jsx'


export default function Homepage() {
    return (
        <div>
            <Header />
            <Menu />
            <MainNew />
            <Numbers />
            <NewChampions />
            <News />
            <Events />
            <Services />
            <Footer />
        </div>
    )
}
