import BasketIcon from './assets/icon.svg'
import Button from './Components/Button'

function App(): JSX.Element {
  return (
    <div className="w-screen h-screen dark:bg-background flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-7">
        <img src={BasketIcon} alt="icon" className="w-48 lg:w-60" />
        <div className="flex flex-col gap-5 items-center">
          <h1 className="font-sans text-2xl lg:text-4xl text-white">
            Você está experimentando o Basketball Scoreboard Pro v1
          </h1>
          <Button>Continuar com licença</Button>
          <Button>Continuar com versão teste</Button>
        </div>
      </div>
    </div>
  )
}

export default App
