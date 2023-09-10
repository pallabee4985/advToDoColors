import React from 'react'
import TodoAdv from './Component/AdvancedTodo/TodoAdv';
import JumpingColors from './Component/ColorJumping/JumpingColors';


function App() {
  return (
    <>
      {/*....Advance todo with previous and next step....*/}
        <TodoAdv/>

      {/*....Color render with start and stop buttons.....*/}
        <JumpingColors/>
    </>




    //Craft zone project
    // <>
    //   <ContextData>
    //   <Navbar/>
    //   <Home/>
    //   <Footer/>
    //   </ContextData>
      

    // </>



    
  )
}

export default App;
