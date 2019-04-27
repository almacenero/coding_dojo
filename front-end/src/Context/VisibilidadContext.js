import React from 'react'
const VisibilidadContext = React.createContext()

class  VisibilidadProvider extends React.Component{
      constructor(props){
            super(props)
            this.state = {
                  openForm: false,
                  hiddenButton: true  
            }
      }
      
      handleOpenForm =  () => {
            //this.setState({ });
          };
      handleHiddenButton =  () => {
            //this.setState({ });
          };
      render(){
            return(
                  < VisibilidadContext.Provider value={{
                        openForm: this.state.openForm,
                        hiddenButton: this.state.hiddenButton
                  }}>
                  <div>{this.props.children}</div>
                  </ VisibilidadContext.Provider>     
            )
      }
}

export { VisibilidadProvider,  VisibilidadContext}