import {Ban, BellRing, CheckCheck, Info, TriangleAlert} from 'lucide-react';
import './App.css'
import Alert from './components/ui/Alert/Alert'

function App() {

  return (
    <div style={{margin:"2rem"}}>
      <Alert
      type={'alert-default'}
      icon={<BellRing size={20}/>}
      title={"Upgradw Your Plan"}
      >
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, debitis?{""}
        <a href="/"> Perspiciatis </a>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        
        </p>
      </Alert>
      <Alert
      type={'alert-info'}
      icon={<Info size={20}/>}
      title={"Note"}
      description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut tempore corporis eos adipisci laborum sequi sunt nobis sint magni recusandae."}
      />
      <Alert
      type={'alert-success'}
      icon={<CheckCheck size={20}/>}
      title={"Your order has been processed"}
      description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut tempore corporis eos adipisci laborum sequi sunt nobis sint magni recusandae."}
      />
      <Alert
      type={'alert-danger'}
      icon={<Ban size={20}/>}
      title={"Something Went Wrong"}
      description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut tempore corporis eos adipisci laborum sequi sunt nobis sint magni recusandae."}
      />
      <Alert
      type={'alert-warning'}
      icon={<TriangleAlert size={20}/>}
      title={"Tips & Tricks"}
      description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut tempore corporis eos adipisci laborum sequi sunt nobis sint magni recusandae."}
      />

    </div>
  )
}

export default App
