import {Component} from 'react'
import GreetingCard from '../GreetingCard'
import {
  MainContainer,
  Heading,
  GreetingsList,
  GreetingImage,
} from './styledComponents'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Greetings extends Component {
  state = {
    activeLanguage: languageGreetingsList[0].buttonText,
  }

  renderActiveGreetingImage = () => {
    const {activeLanguage} = this.state
    const {imageUrl, imageAltText} = languageGreetingsList[
      languageGreetingsList.findIndex(
        eachLanguage => eachLanguage.buttonText === activeLanguage,
      )
    ]

    return <GreetingImage src={imageUrl} alt={imageAltText} />
  }

  onClickChangeGreeting = activeLanguageButtonText => {
    this.setState({activeLanguage: activeLanguageButtonText})
  }

  render() {
    const {activeLanguage} = this.state

    return (
      <MainContainer>
        <Heading>Multilingual Greetings</Heading>
        <GreetingsList>
          {languageGreetingsList.map(eachLanguage => (
            <GreetingCard
              greetingDetails={eachLanguage}
              key={eachLanguage.id}
              isActive={activeLanguage === eachLanguage.buttonText}
              onClickChangeLanguage={this.onClickChangeGreeting}
            />
          ))}
        </GreetingsList>
        {this.renderActiveGreetingImage()}
      </MainContainer>
    )
  }
}

export default Greetings
