import {LanguageItem, LanguageButton} from './styledComponents'

const GreetingCard = props => {
  const {greetingDetails, isActive, onClickChangeLanguage} = props

  const {buttonText} = greetingDetails

  const changeActiveButton = () => {
    onClickChangeLanguage(buttonText)
  }

  return (
    <LanguageItem>
      <LanguageButton isActive={isActive} onClick={changeActiveButton}>
        {buttonText}
      </LanguageButton>
    </LanguageItem>
  )
}

export default GreetingCard
